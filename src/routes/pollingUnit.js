const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  res.render("pollingUnit", { results: null });
});

router.post("/", async (req, res) => {
  const { id } = req.body;
  try {
    const [results] = await db.query(
      `SELECT party_abbreviation, party_score
       FROM announced_pu_results
       WHERE polling_unit_uniqueid = ?`,
      [id]
    );
    res.render("pollingUnit", { results });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;