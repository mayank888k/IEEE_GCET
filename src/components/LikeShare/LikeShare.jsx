import React from 'react'
import './LikeShare.css'
import { Facebook, Twitter } from '@mui/icons-material';

const LikeShare = () => {
  return (
    <div className="like">
        <hr />
        <p style={{fontSize:"15px", fontWeight:"bold"}}>Share This</p>
        <div className="btns">
            <a href="https://icac3n-21.in/important-dates/?share=twitter&nb=1" className="btnn">
                <Twitter />
                <span style ={{marginLeft:"5px"}}>Twitter</span>
            </a>
            <a href="https://icac3n-21.in/important-dates/?share=facebook&nb=1" className="btnn">
                <Facebook />
                <span style ={{marginLeft:"5px"}}>Facebook</span>
            </a>
        </div>
    </div>
  )
}

export default LikeShare