import { faker } from "@faker-js/faker";
import { sample } from "lodash";

export const historyArray = [...Array(24)].map((_,index)=> ({
  id: index,
  transactionId: index,
  total: faker.datatype.number(),
  transactionDate: faker.date.recent().toISOString(),
  paymentDate: faker.date.past().toISOString(),
  paymentGateway: sample(['paypal, management']),
  state: sample(['pending', 'approved', 'rejected']),
  requestNote: "Minim irure cupidatat duis laborum.",
}));
