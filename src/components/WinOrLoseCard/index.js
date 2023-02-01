import './index.css'

const WinOrLoseCard = props => {
  const {score, lenList, playAgain} = props

  const play = () => {
    playAgain()
  }

  return (
    <div className="win-loose-card">
      <div className="wl-details-container">
        {score === lenList ? (
          <h1 className="wl-head">You Won</h1>
        ) : (
          <h1 className="wl-head">You Lose</h1>
        )}
        {lenList === score ? (
          <p className="wl-score-text">Best Score</p>
        ) : (
          <p className="wl-score-text">Score</p>
        )}
        <p className="wl-score">
          {score}/{lenList}
        </p>
        <button onClick={play} className="wl-button" type="button">
          Play Again
        </button>
      </div>
      {lenList === score ? (
        <img
          className="wl-img"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      ) : (
        <img
          className="wl-img"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
