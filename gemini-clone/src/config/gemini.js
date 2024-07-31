import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCuIcFBHVqNWvYGMq75h0jP8KBQ3G1lRYE";
const MODEL_NAME = "gemini-1.5-flash";

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    // Initialize the model instance
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
    });

    // Start the chat session using the model instance
    const chatSession = await model.startChat({
      generationConfig,
      history: [],
    });

    // Send the message and get the response
    const result = await chatSession.sendMessage(prompt);

    // Log the response
    console.log(result.response.text());
    return result.response.text(); // Corrected line
  } catch (error) {
    console.error("Error during chat session:", error);

  }
}

export default run;
