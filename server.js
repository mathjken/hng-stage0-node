const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// --- Optional root route ---
app.get("/", (req, res) => {
  res.send("Welcome to my HNG Stage 0 API! Visit /me to see your profile and a random cat fact.");
});

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data?.fact || "No cat fact available.";

    res.json({
      status: "success",
      user: {
        email: "ogujohnkennedy@gmail.com",
        name: "Johnkennedy Ogu",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    });

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    // Fallback ensures server doesn't crash
    res.json({
      status: "success",
      user: {
        email: "ogujohnkennedy@gmail.com",
        name: "Johnkennedy Ogu",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at the moment."
    });
  }
});

// Use dynamic port for Heroku / Railway, fallback to 3000 locally
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0"; // ensures external access

app.listen(PORT, HOST, () => {
  console.log(`✅ Server running on http://${HOST}:${PORT}`);
});
