'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './homePageCarousel.module.scss';
import { useEffect, useRef } from "react";

function HomePageCarousel() {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.Components.Pagination.items.map((sliderDot, i) => {
        if (i === 0) {
          sliderDot.button.classList.add(styles.dotActive);
        }

        sliderDot.button.classList.add(styles.customDot);
        sliderDot.li.classList.add(styles.customDotLi);
      })

      splideRef.current.splide.on('pagination:updated', (data, prev, curr) => {
        curr.button.classList.add(styles.dotActive);
        prev.button.classList.remove(styles.dotActive);
      })
    }
  }, [splideRef])

  return <div>
    <Splide
      className={styles.homePageCarousel}
      options={{
        type: 'loop',
        arrows: false,
        autoplay: true
      }}
      ref={splideRef}
    >
      <SplideSlide className={styles.slide}>
        <img src='https://fastly.picsum.photos/id/861/1920/1080.jpg?hmac=b2bwytCdkwyzZLP-EqUCh2r2-qkCY-dlkw0UtYyIElM'/>
        <div className={styles.announcement}>
          <span>Your <b>Best Gaming Experience</b></span>
        </div>
      </SplideSlide>
      <SplideSlide className={styles.slide}>
        <img src='https://fastly.picsum.photos/id/861/1920/1080.jpg?hmac=b2bwytCdkwyzZLP-EqUCh2r2-qkCY-dlkw0UtYyIElM'/>
        <div className={styles.announcement}>
          <span>Your <b>Best Gaming Experience</b></span>
        </div>
      </SplideSlide>
      <SplideSlide className={styles.slide}>
        <img src='https://fastly.picsum.photos/id/861/1920/1080.jpg?hmac=b2bwytCdkwyzZLP-EqUCh2r2-qkCY-dlkw0UtYyIElM'/>
        <div className={styles.announcement}>
          <span>Your <b>Best Gaming Experience</b></span>
        </div>
      </SplideSlide>
    </Splide>
  </div>
}

export default HomePageCarousel;