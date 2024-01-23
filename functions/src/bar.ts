import * as functions from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const bar = functions.onRequest((request, response) => {
  logger.info("bar!", { structuredData: true });
  response.send("bar!!!");
});
