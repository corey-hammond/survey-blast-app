import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Survey Blaster"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-small">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default StripeWrapper;
