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
  console.log(months[monthIndex]);
  console.log(`${year} ${months[monthIndex]} ${day} `);

  date.innerText = `${year} ${months[monthIndex]} ${day} `;
}


getDate();
