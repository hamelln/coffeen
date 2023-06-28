import { render, screen } from "@testing-library/react";
import { ICafe } from "types/data";
import Cafe from "@/components/cafe";
import StubCafeClient from "@/mocks/cafe/stub_cafe_client";
import CafeService from "@/mocks/cafe/cafe_service";

describe("Contact 테스트", () => {
  let cafe: ICafe[];
  let cafeService: CafeService;

  beforeEach(async () => {
    cafeService = new CafeService(new StubCafeClient());
    cafe = await cafeService.fetchAvailableItems();
    render(<Cafe cafe={cafe} />);
  });

  it("렌더 시 divider와 listItem의 갯수가 하나 차이나는가?", () => {
    const dividers = screen.getAllByTestId("divider");
    const listItems = screen.getAllByRole("listitem");
    expect(dividers).toHaveLength(listItems.length - 1);
  });
});
