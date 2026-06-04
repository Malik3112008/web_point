import { NextResponse } from "next/server";

const DESKTOP_REPO = "raiylakee/absensholat-desktop-el";
const MOBILE_REPO = "xirpl2official-sudo/mobile_ta";
const GH_PROXY = "https://gh-proxy.com/";

interface GitHubRelease {
  tag_name: string;
  assets: { name: string; browser_download_url: string }[];
}

async function fetchLatestRelease(repo: string) {
  const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  return (await res.json()) as GitHubRelease;
}

async function fetchReleases(repo: string) {
  const res = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=10`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];
  return (await res.json()) as GitHubRelease[];
}

export async function GET() {
  try {
    const [desktopRelease, mobileRelease] = await Promise.all([
      fetchLatestRelease(DESKTOP_REPO),
      fetchLatestRelease(MOBILE_REPO),
    ]);

    let desktop: { version: string; baseDownloadUrl: string; releaseUrl: string } | null = null;

    if (desktopRelease) {
      const tag = desktopRelease.tag_name;
      const version = tag.replace(/^v/, "");
      desktop = {
        version,
        baseDownloadUrl: `${GH_PROXY}https://github.com/${DESKTOP_REPO}/releases/download/${tag}`,
        releaseUrl: `https://github.com/${DESKTOP_REPO}/releases/tag/${tag}`,
      };
    }

    let mobile: { version: string; apkUrl: string } | null = null;

    // Try latest release first, fall back to older releases if no APK found
    let mobileReleaseWithApk: GitHubRelease | undefined = mobileRelease ?? undefined;

    if (mobileReleaseWithApk && !mobileReleaseWithApk.assets.some((a) => a.name.endsWith(".apk"))) {
      const releases = await fetchReleases(MOBILE_REPO);
      mobileReleaseWithApk = releases.find((r) => r.assets.some((a) => a.name.endsWith(".apk")));
    }

    if (mobileReleaseWithApk) {
      const apkAsset = mobileReleaseWithApk.assets.find(
        (a) => a.name.endsWith(".apk")
      );
      if (apkAsset) {
        const tag = mobileReleaseWithApk.tag_name;
        const version = tag.replace(/^v/, "");
        mobile = {
          version,
          apkUrl: `${GH_PROXY}${apkAsset.browser_download_url}`,
        };
      }
    }

    return NextResponse.json({ mobile, desktop });
  } catch {
    return NextResponse.json({ mobile: null, desktop: null }, { status: 500 });
  }
}
