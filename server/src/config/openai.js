const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			apiKey: "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",
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model:"gpt-3.5-turbo-instruct",
			prompt:`${prompt}`,
			temperature:0,
			max_tokens: 3500,
			top_p:1,
			frequency_penalty: 0.5,
			presence_penalty: 0
		}
  }
}
