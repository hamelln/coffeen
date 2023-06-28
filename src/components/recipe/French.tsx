import * as S from "./Styles";
import { ICarousel } from "types/data";
import Carousel from "./Carousel";

interface IProps {
  carousel: ICarousel[];
}

const French = ({ carousel }: IProps) => {
  return (
    <S.ProductItem>
      <S.ProductLeftBox>
        <S.ProductLogoImage src="/images/icons/french-press.svg" />
        <S.ProductLogoText>가장 쉬운 커피</S.ProductLogoText>
      </S.ProductLeftBox>
      <S.ProductRightBox>
        <S.ProductCardBox>
          <S.ProductCardTitle>프렌치 프레스 커피</S.ProductCardTitle>
          <S.ProductCardDescription>
            원초적으로 커피를 우리는 방법 <br />
            필요한 도구는 프렌치 프레스 뿐이고 방법도 간단하다 <br />
            커피 미분이 밑에 가라앉기 때문에 텁텁함이 있다
          </S.ProductCardDescription>
          <S.ProductCardLinks>
            <S.StoreButtonWrapper href="https://youtu.be/qNIngFRL-Z0">
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

export default French;
