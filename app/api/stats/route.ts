import { NextRequest, NextResponse } from "next/server";

interface GitHubAsset {
  name: string;
  download_count: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  assets: GitHubAsset[];
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

export async function GET(_request: NextRequest) {
  try {
    const headers: HeadersInit = {
      "User-Agent": "Fettle-Website-Stats",
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Set a 4-second timeout to avoid build/request hangs
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const releasesRes = await fetch("https://api.github.com/repos/adee1455/fettle/releases", {
      headers,
      signal: controller.signal,
    }).catch(() => null);

    clearTimeout(timeoutId);

    let totalDownloads = 0;
    let latestVersion = "v0.1.0";
    let latestReleaseDate = "2025-01-01";

    if (releasesRes && releasesRes.ok) {
      const releases: GitHubRelease[] = await releasesRes.json();
      if (Array.isArray(releases) && releases.length > 0) {
        latestVersion = releases[0].tag_name;
        latestReleaseDate = releases[0].published_at;

        for (const release of releases) {
          if (release.assets && Array.isArray(release.assets)) {
            for (const asset of release.assets) {
              totalDownloads += asset.download_count || 0;
            }
          }
        }
      }
    }

    const repoController = new AbortController();
    const repoTimeoutId = setTimeout(() => repoController.abort(), 4000);

    const repoRes = await fetch("https://api.github.com/repos/adee1455/fettle", {
      headers,
      signal: repoController.signal,
    }).catch(() => null);

    clearTimeout(repoTimeoutId);

    let stars = 0;
    if (repoRes && repoRes.ok) {
      const repo: GitHubRepo = await repoRes.json();
      stars = repo.stargazers_count || 0;
    }

    return NextResponse.json(
      {
        totalDownloads,
        latestVersion,
        latestReleaseDate,
        stars,
        status: "ok",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
        },
      }
    );
  } catch {
    return NextResponse.json({
      totalDownloads: 0,
      latestVersion: "v0.1.0",
      stars: 0,
      status: "fallback",
    });
  }
}
