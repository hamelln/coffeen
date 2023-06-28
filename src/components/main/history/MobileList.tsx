import { useState } from "react";
import styled from "styled-components";
import { TMouse } from "types/mouse";
import { TData, IHistory } from "types/data";
import MobileHistoryItem from "./MobileHistoryItem";

interface IProps {
  history: TData<IHistory>;
}

const MobileList = ({ history }: IProps) => {
  const tabs: string[] = Object.keys(history).reverse();
  const [active, setActive] = useState<number>(1);
  const year: string = tabs[active - 1];

  const toggleTab = (event: TMouse) => {
    const tab: string = event.currentTarget.textContent!;
    const activeIndex: number = tabs.indexOf(tab) + 1;
    if (activeIndex !== active) {
      setActive(activeIndex);
    }
  };

  return (
    <MobileViewLayout aria-label="mobile-section">
      <TabsBox>
        <TabsList>
          {tabs.map((tab, i) => {
            return (
              <TabsItem key={i} role="tab" active={active} onClick={toggleTab}>
                {tab}
              </TabsItem>
            );
          })}
        </TabsList>
      </TabsBox>
      {history[year].map(({ _id, date, title, link }: IHistory) => {
        return (
          <MobileHistoryItem key={_id} link={link} title={title} date={date} />
        );
      })}
    </MobileViewLayout>
  );
};

export default MobileList;

const MobileViewLayout = styled.section`
  display: none;

  @media screen and (max-width: 740px) {
    display: block;
  }
`;

const TabsBox = styled.div`
  @media screen and (max-width: 740px) {
    display: block;
    margin: 0px -20px;
  }

  > div:not(:last-child) {
    border-bottom: 1px solid rgb(234, 234, 234);
  }
`;

const TabsList = styled.ul`
  display: flex;
  border-bottom: 1px solid rgb(234, 234, 234);

  @media screen and (max-width: 740px) {
    padding-left: 20px;
  }
`;

const TabsItem = styled.li<{ active: number }>`
  padding: 20px 0px;
  font-size: 22px;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
  color: rgb(211, 211, 211);
  :nth-child(${({ active }) => active}) {
    color: rgb(51, 51, 51);
    border-bottom: 2px solid rgb(51, 51, 51);
  }

  :not(:first-child) {
    margin-left: 20px;
  }
`;
