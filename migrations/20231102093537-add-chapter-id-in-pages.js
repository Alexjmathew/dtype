/*eslint-disable no-unused-vars*/
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if the column already exists
    const tableDescription = await queryInterface.describeTable("Pages");
    
    if (!tableDescription.chapterId) {
      await queryInterface.addColumn("Pages", "chapterId", {
        type: Sequelize.DataTypes.INTEGER,
      });
    }

    // Check if the foreign key constraint already exists
    const foreignKeys = await queryInterface.getForeignKeyReferencesForTable("Pages");
    const chapterIdConstraintExists = foreignKeys.some(fk => fk.columnName === 'chapterId');
    
    if (!chapterIdConstraintExists) {
      await queryInterface.addConstraint("Pages", {
        fields: ["chapterId"],
        type: "foreign key",
        references: {
          table: "Chapters",
          field: "id",
        },
      });
    }
  },

  async down(queryInterface, Sequelize) {
    // Check if the column exists before removing
    const tableDescription = await queryInterface.describeTable("Pages");
    
    if (tableDescription.chapterId) {
      await queryInterface.removeColumn("Pages", "chapterId");
    }
  },
};
