const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// GET /me endpoint

app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact;

    res.json({
      status: "success",
      user: { email: "...", name: "...", stack: "Node.js/Express" },
      timestamp: new Date().toISOString(),
      fact: catFact
    });

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    // Fallback ensures server doesn't crash
    res.json({
      status: "success",
      user: { email: "...", name: "...", stack: "Node.js/Express" },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at the moment."
    });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));




