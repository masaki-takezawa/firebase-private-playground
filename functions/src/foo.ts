import * as functions from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const foo = functions.onRequest((request, response) => {
  logger.info("foo!", { structuredData: true });
  response.send("foo!!!");
});
