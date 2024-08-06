const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const chatTitle = document.getElementById('chat-title');

const botResponses = {
    //tipo #OLÁS, OIS....#
    "oi": "Olá! Como posso ajudar você hoje?",
    "olá": "Olá! Como posso ajudar você hoje?",
    "ola": "Olá! Como posso ajudar você hoje?",
    "opa": "Olá! Como posso ajudar você hoje?",
    "eai": "Olá! Como posso ajudar você hoje?",
    "eae": "Olá! Como posso ajudar você hoje?",

    //tipo #INTERAÇÂO#
    "como você está?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como voce esta?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como você está": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como voce esta": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como vc está?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como vc esta?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como vc esta": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como vc está": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente",
    "como vai?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como vai": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como está?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como esta?": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como está": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",
    "como esta": "Estou bem, apesar de ser um programa, mas estou funcionando perfeitamente!",

    //tipo #INTERAÇÂO_2#
    "qual é o seu nome?": "Eu sou o GEPETO!",
    "qual e o seu nome?": "Eu sou o GEPETO!",
    "qual é o seu nome": "Eu sou o GEPETO!",
    "qual e o seu nome": "Eu sou o GEPETO!",
    "qual é o teu nome?": "Eu sou o GEPETO!",
    "qual e o teu nome?": "Eu sou o GEPETO!",
    "qual é o teu nome": "Eu sou o GEPETO!",
    "qual e o teu nome": "Eu sou o GEPETO!",

    //tipo #INTERAÇÔES_ADICIONAIS#
    "o que você sabe?": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "o que voce sabe?": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "oque você sabe?": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "oque voce sabe?": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "o que vc sabe?": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "oque vc sabe?": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "o que você sabe": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "o que voce sabe": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "oque você sabe": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "oque voce sabe": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "o que vc sabe": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    "oque vc sabe": "Eu sei coisas básicas sobre conversação, e sobre o curso de DS (Desenvolvimento de Sistemas). Lembrando, que talvez, algumas perguntas não constam em meu algoritmo!",
    //--sobre o curso--//
    "o que significa ds?": "A sigla DS significa Desenvolvimento de Sistemas, sobre ele, podemos dizer que é o processo de criar e manter sistemas de software. Isso envolve várias etapas, desde a concepção da ideia até a implementação e manutenção do software.",
    "o que é ds?": "A sigla DS significa Desenvolvimento de Sistemas, sobre ele, podemos dizer que é o processo de criar e manter sistemas de software. Isso envolve várias etapas, desde a concepção da ideia até a implementação e manutenção do software.",
    "o que e ds?": "A sigla DS significa Desenvolvimento de Sistemas, sobre ele, podemos dizer que é o processo de criar e manter sistemas de software. Isso envolve várias etapas, desde a concepção da ideia até a implementação e manutenção do software.",
    "o que significa ds": "A sigla DS significa Desenvolvimento de Sistemas, sobre ele, podemos dizer que é o processo de criar e manter sistemas de software. Isso envolve várias etapas, desde a concepção da ideia até a implementação e manutenção do software.",
    "o que é ds": "A sigla DS significa Desenvolvimento de Sistemas, sobre ele, podemos dizer que é o processo de criar e manter sistemas de software. Isso envolve várias etapas, desde a concepção da ideia até a implementação e manutenção do software.",
    "o que e ds": "A sigla DS significa Desenvolvimento de Sistemas, sobre ele, podemos dizer que é o processo de criar e manter sistemas de software. Isso envolve várias etapas, desde a concepção da ideia até a implementação e manutenção do software.",
    "como funciona o curso?": "O curso irá te prover conhecimento sobre as áreas de criação e mantimento de sistemas, onde nós aprenderemos as linguagens de programação existentes, como Pyhton, Java, JavaScript e outras linguagens existentes atualmentes, e também linguagens de marcação, como HTML, e todos eles atualizados com suas versões mais recentes em 2024.",
    "como funciona o curso": "O curso irá te prover conhecimento sobre as áreas de criação e mantimento de sistemas, onde nós aprenderemos as linguagens de programação existentes, como Pyhton, Java, JavaScript e outras linguagens existentes atualmentes, e também linguagens de marcação, como HTML, e todos eles atualizados com suas versões mais recentes em 2024.",
    "o que acontece no curso?": "O curso irá te prover conhecimento sobre as áreas de criação e mantimento de sistemas, onde nós aprenderemos as linguagens de programação existentes, como Pyhton, Java, JavaScript e outras linguagens existentes atualmentes, e também linguagens de marcação, como HTML, e todos eles atualizados com suas versões mais recentes em 2024.",
    "oque acontece no curso?": "O curso irá te prover conhecimento sobre as áreas de criação e mantimento de sistemas, onde nós aprenderemos as linguagens de programação existentes, como Pyhton, Java, JavaScript e outras linguagens existentes atualmentes, e também linguagens de marcação, como HTML, e todos eles atualizados com suas versões mais recentes em 2024.",
    "oque acontece no curso": "O curso irá te prover conhecimento sobre as áreas de criação e mantimento de sistemas, onde nós aprenderemos as linguagens de programação existentes, como Pyhton, Java, JavaScript e outras linguagens existentes atualmentes, e também linguagens de marcação, como HTML, e todos eles atualizados com suas versões mais recentes em 2024.",
    "o que acontece no curso": "O curso irá te prover conhecimento sobre as áreas de criação e mantimento de sistemas, onde nós aprenderemos as linguagens de programação existentes, como Pyhton, Java, JavaScript e outras linguagens existentes atualmentes, e também linguagens de marcação, como HTML, e todos eles atualizados com suas versões mais recentes em 2024.",

    //tipo #FINALIZAÇÂO#
    "tchau": "Até mais! Tenha um ótimo dia!",
    "falow": "Até mais! Tenha um ótimo dia!",
    "flw": "Até mais! Tenha um ótimo dia!",
    "até": "Até mais! Tenha um ótimo dia!",
    "ate": "Até mais! Tenha um ótimo dia!",
    "até mais": "Até mais! Tenha um ótimo dia!",
    "ate mais": "Até mais! Tenha um ótimo dia!",
    
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessageToChatBox(message, 'user-message');
        userInput.value = '';
        showWaitingMessage();
        setTimeout(() => getBotResponse(message.toLowerCase()), 500);
    }
}

function showWaitingMessage() {
    const waitingMessage = document.createElement('div');
    waitingMessage.className = 'message bot-message waiting-message';
    waitingMessage.innerHTML = 'Aguarde a resposta do ChatBot<span class="dots"></span>';
    chatBox.appendChild(waitingMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessageToChatBox(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const response = botResponses[message] || "Desculpe, não entendi sua pergunta. Reformule-a ou se escreveu em outra língua, por favor, traduza para o Português Brasil.";
    if (response.includes("Eu sou o GEPETO")) {
        chatTitle.style.display = 'block';
    }

    setTimeout(() => {
        removeWaitingMessage();
        addMessageToChatBox(response, 'bot-message');
    }, 500);
    
    function removeWaitingMessage() {
        const waitingMessage = document.querySelector('.waiting-message');
        if (waitingMessage) {
            waitingMessage.remove();
        }
    }
}
