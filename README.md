# COFFEEN

- 커피 소개 사이트

## 1. 소개

---

- 기술 스택

| 구성     | 기술 스택                                     |
| -------- | --------------------------------------------- |
| Frontend | React, Next.js, TypeScript, Styled-Components |
| Database | Firebase                                      |
| Test     | Jest, React-Testing-Library                   |

- 개요  
  커피에 관심 있는 사람에게 소개하는 사이트

### 💡문제 및 해결

---

**[ 문제와 해결 ]** 

- 잘못된 데이터 fetch 설계  
    
    원래는 부모가 모든 데이터를 받아서 상속하는 형태였음  
    
    - 장점  
    서버 요청 횟수 ↓  
    - 단점  
    부모-자식 결속 ↑, 데이터 over-fetching  
    - 발생한 문제  
    처음에 자식 페이지부터 조회하니 페이지 에러가 났다  
    - 원인  
    부모에게 데이터 상속받기 전에 페이지를 띄우려 함 + 데이터를 받았다는 전제로 컴포넌트 작성  
    - 해결  
    각 컴포넌트마다 데이터를 가져오자  
    그러나 각 페이지마다 useEffect로 길게 코드를 작성하고 싶지 않음  
    → 쉽고, fetch, 로딩, 에러 핸들링이 간결한 SWR 사용  
    - 결과  
    에러, 로딩, 데이터 fetching 코드 간단히 구현, 렌더 속도 향상  
- SWR을 적용해도 기나긴 페이지 이동  
    - 문제  
    페이지 이동 시 로딩은 1초 미만이지만 “정적 페이지”임을 감안하면 느리다  
    - 원인  
    매번 데이터 요청하기 때문  
    - 해결  
    정적 컨텐츠, 정적 UI니까 미리 생성해두자  
    → Next.js를 써서 SSG 방식으로 빌드 때 페이지를 만들고 제공  
    - 결과  
    페이지 로드 시간이 거의 없을 정도로 빨라짐  
- 말썽 많은 페이지네이션?  
    - 과도한 리렌더링  
        - 원인: 스크롤 변화로 페이지네이션 구현하려고 scrollY를 state로 썼기 때문  
        - 해결: scrollY를 일반 변수로 변경, 특정 scrollY에서 페이지 state 변경으로 렌더  
    - 페이지네이션 안 될 때가 있다?  
    `const START: number = containerRef?.current...`  
        - 원인: ref는 할당 전 null이 초기값 → ref 참조하기 전에 렌더 시 오류  
        - 해결: IntersectionObserver 적용  
    - IntersectionObserver를 적용하니 애매한 위치에서 페이지네이션  
        - 해결: 스크롤 높이로 다시 적용, ref값이 참조되면 재할당하도록 변경.  
    - 새로 고침하면 스크롤은 4페이지 높이인데 화면은 1페이지  
        - 원인: 스크롤 이벤트만 페이지네이션 실행  
        - 해결: 리렌더 이벤트에도 페이지네이션하도록 변경(useEffect)  
    - 새로 고침하면 1→4페이지로 급격하게 페이지네이션  
        - 원인: 리렌더 시 300ms로 애니메이션 + useEffect는 비동기라서 화면 깜빡임  
        - 해결:
        
        ```tsx
        useLayoutEffect(() => {
          start = target.current!.offsetTop;
          pagination(start, window.scrollY, PER, setPage);
        }, []);
        ```
        
        ref는 초기값이 null이지만 React 생명 주기상 effect 콜백 실행 전에는 참조 완료함  
        → !로 ref가 있음을 확정, 동기적으로 0ms 페이지네이션 후 useEffect로 애니메이션 속도 재조정  
        
        - 결과: 새로 고침하면 원래 보던 페이지 그대로 잘 보임. 그러나…  
- 몇 주 뒤에 또 에러?  
    - 문제  
    페이지네이션 새로 고침은 한동안 의도대로 작동했으나 몇 주가 지난 뒤 깜빡임 문제 재발함
    - 원인  
    페이지 + 하이드레이션 = 화면 업데이트  
    → 하이드레이션하는 사이에 초기 뷰가 보이는 것으로 추정
    - 해결  
    애초에 이런 페이지는 새로 고침하면 스크롤이 맨 위로 가는 게 자연스럽지 않을까?
    
    ```jsx
    // 최초: 캐시한 스크롤 위치로 갔다가 맨 위로 올림. 깜빡임 발생.
      window.scrollTo(0,0)
    // 최종: 브라우저가 스크롤 캐시를 안 하도록 조정.
      history.scrollRestoration = "manual";
    ```
    
    - 결과  
    에러 수정, 코드 간결화  
- 작동은 잘되는 에러? 테스트?  
    - 문제  
    배열 순회로 조건부 컴포넌트 생성 시 빈 li 생성
    
    ```jsx
    // before
    	{history[year].map(({ date, title, link }: IHistory) => {
    		count++;
    		return (
    			<li key={title}>
    	      {count <= limit && (
    	        <HistoryItem date={date} title={title} link={link} />)}
    					{count < limit && <VerticalLine />}
    			</li>
    		);
    	})}
    ```
    
    count ≤ limit 조건에 안 맞아도 li는 무조건 배열 크기 만큼 생성  
    화면으론 알 수 없다 
    
    - 해결  
    테스트가 내 기댓값과 다르다고 띄웠고 수정함
    
    ```tsx
    // after
    {history[year].map(({ date, title, link }: IHistory, index: number) => {
    	if (historyCount <= limit) historyCount++;
    	  return historyCount > limit ? null: (
    	    <li key={title}>
    	      <HistoryItem date={date} title={title} link={link} />
            {index < history[year].length - 1 ? (
            <VerticalLine />
            ): null}
          </li>
        );
    	}
    )}
    
    ```
    
    - 그 외  
    타입 에러(그러나 실행은 멀쩡히 됐다) 등 여러 문제도 테스트를 통해 빠르게 발견  
    - 감상  
    일반 테스트: 테스트가 프로덕션 코드에 의존적, 코드 수정에 시간이 더 걸리지만 그럼에도 유익  
    TDD: 에러, 논리 의문을 더 일찍 발견, 크게 수정할 일 감소, 실제 실행을 안 해도 파악이 편리
- 테스트 의도 파악이 어렵네?
    - 원인  
    원래 코드는 파악하기 어렵다. 쉽게 파악하려면 쉽게 작성해야 한다.
    
    ```jsx
    // before
    	expect(Object.keys(news[2021]).length).toBeGreaterThan(10);
      expect(screen.getAllByRole('link')).toHaveLength(10)
    // after
      expect(lengthOfNews(2021)).toBeGreaterThan(10);
      expect(newsOnScreen()).toHaveLength(10);
    ```
    
    - 해결  
    알기 쉽게 선언적으로 변경
    - 결과  
    코드량 증가, 성능 유지 but 가독성 많이 개선
