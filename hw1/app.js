const logger = require("./simpleLogger/logger");
const path = require("path");
const pathName = path.join(__dirname, "log.txt");

logger.logMessage("Start log.", pathName);
logger.logMessage("Message 1.", pathName);
logger.logMessage("Messege 2.", pathName);
logger.logMessage("Stop log.", pathName);
