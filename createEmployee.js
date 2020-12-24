const fetch = require("node-fetch");
fetch("http://localhost:7000/api/Employee", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "",
    dop: "00/00/0000",
    gender: "female",
    employeestatus: "active",
  }),
})
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.log(err);
  });
