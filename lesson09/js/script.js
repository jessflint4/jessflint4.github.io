const dayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date();
let day = today.getDate();
let dayName = dayz[today.getDay()];
let month = monthz[today.getMonth()];
let year = today.getFullYear();

let name = "Jessica Flint";
let state = "Ohio";
let school = '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';
document.getElementById("footdiv").innerHTML = `&copy; Mountain Weather Headquarters | ${name}`;
document.getElementById("currentDate").innerHTML = `${dayName}, ${day} ${month} ${year}`

// Toggle menu in small
function toggleMenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("magic");
}

// Date check for message
if (today.getDay() == 5) document.getElementById("partytime").style.display = "block";

//Fonts
WebFont.load({ google: { families: ['Serrif', 'Sans Serrif'] } });
