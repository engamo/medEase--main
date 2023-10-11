function slideRight(){
    const cards = document.getElementById('article');
    cards.scrollLeft += 300;
}

function slideLeft(){
    const cards = document.getElementById('article');
    cards.scrollLeft -= 300;
}

function right(){
    const cards = document.getElementById('features');
    cards.scrollLeft += 300;
}

function left(){
    const cards = document.getElementById('features');
    cards.scrollLeft -= 300;
}

function right() {
    const cards = document.getElementById('team');
    cards.scrollLeft += 300;
}

function left() {
      const cards = document.getElementById('team');
      cards.scrollLeft -= 300;
}

const menuToggle = document.getElementById("hamburger");
const sideBar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener('click', () => {
sideBar.classList.toggle('-translate-x-full');
});

// Close the sidebar when clicking outside of it or the main content
document.addEventListener('click', (event) => {
if (!sideBar.contains(event.target) && event.target !== menuToggle) {
    sideBar.classList.add('-translate-x-full');
    }
});



menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const calendar = document.querySelector(".calendar");
        const currentMonthYear = document.querySelector("#currentMonthYear");
        const calendarDays = document.querySelector("#calendarDays");
        const prevMonthBtn = document.querySelector("#prevMonthBtn");
        const nextMonthBtn = document.querySelector("#nextMonthBtn");

        let currentDate = new Date();

        function generateCalendar() {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDayOfMonth = new Date(year, month, 1).getDay();

            // Clear previous calendar
            calendarDays.innerHTML = "";

            // Set current month and year in the header
            currentMonthYear.textContent = new Date(year, month).toLocaleString(undefined, { month: 'long', year: 'numeric' });

            // Calculate previous month's last days
            const daysInPrevMonth = new Date(year, month, 0).getDate();
            const prevMonthStartDay = daysInPrevMonth - firstDayOfMonth + 1;

            // Generate calendar cells
            let dayCounter = 1;
            for (let i = 0; i < 6; i++) {
                const row = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement("td");
                    if (i === 0 && j < firstDayOfMonth) {
                        // Previous month's days
                        cell.textContent = prevMonthStartDay + j;
                        cell.classList.add("prev-month");
                    } else if (dayCounter <= daysInMonth) {
                        // Current month's days
                        cell.textContent = dayCounter;
                        cell.classList.add("calendar-day", "unchecked");
                        dayCounter++;
                    }
                    row.appendChild(cell);
                }
                calendarDays.appendChild(row);
            }
        }

        generateCalendar();

        // Event listeners for navigating months
        prevMonthBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            generateCalendar();
        });

        nextMonthBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            generateCalendar();
        });

        // Event listener for clicking on a date to toggle checked/unchecked
        calendarDays.addEventListener("click", (e) => {
            if (e.target.classList.contains("calendar-day")) {
                e.target.classList.toggle("checked");
                e.target.classList.toggle("unchecked");
            }
        });
        // Data for the pie chart
        var data = {
            labels: ['Taken', 'Missed'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#0085ff', 'red'],
            }]
        };

        var options = {
            cutout: 60, // Size of the hole in the middle
            responsive: false, // Disable responsiveness for a fixed size chart
        };

        // Create the pie chart
        var ctx = document.getElementById('myPieChart').getContext('2d');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options,
        });
        // Data for the bar chart
        var data = {
            labels: ['Taken', 'Missed'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#0085ff', 'red'], // Blue and red colors for bars
            }]
        };

        var options = {
            responsive: false, // Disable responsiveness for a fixed size chart
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // Create the bar chart
        var ctx = document.getElementById('myBarChart').getContext('2d');
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });