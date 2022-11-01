"use strict";
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@metropolia.fi",
    password: "1234",
  },
  {
    id: "2",
    name: "Jane Doez",
    email: "jane@metropolia.fi",
    password: "qwer",
  },
];
const getUser = (userID) => {
  return users // ja lyhennetty tapa
    .filter((user) => userID === user.id) // jos catID === catid -> palauta cat
    .pop();
};

module.exports = {
  users,
  getUser,
};
