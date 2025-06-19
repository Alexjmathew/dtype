/*eslint-disable no-unused-vars*/
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if the column already exists
    const tableDescription = await queryInterface.describeTable("Chapters");
    
    if (!tableDescription.courseId) {
      await queryInterface.addColumn("Chapters", "courseId", {
        type: Sequelize.DataTypes.INTEGER,
      });
    }

    // Check if the foreign key constraint already exists
    const foreignKeys = await queryInterface.getForeignKeyReferencesForTable("Chapters");
    const courseIdConstraintExists = foreignKeys.some(fk => fk.columnName === 'courseId');
    
    if (!courseIdConstraintExists) {
      await queryInterface.addConstraint("Chapters", {
        fields: ["courseId"],
        type: "foreign key",
        references: {
          table: "Courses",
          field: "id",
        },
      });
    }
  },

  async down(queryInterface, Sequelize) {
    // Check if the column exists before removing
    const tableDescription = await queryInterface.describeTable("Chapters");
    
    if (tableDescription.courseId) {
      await queryInterface.removeColumn("Chapters", "courseId");
    }
  },
};
