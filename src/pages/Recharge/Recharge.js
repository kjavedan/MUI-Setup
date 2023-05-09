import React from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import { List } from "@mui/material";
import CardList from "../../components/card/CardList";
import { Bank, Clock, Paypal } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Recharge = () => {
  //NAVIGATION
  return (
    <div>
      <PageTitle value={"recharge"} />
      <List>
        <CardList
          title={"purchase"}
          icon={<Paypal />}
          navigateTo={"/app/recharge/payment-gateway"}
        />
        <CardList
          title={"request"}
          icon={<Bank />}
          navigateTo={"/app/recharge/request-recharge"}
        />
        <CardList
          title={"history"}
          icon={<Clock />}
          navigateTo={"/app/recharge/history"}
        />
      </List>
    </div>
  );
};

export default Recharge;
