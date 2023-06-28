import { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "../Styles";
import { TData, IHistory } from "types/data";
import HistoryItem from "./HistoryItem";
import HistoryButton from "./HistoryButton";
import { useSetRecoilState } from "recoil";
import { isVisibleState } from "@/atoms/index";

interface IProps {
  history: TData<IHistory>;
}

const HistoryList = ({ history }: IProps) => {
  const [limit, setLimit] = useState<number>(7);
  const setIsVisible = useSetRecoilState(isVisibleState);
  const historyYears: string[] = Object.keys(history).reverse();
  const MAX_LENGTH: number = historyYears.reduce(
    (sum, year) => sum + history[year].length,
    0
  );
  let historyCount: number = 0;

  const handleClick = () => {
    setLimit(limit + 5);
  };

  useEffect(() => {
    if (limit >= MAX_LENGTH) {
      setIsVisible(false);
    }
  }, [limit]);

  return (
    <S.DesktopViewLayout>
      <HistoryBox>
        {historyYears.map((year, idx) => {
          return historyCount < limit ? (
            <HistoryListBox key={year + idx}>
              <LeftBox>
                <HistoryYear>{year}</HistoryYear>
              </LeftBox>
              <RightBox>
                {history[year].map(
                  ({ date, title, link }: IHistory, index: number) => {
                    if (historyCount <= limit) historyCount++;
                    return historyCount > limit ? null : (
                      <li key={title}>
                        <HistoryItem date={date} title={title} link={link} />
                        {index < history[year].length - 1 ? (
                          <VerticalLine />
                        ) : null}
                      </li>
                    );
                  }
                )}
              </RightBox>
            </HistoryListBox>
          ) : null;
        })}
        <HistoryButton handleClick={handleClick} />
      </HistoryBox>
    </S.DesktopViewLayout>
  );
};

export default HistoryList;

const HistoryBox = styled.div`
  color: rgb(51, 51, 51);
  > div:not(:first-child) {
    margin-top: 50px;
  }
`;

const HistoryListBox = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  width: 100px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const HistoryYear = styled.p`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
`;

const RightBox = styled.div`
  width: 100%;
`;

const VerticalLine = styled.div`
  position: relative;
  left: 23px;
  width: 1px;
  height: 20px;
  background-color: rgb(211, 211, 211);
`;
