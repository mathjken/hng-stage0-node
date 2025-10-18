const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch a random cat fact
    const catResponse = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = catResponse.data.fact;

    // Prepare response data
    const data = {
      status: "success",
      user: {
        email: "ogujohnkennedy@gmail.com",
        name: "Johnkennedy Uzoma Ogu",  
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.status(200).json(data);

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Fallback response
    res.status(200).json({
      status: "success",
      user: {
        email: "ogujohnkennedy@gmail.com",
        name: "Johnkennedy Uzoma Ogu",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at the moment. Try again later."
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
