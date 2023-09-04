function checkEnter(event) {
    if (event.key === "Enter") {
        // Get a reference to the input element by its id
        var inputElement = document.getElementById("year");
        var inputDate = document.getElementById("date")
        var inputMonth = document.getElementById("month")

        // Get the value entered by the user
        var birthYear=inputElement.value;
        var birthDay = inputDate.value;
        var birthMonth = inputMonth.value;
        
        //Get a reference to the invalid input id
        var invalidIdMonth = document.getElementById("invalid_id_month")
        var invalidIdYear = document.getElementById("invalid_id_year")
        var invalidIdDay = document.getElementById("invalid_id_day")

        //Get a reference to the paragraph item for style editing
        var dayPID = document.getElementById("dayP")
        var monthPID = document.getElementById("monthP")
        var yearPID = document.getElementById("yearP")

        if((birthDay && birthMonth && birthMonth) === ""){
            // alert('Please enter your birthday');
            dayPID.style="color:hsl(0, 100%, 67%)";
            monthPID.style="color:hsl(0, 100%, 67%)";
            yearPID.style = "color:hsl(0, 100%, 67%)";

            invalidIdMonth.innerText ="The field is required"
            invalidIdYear.innerText ="The field is required"
            invalidIdDay.innerText ="The field is required"

            inputElement.style = "border: solid hsl(0, 100%, 67%) 1px"
            inputDate.style = "border-color: hsl(0, 100%, 67%)"
            inputMonth.style = "border-color: hsl(0, 100%, 67%)"

            return;

        }

        // Do something with the value, e.g., display it in an alert
        alert("User entered: " + `${birthYear}/${birthMonth}/${birthDay}`);

        // You can also clear the input field if needed
        inputElement.value = "";
        inputDate.value = "";
        inputMonth.value = "";


        function isValidDate(day, month, year) {
            // Convert input to numbers
            day = parseInt(day, 10);
            month = parseInt(month, 10);
            year = parseInt(year, 10);

            
            
            // Check if the year is within a reasonable range (adjust this as needed)
            const currentYear = new Date().getFullYear();
            if (year > currentYear) {
                invalidIdYear.innerText = "Must be in the past"
                yearPID.style = "color:hsl(0, 100%, 67%)";
                inputElement.style = "border: solid hsl(0, 100%, 67%) 1px"
              return false;
            }
          
            // Check if the month is valid (1-12)
            if (month < 1 || month > 12) {
                invalidIdMonth.innerText = "Must be a valid month"
                monthPID.style="color:hsl(0, 100%, 67%)";
                inputMonth.style = "border-color: hsl(0, 100%, 67%)"
              return false;
            }
          
            // Check if the day is valid for the given month and year
            const lastDayOfMonth = new Date(year, month, 0).getDate();
            if (day < 1 || day > lastDayOfMonth) {
                invalidIdDay.innerText = "Must be a valid Day"
                dayPID.style="color:hsl(0, 100%, 67%)";
                inputDate.style = "border-color: hsl(0, 100%, 67%)"
              return false;
            }
          
            return true;
          }
          
          // Example usage:
        //   const userInputDay = prompt("Enter day:");
        //   const userInputMonth = prompt("Enter month:");
        //   const userInputYear = prompt("Enter year:");
          
          if (isValidDate(birthDay, birthMonth, birthYear)) {
            alert("Valid Date!")
            console.log("Valid date!");
          } else {
            alert("Invalid Date!")
            console.log("Invalid date.");
            return;
          }
          

        function calculateAge(birthYear, birthMonth, birthDay) {
            // Get the current date
            var currentDate = new Date();
        
            // Calculate the birthdate
            var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
        
            // Calculate the difference in milliseconds between the two dates
            var difference = currentDate - birthDate;
            
            // Convert the difference to days
            var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
        
            // Calculate years, months, and remaining days
            var years = Math.floor(daysDifference / 365);
            var months = Math.floor((daysDifference % 365) / 30); // Assuming a month is 30 days
            var days = daysDifference % 30;
        
            return {
                years: years,
                months: months,
                days: days
            };
        }
        
        // Example usage:
        // var birthYear = 2001; // Replace with your birth year
        // var birthMonth = 5;   // Replace with your birth month (1-12)
        // var birthDay = 13;    // Replace with your birth day (1-31)
        
        var age = calculateAge(birthYear, birthMonth, birthDay);
        console.log("You are " + age.years + " years, " + age.months + " months, and " + age.days + " days old.");
        

        var slash_1 = document.getElementById("slash_1")
        var slash_2 = document.getElementById("slash_2")
        var slash_3 = document.getElementById("slash_3")

        slash_1.innerText = age.years
        slash_2.innerText = age.months
        slash_3.innerText = age.days
        
    }
}