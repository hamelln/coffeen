import styled from "styled-components";

const MobileView = () => {
  return (
    <MobileViewLayout>
      <Container>
        <Image />
        <Text>주변에 어떤 카페들이 있나요?</Text>
      </Container>
    </MobileViewLayout>
  );
};

export default MobileView;

const MobileViewLayout = styled.section`
  display: none;

  @media screen and (max-width: 740px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 335px;
  margin-bottom: 20px;
  background: url("/images/coffeebackground.jpg") center center / cover
    no-repeat;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.04em;
  color: rgb(31, 31, 31);
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
