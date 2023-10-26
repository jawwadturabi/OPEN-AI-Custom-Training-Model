const fs = require('fs');
const { openai } = require("./openAi");

try {
    const createFineTuningModel = async () => {
        // create file with json data, this will upload the file on openAI 
        let file = await openai?.files?.create({ file: fs.createReadStream('mydata.jsonl'), purpose: 'fine-tune' });
        console.log("file : ", file)

        // create fine tuning model
        const fineTune = await openai?.fineTuning?.jobs?.create({ training_file: file?.id, model: "gpt-3.5-turbo" })

        let job = await openai?.fineTuning?.jobs?.retrieve(file?.id); // id of training file
        console.log("job : ", job);//store the model id from the output to use it later

    }
    createFineTuningModel()
}
catch (err) {
    console.error(err);
}