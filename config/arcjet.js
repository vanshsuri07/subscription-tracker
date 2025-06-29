import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "DRY_RUN", // Use DRY_RUN mode for bot detection
      allow: ["CATEGORY:SEARCH_ENGINE", "USER_AGENT:PostmanRuntime"],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 2, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 3, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;
