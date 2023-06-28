import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryList from "@/components/main/history/HistoryList";
import StubHistoryClient from "@/mocks/history/stub_history_client";
import HistoryService from "@/mocks/history/history_service";
import { TData, IHistory } from "types/data";
import { RecoilRoot } from "recoil";

async function renderComplexForm() {
  const historyService = new HistoryService(new StubHistoryClient());
  const history: TData<IHistory> = await historyService.fetchAvailableItems();

  render(
    <RecoilRoot>
      <HistoryList history={history} />
    </RecoilRoot>
  );
  const user = userEvent.setup();
  const button: () => HTMLButtonElement = () =>
    screen.getByRole("button", { name: "더 보기" });
  const list = () => screen.getAllByRole("listitem");

  async function click(button: HTMLButtonElement) {
    await user.click(button);
  }

  return { button, list, click };
}

describe("버튼 테스트.", () => {
  it("최초 7개 -> 클릭당 5 증가", async () => {
    const { click, button, list } = await renderComplexForm();
    expect(list()).toHaveLength(7);
    await click(button());
    expect(list()).toHaveLength(12);
    await click(button());
    expect(list()).toHaveLength(17);
  });
});
