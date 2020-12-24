const fetch = require("node-fetch");

fetch("http://localhost:7000/api/Employee")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.log(err);
  });


