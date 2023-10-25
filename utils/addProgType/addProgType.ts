import { Prog } from "@/types";
import { toNamespacedPath } from "node:path/win32";

export function addProgType(arr: Prog[], type: string) {
  return arr.map((prog: Prog) => {
    const temp = { ...prog };
    temp.type = type;

    return temp;
  });
}
