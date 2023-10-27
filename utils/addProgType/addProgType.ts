import { Person, Prog, ProgType, Tv, Movie } from "@/types";

export function addProgType(input: Prog[], type: ProgType) {
  if (Array.isArray(input)) {
    return input.map((prog: Prog) => {
      const temp = { ...prog };
      temp.type = type;
      return temp;
    });
  }
}
