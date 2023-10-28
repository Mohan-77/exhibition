import React from 'react'

const UpcomingEvent = () => {
  return (
     <section className="upcoming-event">
      <div className="section-title">
        <h1>UPCOMING EVENTS</h1>
        <p>Upcoming Events. Here you can find all of the latest and greatest events for Blazen</p>
        <div className='underline'></div>
      </div>
      <div className="container-box">
         <div className="col-left">
            <h4 className='event-title'>may 21-26-2022</h4>
            <ul>
               <li> 21 monday</li>
               <li>22 tuesday</li>
               <li>23 wednesday</li>
               <li>24 thursday</li>
               <li>25 friday</li>
               <li>26 saturday</li>
            </ul>
         </div>
         <div className="col-right">
            <div className="event">
               <div className="event-img">
                  <img src="/images/event-thumb-1.png" alt="" />
               </div>
                  <div className="event-content">
                     <p>The array of paintings and sculptures on display at the exhibition hall of Russian Centre of Science and Culture here is unusual in several respects.</p>
                     <span>12:00 am - 2:25 pm</span>
                  </div>
            </div>
            <div className="event">
               <div className="event-img">
                  <img src="/images/event-thumb-2.png" alt="" />
               </div>
                  <div className="event-content">
                     <p>The array of paintings and sculptures on display at the exhibition hall of Russian Centre of Science and Culture here is unusual in several respects.</p>
                     <span>22:00 am - 2:25 pm</span>
                  </div>
            </div>
            <div className="event">
               <div className="event-img">
                  <img src="/images/event-thumb-3.png" alt="" />
               </div>
                  <div className="event-content">
                     <p>The array of paintings and sculptures on display at the exhibition hall of Russian Centre of Science and Culture here is unusual in several respects.</p>
                     <span>8:00 pm - 10:00 pm</span>
                  </div>
            </div>
         </div>
      </div>
     </section>
  )
}

export default UpcomingEvent