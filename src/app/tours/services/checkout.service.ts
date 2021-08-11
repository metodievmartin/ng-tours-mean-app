import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CheckoutSession, CheckoutSessionResponse } from '../interfaces';

declare const Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkoutSessionEndpoint = environment.restApiHost + environment.createSessionUrl;

  constructor(private http: HttpClient) { }

  startTourCheckoutSession(tourId: string): Observable<CheckoutSessionResponse> {
    return this.http.post<CheckoutSessionResponse>(this.checkoutSessionEndpoint, {
      tourId,
      callBackUrl: this.buildCallbackUrl()
    });
  }

  buildCallbackUrl() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;

    let callBackUrl = `${protocol}//${hostname}`;

    if (port) callBackUrl += ':' + port;

    callBackUrl += '/tours/stripe-checkout';

    return callBackUrl;
  }

  redirectToCheckout(session: CheckoutSession) {
    const apiKey = session.stripePublicKey;
    console.log(session)
    const stripe = Stripe(apiKey);

    stripe.redirectToCheckout({
      sessionId: session.checkoutSessionId
    })
  }
}
