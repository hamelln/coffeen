import { ICarousel } from "types/data";
import * as S from "./Styles";
interface IProps {
  carousel: ICarousel[];
}

const Carousel = ({ carousel }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
  };

  return (
    <S.SliderLayout>
      <S.StyledSlider {...settings}>
        {carousel.map(({ _id, img, text }: ICarousel) => {
          return (
            <S.SwiperItem key={_id}>
              <S.SwiperImg src={img} />
              {text ? <S.SwiperItemText>{text}</S.SwiperItemText> : null}
            </S.SwiperItem>
          );
        })}
      </S.StyledSlider>
    </S.SliderLayout>
  );
};

export default Carousel;
