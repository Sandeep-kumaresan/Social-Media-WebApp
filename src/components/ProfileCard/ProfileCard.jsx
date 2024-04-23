import React from 'react'
import Cover from '../../img/cover.jpg'
import ProfileImage from '../../img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="cover pic" />
            <img src={ProfileImage} alt="Profilepic"/>
        </div>
        <div className="ProfileName">
            <span>Riya</span><br/>
            <span>Senior developer</span>
        </div>
        <div className='followStatus'>
            <hr/>
            <div>
                <div className='follow'>
                    <span>6700</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>100</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr/>
        </div>
        <span>My Profile</span>
    </div>
  )
}

export default ProfileCard