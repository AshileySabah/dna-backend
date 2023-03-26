const database = require("../models");
const Validation = require("../utils/Validation");
const Helper = require("../utils/Helper");

class ExamController {
  static async validateAnomaly(req, res) {
    try {
      const matrix = Validation?.treatMatrixParameter(req?.body?.matrix);

      const count_anomalies = Helper?.checkAnomalies(matrix)?.allOccurrences;
      await database?.Exams?.create({ count_anomalies });
      if (count_anomalies > 0) {
        return res?.status(200)?.send({ message: "Anomalies were found." });
      } else {
        return res?.status(403)?.send({ message: "No anomalies were found." });
      }
    } catch (error) {
      const { message, status } = error;
      return res?.status(status ?? 500)?.send({ message });
    }
  }

  static async getStatistcs(req, res) {
    try {
      const count_anomalies = await database?.Exams?.sum("count_anomalies");
      const count_no_anomalies = await database?.Exams?.count({
        where: { count_anomalies: 0 },
      });
      const ratio =
        Number(count_anomalies) /
        (Number(count_anomalies) + Number(count_no_anomalies));
      return res
        ?.status(200)
        ?.send({ count_anomalies, count_no_anomalies, ratio });
    } catch (error) {
      const { message } = error;
      return res?.status(500)?.send({ message });
    }
  }
}

module.exports = ExamController;
