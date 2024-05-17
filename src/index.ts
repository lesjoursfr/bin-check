import { execa, execaSync } from "execa";
import { isexe, sync as isexeSync } from "isexe";

const binCheck = (bin: string, args?: Array<string>): Promise<boolean> => {
  if (!Array.isArray(args)) {
    args = ["--help"];
  }

  return isexe(bin)
    .then((works: boolean) => {
      if (!works) {
        throw new Error(`Couldn't execute the "${bin}" binary. Make sure it has the right permissions.`);
      }

      return execa(bin, args, { encoding: "utf8" });
    })
    .then((result) => result.exitCode === 0);
};

binCheck.sync = (bin: string, args?: Array<string>): boolean => {
  if (!Array.isArray(args)) {
    args = ["--help"];
  }

  if (!isexeSync(bin)) {
    throw new Error(`Couldn't execute the "${bin}" binary. Make sure it has the right permissions.`);
  }

  return execaSync(bin, args, { encoding: "utf8" }).exitCode === 0;
};

export default binCheck;
