const mainContainer = document.querySelector(".main");
const sendBtn = document.querySelector(".sent");
const inputBox = document.querySelector(".inputButton");

function displayChats() {
  const inputValue = inputBox.value.trim();

  if (inputValue !== "") {
    const userDiv = document.createElement("div");
    userDiv.classList.add("chat", "user");
    userDiv.textContent = inputValue;
    mainContainer.appendChild(userDiv);

    inputBox.value = "";

    let botReply = "";

    if (inputValue.toLowerCase() === "hello") {
      botReply = "Hi there! ";
    } else if (inputValue.toLowerCase() === "how are you") {
      botReply = "I'm doing great, thanks for asking!";
    } else {
      botReply = "I'm still learning to chat like a real AI ";
    }

    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.classList.add("chat", "bot");
      botDiv.textContent = botReply;
      mainContainer.appendChild(botDiv);
      mainContainer.scrollTop = mainContainer.scrollHeight;
    }, 500);
  }
}

sendBtn.addEventListener("click", displayChats);

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") displayChats();
});
