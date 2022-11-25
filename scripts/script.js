import path from "path";
import fs from "fs";

const PATH = path.join(process.cwd(), "data");

console.log(PATH);

export const saveData = (data) => {
  fs.writeFileSync(`${PATH}/data.json`, data, {
    encoding: "utf8",
    flag: "w",
  });
};
