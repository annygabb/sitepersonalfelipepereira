declare const __INLINE_ASSETS__: Record<string, string> | undefined;
export function asset(path: string) {
  return typeof __INLINE_ASSETS__ !== 'undefined' ? __INLINE_ASSETS__?.[path] ?? path : path;
}
