let ball = document.querySelector('#ball')
const container = document.querySelector('.container')

const moveBall = e => {
    let alpha = event.alpha
    let beta = event.beta
    let gamma = event.gamma
    let marLeft = ball.style.left
    let marTop = ball.style.top

    // console.log(alpha, beta, gamma)
    // console.log(marLeft, marTop)

    marLeft = gamma + alpha + 20
    marTop = beta + alpha + 20

    ball.style.left = `${marLeft + 170}px`
    ball.style.top = `${marTop + 170}px`
}
window.addEventListener('deviceorientation', moveBall)