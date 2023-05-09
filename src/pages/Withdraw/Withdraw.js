import React from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import CardList from "../../components/card/CardList";
import { List } from "@mui/material";
import { Bank, Clock } from "iconsax-react";

const Withdraw = () => {
  return (
    <div>
      <PageTitle value={"withdraw"} />
      <List>
        <CardList
          title={"request"}
          icon={<Bank />}
          navigateTo={"/app/withdraw/request-withdraw"}
        />
        <CardList
          title={"history"}
          icon={<Clock />}
          navigateTo={"/app/withdraw/history"}
        />
      </List>
    </div>
  );
};

export default Withdraw;
