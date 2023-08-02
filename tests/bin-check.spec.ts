import test from "ava";
import path from "path";
import process from "process";
import { fileURLToPath } from "url";
import binCheck from "../src/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const bin = {
  darwin: path.join(__dirname, "fixtures/optipng-osx"),
  linux: path.join(__dirname, "fixtures/optipng-linux"),
  win32: path.join(__dirname, "fixtures/optipng-win32.exe"),
};
const platform = process.platform;
if (platform !== "darwin" && platform !== "linux" && platform !== "win32") {
  throw new Error(`Unsupported platform: ${platform}`);
}

test("async", async (t) => {
  t.true(await binCheck(bin[platform]));
  await t.throwsAsync(
    binCheck("node", [__filename]),
    undefined,
    `Couldn't execute the "${__filename}" binary. Make sure it has the right permissions.`
  );
});

test("sync", (t) => {
  t.true(binCheck.sync(bin[platform]));
  t.throws(
    binCheck.sync.bind(null, "node", [__filename]),
    undefined,
    `Couldn't execute the "${__filename}" binary. Make sure it has the right permissions.`
  );
});
