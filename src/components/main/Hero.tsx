import styled from "styled-components";

const Hero = () => {
  return (
    <HeroLayout>
      <HeroBox>COFFEEN</HeroBox>
      <Arrow />
    </HeroLayout>
  );
};

export default Hero;

const HeroLayout = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 80px 0px 20px;
  @media screen and (max-width: 740px) {
    padding: 60px 0px 50px;
  }
`;

const HeroBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 80px;
  overflow-x: hidden;
`;

const Arrow = styled.div`
  flex-shrink: 0;
  position: sticky;
  bottom: 20px;
  width: 36px;
  height: 10px;
  background: url("/images/hero-arrow.svg") center center / contain no-repeat;
`;
