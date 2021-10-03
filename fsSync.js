const { writeFileSync, readFileSync } = require("fs");
const first = readFileSync("./first.txt")
writeFileSync("./third.txt", "my name is abdulaziz")