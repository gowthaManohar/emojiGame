import './index.css'

const NavBar = props => {
  const {score, topScore, gameRunning} = props
  return (
    <navbar className="nav-container">
      <div className="game-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="game-logo"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {gameRunning && (
        <div className="score-container">
          <p className="score">score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </navbar>
  )
}

export default NavBar
