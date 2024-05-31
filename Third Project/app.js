const valuee = document.getElementById("valuee");
const btn = document.getElementById("btn");
const datee = document.getElementById("datee");

btn.addEventListener("click", () => {
    const birthYear = new Date(datee.value).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    valuee.innerText = age;
});
