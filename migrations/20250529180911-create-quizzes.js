
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chapterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Chapters',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      question: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      optionA: {
        type: Sequelize.STRING,
      },
      optionB: {
        type: Sequelize.STRING,
      },
      optionC: {
        type: Sequelize.STRING,
      },
      optionD: {
        type: Sequelize.STRING,
      },
      correctAnswer: {
        type: Sequelize.STRING,
        allowNull: false,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Quizzes');
  },
};
