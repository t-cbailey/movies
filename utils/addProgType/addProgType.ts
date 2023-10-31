import { Person, ProgType, Tv, Movie } from "@/types";

export function addProgType(input: Tv[] | Movie[] | Person[], type: ProgType) {
  if (Array.isArray(input)) {
    return input.map((prog: Tv | Movie | Person) => {
      const temp = { ...prog };
      temp.type = type;
      return temp;
    });
  }
}
