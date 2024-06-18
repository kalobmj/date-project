const currentDateParagraph = document.getElementById("curr-date-p");
const userInput = document.getElementById("days-input");
const calculateButton = document.getElementById("calculate-btn");
const userDays = document.getElementById("result-input");
const calculatedDate = document.getElementById("calc-date")

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const day = date.getDate();
const trueDay = fixDay(day)
const dayOfWeek = dayList[date.getDay()];
const month = monthList[date.getMonth()];
const year = date.getFullYear().toString();
const currentDate = `${dayOfWeek}, ${month} ${trueDay}, ${year}`

currentDateParagraph.innerText = currentDate // displays curr date
userDays.innerText = userInput.value // display user input days in hidden div

function fixDay(day) {
    let fixedDay = '';
    switch (day) {
        case 1: case 21: case 31:
            fixedDay = day + 'st'
            break;
        case 2: case 22:
            fixedDay = day + 'nd'
            break;
        case 3: case 23: 
            fixedDay = day + 'rd'
            break;
        default:
            fixedDay = day + 'th'
    } // end switch
    return fixedDay
} // end fixDay func test

calculateButton.addEventListener('click', () => {
    
    if (userInput.value === '' || (userInput.value < 1 || userInput.value > 1000)) {
        alert('Please enter a number between 1 and 1000');
        return;
    } // alert for if user input is blank or number is too small or too large
    
    if (userInput.value >= 1 && userInput.value <= 1000) {
        userDays.innerText = userInput.value
        let futureDate = moment();
        futureDate = futureDate.add(userInput.value, 'days');
        let finalDate = document.getElementById("future-date");
        futureDate = futureDate.format('dddd, MMMM Do, YYYY');
        finalDate.innerText = futureDate;
        calculatedDate.classList.remove("hidden")
        userInput.value = ''
    } // end if when num is in range
}); // func for when button gets clicked

userInput.addEventListener('keydown', e => {
    
    if (e.key === 'Enter' && (userInput.value >= 1 && userInput.value <= 1000)) {
        userDays.innerText = userInput.value
        let futureDate = moment();
        futureDate = futureDate.add(userInput.value, 'days');
        let finalDate = document.getElementById("future-date");
        futureDate = futureDate.format('dddd, MMMM Do, YYYY');
        finalDate.innerText = futureDate;
        calculatedDate.classList.remove("hidden")
        userInput.value = ''
    } // end if statement 
}); // func for when user presses enter key 

