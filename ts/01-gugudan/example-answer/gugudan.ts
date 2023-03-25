export function 구구단(단: number) {
  return Array.from(Array(9)).map((_, i) => 단 * (i + 1));
}
