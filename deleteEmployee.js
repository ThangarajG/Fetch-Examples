const fetch = require("node-fetch");
fetch("http://localhost:7000/api/Employee/5fe336da34c8e52d202def7a", {
  method: "DELETE",
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
