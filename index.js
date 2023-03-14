const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/user", (req, res) => {
  try {
    const users = [
      {
        name: "CR7",
        sex: "Male",
      },
      {
        name: "M10",
        sex: "Male",
      },
    ];
    res.json({
      status: 200,
      success: true,
      data: users,
      message: "Get data success!",
    });
  } catch (error) {
    res.json({
      status: 200,
      success: false,
      data: [],
      message: "Get data success!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running port: ${PORT}`);
});
