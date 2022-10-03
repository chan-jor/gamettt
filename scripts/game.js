// 게임 로직을 담당하는 파일

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }
  gameAreaElement.style.display = "block";
}
