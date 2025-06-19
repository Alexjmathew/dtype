/*eslint-disable no-unused-vars*/
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if the column already exists
    const tableDescription = await queryInterface.describeTable("Courses");
    
    if (!tableDescription.userId) {
      await queryInterface.addColumn("Courses", "userId", {
        type: Sequelize.DataTypes.INTEGER,
      });
    }

    // Check if the foreign key constraint already exists
    const foreignKeys = await queryInterface.getForeignKeyReferencesForTable("Courses");
    const userIdConstraintExists = foreignKeys.some(fk => fk.columnName === 'userId');
    
    if (!userIdConstraintExists) {
      await queryInterface.addConstraint("Courses", {
        fields: ["userId"],
        type: "foreign key",
        references: {
          table: "Users",
          field: "id",
        },
      });
    }
  },

  async down(queryInterface, Sequelize) {
    // Check if the column exists before removing
    const tableDescription = await queryInterface.describeTable("Courses");
    
    if (tableDescription.userId) {
      await queryInterface.removeColumn("Courses", "userId");
    }
  },
};
