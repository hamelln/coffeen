import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ITheme } from "src/theme";
import styled from "styled-components";
import { IResponsive } from "types/data";
import * as S from "../Styles";

interface IProps {
  responsive: IResponsive[];
}

const ResponsiveDesktopView = ({ responsive }: IProps) => {
  const target = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(0);
  const PER: number = 600;
  let start: number = 600;

  const handleScroll = () => {
    pagination(start, window.scrollY, PER, setPage);
  };

  const pagination = (
    start: number,
    scrollY: number,
    PER: number,
    onUpdate: Dispatch<SetStateAction<number>>
  ) => {
    if (scrollY < start + PER) {
      onUpdate(0);
    } else if (scrollY >= start + PER && scrollY < start + PER * 2) {
      onUpdate(1);
    } else if (scrollY >= start + PER * 2 && scrollY < start + PER * 3) {
      onUpdate(2);
    } else {
      onUpdate(3);
    }
  };

  useEffect(() => {
    start = target.current!.offsetTop;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.DesktopViewLayout>
      <PerformanceBox>
        <PerformanceTrigger />
        <PerformanceArticle>
          <PerformanceLeftSide>
            <PerformanceTitle>숫자로 보는 커피</PerformanceTitle>
          </PerformanceLeftSide>
          <PerformanceRightSide>
            <PerformanceSwiperBox>
              <PerformanceSwiperLabelBox>
                <PerformanceSwiperLabelIcon icon={responsive[page].icon} />
                {responsive[page].title}
              </PerformanceSwiperLabelBox>
              <PerformanceSwiperInnerBox>
                <SwiperInitialized>
                  <SwiperList page={page}>
                    {responsive.map(({ _id, describe }) => {
                      return (
                        <PerformanceSwiperItem key={_id}>
                          {describe}
                        </PerformanceSwiperItem>
                      );
                    })}
                  </SwiperList>
                </SwiperInitialized>
              </PerformanceSwiperInnerBox>
            </PerformanceSwiperBox>
          </PerformanceRightSide>
        </PerformanceArticle>
        <Stretcher ref={target} />
      </PerformanceBox>
    </S.DesktopViewLayout>
  );
};

export default ResponsiveDesktopView;

const PerformanceBox = styled.div`
  position: relative;
  width: 100%;
  padding: 80px 90px 0px;
`;

const PerformanceTrigger = styled.div`
  position: absolute;
  top: -80px;
  left: 0px;
  width: 100%;
  height: 100vh;
`;

const PerformanceArticle = styled.article`
  position: sticky;
  top: 160px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  height: calc(100vh - 240px);
  border-radius: 20px;
  border: 1px solid rgb(234, 234, 234);
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
  overflow: hidden;
`;

const PerformanceLeftSide = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0%;
  width: 50%;
`;

const PerformanceTitle = styled.h2<{ theme: ITheme }>`
  margin: 0px;
  font-size: ${({ theme }) => theme.bigFonts.xs};
  font-weight: bold;
  line-height: 1.5;
  color: rgb(0, 0, 0);
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.bigFonts.s};
  }
`;

const PerformanceRightSide = styled.div`
  flex: 1 1 0%;
  width: 50%;
`;

const Stretcher = styled.div`
  height: 3000px;
`;

const PerformanceSwiperBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    10deg,
    rgb(150, 70, 0) 0%,
    rgb(150, 70, 0) 26.31%,
    rgb(150, 105, 0) 100.02%
  );
`;

const PerformanceSwiperInnerBox = styled.div`
  width: 100%;
  height: 100%;
`;

const PerformanceSwiperLabelBox = styled.div<{ theme: ITheme }>`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 10px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.1;
  font-weight: 500;
  color: rgb(255, 255, 255);
  gap: 6px;
`;

const PerformanceSwiperLabelIcon = styled.div<{ icon: string }>`
  width: 32px;
  height: 32px;
  margin-right: 2px;
  background: ${({ icon }) => `url(${icon}) center center / cover no-repeat;`};
`;

const SwiperInitialized = styled.div`
  position: relative;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const SwiperList = styled.ul<{ page: number }>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  box-sizing: content-box;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: ${({ page }) => `translateY(${-page * 100}%)`};
  transition-duration: 300ms;
`;

const PerformanceSwiperItem = styled.li<{ theme: ITheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 80px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: rgb(255, 255, 255);
  flex: 1 0 100%;
  transition-duration: 300;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.bigFonts.s};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.bigFonts.m};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.bigFonts.l};
  }
`;
