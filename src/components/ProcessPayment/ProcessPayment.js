import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import SimpleCardForm from "./SimpleCardForm";
const stripePromise = loadStripe(
  "pk_test_51IetwrL97M71ifJHiRNPr9ywFLkbyTwadGvVd1EwwdCvGN1NXLHLqPVcmK3YUy4quXg7kvNSM9cNZf8wyZU2At9Q00qMkOEfJ0"
);
const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
