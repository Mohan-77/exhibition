import React from 'react'

const Footer = () => {
  return (
    <div className='footer-top'>
        <ul className="social-icons">
            <li><i class="fa fa-facebook-official"></i></li>
            <li><i class="fa fa-google" aria-hidden="true"></i></li>
            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
        </ul>
        <div className="form-footer">
            <h4>newsletter</h4>
        <form >
            <input type="email" placeholder='Email address'/>
            <input type="text" className='submit' value='Subscribe'/>
        </form>
        </div>
    </div>
   
    
  )
}

export default Footer