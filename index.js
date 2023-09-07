const dayNameEl = document.querySelector(".day");
const UTCTime = document.querySelector(".time");

const date = new Date();

dayNameEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
})
UTCTime.innerHTML = date.getTime();