import { Prog, ProgType } from "@/types";
import { toNamespacedPath } from "node:path/win32";

export function addProgType(input: Prog[], type: ProgType) {
  if (Array.isArray(input)) {
    return input.map((prog: Prog) => {
      const temp = { ...prog };
      temp.type = type;

      return temp;
    });
  }
  // else if (typeof input === "object" && !Array.isArray(input)) {
  //   const temp = { ...input };
  //   temp.type = type;
  //   return temp;
  // }
}
