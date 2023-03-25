const { Router } = require("express");
const ExamController = require("../controllers/ExamController");

const router = Router();

router?.post("/validate-anomaly", ExamController?.validateAnomaly);

module.exports = router;
