import styled from "styled-components";
import { TData, IHistory } from "types/data";
import HistoryList from "./HistoryList";
import MobileList from "./MobileList";

interface IProps {
  history: TData<IHistory>;
}

const History = ({ history }: IProps) => {
  return (
    <HistoryLayout>
      <SectionContainer>
        <HistoryTitle>커피 소식</HistoryTitle>
        <HistoryList history={history} />
        <MobileList history={history} />
      </SectionContainer>
    </HistoryLayout>
  );
};

export default History;

const HistoryLayout = styled.section`
  padding: 250px 90px;

  @media screen and (max-width: 740px) {
    padding: 120px 20px;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

const HistoryTitle = styled.h2`
  margin: 0px 0px 90px;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.04em;
`;
