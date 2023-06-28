import { TData, IHistory } from "types/data";

class StubHistoryClient {
  historyData: TData<IHistory> = {
    "2020": [
      {
        _id: 1,
        date: "12",
        link: "https://www.thefirstmedia.net/news/articleView.html?idxno=68584",
        title: "국민 캔커피 ‘레쓰비’, 연간 4억 캔 넘게 팔렸다",
      },
      {
        _id: 2,
        date: "08",
        link: "https://www.sedaily.com/NewsView/1Z6S3KC675",
        title: "오늘부터 2.5단계 거리두기…커피 테이크아웃만 됩니다",
      },
      {
        _id: 3,
        date: "04",
        link: "https://www.yna.co.kr/view/AKR20200429078700030?input=1195m",
        title: "달콤커피, 고속도로 휴게소에 로봇카페 '비트' 첫 개장",
      },
      {
        _id: 4,
        date: "03",
        link: "https://mnb.moneys.co.kr/mnbview.php?no=2020022715598079547&ref=https%3A%2F%2Fsearch.naver.com",
        title: "스위스 커피머신 유라(JURA), 브랜드 UX관 오픈",
      },
      {
        _id: 5,
        date: "01",
        link: "https://www.sedaily.com/NewsView/1YXUK6YWKF",
        title:
          "나이 불문 사랑하는 커피 아메리카노...'커피도 웰빙' 디카페인 40% 늘어",
      },
    ],
    "2021": [
      {
        _id: 1,
        date: "11",
        link: "https://sports.donga.com/article/all/20211101/110017985/2",
        title: "원두 직접 고르며, 자신의 취향 찾는 ‘트루먼커피’",
      },
      {
        _id: 2,
        date: "09",
        link: "https://www.moneys.co.kr/news/mwView.php?no=2021093009178053874",
        title:
          "바리스타 챔피언이 내려준 커피 맛보세요 SPC 파스쿠찌, '에스프레소 바' 오픈",
      },
      {
        _id: 3,
        date: "07",
        link: "https://mnb.moneys.co.kr/mnbview.php?no=2021073008218016035&ref=https%3A%2F%2Fsearch.naver.com",
        title:
          "커피계의 애플, 인싸커피 '블루보틀' 제주도에 상륙… MZ세대 취향저격",
      },
      {
        _id: 4,
        date: "04",
        link: "https://www.hankyung.com/life/article/2021043072811",
        title: "고지혈증 있으면 드립커피, 간 나쁘면 아메리카노 드세요",
      },
      {
        _id: 5,
        date: "03",
        link: "https://www.chosun.com/economy/economy_general/2021/03/30/WWCIPVJ4EJAHTOOI7HE2F5WZRA/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news",
        title: "커피 시럽인 줄 알고 ‘찍’… 앗! 손 소독제였어?",
      },
    ],
    "2022": [
      {
        _id: 1,
        date: "12",
        link: "https://www.dailian.co.kr/news/view/1188192/?sc=Naver",
        title: "저가 커피 브랜드 늘면서 체질 약해지는 커피업계",
      },
      {
        _id: 2,
        date: "10",
        link: "https://health.chosun.com/site/data/html_dir/2022/10/28/2022102801917.html",
        title: "물 vs 우유 vs 커피, 아침 공복에는 뭘 마셔야 할까?",
      },
      {
        _id: 3,
        date: "08",
        link: "https://news.tf.co.kr/read/economy/1961752.htm",
        title: "현대제철 ESG경영 박차···버려지는 커피찌꺼기·반도체 재활용",
      },
      {
        _id: 4,
        date: "05",
        link: "https://www.etoday.co.kr/news/view/2138905",
        title: "잠 못드는 당신을 위해...대세된 디카페인 커피",
      },
      {
        _id: 5,
        date: "03",
        link: "https://www.news1.kr/articles/?4634153",
        title: "블랙커피 충치 예방 효과있지만, 많이 자주 마셔도 안돼",
      },
    ],
    "2023": [
      {
        _id: "982819cb-b2e9-4a0b-a937-01cb83383095",
        date: "06",
        link: "https://www.chosun.com/economy/real_estate/2023/06/22/IHKBEOHFWZFDXJGGSRL7AJGZP4/",
        title:
          "블루보틀커피코리아, ‘크래프트 인스턴트 커피: 에스프레소’ 한국 출시",
      },
      {
        _id: "0277cd5d-61e8-4eff-9780-1d8551372db8",
        date: "06",
        link: "https://www.chosun.com/economy/market_trend/2023/06/21/V5A4Z5NJFJEENHFSCDQFE2QODM/",
        title: "커피 문화를 팝니다… ‘맥심플랜트’ 방문객 94만명 돌파",
      },
      {
        _id: "ce649ccb-b89b-4337-8da6-a1dae363f99e",
        date: "05",
        link: "https://newsis.com/view/?id=NISX20230531_0002322278&cID=13001&pID=13000",
        title: "우리가 업계 최저 편의점 커피 60원까지 나왔다",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b84",
        date: "04",
        link: "https://m.health.chosun.com/svc/news_view.html?contid=2023042801824",
        title: "커피에서 '이 맛' 난다면 품질 낮은 것… 좋은 커피는?",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b84as",
        date: "03",
        link: "https://www.mk.co.kr/news/business/10700855",
        title: "요즘 커피엔 OO...잠실에 340평 전용 매장까지 생겼다는데",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b74",
        date: "02",
        link: "https://www.yna.co.kr/view/AKR20230227132900003?input=1195m",
        title: "일회용컵 커피 매일 마시면 연 2천600개 미세플라스틱에 노출",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b82",
        date: "01",
        link: "https://www.nocutnews.co.kr/news/5887056",
        title: "코로나19에도 식지 않는 커피 열풍…작년 수입액 역대 최대",
      },
    ],
  };

  async fetchItems(): Promise<TData<IHistory>> {
    return this.historyData;
  }
}

export default StubHistoryClient;
