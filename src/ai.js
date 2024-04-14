
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


function createBox(){
    const body = document.body;

    const chatContainer = document.createElement("div");
    chatContainer.id = 'chat-container';
    body.appendChild(chatContainer);

    const chatWindow = document.createElement('div');
    chatWindow.id = 'chat-window';
    chatContainer.appendChild(chatWindow);

    const inputBox = document.createElement('input');
    inputBox.id = 'input-box';
    inputBox.type = 'text';
    inputBox.placeholder = 'Ask a question: ';
    inputBox.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            
        }
    });
}



window.onload =createBox; 