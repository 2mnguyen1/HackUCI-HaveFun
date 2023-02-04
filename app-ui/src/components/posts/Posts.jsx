import React from 'react'
import "./Post.css"
import testingImage from "../../images/testing.png"

export default function Posts() {
  return (
    <div className='post-container'>
        <div className='post-wrapper'>
            <div className='user-post-top'>
                <div className='user-post-top-img'>

                </div>
                <div className='user-post-top-intro'>
                    <div className='user-post-name'>minh1n1</div>
                    <div className='user-post-time'>Today at 10:00pm</div>
                </div>
            </div>
            <div className='user-post-description'>
                Sign up for PayPal to help boost online sales. Offer PayPal, Venmo, Pay Later options, & card payments, all from one account.
            </div>
            <img className='user-post-image' src={testingImage} alt=""/>
            <button className='user-post-button'>
                RESERVED
            </button>
        </div>
    </div>
  )
}
