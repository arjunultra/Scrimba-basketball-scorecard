let homeScore = 0;
let guestScore = 0;
let guestPoints = document.getElementById("guest-points");
let homePoints = document.getElementById("home-points");
// increment by 1 (home)
function incrementByOne() {
  homeScore += 1;
  homePoints.textContent = homeScore;
}
// increment by 2 (home)
function incrementByTwo() {
  homeScore += 2;
  homePoints.textContent = homeScore;
}
// increment by 3 (home)
function incrementByThree() {
  homeScore += 3;
  homePoints.textContent = homeScore;
}
// increment by 1 (guest)
function incrementGuestByOne() {
  guestScore += 1;
  guestPoints.textContent = guestScore;
}
// increment by 2 (guest)
function incrementGuestByTwo() {
  guestScore += 2;
  guestPoints.textContent = guestScore;
}
// increment by 3 (guest)
function incrementGuestByThree() {
  guestScore += 3;
  guestPoints.textContent = guestScore;
}
function resetAll() {
  homeScore = 0;
  guestScore = 0;
  guestPoints.textContent = 0;
  homePoints.textContent = 0;
}
