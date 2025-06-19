/*eslint-disable no-unused-vars*/
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if table exists
    const tables = await queryInterface.showAllTables();
    const tableExists = tables.includes('Users');
    
    if (!tableExists) {
      await queryInterface.createTable("Users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    } else {
      // Table exists, check if role column exists
      const tableDescription = await queryInterface.describeTable("Users");
      
      if (!tableDescription.role) {
        await queryInterface.addColumn("Users", "role", {
          type: Sequelize.STRING,
        });
      }
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
