'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@/components/ThemeProvider';
import { clientSideFunction } from '@/utils/client-utils';
// import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
  console.log('Client Route Rendered');
  const theme = useTheme();
  const result = clientSideFunction();
  const settings = {
    dots: true,
  };

  return (
    <>
      <h1 style={{color: theme.colors.primary}}>Client route</h1>
      <p>{result}</p>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/250" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
        </Slider>
      </div>
    </>
  );
}
