# 아빠! 오늘은 어디가요? - 사용자 서비스 FE

## [배포링크 바로가기↗️](https://where-we-go-frontend.fly.dev/)

## 🟢 Index
1. [서비스 개요](#-서비스-개요)
2. [서비스 개발 과정](#-서비스-개발-과정)
    - [서비스 기획](#%EF%B8%8F서비스-기획)
    - [스크럼 기반 프로젝트 매니징](#%EF%B8%8F스크럼-기반-프로젝트-매니징)
    - [개발문서와 테스트 작성을 토대로 개발 진행](#%EF%B8%8F개발문서와-테스트-작성을-토대로-개발-진행)
3. [서비스 주요 기능](#-서비스-주요-기능)
    - [간편 로그인과 둘러보기 모드](#%EF%B8%8F간편-로그인과-둘러보기-모드)
    - [TOP3 장소 및 관련 YouTube 컨텐츠 시청](#%EF%B8%8Ftop3-장소-및-관련-youtube-컨텐츠-시청)
    - [지도 검색, 필터링으로 원하는 장소 검색](#%EF%B8%8F지도-검색-필터링으로-원하는-장소-검색)
    - [장소 상세정보 & 북마크](#%EF%B8%8F장소-상세정보--북마크)
    - [네이버 리뷰보기 & 평점 남기기](#%EF%B8%8F네이버-리뷰보기--평점-남기기)
<br>

# ✍🏻 서비스 개요
## 소개
<div align="center" >
<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670360861/main-logo_xw5e13.png" width="300px" alt="character" />
</div>
<br>

- "아빠! 오늘은 어디가요?"는 아이와 어떤 장소에 가야 할지 고민하거나, 노키즈존, 편의시설 검색에 지쳐 외출을 포기하는 부모가 자녀와 방문하기 좋은 장소(문화, 맛집, 교육, 숙박 등)를 지도 기반으로 검색할 수 있도록 한 서비스입니다.

## 핵심 가치
- 아이와 함께 갈 장소를 찾는 사용자가 자녀 동행에 특화된 체험, 여가, 숙박, 식사장소 정보를 쉽고 빠르게 얻을 수 있습니다.

## 개발 기간
- 2022.10. ~ 2022. 12. (약 2개월)

<br>

# 📊 서비스 개발 과정
## ✔️서비스 기획
- 컨설팅 및 사업 기획 경험을 바탕으로 프로젝트 기획안을 작성했습니다.
<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674783458/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.36.11_gd4cuu.png" width="600px" alt="">

<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674783666/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.40.44_hvbdif.png" width="600px" alt="">

<br>

## ✔️스크럼 기반 프로젝트 매니징
### 1. 스프린트
- 매 주 스프린트 회의를 진행하며 개발 상황을 체크하고 목표를 설정했습니다. 
- 스프린트 종료마다 작업을 회고한 후 차회 스프린트 계획을 수립했습니다.

| 스프린트 계획                              | 스프린트 회고 및 반성                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674784411/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.53.16_jjfr89.png" width="360"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674784569/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.56.00_zf3q10.png" width="360" height="535"> |

<br>

### 2. TIL과 주간회고
- 매일 개발 중 겪었던 어려움이나 기술적인 문제를 TIL로 작성했습니다.
- 또한 매 주 주간회고를 작성하며 개발 진척도를 확인하고 다음 스프린트 목표를 달성하기 위한 액션플랜을 세웠습니다.
  - [TIL과 주간회고 보러가기↗️](https://velog.io/@shanti/series/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%95%84%EB%B9%A0-%EC%98%A4%EB%8A%98%EC%9D%80-%EC%96%B4%EB%94%94%EA%B0%80%EC%9A%94)

<br>

## ✔️개발문서와 테스트 작성을 토대로 개발 진행
### 1. 서비스 기능 목록 list-up
- 기획안을 바탕으로 서비스 기능 목록을 작성했습니다.
- 목록을 통해 구현해야 할 기능과 예상 결과물을 명확히 파악할 수 있었고, 구현이 불가하거나 중복되는 기능들에 대한 대체안을 빠르게 만들 수 있었습니다.

| 기능 목록 예시 1                              | 기능 목록 예시 2                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674786259/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.23.56_y45jqr.png" width="360"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674786259/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.24.07_nyejcp.png" width="360" height="410"> |

<br>

### 2. 사용자 스토리 작성
- 사용자 스토리를 작성하여 각 기능별로 사용자가 얻을 수 있는 가치를 정의했습니다.
- 사용자가 실질적인 가치를 얻거나 또는 얻지 못하는 기능을 추가하고 제외하는 과정을 통해 개발의 중요도와 우선순위를 결정했습니다.
   - [사용자 스토리 보러가기↗️](https://docs.google.com/spreadsheets/d/14rBZI_R52wT1dLsmkrI7ztx5aiFFHECnl69Yl8AUFGQ/edit?usp=sharing)

<br>

### 3. 인수테스트 & 단위테스트
- 인수테스트와 단위테스트 작성을 통해 서비스의 안정성을 높이고자 노력했습니다.
- CodeceptJS로 인수테스트를 자동화하여 수많은 기능을 사람이 직접 테스트해야 하는 부담을 최소화했고, 누락되기 쉬운 오류 상황을 빠르게 발견하여 대응하고자 했습니다.

```bash
// 인수테스트 예시

Scenario('#3. 사용자가 리뷰 작성하기 페이지에서 리뷰를 작성 완료함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setupUserReviewsId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  // TODO. 방문일 선택
  I.selectOption('평점', '⭐️⭐️⭐️⭐️⭐️');
  I.fillFiled('한 줄 리뷰', '아이와 함께 가서 즐겁게 놀 만한 장소예요!');
  I.see('24 / 50자');
  I.click('등록하기');

  // Then
  I.see('4.4 / 5점');
  I.see('5명 참여');
  I.see('봄이엄마(방문일: 2022-11-15');
  I.see('아이와 함께 가서 즐겁게 놀 만한 장소예요!');
});
```

<br>

- 단위테스트를 진행하며 컴포넌트가 비정상적으로 비대해지는 현상을 사전에 감지하고, 유지 보수가 용이한 수준으로 리팩터링 했습니다.

```javascript
// 단위테스트 예시. Components-MyBookmarks.test.jsx

import { fireEvent, render, screen } from '@testing-library/react';
import MyBookmarks from './MyBookmarks';

const goPlaceDetailPage = jest.fn();
const removeBookmark = jest.fn();
let bookmarks;

const context = describe;
describe('MyBookmarks', () => {
  function renderMyBookmarks() {
    render(<MyBookmarks
      goPlaceDetailPage={goPlaceDetailPage}
      removeBookmark={removeBookmark}
      bookmarks={bookmarks}
    />);
  }

  context('a user accesses mypage', () => {
    beforeEach(() => {
      bookmarks = [
        { placeId: 1, name: '서울랜드', address: '서울 과천' },
        { placeId: 3, name: '서울숲', address: '서울시 성동구~' },
      ];
    });

    it('renders a page with mybookmarks', () => {
      renderMyBookmarks();

      screen.getByText('서울랜드');
      screen.getByText('서울시 성동구~');

      fireEvent.click(screen.getByTestId(1));

      expect(removeBookmark).toBeCalled();
    });
  });

  context('a user accesses mypage, but there are no bookmarks', () => {
    beforeEach(() => {
      bookmarks = [];
    });

    it('renders a page with mybookmarks', () => {
      renderMyBookmarks();

      screen.getByText('즐겨찾기 한 장소가 없습니다');
    });
  });
});
```

<br>

# 🔑 서비스 주요 기능
## ✔️간편 로그인과 둘러보기 모드
- 카카오, 네이버 계정을 이용하여 간편 로그인을 진행한 후 서비스를 이용할 수 있습니다.
- 기존 회원은 소셜 로그인과 동시에 서비스를 사용할 수 있으며, 신규 회원의 경우 닉네임을 입력하면 자유롭게 서비스를 이용할 수 있습니다.

| 신규 회원 소셜 로그인                              | 기존 회원 소셜 로그인                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674790276/%E1%84%89%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB2_cczwpt.gif"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674789586/%E1%84%89%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB_zynpff.gif"> |

<br>

- 또한 서비스를 체험해본 후 회원가입을 원하는 사용자를 위해 둘러보기 모드를 구현하였습니다.  
둘러보기 모드 사용자는 Local Storage에 accessToken 값 외에도 mode에 'trial' 값이 저장되어 일반 회원과 구별됩니다.  
제한 없이 서비스를 사용해볼 수 있으며, 체험 종료 버튼을 누르면 해당 사용자의 기록이 모두 삭제됩니다.
<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674790720/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.38.34_grsqqv.png" width="600">

<br>

## ✔️TOP3 장소 및 관련 YouTube 컨텐츠 시청
- 회원들이 남긴 평점 리뷰 결과를 바탕으로 TOP3 장소를 보여줍니다.
- 또한 TOP3 장소와 관련된 YouTube 컨텐츠를 제공하여 사용자의 관심요소를 다양하게 충족시키고자 했습니다.
- 특히 브라우저/사이트 이동 없이 서비스 내에서 구현한 플레이어를 통해 볼 수 있도록 하여 사용자들의 서비스 이탈율을 낮추고자 했습니다.

| 메인화면(TOP3)                              | 서비스 내에서 YouTube 영상 시청 가능                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674791149/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.45.11_cwjvvk.png" width="400"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674791336/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.48.49_no3pav.png" width="400"> |

<br>

## ✔️지도 검색, 필터링으로 원하는 장소 검색
- Kakao Map API를 이용해 지도를 구현하고, 가족 맞춤형 장소들을 마커로 표시했습니다.
- 렌더링 시 화면의 복잡도를 줄이고 사용자의 편의성을 높이기 위해 인접한 마커는 묶어서 표시하는 클러스터링 마커를 적용하였습니다.
<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674792187/%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9_%E1%84%86%E1%85%A1%E1%84%8F%E1%85%A5_%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%89%E1%85%A9-%E1%84%92%E1%85%AA%E1%86%A8%E1%84%83%E1%85%A2_rbkeos.gif">

<br>

- 필터링 기능을 통해 원하는 지역(시/도, 시/군/구)과 장소 유형(카테고리)을 설정하여 장소를 검색할 수 있습니다.  
검색한 장소 결과에 따라 지도형, 또는 리스트형으로 장소목록을 확인할 수 있습니다.

| 검색 결과 없음                          | 검색 결과 있음                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674792185/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%90%E1%85%A5%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7_v11pag.gif"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674792187/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%90%E1%85%A5%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA_%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%B7_asepww.gif"> |

<br>

## ✔️장소 상세정보 & 북마크
- 마커 클릭 시 장소에 대한 간략한 정보를 담은 팝업창이 뜹니다.
- 서비스 사용 요일에 따라 운영시간이 표기되어 서비스를 이용하는 사용자들의 편의성을 높였습니다.  
예를들어, 이용일이 금요일이라면 해당 요일의 운영시간을 안내합니다.

| 마커 클릭 시 팝업창 노출                          | 이용일에 따른 맞춤형 정보 제공                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674793465/%E1%84%91%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%A1%E1%86%BC_%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9_txzjpq.png" width="500"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674793464/%E1%84%91%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%8E%E1%85%A1%E1%86%BC_%E1%84%89%E1%85%A3%E1%86%BA_s9lzvp.png"> |

<br>

- 팝업창을 클릭하면 장소의 상세정보 페이지로 이동합니다.  
상세정보 페이지는 자녀와 동행하는 부모에게 꼭 필요한 편의시설 정보(예약, 주차, 외부음식 반입, 수유실)와 함께 장소 전경, 연락처 등을 확인할 수 있도록 구성했습니다.
<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674793846/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5_uqtekh.gif">

<br>

- 사용자는 마음에 드는 장소를 북마크할 수 있으며, 저장한 북마크 목록을 마이페이지에서 확인할 수 있습니다.  
북마크는 언제든지 삭제, 또는 재설정 할 수 있습니다.
<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674795554/%E1%84%87%E1%85%AE%E1%86%A8%E1%84%86%E1%85%A1%E1%84%8F%E1%85%B3_tmarqp.gif">

<br>

## ✔️네이버 리뷰보기 & 평점 남기기
- 장소에 대한 다양한 정보를 제공하기 위해 Naver 검색 API를 이용하여 블로그 검색 결과를 보여줍니다.  
관련도 높은 컨텐츠를 가져오기 위해 '장소명 + 아기랑' 키워드로 검색한 결과를 제공합니다.

<img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674794733/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5%E1%84%85%E1%85%B5%E1%84%87%E1%85%B2%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5_cibi65.gif">

<br>

- 장소에 직접 방문한 회원들이 평점과 함께 리뷰를 남길 수 있습니다.  
해당 장소에 리뷰를 남긴 이력이 없을 경우 '리뷰 작성하기' 버튼이 노출되고, 이력이 있을 경우 과거에 작성한 평점과 리뷰가 노출됩니다.

| 평점/리뷰 작성 전                          | 평점/리뷰 작성 후                            |
| -------------------------------------------- | ------------------------------------------------- |
| <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674794513/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.40.48_lst8vw.png" width="400"> | <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1674794514/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.41.27_j9ltaw.png" width="400"> |
