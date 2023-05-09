import { List } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardList from "../../components/card/CardList";
import { buyAmountsArray } from "../../_mock/paymentGateway";
import PageTitle from "../../components/pageTitle/PageTitle";
import { DollarCircle, DollarSquare } from "iconsax-react";

const PaymentGateway = () => {
  // STATE
  const [isPurchaseBeenMade, setIsPurchaseBeenMade] = useState(false);
  const [isPaymentGateway, setIsPaymentGateway] = useState(false);
  const [value, setValue] = useState({
    clientToken: null,
    success: "",
    error: "",
    instance: "",
  });

  console.log(isPaymentGateway);

  const [order, setOrder] = useState({
    price: 0,
    quantity: 0,
  });

  // OBJECTS
  const { clientToken, instance } = value;
  const { price, quantity } = order;

  // FUNCS
  const handleBuy = (amount) => {
    setOrder({ quantity: amount, price: amount });
    setIsPaymentGateway(true);
  };

  //USEEFECT
  // useEffect(() => {
  //   if (clientToken && price) {
  //     setIsPaymentGateway(true);
  //     setIsPurchaseBeenMade(false);
  //   } else setIsPaymentGateway(false);
  // }, [clientToken, price, order]);

  return (
    <div>
      <PageTitle value={"paymentGateway"} />
      {!isPaymentGateway ? (
        <List>
          {buyAmountsArray.map((item, index) => (
            <CardList
              key={index}
              title={item.amount}
              icon={<DollarCircle />}
              handleBuy={() => handleBuy(item.amount)}
            />
          ))}
        </List>
      ) : (
        <p>dropin</p>
      )}
    </div>
  );
};

export default PaymentGateway;
