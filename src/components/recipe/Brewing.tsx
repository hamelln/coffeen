import * as S from "./Styles";
import { ICarousel } from "types/data";
import Carousel from "./Carousel";

interface IProps {
  carousel: ICarousel[];
}

const Brewing = ({ carousel }: IProps) => {
  return (
    <S.ProductItem>
      <S.ProductLeftBox>
        <S.ProductLogoImage src="/images/icons/brewing.svg" />
        <S.ProductLogoText>깔끔하고 향긋한 진수</S.ProductLogoText>
      </S.ProductLeftBox>
      <S.ProductRightBox>
        <S.ProductCardBox>
          <S.ProductCardTitle>
            브루잉 커피 <br />
          </S.ProductCardTitle>
          <S.ProductCardDescription>
            커피를 내리는 전통적인 방법 <br />
            종이 필터로 커피 기름을 거르기 때문에 깔끔한 맛이 특징 <br />
            비교적 쉽기 때문에 도구만 있다면 입문하기 좋다
          </S.ProductCardDescription>
          <S.ProductCardLinks>
            <S.StoreButtonWrapper
              href="https://youtu.be/KDbH7OyYu_U"
              target="blank"
            >
              <S.StoreButtonIcon src="/images/icons/youtube.png" />
              <S.StoreButtonLabel>유튜브</S.StoreButtonLabel>
            </S.StoreButtonWrapper>
          </S.ProductCardLinks>
          <S.ProductCardSwiperBox>
            <Carousel carousel={carousel} />
          </S.ProductCardSwiperBox>
        </S.ProductCardBox>
      </S.ProductRightBox>
    </S.ProductItem>
  );
};

export default Brewing;
