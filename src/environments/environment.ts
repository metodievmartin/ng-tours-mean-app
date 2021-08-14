// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // restApiHost: 'http://localhost:5000',
  restApiHost: 'https://ngtours-api.herokuapp.com',
  signupUrl: '/api/v1/users/signup/',
  loginUrl: '/api/v1/users/login/',
  updateUserPasswordUrl: '/api/v1/users/updateMyPassword',
  updateUserInfoUrl: '/api/v1/users/updateMe',
  allToursUrl: '/api/v1/tours/',
  myToursUrl: '/api/v1/tours/booked',
  topFiveToursUrl: '/api/v1/tours/top-5-cheap',
  oneTourBySlugUrl: '/api/v1/tours/slug/',
  allBookingsUrl: '/api/v1/bookings/',
  allCompleteAndPaidBookingsUrl: '/api/v1/bookings/users/me?paid=true&status=completed',
  createSessionUrl: '/api/v1/bookings/checkout-session/',
  currentUserReviewsUrl: '/api/v1/reviews/users/me',
  tourImg: '/img/tours/',
  userImg: '/img/users/',
  mapboxToken: 'pk.eyJ1IjoibWFydGluLW1ldG9kaWV3IiwiYSI6ImNrc2EzaGYwdDFiaHkyd3MwbmJtYTZydGMifQ.KiCK2e2jNjP2ReKd2wg8Pw',
  mapboxMapStyles: 'mapbox://styles/martin-metodiew/ckqjaz4s00j6b18pae5dbbk8t'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
