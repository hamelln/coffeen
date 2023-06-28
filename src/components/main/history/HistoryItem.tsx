import styled from "styled-components";

interface IProps {
  link?: string;
  title: string;
  date: string;
}

const HistoryItem = ({ date, title, link }: IProps) => {
  return (
    <HistoryItemLayout>
      <HistoryMonth>{date}</HistoryMonth>
      <HistoryContent>
        {title}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <HistoryButton>관련 기사 보기</HistoryButton>
          </a>
        )}
      </HistoryContent>
    </HistoryItemLayout>
  );
};

export default HistoryItem;

const HistoryItemLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const HistoryMonth = styled.div`
  position: relative;
  width: 100px;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
`;

const HistoryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
  padding: 0px 30px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 6px;
  font-size: 20px;
  letter-spacing: -0.02em;
`;

const HistoryButton = styled.button`
  padding: 7px 8px;
  border: 1px solid rgb(188, 188, 188);
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  background: rgb(255, 255, 255);
  outline: none;
  cursor: pointer;
`;
