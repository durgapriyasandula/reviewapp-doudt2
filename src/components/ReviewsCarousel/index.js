// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  rightImage = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  leftImage = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderActiveReview = currentReviewDetails => {
    const {imgUrl, username, companyName, description} = currentReviewDetails
    return (
      <div className="component-sub-container">
        <img src={imgUrl} />
        <p className="name">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="companyName">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const {currentReviewDetails} = reviewsList[activeReviewIndex]
    return (
      <div className="list-container">
        <button
          type="button"
          className="button-class"
          onClick={this.leftImage}
          testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="leftArrow"
          />
        </button>
        {this.renderActiveReview(currentReviewDetails)}

        <button
          type="button"
          className="button-class"
          onClick={this.rightImage}
          testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
        {this.renderActiveReview(currentReviewDetails)}
      </div>
    )
  }
}

export default ReviewsCarousel
