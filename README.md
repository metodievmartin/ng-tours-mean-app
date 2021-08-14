# Ng-Tours MEAN stack app

The app is live on -> https://metodievmartin.github.io/ng-tours-mean-app/tours

## Summary

***

A tour booking app, built with Angular 12+ on the client-side and an Express/Node.js app on the back-end, where users can browse, sign up and purchase(book) an organized tour.
User dashboard is also available so that they can update their details, manage their bookings and reviews.

The app features online payments, an interactive map with the tour's stops and schedule, user profile photo uploads, and an admin dashboard for admin users.

Two users that can be used for testing purposes:

Admin:  
email:  `admin@natours.io`  
password: `test1234`

User:  
email: `laura@example.com`  
password: `test1234`

To make a successful payment and book a tour you can use the following credit card details provided by Stripe:

`Card Number:`
`4242 4242 4242 4242`  
`Name:` Any...  
`Expiry Date:` Any...  
`CVC:` Any...

All booked tours can be found at My Bookings page - `/my-profile/bookings`

## Installation & Pre-requisites

***
To be able to use Angular on your local system, you need the following:
* `Node` - For more information on installing Node.js, see https://nodejs.org/en/.
  If you are unsure what version of Node.js runs on your system, if any, run `node -v` in a terminal window.
* `npm` - package manager. To check that you have the npm client installed, run `npm -v` in a terminal window.

To install the Angular CLI, open a terminal window and run the following command:

`npm install -g @angular/cli`

To run the app locally download the source code or clone the repository.

`git clone https://github.com/metodievmartin/ng-tours-mean-app.git`

Open the project and cd into the root folder.

`cd ng-tours-mean-app`

Install all the dependencies:

`npm install`

Run the development server:

`ng serve`

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Details

***

IMPORTANT: the app has been developed on a linux system, so beware of CRLF/LF issues.

The routing is handled by the `@angular/router`, logic is separated in routing modules,
so that lazy loading of `auth`, `tours` and `users` modules can be implemented,
as well as nested routing within the `user-dashboard`

The app uses `RxJS` powered reactive state - `NgRx` as its global state management solution,
taking advantage of its features such as actions, effects and reducers. -> https://ngrx.io/

The checkout process is carried out by stripe's online payments api providing a customized checkout page
and a secure checkout session managed at the backend -> https://stripe.com/en-gb-bg

For the interactive map displaying geo-locations as tour's scheduled stops is used
[Mapbox'](https://www.mapbox.com/) angular package `ngx-mapbox-gl` -> https://github.com/Wykks/ngx-mapbox-gl

The app also makes use of various Angular features like guards, interceptors, pipes, etc.

The backend service is custom and can be found here -> https://github.com/metodievmartin/natours-rest-api

NOTE: It is live on Heroku's free tier, so it goes asleep after one hour of inactivity.  
Not a problem, though, only the initial request may take longer than usual but after that it will work just fine.
Maybe you can pay it a visit beforehand just to wake it and make sure it's up and running:

-> https://ngtours-api.herokuapp.com/api

## Structure

***

### The app is separated in 6 different modules plus their respective routing modules:

* `app` - root module
* `auth` - module responsible for the user authentication, log in and creating users
* `core` - contains some core features of the app such as header & footer
* `shared` - contains app-wide used components, services and custom pipes
* `tours` - module containing all the logic related to the tours - fetching, booking, displaying
* `users` - module exclusively responsible for the user management. Update user info, change password, manage user bookings and reviews. Nothing auth related!

### Modules have the following folder structure:

* `components` - mainly dummy components and layout building components.
* `guards` - contains guard services - if any
* `interceptor` - contains interceptor services - if any
* `interfaces` - contains all the interfaces belonging to this module
* `layouts` - contains entire page components composited by other components. Think of them as containers.
  All the logic and state management is being handled at one place - in the layout components (except for the header and the side nav).
  They are named after the page they represent followed by suffix `-page`
* `services` - contains all the services responsible for the business logic, communication with the backend etc.
* `store` - contains module's @ngrx/store related files
  * `actions` - contains all the actions
  * `effects` - contains all the effects
  * `reducers` - contains all the reducers


## Pages

***

### Public access

* `/auth/login` - **Login Page** - *can't be accessed by logged users
* `/auth/register` - **Sign Up Page** - *can't be accessed by logged users
* `/tours` - **All Tours Page** - grid display of all available tours
* `/tours/top-5` - **Top 5 Tours** - grid display of the top 5 highest rated with the lowest price
* `/tours/:tourSlug` - **Tour Details** - detailed information for a given tour

### Private access

* `/tours/my-tours` - **My Tours Page** - grid display of all booked tours by the current user
* `/my-profile` - **User Dashboard** - a main layout with side navigation and nested routed children pages
* `/my-profile/` - **User Settings Nested Page** - update user's name, email, upload profile photo and change password
* `/my-profile/bookings` - **My Bookings Nested Page** - list of all completed and paid bookings by the current user
* `/my-profile/bookings/:bookingId` - **Booking Details Nested Page** - detailed information of the given booking
* `/my-profile/reviews` - **My Reviews Nested Page** - list of all reviews left by the user
* `/my-profile/billing` - **Billing Nested Page** - user's billing details /not available yet/

### Admin access
* Not available yet
