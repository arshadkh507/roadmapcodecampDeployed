import { useEffect, useState } from "react";
import styles from "./testimonial.module.css";
import testimonialsData from "./testimonialsData";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Testimonial = () => {

  const [ activeIndex, setActiveIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ activeIndex ]);


  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === testimonialsData.length - 1 ? 0 : activeIndex + 1);
  };


  return (
    <section className={styles.testimonialContainer}>
      <div className={styles.testimonialWrapper}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.testimonial}>

          <div className={styles.slider}>

            <div className={styles.sliderContainer}>
              <div className={styles.sliderContent}>
                <div className={styles.testimonialImage}>
                  <img
                    src={testimonialsData[ activeIndex ].image}
                    alt={testimonialsData[ activeIndex ].name}
                  />
                  <h3>{testimonialsData[ activeIndex ].name}</h3>
                  <span className={styles.testimonialProfession}>
                    {testimonialsData[ activeIndex ].profession}
                  </span>
                  <p className={styles.testimonialDescription}>
                    {testimonialsData[ activeIndex ].description}
                  </p>
                </div>
              </div>
            </div>


            <div className={styles.sliderDots}>
              {testimonialsData.map((item, index) => (
                <span
                  key={item.id}
                  className={`${ styles.sliderDot } ${ index === activeIndex ? styles.dotActive : "" }`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>


            <button className={`${ styles.sliderButton } ${ styles.prev }`} onClick={handlePrevClick}>
              <SlArrowLeft />
            </button>
            <button className={`${ styles.sliderButton } ${ styles.next }`} onClick={handleNextClick}>
              <SlArrowRight />
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonial;
