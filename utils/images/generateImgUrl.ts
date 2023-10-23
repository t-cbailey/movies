export default function generateImgUrl(size: number, path: string) {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
}
