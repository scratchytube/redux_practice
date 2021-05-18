import fs from "fs";
import path from "path";
import "@testing-library/jest-dom";

document.body.innerHTML = fs.readFileSync(
  path.resolve(__dirname, "../index.html"),
  "utf8"
);
