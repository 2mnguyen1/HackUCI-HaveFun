import React from 'react'
import "./LeftMainPage.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Posts from "../components/posts/Posts"



export default function LeftMainPage() {
  return (
    <div className='left-main-container'>
        <div className='left-main-wrapper'>
            <div className='left-main-posting'>
                <div className='post-top'>
                    <div className='post-top-img'></div>
                    <input type="text" className='post-top-input' id="lname" name="lname" placeholder='How can we help you?'></input>
                </div>
                <div className='post-bottom'>
                    <div className='upload-icon'>
                        <AddPhotoAlternateIcon className='upload-icon-mt'/>
                        <button className='post-bottom-button'>Post</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
                <Posts />
                <Posts />
                <Posts />
        </div>
    </div>
  )
}
