import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import meter1 from '../assets/logos/meter1.svg'
import meter2 from '../assets/logos/meter2.svg'
import meter3 from '../assets/logos/meter3.svg'
import colorsharp from '../assets/logos/color-sharp.png'


function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



  return (
    <section className='skills'>
        <div className='container'>
            <div className='column'>
                <div className='row'>
                    <div className='skills-box'>
                        <h2>skills</h2>    
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit recusandae consectetur exercitationem sit ad dolorum doloremque sequi totam, cum mollitia ipsa asperiores temporibus fuga quos nobis aspernatur enim! Accusantium!</p>
                        <Carousel responsive={responsive} 
                                  infinite={true} 
                                  className='skills-slider'
                                  showThumbs={false} 
                                  showStatus={false} 
                                  infiniteLoop={true} 
                                  showArrows={true} 
                                  centerMode={true} 
                                  centerSlidePercentage={33.33} 
                                  >
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h4>front-end developing</h4>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h4>back-end developing</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h4>web design</h4>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h4>everything</h4>
                            </div>
                        </Carousel>
                        <div className='images-background'>
                            <img src={colorsharp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills