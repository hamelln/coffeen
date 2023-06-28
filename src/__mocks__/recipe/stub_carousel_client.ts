import { TData, ICarousel } from "types/data";

class StubCarouselClient {
  carouselData: TData<ICarousel> = {
    brewing: [
      {
        _id: 1,
        img: "/images/recipe/brewing-recipe-1.png",
        text: "뜨거운 물로 필터를 적신다(린싱)",
      },
      {
        _id: 2,
        img: "/images/recipe/brewing-recipe-2.png",
        text: "원두 23g을 넣는다",
      },
      {
        _id: 3,
        img: "/images/recipe/brewing-recipe-3.png",
        text: "물 46g 붓고 고루 저어 적시며 40초간 뜸들인다",
      },
      {
        _id: 4,
        img: "/images/recipe/brewing-recipe-4.png",
        text: "가장 자리로 뜨거운 물 260ml를 붓는다",
      },
      {
        _id: 4,
        img: "/images/recipe/brewing-recipe-5.png",
        text: "2분 쯤에 마무리하고 마신다",
      },
    ],
    french: [
      {
        _id: 1,
        img: "/images/recipe/french-press-1.png",
        text: "프렌치 프레스 용으로 갈린 원두를 준비",
      },
      {
        _id: 2,
        img: "/images/recipe/french-press-2.png",
        text: "물 180ml 당 원두 10g",
      },
      {
        _id: 3,
        img: "/images/recipe/french-press-3.png",
        text: "프렌치 프레스에 원두를 넣는다",
      },
      {
        _id: 4,
        img: "/images/recipe/french-press-4.png",
        text: "93도의 뜨거운 물을 붓고 플런저를 올린다",
      },
      {
        _id: 5,
        img: "/images/recipe/french-press-5.png",
        text: "4분 후 플런저를 천천히 내리고 잔에 따른다",
      },
    ],
  };

  async fetchItems(): Promise<TData<ICarousel>> {
    return this.carouselData;
  }
}

export default StubCarouselClient;
