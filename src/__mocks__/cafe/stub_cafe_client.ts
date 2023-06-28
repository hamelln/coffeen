import { ICafe } from "types/data";

class StubCafeClient {
  cafeData: ICafe[] = [
    {
      _id: 1,
      address: "경기 시흥시 마유로418번길 10 롯데시네마 시화점",
      address2:
        "10, Mayu-ro 418beon-gil, Siheung-si, Gyeonggi-do, Republic of Korea",
      brand: "에스프레소 플래닛",
      desc: "정왕동 커피 맛집",
      sns: "https://www.instagram.com/espresso_planet_coffee/",
      link: "https://map.naver.com/v5/search/%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C%20%ED%94%8C%EB%9E%98%EB%8B%9B/place/98504029?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    },
    {
      _id: 2,
      address: "경기 시흥시 하중로136번길 24 1층",
      address2:
        "1st floor 24, Hajung-ro 136beon-gil, Siheung-si, Gyeonggi-do, Republic of Korea",
      brand: "서지연 로스터리",
      desc: "숨겨진 커피 고수",
      link: "https://map.naver.com/v5/search/%EC%84%9C%EC%A7%80%EC%97%B0%20%EB%A1%9C%EC%8A%A4%ED%84%B0%EB%A6%AC/place/21033754?c=15,0,0,0,dh&isCorrectAnswer=true",
    },
    {
      _id: 3,
      address: "강원 강릉시 창해로 348 나동1-3층",
      address2: "348, Changhae-ro, Gangneung-si, Gangwon-do, Republic of Korea",
      brand: "346 커피스토리",
      desc: "가격을 맛으로 증명하는 카페",
      sns: "https://www.instagram.com/346coffeestory._.roastery/",
      link: "https://map.naver.com/v5/search/346%20%EC%BB%A4%ED%94%BC%EC%8A%A4%ED%86%A0%EB%A6%AC/place/1470678304?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    },
    {
      _id: 4,
      address: "강원 강릉시 난설헌로 145",
      address2:
        "145, Nanseolheon-ro, Gangneung-si, Gangwon-do, Republic of Korea",
      brand: "테라로사 경포호수점",
      desc: "분위기 좋은 핫 플레이스",
      sns: "https://www.instagram.com/terarosacoffee/",
      link: "https://map.naver.com/v5/search/%ED%85%8C%EB%9D%BC%EB%A1%9C%EC%82%AC%20%EA%B2%BD%ED%8F%AC%ED%98%B8%EC%88%98%EC%A0%90/place/1097742719?c=14.44,0,0,0,dh&isCorrectAnswer=true",
    },
  ];

  async fetchItems(): Promise<ICafe[]> {
    return this.cafeData;
  }
}

export default StubCafeClient;
