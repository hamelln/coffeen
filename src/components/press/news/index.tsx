import { useEffect, useState } from "react";
import styled from "styled-components";
import { TData, INews } from "types/data";
import { TMouse } from "types/mouse";
import NewsButton from "./NewsButton";
import NewsItem from "./NewsItem";

interface IProps {
  news: TData<INews>;
}

const News = ({ news }: IProps) => {
  const [active, setActive] = useState<number>(1);
  const [newsLimit, setNewsLimit] = useState<number>(11);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const tabs: string[] = Object.keys(news).reverse();
  const indexOfTab: number = active - 1;
  let newsOfTab: INews[] = news[tabs[indexOfTab]];
  let newsCount: number = 0;

  const toggleTab = (event: TMouse) => {
    const tab: string = event.currentTarget.textContent!;
    const activeIndex: number = tabs.indexOf(tab) + 1;
    if (activeIndex !== active) {
      setActive(activeIndex);
    }
  };

  const handleLimit = () => {
    setNewsLimit(newsLimit + 10);
  };

  useEffect(() => {
    setNewsLimit(11);
  }, [active]);

  useEffect(() => {
    if (newsOfTab.length < newsLimit) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [newsLimit, active]);

  return (
    <NewsLayout>
      <SectionTitle>뉴스 아카이브</SectionTitle>
      <TabsBox>
        <TabsList role="tablist">
          {tabs.map((tab) => (
            <TabsItem key={tab} role="tab" active={active} onClick={toggleTab}>
              {tab}
            </TabsItem>
          ))}
        </TabsList>
      </TabsBox>
      <NewsList>
        {newsOfTab.map(({ _id, author, date, link, title }: INews) => {
          if (++newsCount < newsLimit) {
            return (
              <NewsItem
                key={_id}
                _id={_id}
                link={link}
                title={title}
                author={author}
                date={date}
              />
            );
          }
        })}
      </NewsList>
      <NewsButton isVisible={isVisible} handleLimit={handleLimit} />
    </NewsLayout>
  );
};

const NewsLayout = styled.section`
  padding: 120px 0px;

  @media screen and (max-width: 740px) {
    padding: 80px 0px;
  }
`;

const SectionTitle = styled.h1`
  margin: 0px 0px 20px;
  font-size: 30px;
`;

const TabsBox = styled.div`
  display: inline-block;

  @media screen and (max-width: 740px) {
    display: block;
    margin: 0px -20px;
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

const NewsList = styled.ul``;

export default News;
