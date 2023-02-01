/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {selectedList: [], topScore: 0, score: 0, gameRunning: true}

  winOrLose = id => {
    const {selectedList, score} = this.state
    const checkId = selectedList.includes(id)
    console.log(checkId)
    if (checkId === true) {
      this.setState(prev => ({
        gameRunning: !prev.gameRunning,
      }))
    } else if (score === 11) {
      this.setState(prev => ({
        gameRunning: !prev.gameRunning,
        score: prev.score + 1,
      }))
    } else {
      this.setState(prev => ({
        score: prev.score + 1,
        selectedList: [...prev.selectedList, id],
      }))
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        gameRunning: true,
        topScore: score,
        score: 0,
        selectedList: [],
      })
    }
  }

  render() {
    const {score, topScore, gameRunning, selectedList} = this.state
    console.log(selectedList)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(shuffledEmojisList().length)

    return (
      <div className="app-container">
        <NavBar gameRunning={gameRunning} score={score} topScore={topScore} />
        <div className="emojis-bg-container">
          {gameRunning ? (
            <ul className="emojis-container">
              {shuffledEmojisList().map(each => (
                <EmojiCard
                  winOrLose={this.winOrLose}
                  key={each.id}
                  data={each}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              playAgain={this.playAgain}
              score={score}
              lenList={shuffledEmojisList().length}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
