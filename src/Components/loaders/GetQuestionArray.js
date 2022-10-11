export const QuizQuestionLoaderArray = async () => {
    const quizData = await fetch(`https://openapi.programming-hero.com/api/quiz/${1}`)
    const quiz = await quizData.json()
    return quiz
}