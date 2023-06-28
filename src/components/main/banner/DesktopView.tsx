import styled from "styled-components";
import * as S from "../Styles";

const DesktopView = () => {
  return (
    <Section>
      <S.DesktopViewLayout>
        <Container>
          <TextBox>
            <Text>주변에 어떤 카페들이 있나요?</Text>
          </TextBox>
        </Container>
      </S.DesktopViewLayout>
    </Section>
  );
};

export default DesktopView;

const Section = styled.section`
  width: 100%;

  @media screen and (max-width: 740px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background: url("images/coffeebackground.jpg") center center / cover no-repeat;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Text = styled.p`
  font-size: 26px;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 1.5;
`;
