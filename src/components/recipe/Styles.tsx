import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductItem = styled.li`
  display: flex;
  :not(:first-child) {
    border-top: 1px solid rgb(239, 239, 239);
  }

  padding: 120px 0px;

  @media screen and (max-width: 740px) {
    flex-flow: column;
    padding: 80px 0px;
  }
`;

const ProductLeftBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 38.33%;

  @media screen and (max-width: 740px) {
    flex-flow: row;
    flex: 1 1 0%;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }
`;

const ProductRightBox = styled.div`
  width: 61.67%;

  @media screen and (max-width: 740px) {
    flex: 1 1 0%;
    width: 100%;
  }
`;

const ProductLogoImage = styled.img`
  margin-top: 20px;
  height: 60px;

  @media screen and (max-width: 740px) {
    margin-top: 0px;
  }
`;

const ProductLogoText = styled.span`
  margin: 10px 0px 0px;
  font-size: 12px;
  font-weight: 700;
  color: rgb(51, 51, 51);

  @media screen and (max-width: 740px) {
    margin: 0px 0px 0px 10px;
  }
`;

const ProductCardBox = styled.div`
  color: rgb(51, 51, 51);
`;

const ProductCardTitle = styled.h2`
  margin: 0px 0px 20px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (max-width: 740px) {
    font-size: 20px;
  }
`;

const ProductCardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media screen and (max-width: 740px) {
    font-size: 14px;
  }
`;

const ProductCardAward = styled.div`
  margin-top: 36px;
  padding-left: 8px;
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 740px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

const ProductCardLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ProductCardSwiperBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px;
  cursor: pointer;

  @media screen and (max-width: 740px) {
    margin-top: 20px;
  }
`;

const StoreButtonWrapper = styled.a`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(239, 239, 239);
  color: rgb(51, 51, 51);
  cursor: pointer;

  :not(:last-child) {
    margin-right: 10px;
  }
`;

const StoreButtonIcon = styled.img`
  height: 20px;
`;

const StoreButtonLabel = styled.span`
  margin-left: 9px;
  font-size: 14px;
  line-height: 1.5;
`;

const SwiperContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const SwiperBox = styled.div`
  transition-duration: 0ms;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
`;

const SwiperItem = styled.figure`
  width: 740px;
  margin: 0 10px 0 0;
`;

const SwiperImg = styled.img`
  width: 100%;
  background: rgb(239, 239, 239);
  border-radius: 12px;

  @media screen and (max-width: 740px) {
    border-radius: 5px;
  }
`;

const SliderLayout = styled.div``;

const SwiperItemText = styled.figcaption`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;

  @media screen and (max-width: 740px) {
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -35px;

    > li {
      margin: 0 4px;
      width: 8px;
      height: 8px;

      > button {
        padding: 0;
      }
    }

    @media screen and (max-width: 740px) {
      bottom: -20px;
    }
  }

  :hover {
    & .slick-arrow {
      opacity: 1;
    }
  }

  .slick-arrow {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 0px;
    bottom: 0px;
    margin: auto;
    cursor: pointer;
    z-index: 1;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgb(255, 255, 255);
    filter: drop-shadow(rgba(0, 0, 0, 0.07) 0px 5px 30px);
    box-shadow: rgb(0 0 0 / 7%) 0px 0px 30px;
    transition: opacity 0.3s ease 0s;
    opacity: 0;

    @media screen and (max-width: 740px) {
      //? Next.js에선 강제로 display: block이 재삽입되므로 important
      display: none !important;
    }
  }

  .slick-prev {
    ::before {
      content: none;
    }
    background-image: url("/images/icons/arrow-left.svg");
  }

  .slick-next {
    ::before {
      content: none;
    }
    background-image: url("/images/icons/arrow-right.svg");
  }
`;

export {
  ProductCardAward,
  ProductCardBox,
  ProductCardDescription,
  ProductCardLinks,
  ProductCardSwiperBox,
  ProductCardTitle,
  ProductItem,
  ProductLeftBox,
  ProductLogoImage,
  ProductLogoText,
  ProductRightBox,
  StoreButtonIcon,
  StoreButtonLabel,
  StoreButtonWrapper,
  SwiperBox,
  SwiperContainer,
  SwiperImg,
  SwiperItem,
  SliderLayout,
  StyledSlider,
  SwiperItemText,
};
