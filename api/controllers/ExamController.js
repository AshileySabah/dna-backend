const database = require("../models");
const Validation = require("../utils/Validation");
const Helper = require("../utils/Helper");

class ExamController {
  static async validateAnomaly(req, res) {
    try {
      const matrix = Validation?.treatMatrixParameter(req?.body?.matrix);

      const checkAnomalies = Helper?.checkAnomalies(matrix);
      if (
        checkAnomalies?.diagonalOccurrences > 0 ||
        checkAnomalies?.verticalOccurrences > 0 ||
        checkAnomalies?.horizontalOccurrences > 0
      ) {
        return res?.status(200)?.send({ message: "Anomalies were found." });
      } else {
        return res?.status(403)?.send({ message: "No anomalies were found." });
      }
    } catch (error) {
      const { message, status } = error;
      return res?.status(status)?.send({ message });
    }
  }
}

module.exports = ExamController;
