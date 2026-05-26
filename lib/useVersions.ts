"use client";

import { useState, useEffect } from "react";

interface MobileVersion {
  version: string;
  apkUrl: string;
}

interface DesktopVersion {
  version: string;
  baseDownloadUrl: string;
  releaseUrl: string;
}

interface Versions {
  mobile: MobileVersion | null;
  desktop: DesktopVersion | null;
}

export function useVersions() {
  const [versions, setVersions] = useState<Versions>({
    mobile: null,
    desktop: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/version")
      .then((res) => res.json())
      .then((data: Versions) => setVersions(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { ...versions, loading };
}
