Project Notes: Stay Calendar

 File Structure
Frontend
•	Components
o	Header.vue: Displays the app header with "Add Booking" option.
o	DateNavigation.vue: Calendar navigation controls.
o	CalendarTable.vue: Displays calendar with room bookings.
o	BookingModal.vue: Modal for viewing and editing booking details.
•	Store
o	bookings.js: Pinia store managing bookings, rooms, and current date.
o	bookingsData.js: Contains sample booking data.
•	Styling
o	app.css: Global styles with Tailwind CSS integration.
Backend
•	Laravel
o	Provides API endpoints and server setup.
o	Includes default Laravel structure: migrations, routes, and controllers.

 Key Files Overview
•	CalendarTable.vue
o	Displays calendar view.
o	Uses dayjs and isBetween to match bookings to dates.
o	Opens the Booking Modal when a booking is clicked.
•	BookingModal.vue
o	Shows and allows editing of booking details.
o	Dynamically recalculates total amount if stay duration changes.
•	DateNavigation.vue
o	Provides controls for navigating dates.
o	"Today" button resets calendar to current date.
•	bookings.js
o	Manages booking, rooms, and current date state.
o	Includes actions like updating bookings and recalculating totals.
•	bookingsData.js
o	Stores sample booking data including:
	Room
	Guest
	Check-in and Check-out dates
	Total amount
	Paid/Due amounts
	Booking status

 Technologies Used
•	Frontend
o	Vue 3 — UI framework
o	Pinia — State management
o	Day.js — Date manipulation
o	Tailwind CSS — Styling
•	Backend
o	Laravel — Backend framework and server
•	Build Tools
o	Vite — Fast development server and build tool
________________________________________
 How It Works
•	Calendar Initialization
o	The calendar starts from today's date using dayjs() in bookings.js.
•	Booking Display
o	Bookings are rendered onto the calendar.
o	Clicking a booking opens detailed view in BookingModal.vue.
•	Dynamic Total Amount
o	Total amount updates automatically in BookingModal.vue based on updated check-in/check-out dates.
•	Date Navigation
o	Users can easily navigate between dates or reset the calendar to today using DateNavigation.vue.

Setup Instructions
Project Setup
composer create-project Laravel/laravel Laravel-vue
npm install --save vue@next
npm install --save-dev vue-loader@next
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
Run the Development Server
npm run dev
php artisan serve
Access the Application
Open your browser and navigate to:
http://localhost:8000

