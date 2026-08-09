/**
 * Cloudinary Image Helper Utility
 * Formats image path to Cloudinary CDN URL with automatic resizing and compression.
 */

export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "zjnwhofb";
export const CLOUDINARY_FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "Aethera SILO UISI 2026";

interface CloudinaryOptions {
  width?: number;
  quality?: string;
}

/**
 * Returns Cloudinary CDN URL with dynamic scaling (c_limit,w_X,f_auto,q_auto) to dramatically reduce file sizes.
 * Default width is 500px, which reduces 4MB+ photos down to ~30KB-50KB for instant loading.
 */
export function getCloudinaryUrl(path: string, options?: CloudinaryOptions | number): string {
  if (!path) return "";

  // Return unchanged if it's already a full HTTP(S) URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const targetWidth = typeof options === "number" ? options : options?.width ?? 500;
  const cloudName = CLOUDINARY_CLOUD_NAME;
  const pathWithoutQuery = path.split("?")[0];
  const cleanPath = pathWithoutQuery.startsWith("/") ? pathWithoutQuery.slice(1) : pathWithoutQuery;

  if (cloudName) {
    const folderPath = encodeURIComponent(CLOUDINARY_FOLDER);
    const transform = targetWidth ? `c_limit,w_${targetWidth},f_auto,q_auto` : `f_auto,q_auto`;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${folderPath}/${cleanPath}`;
  }

  // Fallback to local asset if Cloud Name is not configured
  return path.startsWith("/") ? path : `/${path}`;
}
