// Write your React code here.

import {Component} from 'react'
import FeedbackItem from '../FeedbackItem'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  clickSetEmojiClicked = id => {
    console.log(id)
    this.setState(prevState => ({isEmojiClicked: !prevState.isEmojiClicked}))
  }

  render() {
    const {resources} = this.props
    // console.log(resources)
    const {emojis, loveEmojiUrl} = resources
    // console.log(emojis)
    // console.log(loveEmojiUrl)
    const {isEmojiClicked} = this.state

    return (
      <div className="app-container">
        {isEmojiClicked && (
          <div className="feedback-container">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="unordered-list-container">
              {emojis.map(eachEmoji => (
                <FeedbackItem
                  key={eachEmoji.id}
                  resourceDetails={eachEmoji}
                  clickSetEmojiClicked={this.clickSetEmojiClicked}
                />
              ))}
            </ul>
          </div>
        )}
        {!isEmojiClicked && (
          <div className="thank-you-container">
            <img className="loveEmojiUrl" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="thank-you-heading">Thank You!</h1>
            <p className="feedback-description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
