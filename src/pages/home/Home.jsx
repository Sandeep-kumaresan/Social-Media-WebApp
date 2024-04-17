import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
const Home = () => {
  return (
   <div className="Home">
    <ProfileSide/>
    <div className="ContentSide">Posts</div>
    <div className="RightSide">Rightside</div>
   </div>
  )
}

export default Home