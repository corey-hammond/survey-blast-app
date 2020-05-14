import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import StripeCheckout from "react-stripe-checkout";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Survey Blaster"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-small">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
