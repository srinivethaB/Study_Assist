import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Study_Assistant", // Unique app ID
  name: "Study_Assistant",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});