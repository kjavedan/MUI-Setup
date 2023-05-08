import { Clock, Home, MoneyRecive, MoneySend, Profile } from "iconsax-react";
const navConfig = [
  {
    title: "home",
    path: "/app/home",
    icon: <Home />,
  },
  {
    title: "activity",
    path: "/app/activity",
    icon: <Clock />,
  },
  {
    title: "withdraw",
    path: "/app/withdraw",
    icon: <MoneySend />,
  },
  {
    title: "recharge",
    path: "/app/recharge",
    icon: <MoneyRecive />,
  },
  {
    title: "account",
    path: "/app/account",
    icon: <Profile />,
  },
];

export default navConfig;
