"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Exams",
      [
        {
          count_anomalies: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          count_anomalies: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          count_anomalies: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          count_anomalies: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          count_anomalies: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          count_anomalies: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Exams", null, {});
  },
};
