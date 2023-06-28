import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Investors = () => {
  const [animated, setAnimated] = useState<boolean>(false);
  const target = useRef(null);

  //? InvestorGroup이 최초로 뷰포트에 들어오면 setAnimated하는 콜백
  const onIntersect: IntersectionObserverCallback = async (
    [{ isIntersecting, target }],
    observer
  ) => {
    if (isIntersecting) {
      observer.unobserve(target);
      setAnimated(true);
    }
  };

  useEffect(() => {
    if (animated) return;
    let observer: IntersectionObserver;
    if (target.current) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  });

  return (
    <InvestorsLayout>
      <Container>
        <LeftSide>
          <Title>커피 프랜차이즈</Title>
        </LeftSide>
        <RightSide>
          <InvestorGroup ref={target}>
            <SoftBank animated={animated} />
            <LegendCapital animated={animated} />
            <MegaInvestment animated={animated} />
            <MiraeAsset animated={animated} />
            <SamsungVentures animated={animated} />
            <Smilegate animated={animated} />
            <Intervest animated={animated} />
            <GgvCapital animated={animated} />
            <YellowDog animated={animated} />
            <Kdb animated={animated} />
            <GoodWaterCapital animated={animated} />
            <Google animated={animated} />
          </InvestorGroup>
        </RightSide>
      </Container>
    </InvestorsLayout>
  );
};

export default Investors;

const InvestorsLayout = styled.section`
  padding: 250px 90px 200px;

  @media screen and (max-width: 740px) {
    padding: 120px 20px 100px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  @media screen and (max-width: 740px) {
    flex-flow: column;
  }
`;

const LeftSide = styled.div`
  flex: 3.5 1 0%;
`;
const RightSide = styled.div`
  flex: 6.5 1 0%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  color: rgb(0, 0, 0);
  @media screen and (max-width: 740px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const InvestorGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 230px));
  justify-content: space-between;
  row-gap: 45px;
  width: 100%;

  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 0px;
  }
`;

const InvestorBox = styled.div<{ animated: boolean }>`
  height: 120px;
  margin-left: -1px;
  border: 1px solid rgb(234, 234, 234);
  background-position: center center;
  background-repeat: no-repeat;
  opacity: ${({ animated }) => (animated ? "1" : "0")};
  transform: ${({ animated }) => (animated ? "none" : "translateY(60px)")};
  transition-property: opacity transform;
  transition-duration: 1s;
  transition-timing-function: ease;

  @media screen and (max-width: 740px) {
    margin-bottom: -1px;
  }

  @keyframes anima {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const SoftBank = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/gamsungcoffee.webp");
  background-size: 40%;
  transition-delay: 0;
`;

const LegendCapital = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/megacoffee.svg");
  background-size: 70%;
  transition-delay: 100ms;
`;

const MegaInvestment = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/theventi.webp");
  background-size: 70%;
  transition-delay: 200ms;
`;

const MiraeAsset = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/coban.webp");
  background-size: 80%;
  transition-delay: 300ms;
`;

const SamsungVentures = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/backdabang.webp");
  background-size: 70%;
  transition-delay: 400ms;
`;

const Smilegate = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/percentcoffee.webp");
  background-size: 30%;
  transition-delay: 500ms;
`;

const Intervest = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/hasamdongcoffee.png");
  background-size: 40%;
  transition-delay: 600ms;
`;

const GgvCapital = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/theliter.webp");
  background-size: 40%;
  transition-delay: 700ms;
`;

const YellowDog = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/coffeebeen.svg");
  background-size: 40%;
  transition-delay: 800ms;
`;

const Kdb = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/bluebottle.svg");
  background-size: 10%;
  transition-delay: 900ms;
`;

const GoodWaterCapital = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/ediya.svg");
  background-size: 40%;
  transition-delay: 1s;
`;

const Google = styled(InvestorBox)<{ animated: boolean }>`
  background-image: url("/images/franchise/pascucci.svg");
  background-size: 40%;
  transition-delay: 1100ms;
`;
