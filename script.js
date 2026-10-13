function toggleTheme() {
const body = document.body;
const themeBtn = document.getElementById("theme-btn");
// 判斷當前 body 是否帶有 dark-mode class
if (body.classList.contains("dark-mode")) {
body.classList.remove("dark-mode");
themeBtn.innerHTML = "🌙 切換深⾊模式";
} else {
body.classList.add("dark-mode");
themeBtn.innerHTML = "☀ 切換亮⾊模式";
}
}