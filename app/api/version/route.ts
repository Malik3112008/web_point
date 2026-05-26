import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GITHUB_REPO = "raiylakee/absensholat-desktop-el";
const GH_PROXY = "https://gh-proxy.com/";

function getLatestApkVersion(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(publicDir);
  const versions = files
    .filter((f) => f.startsWith("sas-mobile-v") && f.endsWith(".apk"))
    .map((f) => {
      const match = f.match(/sas-mobile-v([\d.]+)\.apk/);
      return match ? match[1] : null;
    })
    .filter(Boolean) as string[];

  if (versions.length === 0) return null;

  return versions.sort((a, b) => {
    const pa = a.split(".").map(Number);
    const pb = b.split(".").map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const na = pa[i] || 0;
      const nb = pb[i] || 0;
      if (na !== nb) return nb - na;
    }
    return 0;
  })[0];
}

export async function GET() {
  try {
    const [ghRes, apkVersion] = await Promise.all([
      fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 300 },
      }),
      Promise.resolve(getLatestApkVersion()),
    ]);

    let desktop: { version: string; baseDownloadUrl: string; releaseUrl: string } | null = null;

    if (ghRes.ok) {
      const release = await ghRes.json();
      const tag: string = release.tag_name;
      const version = tag.replace(/^v/, "");
      const baseDownloadUrl = `${GH_PROXY}https://github.com/${GITHUB_REPO}/releases/download/${tag}`;
      const releaseUrl = `https://github.com/${GITHUB_REPO}/releases/tag/${tag}`;
      desktop = { version, baseDownloadUrl, releaseUrl };
    }

    return NextResponse.json({
      mobile: apkVersion ? { version: apkVersion, apkUrl: `/sas-mobile-v${apkVersion}.apk` } : null,
      desktop,
    });
  } catch {
    return NextResponse.json({ mobile: null, desktop: null }, { status: 500 });
  }
}
