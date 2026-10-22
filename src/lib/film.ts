/** Frame sequence metadata for the scroll film hero. */

export const FRAME_COUNTS = {
  expand: 121,
  close: 121,
  release: 121,
  rotate: 121,
} as const;

export const FRONT_FRAME = 48;

export type FrameDir = keyof typeof FRAME_COUNTS;

export function frameUrl(dir: FrameDir, index: number) {
  return `/frames/${dir}/${String(index).padStart(3, "0")}.webp`;
}
