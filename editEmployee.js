const fetch = require("node-fetch");
fetch("http://localhost:7000/api/Employee/5fe339d9d7c4c70a4422e47e", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    gender: "male",
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
