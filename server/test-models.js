require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
    console.log("Buscando modelos disponíveis...");
    try {
        // Acessa o modelo genérico apenas para listar os disponíveis
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();

        console.log("Modelos que você pode usar para texto:");
        data.models.forEach(model => {
            if (model.supportedGenerationMethods.includes("generateContent")) {
                console.log(`- ${model.name.replace('models/', '')}`);
            }
        });
    } catch (error) {
        console.error("Erro ao buscar modelos:", error);
    }
}

listModels();