const { openai } = require("./openAi");

try {
    // list all available model
    const listmodel = async () => {
        const list = await openai.models.list();
        for (const model of list) {
            console.log(list[model].id);
        }
    }
    listmodel()
}
catch (err) {
    console.error(err);
}
