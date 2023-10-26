const { openai } = require("./openAi");
try {
    const askGPT = async (content) => {
        //make a call to chatGPT against the prompt given by user
        const completion = await openai?.chat?.completions?.create({
            messages: [{ role: "user", content }],
            model: process.env.OPENAI_MODEL_ID, //get the model id when you retrieve the fine tuning job
        });
        return completion?.choices?.[0]?.message?.content
    }
    askGPT("What are the different types of Horse trailers?")// write your prompt here
}
catch (err) {
    console.error(err);
}