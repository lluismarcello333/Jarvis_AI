const OpenAI = require("openai");

test("testar comunicação com a API do OpenAI", async () => {
  // Configuração do cliente OpenAI com a chave de API fornecida diretamente
  const openai = new OpenAI({
    apiKey: "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",
  });

  // Prompt de teste
  const prompt = "Gostaria de aprender mais sobre como usar o GPT-3.5";

  // Faz uma solicitação à API
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // Verifica se a resposta da API está correta
  expect(response).toBeDefined();
  expect(response.choices.length).toBeGreaterThan(0);
  expect(response.choices[0].text).toBeTruthy();
});
