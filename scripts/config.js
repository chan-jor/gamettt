// 플레이어 구성과 관련된 모든 로직을 담당함
// 오버레이를 여닫아야함(overlays.css)
// 사용자 입력을 받아서 유효성을 검사하고 저장하는 파일

// index.html 스크립트 순서에 따라 작동 가능
// player 1,2 button click eventlistener
function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}
