import cors from "cors";
import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Login endpoint
app.post("/login", (req, res) => {
  const email = req.body.email;

  if (!email) {
    res.statusCode(403);
    res.send({
      message: "There is no email address that matches this.",
    });
  }

  if (email) {
    res.statusCode(200);
    res.send(email);
  }
});

// Start up the server on the port defined in the environment
const server = app.listen(PORT, () => {
  console.info("Server running on port " + PORT)
})

export default server 

