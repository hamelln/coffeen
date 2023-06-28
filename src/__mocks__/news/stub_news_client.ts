import { TData, INews } from "types/data";

class StubNewsClient {
  newsData: TData<INews> = {
    "2020": [
      {
        _id: 1,
        author: "The First",
        date: "2020.12.30",
        link: "https://www.thefirstmedia.net/news/articleView.html?idxno=68584",
        title: "국민 캔커피 ‘레쓰비’, 연간 4억 캔 넘게 팔렸다",
      },
      {
        _id: 2,
        author: "서울경제",
        date: "2020.08.25",
        link: "https://www.sedaily.com/NewsView/1Z6S3KC675",
        title: "오늘부터 2.5단계 거리두기…커피 테이크아웃만 됩니다",
      },
      {
        _id: 3,
        author: "YNA",
        date: "2020.04.30",
        link: "https://www.yna.co.kr/view/AKR20200429078700030?input=1195m",
        title: "달콤커피, 고속도로 휴게소에 로봇카페 '비트' 첫 개장",
      },
      {
        _id: 4,
        author: "MNB",
        date: "2020.03.09",
        link: "https://mnb.moneys.co.kr/mnbview.php?no=2020022715598079547&ref=https%3A%2F%2Fsearch.naver.com",
        title: "스위스 커피머신 유라(JURA), 브랜드 UX관 오픈",
      },
      {
        _id: 5,
        author: "서울경제",
        date: "2020.01.04",
        link: "https://www.sedaily.com/NewsView/1YXUK6YWKF",
        title:
          "나이 불문 사랑하는 커피 아메리카노...'커피도 웰빙' 디카페인 40% 늘어",
      },
    ],
    "2021": [
      {
        _id: 1,
        author: "스포츠동아",
        date: "2021.11.13",
        link: "https://sports.donga.com/article/all/20211101/110017985/2",
        title: "원두 직접 고르며, 자신의 취향 찾는 ‘트루먼커피’",
      },
      {
        _id: 2,
        author: "MoneyS",
        date: "2021.09.10",
        link: "https://www.moneys.co.kr/news/mwView.php?no=2021093009178053874",
        title:
          "바리스타 챔피언이 내려준 커피 맛보세요 SPC 파스쿠찌, '에스프레소 바' 오픈",
      },
      {
        _id: 3,
        author: "MNB",
        date: "2021.07.27",
        link: "https://mnb.moneys.co.kr/mnbview.php?no=2021073008218016035&ref=https%3A%2F%2Fsearch.naver.com",
        title:
          "커피계의 애플, 인싸커피 '블루보틀' 제주도에 상륙… MZ세대 취향저격",
      },
      {
        _id: 4,
        author: "한경라이프",
        date: "2021.04.20",
        link: "https://www.hankyung.com/life/article/2021043072811",
        title: "고지혈증 있으면 드립커피, 간 나쁘면 아메리카노 드세요",
      },
      {
        _id: 5,
        author: "조선일보",
        date: "2021.03.11",
        link: "https://www.chosun.com/economy/economy_general/2021/03/30/WWCIPVJ4EJAHTOOI7HE2F5WZRA/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news",
        title: "커피 시럽인 줄 알고 ‘찍’… 앗! 손 소독제였어?",
      },
    ],
    "2022": [
      {
        _id: 1,
        author: "데일리안",
        date: "2022.12.30",
        link: "https://www.dailian.co.kr/news/view/1188192/?sc=Naver",
        title: "저가 커피 브랜드 늘면서 체질 약해지는 커피업계",
      },
      {
        _id: 2,
        author: "오마이뉴스",
        date: "2022.12.25",
        link: "https://omn.kr/222vl",
        title: "커피 머신이 없는 카페, 커피 맛에 자신 있습니다",
      },
      {
        _id: "20",
        author: "여성경제신문",
        date: "2022.12.16",
        link: "https://www.womaneconomy.co.kr/news/articleView.html?idxno=214525",
        title: "[청세] 커피산업 중심지 강릉의 핸드드립 커피 맛집 5곳",
      },
      {
        _id: "2aps",
        author: "매일경제",
        date: "2022.11.29",
        link: "https://www.mk.co.kr/news/business/10549775",
        title: "저렴하니까 사는 거라고?…저가커피 주목받는 이유는",
      },
      {
        _id: "2apcs12",
        author: "노컷뉴스",
        date: "2022.11.28",
        link: "https://www.nocutnews.co.kr/news/5856492",
        title:
          "국내 선교초기 역사담은 '개항커피' 재현…최초 서비스 커피는 아펜젤러 커피",
      },
      {
        _id: "2apcs",
        author: "매일경제",
        date: "2022.11.26",
        link: "https://mnb.moneys.co.kr/mnbview.php?no=2022112211165533682",
        title: "서울카페쇼, 2023 커피 산업 키워드는?",
      },
      {
        _id: "2a",
        author: "헬스조선",
        date: "2022.10.29",
        link: "https://health.chosun.com/site/data/html_dir/2022/10/28/2022102801917.html",
        title: "물 vs 우유 vs 커피, 아침 공복에는 뭘 마셔야 할까?",
      },
      {
        _id: "2aascnj",
        author: "매일경제",
        date: "2022.10.28",
        link: "https://www.mk.co.kr/economy/view/2022/958513",
        title: "커피와 TPO...카페인의 슬기로운 사용법",
      },
      {
        _id: "2b",
        author: "뉴스프리존",
        date: "2022.10.14",
        link: "http://www.newsfreezone.co.kr/news/articleView.html?idxno=416588",
        title: "이디야커피 '브라질 세하도' 핸드드립 커피 출시",
      },
      {
        _id: "2bsdmcj",
        author: "뉴시스",
        date: "2022.09.30",
        link: "https://newsis.com/view/?id=NISX20220930_0002032806&cID=10201&pID=10200#",
        title: "커피 즐기는 여성, 자궁내막암 위험 최대 24% 감소",
      },
      {
        _id: "2bsdmcjasdnj",
        author: "오마이뉴스",
        date: "2022.09.25",
        link: "https://omn.kr/20uuv",
        title: "호텔 바텐더 때문에... 우연히 대박난 달걀커피",
      },
      {
        _id: "2bsdmcjadnjsdnj",
        author: "인사이트",
        date: "2022.09.22",
        link: "https://www.insight.co.kr/news/412520",
        title: "'925 커피' 출시 3주년 기념 '925 데이' 개최하는 드롭탑",
      },
      {
        _id: "2bsdmcjmsnndnj",
        author: "한경경제",
        date: "2022.09.21",
        link: "https://www.hankyung.com/economy/article/202209216104i",
        title: "\"국산 원두는 무슨 맛일까\"…'청춘, 커피 페스티벌'서 체험하세요",
      },
      {
        _id: 3,
        author: "비즈팩트",
        date: "2022.08.14",
        link: "https://news.tf.co.kr/read/economy/1961752.htm",
        title: "현대제철 ESG경영 박차···버려지는 커피찌꺼기·반도체 재활용",
      },
      {
        _id: "asdm12j",
        author: "매일경제",
        date: "2022.07.31",
        link: "https://www.mk.co.kr/news/society/10405924",
        title: "원두 관세 내렸는데...커피값은 왜 오를까?",
      },
      {
        _id: "asdm12jasdnj",
        author: "뉴스웨이",
        date: "2022.06.29",
        link: "https://www.newsway.co.kr/news/view?tp=1&ud=2022062816451133521",
        title: "편의점 커피는 정말 스벅보다 맛있었을까",
      },
      {
        _id: 4,
        author: "이투데이",
        date: "2022.05.20",
        link: "https://www.etoday.co.kr/news/view/2138905",
        title: "잠 못드는 당신을 위해...대세된 디카페인 커피",
      },
      {
        _id: "asdmn128nabb",
        author: "연합뉴스",
        date: "2022.04.24",
        link: "https://www.yna.co.kr/view/AKR20220424017300017?input=1195m",
        title: "LGU+ 요금제 혜택으로 '일리 커피 구독팩' 출시",
      },
      {
        _id: 5,
        author: "뉴스원",
        date: "2022.03.29",
        link: "https://www.news1.kr/articles/?4634153",
        title: "블랙커피 충치 예방 효과있지만, 많이 자주 마셔도 안돼",
      },
      {
        _id: 6,
        author: "머니투데이",
        date: "2022.02.23",
        link: "https://news.mt.co.kr/mtview.php?no=2022022316032676226",
        title: "폴바셋, 9년만에 커피 가격 올린다…아메리카노 4300→4700원",
      },
      {
        _id: 7,
        author: "뉴시스",
        date: "2022.01.29",
        link: "https://newsis.com/view/?id=NISI20220125_0018372072",
        title: "스타벅스 오르자 잇따라 가격 인상 발표한 커피 전문점들",
      },
    ],
    "2023": [
      {
        _id: "982819cb-b2e9-4a0b-a937-01cb83383095",
        author: "시선뉴스",
        img: "/images/blue-bottle.jpeg",
        date: "2023.06.23",
        link: "https://sisunnews.co.kr/news/articleView.html?idxno=185699",
        title:
          "블루보틀커피코리아, ‘크래프트 인스턴트 커피: 에스프레소’ 한국 출시",
      },
      {
        _id: "0277cd5d-61e8-4eff-9780-1d8551372db8",
        author: "조선일보",
        img: "/images/maxim.jpg",
        date: "2023.06.22",
        link: "https://www.chosun.com/economy/market_trend/2023/06/21/V5A4Z5NJFJEENHFSCDQFE2QODM/",
        title: "커피 문화를 팝니다… ‘맥심플랜트’ 방문객 94만명 돌파",
      },
      {
        _id: "ce649ccb-b89b-4337-8da6-a1dae363f99e",
        author: "뉴시스",
        img: "/images/cs-coffee.jpeg",
        date: "2023.05.31",
        link: "https://newsis.com/view/?id=NISX20230531_0002322278&cID=13001&pID=13000",
        title: "우리가 업계 최저 편의점 커피 60원까지 나왔다",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b84",
        author: "헬스조선",
        date: "2023.04.28",
        link: "https://m.health.chosun.com/svc/news_view.html?contid=2023042801824",
        title: "커피에서 '이 맛' 난다면 품질 낮은 것… 좋은 커피는?",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b84as",
        author: "매일경제",
        date: "2023.03.31",
        link: "https://www.mk.co.kr/news/business/10700855",
        title: "요즘 커피엔 OO...잠실에 340평 전용 매장까지 생겼다는데",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b74",
        author: "연합뉴스",
        date: "2023.02.28",
        link: "https://www.yna.co.kr/view/AKR20230227132900003?input=1195m",
        title: "일회용컵 커피 매일 마시면 연 2천600개 미세플라스틱에 노출",
      },
      {
        _id: "a58158ba-0df3-400a-97ab-731e0ce10b82",
        author: "노컷뉴스",
        date: "2023.01.31",
        link: "https://www.nocutnews.co.kr/news/5887056",
        title: "코로나19에도 식지 않는 커피 열풍…작년 수입액 역대 최대",
      },
    ],
  };
  async fetchItems(): Promise<TData<INews>> {
    return this.newsData;
  }
}

export default StubNewsClient;
