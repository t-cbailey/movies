import { getMovieData, getTvData } from "@/lib/getData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genreId = searchParams.get("genreId");
  const page = searchParams.get("page");
  const type = searchParams.get("type");

  let progs = [];

  if (type === "movie") {
    progs = await getMovieData(
      `/discover/${type}?with_genres=${genreId}&page=${page}`,
      "movie"
    );
  }

  if (type === "tv") {
    progs = await getTvData(
      `/discover/${type}?with_genres=${genreId}&page=${page}`,
      "tv"
    );
  }

  return Response.json(progs);
}
