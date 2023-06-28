import { ICarousel } from "types/data";
import StubCarouselClient from "./stub_carousel_client";

class CarouselService {
  carouselClient: StubCarouselClient;
  constructor(carouselClient: StubCarouselClient) {
    this.carouselClient = carouselClient;
  }

  async fetchAvailableItems(country: string): Promise<ICarousel[]> {
    return this.carouselClient
      .fetchItems()
      .then((carouselData) => carouselData[country]);
  }
}

export default CarouselService;
