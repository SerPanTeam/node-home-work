const fs = require("fs");


const logMessage = (mess, pathName) => {
  fs.appendFile(pathName, mess + "\n", (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log("Logfile updated!");
    }
  });
};

module.exports = { logMessage };
