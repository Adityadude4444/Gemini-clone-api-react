/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// Vite's environment variables are accessed via `import.meta.env`
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Initialize the GoogleGenerativeAI instance with the API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt);
    console.log(await result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error in AI response:", error);
  }
}

export default run;
