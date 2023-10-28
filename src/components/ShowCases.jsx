import React from 'react'
// import logo from '../images/about-icon.png'
const ShowCases = () => {
  return (
      <section className="welcome-container">
        <div className="welcome-section">
            <div className="icon">
                <img src='/images/about-icon.png' alt="" />
            <p>Painting exhibition showcases an array of style</p>
            </div>
            <h1>WELCOME !</h1>
            <p>
                The exhibition also features a workshop for artists and writers on March 26, where the participants would express and exchange their thoughts on the theme ‘Nature's fury over Japan'. Organised by the Indo-Russian Cultural & Friendship Society (IRCFS), it is a group of passionate artists who believe that enabling a shared space for artists with different areas of expertise and varied experiences would enrich the art and promote healthy exchange and learning.
            </p>
            <div className="buttons">
                <a href="#" className="buy-ticket-button">BUY TICKET</a>
                <a href="#" className="view-more-button">VIEW MORE</a>
            </div>
        </div>
      </section>
  )
}

export default ShowCases