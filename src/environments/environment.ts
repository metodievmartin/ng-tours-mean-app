// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //restApiHost: 'http://localhost:5000',
  restApiHost: 'https://ngtours-api.herokuapp.com',
  signupUrl: '/api/v1/users/signup/',
  loginUrl: '/api/v1/users/login/',
  allToursUrl: '/api/v1/tours/',
  topFiveToursUrl: '/api/v1/tours/top-5-cheap',
  oneTourBySlugUrl: '/api/v1/tours/slug/',
  allBookingsUrl: '/api/v1/bookings/',
  allCompleteAndPaidBookingsUrl: '/api/v1/bookings?paid=true&status=completed',
  createSessionUrl: '/api/v1/bookings/checkout-session/',
  tourImg: '/img/tours/',
  userImg: '/img/users/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
