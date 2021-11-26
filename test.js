var axios = require("axios");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      var data = JSON.stringify({ user_id: i, location: j, device: k });

      var config = {
        method: "post",
        url: `http://localhost:5000/devices`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data["result"], i, j, k);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
