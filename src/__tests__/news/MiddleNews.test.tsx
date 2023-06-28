import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import StubNewsClient from "@/mocks/news/stub_news_client";
import NewsService from "@/mocks/news/news_service";
import { TData, INews } from "types/data";
import { UserEvent } from "@testing-library/user-event/dist/types/setup";
import MiddleNews from "@/components/press/news";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme/index";

async function renderComplexForm() {
  const newsService = new NewsService(new StubNewsClient());
  const news: TData<INews> = await newsService.fetchAvailableItems();
  // const Wrapper = ({ children }: StrictPropsWithChildren) => (
  //   <ThemeProvider theme={theme}>{children}</ThemeProvider>
  // );
  render(
    <ThemeProvider theme={theme}>
      <MiddleNews news={news} />
    </ThemeProvider>
  );
  const user: UserEvent = userEvent.setup();
  const button = () => screen.getByRole("button", { hidden: true });
  const tab = (year: string) => screen.getByRole("tab", { name: year });
  const tabs = () => screen.getAllByRole("tab");
  const dateElementsOfNews = () => screen.getAllByTestId("date");
  const newsOnScreen = () => screen.getAllByRole("link");
  const lengthOfNews = (year: number) => Object.keys(news[year]).length;
  const orderOfYear = (year: number) =>
    Object.keys(news).reverse().indexOf(String(year)) + 1;

  async function click(element: HTMLElement) {
    await user.click(element);
  }

  return {
    button,
    tab,
    tabs,
    dateElementsOfNews,
    newsOnScreen,
    lengthOfNews,
    click,
    orderOfYear,
  };
}

describe("MiddleNews 통합 테스트", () => {
  it("기사 10개 미만 시 버튼 비표시", async () => {
    const { click, tab, button } = await renderComplexForm();
    await click(tab("2020"));
    expect(button()).not.toBeVisible();
  });

  describe("2022 탭 클릭. 기사 29개", () => {
    let result: any;
    let tab: (year: string) => HTMLElement;
    let tabs: () => HTMLElement[];
    let dateElementsOfNews: () => HTMLElement[];
    let newsOnScreen: () => HTMLAnchorElement[];
    let lengthOfNews: (year: number) => number;
    let orderOfYear: (year: number) => number;
    let click: (element: HTMLElement) => void;
    let button: HTMLButtonElement;

    beforeEach(async () => {
      result = await renderComplexForm();
      tab = result.tab;
      tabs = result.tabs;
      dateElementsOfNews = result.dateElementsOfNews;
      newsOnScreen = result.newsOnScreen;
      lengthOfNews = result.lengthOfNews;
      orderOfYear = result.orderOfYear;
      click = result.click;
      button = result.button();
      await click(tab("2022"));
    });

    it("클릭된 2022년 탭만 밑줄 표시", async () => {
      tabs().forEach((tab) => {
        if (tab.textContent === "2022") {
          expect(tab).toHaveStyleRule(
            "border-bottom",
            "2px solid rgb(51,51,51)",
            {
              modifier: `:nth-child(${orderOfYear(2022)})`,
            }
          );
        } else {
          expect(tab).not.toHaveStyleRule("border-bottom");
        }
      });
    });

    it("기사가 10개를 초과해도 최초엔 10개만 렌더", async () => {
      expect(lengthOfNews(2022)).toBeGreaterThan(10);
      expect(newsOnScreen()).toHaveLength(10);
    });

    it("기사 10개 초과 시 더 보기 버튼 표시", async () => {
      expect(button).toBeVisible();
    });

    it("버튼 클릭당 기사 10개 추가", async () => {
      await click(button);
      expect(newsOnScreen()).toHaveLength(20);
    });

    it("더 가져올 기사 없으면 버튼 사라짐", async () => {
      await click(button);
      await click(button);
      await click(button);
      expect(button).not.toBeVisible();
    });
  });
});
