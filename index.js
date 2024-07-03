const dayNameEl = document.querySelector(".day");
const UTCTime = document.querySelector(".time");

const date = new Date();

dayNameEl.innerText = date.toLocaleDateString("en", {
	weekday: "long",
});
function updateTime() {
	const now = new Date();
	const utcHours = String(now.getUTCHours()).padStart(2, "0");
	const utcMinutes = String(now.getUTCMinutes()).padStart(2, "0");
	const utcSeconds = String(now.getUTCSeconds()).padStart(2, "0");
	const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
	document.getElementById("time").textContent = utcTime;
}

setInterval(updateTime, 1000);
updateTime();
