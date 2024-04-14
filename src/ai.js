
//grabs gemini pro model 
import API_KEY from keys.js
import {GoogleGenerativeAI} from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(API_KEY);

res = fetch("/static/text/data.txt");
prompt = await res.text();


//queue of user responses 
q = []; 

//function that sends messages to the AI, returns text response 
async function run(){

    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: prompt}]
            }
        ]

    });

    msg = q.shift();
    result = await chat.sendMessage(msg);
    response = await result.response;
    text = response.text();
    return text 
}




