const btn_kirim = document.querySelector("#kirim");
const input = document.querySelector("#input");
const div_display = document.querySelector(".container-pesan");
const socket = io();
socket.on("connect", () => {
  "socket";
});
const createBubleChat = (chat) => {
  console.log(chat);
  const div_pesan = document.createElement("div");
  div_pesan.classList.add("pesan");
  div_pesan.innerHTML = chat;
  console.log(div_pesan);
  return div_pesan;
};

btn_kirim.addEventListener("click", () => {
  const bubbleChat = createBubleChat(input.value);
  div_display.appendChild(bubbleChat);
  input.value = "";
});
