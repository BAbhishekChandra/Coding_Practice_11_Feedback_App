import './index.css'

const FeedbackItem = props => {
  const {resourceDetails, clickSetEmojiClicked} = props
  const {id, imageUrl, name} = resourceDetails

  const onChangeEmojiStatus = () => {
    clickSetEmojiClicked(id)
  }

  return (
    <li className="list-item">
      <img
        className="image-element"
        src={imageUrl}
        alt={name}
        onClick={onChangeEmojiStatus}
      />
      <p className="image-name">{name}</p>
    </li>
  )
}

export default FeedbackItem
