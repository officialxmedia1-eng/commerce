const users = [
  { index: "UEB3214623", password: "1621"},
  { index: "UEB3225623", password: "5623"},
  { index: "UEB3234423", password: "4423"},
  { index: "UEB3218423", password: "8423"},
  { index: "UEB3224723", password: "4723"},
  { index: "UEB3215323", password: "5323"},
  { index: "UEB3217923", password: "7923"},
  { index: "UEB3232423", password: "2423"},
  { index: "UEB3225823", password: "5823"},
  { index: "UEB3217023", password: "7023"}
];

// Listen for form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form behavior

  // Get input values
  const indexInput = document.getElementById("indexNumber").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  // Check for matching user
  const matchedUser = users.find(user =>
    user.index === indexInput && user.password === passwordInput
);

  // Redirect or show error
  if (matchedUser) {
    window.location.href = "e-commer.html"; // Success
} else {
    alert("Incorrect Index Number or Password.");
}
});