// Initialize the chatbot
const chatbot = new OpenAIChatbot({
    apiKey: "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",
    model: "gpt-3.5-turbo",
});

// Function to append a message to the chatbox
function appendMessage(who, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(who);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
}

// Function to handle user input and get chatbot response
async function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage("user", userInput);

    // Send user input to the chatbot
    const response = await chatbot.sendMessage(userInput);

    // Display chatbot response
    appendMessage("chatbot", response.message);

    // Clear the user input field
    document.getElementById("user-input").value = "";
}

// Attach event listener to send button
document.getElementById("send-button").addEventListener("click", handleUserInput);

// Handle Enter key press in the input field
document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleUserInput();
    }
});
