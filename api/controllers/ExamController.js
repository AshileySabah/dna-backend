const database = require("../models");
const Validation = require("../utils/Validation");
const Helper = require("../utils/Helper");

class ExamController {
  static async validateAnomaly(req, res) {
    try {
      const matrix = Validation?.treatMatrixParameter(req?.body?.matrix);

      const count_anomalies = Helper?.checkAnomalies(matrix)?.allOccurrences;
      if (count_anomalies > 0) {
        await database?.Exams?.create({ count_anomalies });
        return res?.status(200)?.send({ message: "Anomalies were found." });
      } else {
        return res?.status(403)?.send({ message: "No anomalies were found." });
      }
    } catch (error) {
      const { message, status } = error;
      return res?.status(status ?? 500)?.send({ message });
    }
  }
}

module.exports = ExamController;
