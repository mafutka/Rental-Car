This is a rental car service application 🚗 🚙 🏎️ 🛻
 
A fully functional car rental catalog built with Next.js, TypeScript, Zustand, featuring server-side filtering, pagination, global state management, and a complete car booking flow.
The project is deployed and available online https://rental-car-rho-ten.vercel.app/.

This application allows users to:
- Browse a catalog of rental cars;
- Filter cars by brand, price, and mileage;
- Add cars to a favorites list (persisted after page reload);
- Load additional cars using backend pagination;
- Navigate using the Next.js App Router.

The project follows the provided design template and technical requirements.

 Technologies Used:
- Next.js (App Router)
- TypeScript
- Axios — API requests
- Zustand — global state management
- CSS Modules — styling
- Additional Tools
- Backend filtering & pagination
- LocalStorage persistence for favorites
- Client-side & server-side rendering (Next.js)

Project Structure (Key Pages)
/HomePage with a hero banner & CTA button
/catalog	Catalog of autos with filtering & pagination
/catalog/:id	Single car page with details & booking form

User has clear Catalog Navigation - the home page includes a “View Catalog” button that redirects users to /catalog.

As well there is Backend Filtering - all filters are executed on the backend (not on the frontend):
Brand — one selected value
Price — one selected value
Mileage — supports from, to, or both
Before sending a new filtered request, previous results are cleared to ensure accuracy.

We have Favorites System:

Users can add/remove cars from Favorites
Favorites are stored in Zustand
Synced with localStorage → stays after page reload
Favorite button displayed on car cards

 Car Details Page

Each car card includes a “Read more” button that navigates to a detailed page containing:
Full specs
Large car image
Booking form

Booking Form

Users can send a booking request by filling out the form.
On success, a notification confirms the booking.

👨‍💻 Author

Maria Skobeleva
Fullstack Developer
Email: mafutka@gmail.com

GitHub: https://github.com/mafutka
