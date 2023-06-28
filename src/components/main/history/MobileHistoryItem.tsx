import styled from "styled-components";

interface IProps {
  link?: string;
  title: string;
  date: string;
}

const MobileHistoryItem = ({ link, title, date }: IProps) => {
  return (
    <MobileItemLayout>
      <HistoryMobileLeftBox>
        <HistoryMobileMonth>{date}</HistoryMobileMonth>
      </HistoryMobileLeftBox>
      <HistoryMobileRightBox>
        <HistoryMobileTitle>{title}</HistoryMobileTitle>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <HistoryMobileButton>관련 기사 보기</HistoryMobileButton>
          </a>
        )}
      </HistoryMobileRightBox>
    </MobileItemLayout>
  );
};

export default MobileHistoryItem;

const MobileItemLayout = styled.li`
  display: flex;
  color: rgb(51, 51, 51);

  :not(:last-child) > :nth-child(2) {
    border-bottom: 1px solid rgb(234, 234, 234);
  }
`;

const HistoryMobileLeftBox = styled.div`
  width: 50px;
  padding-top: 33px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const HistoryMobileRightBox = styled.div`
  width: 100%;
  padding: 30px 0px;
`;

const HistoryMobileMonth = styled.p`
  font-family: Roboto;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
`;

const HistoryMobileTitle = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const HistoryMobileButton = styled.button`
  margin-top: 10px;
  padding: 7px 8px;
  border: 1px solid rgb(188, 188, 188);
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  background: rgb(255, 255, 255);
  outline: none;
`;
