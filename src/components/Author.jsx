import React from 'react'

const Author = () => {
  return (
    <section className='author-container'>
       <h2 className='heading'>TYPICAL AUTHOR</h2>
       <div className='authors'>
            <div className='author1 author'>
                <div className='author-image'>
                    <img src="images/author-thumb-1.png" alt="" />
                </div>
                <div className="author-content">
                    <p>Author 1</p>
                    <h3>REANNA STANTON</h3>
                    {/* <div className='socials'>

                    </div> */}
                </div>
            </div>
            <div className='author'>
                <div className='author-image'>
                    <img src="images/author-thumb-2.png" alt="" />
                </div>
                <div className="author-content content-2">
                    <p>Author 2</p>
                    <h3>REANNA STANTON</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque hic rerum, culpa suscipit ad consequuntur!</p>
                    {/* <div className='socials'>

                    </div> */}
                </div>
            </div>
            <div className='author'>
                <div className="author-content content-2">
                    <p>Author 3</p>
                    <h3>REANNA STANTON</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque hic rerum, culpa suscipit ad consequuntur!</p>
                    {/* <div className='socials'>

                    </div> */}
                </div>
                <div className='author-image'>
                    <img src="images/author-thumb-3.png" alt="" />
                </div>
            </div>
            <div className='author'>
                <div className='author-image'>
                    <img src="images/author-thumb-4.png" alt="" />
                </div>
                <div className="author-content content-2">
                    <p>Author 4</p>
                    <h3>REANNA STANTON</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque hic rerum, culpa suscipit ad consequuntur!</p>
                    {/* <div className='socials'>

                    </div> */}
                </div>
            </div>
       </div>
    </section>
  )
}

export default Author