"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Quizzes", [
      {
        chapterId: 1, // ⚠️ Make sure Chapter ID 1 exists!
        question: "What does HTML stand for?",
        optionA: "Hyper Text Markup Language",
        optionB: "Home Tool Markup Language",
        optionC: "Hyperlinks and Text Markup Language",
        optionD: "Hyperlinking Text Markup Logic",
        correctAnswer: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chapterId: 1,
        question: "Which of the following is a JavaScript framework?",
        optionA: "Django",
        optionB: "Flask",
        optionC: "React",
        optionD: "Laravel",
        correctAnswer: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chapterId: 1,
        question: "Which symbol is used for comments in JavaScript?",
        optionA: "//",
        optionB: "#",
        optionC: "<!--",
        optionD: "**",
        correctAnswer: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chapterId: 1,
        question: "What is the correct way to declare a variable in JavaScript?",
        optionA: "var myVar = 5;",
        optionB: "int myVar = 5;",
        optionC: "let = 5;",
        optionD: "myVar := 5;",
        correctAnswer: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chapterId: 1,
        question: "What does CSS stand for?",
        optionA: "Computer Style Sheets",
        optionB: "Creative Style Sheets",
        optionC: "Cascading Style Sheets",
        optionD: "Colorful Style Sheets",
        correctAnswer: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Quizzes", null, {});
  },
};
