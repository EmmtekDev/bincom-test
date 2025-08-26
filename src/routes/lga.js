const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const [lgas] = await db.query(`SELECT lga_id, lga_name FROM lga`);
  res.render("lga", { lgas, results: null });
});

router.post("/", async (req, res) => {
  const { lga_id } = req.body;
  const [lgas] = await db.query(`SELECT lga_id, lga_name FROM lga`);

  const [results] = await db.query(
    `SELECT apr.party_abbreviation, SUM(apr.party_score) as total_score
     FROM announced_pu_results apr
     JOIN polling_unit pu ON apr.polling_unit_uniqueid = pu.uniqueid
     WHERE pu.lga_id = ?
     GROUP BY apr.party_abbreviation`,
    [lga_id]
  );

  res.render("lga", { lgas, results });
});

module.exports = router;