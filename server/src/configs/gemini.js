const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 1024,
        responseMimeType: "text/plain",
    }
});

module.exports = class GeminiService {
    static async textCompletion(promptText) {
        // executa a chamada
        const result = await model.generateContent(promptText);
        return result.response.text();
    }
}