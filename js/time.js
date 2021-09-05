const time = document.querySelector(".time");
const date = document.querySelector(".date");

console.dir(date);

function getDate() {
  const date = new Date();

  const year = date.getFullYear();
  const day = date.getDate();
  const months = [
    "Jan",
    "Feb",
    "Msy",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth();
  
  

  return `${year} ${months[monthIndex]} ${day} `;
}

function getTime() {
  const date = new Date();
  const noon = `${date.getHours() > 12 ? "PM" : "AM"}`
  const hours = `${date.getHours() > 12 ? date.getHours() -12 : date.getHours()}`.padStart(2,'0')
  const minutes = String(date.getMinutes()).padStart(2,'0');
  const seconds = String(date.getSeconds()).padStart(2,'0');

  time.innerText = ` ${noon} ${hours} : ${minutes} : ${seconds} `
  // return `${year} ${months[monthIndex]} ${day} `;
}

setInterval(getTime,1000)
const day = getDate();
date.innerText =day
