import "../../__mocks__/matchMedia";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Carousel from "@/components/recipe/Carousel";
import StubCarouselClient from "@/mocks/recipe/stub_carousel_client";
import CarouselService from "@/mocks/recipe/carousel_service";

async function renderComplexForm() {
  const carouselService = new CarouselService(new StubCarouselClient());
  const carousel = await carouselService.fetchAvailableItems("brewing");
  const LENGTH = carousel.length;
  render(<Carousel carousel={carousel} />);
  const user = userEvent.setup();
  const figure = () => screen.getByRole("figure");
  const prevButton: () => HTMLButtonElement = () =>
    screen.getByRole("button", { name: "Previous" });
  const nextButton: () => HTMLButtonElement = () =>
    screen.getByRole("button", { name: "Next" });
  const nthText = (n: number) => carousel.at(n % LENGTH)!.text!;

  async function click(button: HTMLButtonElement) {
    await user.click(button);
  }

  return {
    nthText,
    figure,
    prevButton,
    nextButton,
    click,
  };
}

describe("캐러셀 테스트", () => {
  it("기본", async () => {
    const { nthText, figure } = await renderComplexForm();
    expect(figure()).toHaveTextContent(nthText(0));
  });

  it("prev 버튼 클릭", async () => {
    const { nthText, figure, prevButton, click } = await renderComplexForm();
    await click(prevButton());
    expect(figure()).toHaveTextContent(nthText(-1));
  });

  it("next 버튼 클릭", async () => {
    const { nthText, nextButton, figure, click } = await renderComplexForm();
    await click(nextButton());
    expect(figure()).toHaveTextContent(nthText(1));
  });
});
