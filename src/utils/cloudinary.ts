/**
 * Cloudinary Image Helper Utility
 * Formats image path to Cloudinary CDN URL if NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is configured.
 */

export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "zjnwhofb";
export const CLOUDINARY_FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "Aethera SILO UISI 2026";

/**
 * Returns Cloudinary CDN URL for a given relative image path, or fallback to local path.
 */
export function getCloudinaryUrl(path: string): string {
  if (!path) return "";

  // Return unchanged if it's already a full HTTP(S) URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const cloudName = CLOUDINARY_CLOUD_NAME;
  const pathWithoutQuery = path.split("?")[0];
  const cleanPath = pathWithoutQuery.startsWith("/") ? pathWithoutQuery.slice(1) : pathWithoutQuery;

  if (cloudName) {
    const folderPath = encodeURIComponent(CLOUDINARY_FOLDER);
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${folderPath}/${cleanPath}`;
  }

  // Fallback to local asset if Cloud Name is not configured
  return path.startsWith("/") ? path : `/${path}`;
}
