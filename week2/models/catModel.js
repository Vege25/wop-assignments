"use strict";
const cats = [
  {
    id: "1",
    name: "Frank",
    birthdate: "2010-10-30",
    weight: "5",
    owner: "1",
    filename: "http://placekitten.com/400/300",
  },
  {
    id: "2",
    name: "James",
    birthdate: "2015-12-25",
    weight: "11",
    owner: "2",
    filename: "http://placekitten.com/400/302",
  },
];
const getCat = (catID) => {
  /*for (let i = 0; i < cats.length; i++) { SAMA ASIA ALEMPANA
    if (catID === cats[i]) {
      return cats[i];
    }
  }*/
  /*for (let cat of cats) { TOINEN TAPA
    if (catId === cat.id) {
      return cat;
    }
  }*/
  /*return cats OPEN TAPA
    .filter((cat) => {
      if (catID === cat.id) {
        return cat;
      }
    })
    .pop();*/
  return cats // ja lyhennetty tapa
    .filter((cat) => catID === cat.id) // jos catID === catid -> palauta cat
    .pop();
};

module.exports = {
  cats,
  getCat,
};
