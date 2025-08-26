const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/add", async (req, res) => {
  const [parties] = await db.query(`SELECT DISTINCT party_abbreviation FROM party`);
  res.render("addResult", { parties });
});

router.post("/add", async (req, res) => {
  const { polling_unit_uniqueid } = req.body;
  const entries = Object.keys(req.body)
    .filter(k => k.startsWith("party_"))
    .map(k => ({ party: k.replace("party_", ""), score: req.body[k] }));

  try {
    for (let r of entries) {
      if (r.score && !isNaN(r.score)) {
        await db.query(
          `INSERT INTO announced_pu_results 
           (polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address)
           VALUES (?, ?, ?, ?, NOW(), ?)`,
          [polling_unit_uniqueid, r.party, r.score, "admin_user", req.ip]
        );
      }
    }
    res.send("Results added successfully.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;