import React from 'react';


const Collection = () => {
  const portfolioItems = [
    { title: 'ON VERGE OF RAIN RECORD', author: 'William John', images: "/images/photo1.png"},
    { title: 'MAGNAM MOLESTIAE NEQUE', author: 'Mikel Runolfsson', images: "/images/portfolio-2.png"},
    { title: 'CULPA UT ID OFFICIIS EST', author: 'Cameron Reynolds', images: "/images/portfolio-3.png"},
    { title: 'LIBERO SUSCIPIT NOSTRUM', author: 'Blanca Watsica', images: "/images/portfolio-4.png" },
    { title: 'SOLUTA ET CONSEQUATUR', author: 'Emil Kub', images: "/images/portfolio-5.png" },
    { title: 'NON ADIPISCI QUIA LABORE', author: 'Jarod Hirthe', images: "/images/portfolio-6.png" },
    { title: 'ET QUI MOLESTIAE ODIO', author: 'Jessie Lindgren', images: "/images/portfolio-7.png" },
    { title: 'ET QUI MOLESTIAE ODIO', author: 'Bernie Pouros', images: "/images/portfolio-8.png" },
  ];

  return (
    <div className="portfolio-container">
    {portfolioItems.map((item, index) => (  
      <div key={index} className="portfolio-thumb">
        <div className='portfolio-image'>
          <img src={item.images} alt={item.title} />
        </div>
        <div className="portfolio-content">
          <h3>{item.title}</h3>
          <p>{item.author}</p>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Collection;






