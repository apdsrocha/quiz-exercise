const answers = ['C', 'B', 'B']
const form = document.querySelector('form')
const templateScore = document.createElement('p')

templateScore.setAttribute('class', 'font-weight-bolder quiz-answer rounded text-center')
form.insertAdjacentElement('beforeend',templateScore)

const showScoreTemplate = scorePercentage => {
  if (scorePercentage === 100) {
    templateScore.textContent = `Seu total de acertos é ${scorePercentage}%! Parabéns!`
  } else {
    templateScore.textContent = `Seu total de acertos é ${scorePercentage}%.`
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const answer1 = event.target.inputQ1.value
  const answer2 = event.target.inputQ2.value
  const answer3 = event.target.inputQ3.value
  const userAnswers = [answer1, answer2, answer3]
  let score = 0
  let scorePercentage = 0

  userAnswers.forEach( (userAnswer, index) => {
    if (userAnswer === answers[index]) {
      score += 1
    }
  })

  scorePercentage = Math.round((score/answers.length) * 100)
  showScoreTemplate(scorePercentage)
})
