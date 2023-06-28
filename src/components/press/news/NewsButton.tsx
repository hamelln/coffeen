import styled from "styled-components";

interface IProps {
  isVisible: boolean;
  handleLimit: () => void;
}

const NewsButton = ({ isVisible, handleLimit }: IProps) => {
  return (
    <ButtonBox isVisible={isVisible}>
      <MoreContent onClick={handleLimit}>
        <MoreText>더 보기</MoreText>
        <MoreArrow />
      </MoreContent>
    </ButtonBox>
  );
};

export default NewsButton;

const ButtonBox = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  @media screen and (max-width: 740px) {
    padding-top: 20px;
  }
`;

const MoreContent = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 24px;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: rgb(51, 51, 51);
  background: rgb(249, 249, 249);

  @media screen and (max-width: 740px) {
    padding: 0px;
    border: 0px;
    font-size: 14px;
    line-height: 1.42;
    background: transparent;
  }
`;

const MoreText = styled.span``;

const MoreArrow = styled.div`
  margin-left: 8px;
  width: 15px;
  height: 15px;
  background: url("/images/arrow-bottom.png") center center / contain no-repeat;

  @media screen and (max-width: 740px) {
    width: 12px;
    height: 12px;
    margin-left: 6px;
  }
`;
