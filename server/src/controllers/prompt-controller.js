const GeminiService = require("./gemini");
const InputPrompt = require("../models/input-prompt");

module.exports = {
    async sendText(req, res) {
        try {
            const { prompt } = req.body;

            if (!prompt) {
                return res.status(400).json({ success: false, error: "O prompt é obrigatório" });
            }

            // Usando a classe padronizar o dado
            const input = new InputPrompt(prompt);

            const responseText = await GeminiService.textCompletion(input.prompt);

            return res.status(200).json({
                success: true,
                data: responseText
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error: error.message || "houve um problema no servidor"
            });
        }
    }
}