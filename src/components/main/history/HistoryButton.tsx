import { useRecoilValue } from "recoil";
import { isVisibleState } from "@/atoms/index";
import styled from "styled-components";

interface IProps {
  handleClick: () => void;
}

const HistoryButton = ({ handleClick }: IProps) => {
  const isVisible = useRecoilValue(isVisibleState);

  return (
    <ButtonBox isVisible={isVisible}>
      <MoreContent onClick={handleClick}>
        <MoreText>더 보기</MoreText>
        <MoreArrow />
      </MoreContent>
    </ButtonBox>
  );
};

export default HistoryButton;

const ButtonBox = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin-top: 50px;
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
`;

const MoreText = styled.span``;

const MoreArrow = styled.div`
  margin-left: 8px;
  width: 15px;
  height: 15px;
  background: url("/images/arrow-bottom.png") center center / contain no-repeat;
`;
