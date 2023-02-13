import React, { useState, useEffect } from "react";
import axios from "axios";

const PayPalButton = ({ total }) => {
  const [sdkReady, setSdkReady] = useState(false);

  const addPaypalSdk = async () => {
    const result = await axios.get(
      "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"
    );
    eval(result.data);
    setSdkReady(true);
  };

  useEffect(() => {
    addPaypalSdk();
  }, []);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      console.log(details);
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  if (!sdkReady) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        id="paypal-button-container"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `paypal.Buttons({
            createOrder: (${createOrder}),
            onApprove: (${onApprove})
          }).render('#paypal-button-container');`,
        }}
      />
    </div>
  );
};

export default PayPalButton;
