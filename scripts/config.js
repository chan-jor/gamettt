// 플레이어 구성과 관련된 모든 로직을 담당함
// 오버레이를 여닫아야함(overlays.css)
// 사용자 입력을 받아서 유효성을 검사하고 저장하는 파일

// index.html 스크립트 순서에 따라 작동 가능
// player 1,2 button click eventlistener 눌렀을 때 aside 창 열기
function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

// cancel 버튼 배경화면 누르면 aside 창 닫음
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

// player name 양식 제출 및 유효성 검사, 오류
function savePlayerConfig(event) {
  event.preventDefault(); // 기본값 방지(제출하지 않음)
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();
  //   console.log(enteredPlayername);
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
}
