import fs from "fs";
import path from "path";
import "@testing-library/jest-dom";

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

global.document.body.innerHTML = html.toString();
