import './index.css'

const EmojiCard = props => {
  const {data, winOrLose} = props
  const {id, emojiName, emojiUrl} = data

  const emojiClick = () => {
    winOrLose(id)
  }

  return (
    <li className="emoji-card">
      <button onClick={emojiClick} className="emoji-button" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
