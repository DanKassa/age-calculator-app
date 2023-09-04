function isValidDate(day, month, year) {
    // Convert input to numbers
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);
  
    // Check if the year is within a reasonable range (adjust this as needed)
    const currentYear = new Date().getFullYear();
    if (year < currentYear - 100 || year > currentYear + 10) {
      return false;
    }
  
    // Check if the month is valid (1-12)
    if (month < 1 || month > 12) {
      return false;
    }
  
    // Check if the day is valid for the given month and year
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > lastDayOfMonth) {
      return false;
    }
  
    return true;
  }
  
  function calculateAgeAndValidate() {
    const yearInput = document.getElementById("year");
    const monthInput = document.getElementById("month");
    const dateInput = document.getElementById("date");
    const resultElement = document.getElementById("result");
    const ageResultElement = document.getElementById("ageResult");
  
    const birthYear = yearInput.value;
    const birthMonth = monthInput.value;
    const birthDay = dateInput.value;
  
    if (isValidDate(birthDay, birthMonth, birthYear)) {
      resultElement.textContent = "Valid Date!";
      ageResultElement.textContent = "";
  
      var slash_1 = document.getElementById("slash_1");
      var slash_2 = document.getElementById("slash_2");
      var slash_3 = document.getElementById("slash_3");
  
      // Calculate age
      var currentDate = new Date();
      var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
      var difference = currentDate - birthDate;
      var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
      var years = Math.floor(daysDifference / 365);
      var months = Math.floor((daysDifference % 365) / 30); // Assuming a month is 30 days
      var days = daysDifference % 30;
  
      slash_1.innerText = years;
      slash_2.innerText = months;
      slash_3.innerText = days;
    } else {
      resultElement.textContent = "Invalid Date!";
      ageResultElement.textContent = "";
    }
  }
  
  function checkEnter(event) {
    if (event.key === "Enter") {
      calculateAgeAndValidate();
    }
  }
  