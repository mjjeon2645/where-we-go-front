export function loadSidoOptions() {
  const sidoArray = [
    {
      id: 0, en: 'total', ko: '전체', selected: false,
    },
    {
      id: 1, en: 'seoul', ko: '서울', selected: false,
    },
    {
      id: 2, en: 'kyoungki', ko: '경기', selected: false,
    },
    {
      id: 3, en: 'incheon', ko: '인천', selected: false,
    },
    {
      id: 4, en: 'kangwon', ko: '강원', selected: false,
    },
    {
      id: 5, en: 'daejeon', ko: '대전', selected: false,
    },
    {
      id: 6, en: 'chungcheong', ko: '충청', selected: false,
    },
    {
      id: 7, en: 'gwangju', ko: '광주', selected: false,
    },
    {
      id: 8, en: 'jeonla', ko: '전라', selected: false,
    },
    {
      id: 9, en: 'daegu', ko: '대구', selected: false,
    },
    {
      id: 10, en: 'busan', ko: '부산', selected: false,
    },
    {
      id: 11, en: 'ulsan', ko: '울산', selected: false,
    },
    {
      id: 12, en: 'kyeongsang', ko: '경상', selected: false,
    },
    {
      id: 13, en: 'jeju', ko: '제주', selected: false,
    },
    {
      id: 14, en: 'sejong', ko: '세종', selected: false,
    },
  ];

  return sidoArray;
}

export function loadSigunguOptions() {
  const sigunguArray = [
    {
      id: 0,
      sido: '전체',
      sigunguLists: [{ id: 0, name: '전체' },
      ],
    },
    {
      id: 1,
      sido: '서울',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '강남구' },
        { id: 2, name: '강동구' },
        { id: 3, name: '강북구' },
        { id: 4, name: '강서구' },
        { id: 5, name: '관악구' },
        { id: 6, name: '광진구' },
        { id: 7, name: '구로구' },
        { id: 8, name: '금천구' },
        { id: 9, name: '노원구' },
        { id: 10, name: '도봉구' },
        { id: 11, name: '동대문구' },
        { id: 12, name: '동작구' },
        { id: 13, name: '마포구' },
        { id: 14, name: '서대문구' },
        { id: 15, name: '서초구' },
        { id: 16, name: '성동구' },
        { id: 17, name: '성북구' },
        { id: 18, name: '송파구' },
        { id: 19, name: '양천구' },
        { id: 20, name: '영등포구' },
        { id: 21, name: '용산구' },
        { id: 22, name: '은평구' },
        { id: 23, name: '종로구' },
        { id: 24, name: '중구' },
        { id: 25, name: '중랑구' },
      ],
    },
    {
      id: 2,
      sido: '경기',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '가평군' },
        { id: 2, name: '고양시' },
        { id: 3, name: '과천시' },
        { id: 4, name: '광명시' },
        { id: 5, name: '광주시' },
        { id: 6, name: '구리시' },
        { id: 7, name: '군포시' },
        { id: 8, name: '김포시' },
        { id: 9, name: '남양주시' },
        { id: 10, name: '동두천시' },
        { id: 11, name: '부천시' },
        { id: 12, name: '성남시' },
        { id: 13, name: '수원시' },
        { id: 14, name: '시흥시' },
        { id: 15, name: '안산시' },
        { id: 16, name: '안성시' },
        { id: 17, name: '안양시' },
        { id: 18, name: '양주시' },
        { id: 19, name: '양평군' },
        { id: 20, name: '여주시' },
        { id: 21, name: '연천군' },
        { id: 22, name: '용인시' },
        { id: 23, name: '의왕시' },
        { id: 24, name: '의정부시' },
        { id: 25, name: '이천시' },
        { id: 26, name: '파주시' },
        { id: 27, name: '평택시' },
        { id: 28, name: '포천시' },
        { id: 29, name: '하남시' },
        { id: 30, name: '화성시' },
      ],
    },
    {
      id: 3,
      sido: '인천',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '강화군' },
        { id: 2, name: '계양구' },
        { id: 3, name: '남동구' },
        { id: 4, name: '부평구' },
        { id: 5, name: '서구' },
        { id: 6, name: '연수구' },
        { id: 7, name: '중구' },
      ],
    },
    {
      id: 4,
      sido: '강원',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '강릉시' },
        { id: 2, name: '양양군' },
        { id: 3, name: '영월군' },
        { id: 4, name: '원주시' },
        { id: 5, name: '춘천시' },
        { id: 6, name: '태백시' },
        { id: 7, name: '홍천군' },
      ],
    },
    {
      id: 5,
      sido: '대전',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '세종시' },
        { id: 2, name: '대덕구' },
        { id: 3, name: '동구' },
        { id: 4, name: '서구' },
        { id: 5, name: '유성구' },
        { id: 6, name: '중구' },

      ],
    },
    {
      id: 6,
      sido: '충청',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '계룡시' },
        { id: 2, name: '공주시' },
        { id: 3, name: '금산군' },
        { id: 4, name: '논산시' },
        { id: 5, name: '당진시' },
        { id: 6, name: '보령시' },
        { id: 7, name: '부여군' },
        { id: 8, name: '서산시' },
        { id: 9, name: '서천군' },
        { id: 10, name: '아산시' },
        { id: 11, name: '예산군' },
        { id: 12, name: '천안시' },
        { id: 13, name: '청양군' },
        { id: 14, name: '태안군' },
        { id: 15, name: '홍성군' },
      ],
    },
    {
      id: 7,
      sido: '광주',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '광산구' },
        { id: 2, name: '남구' },
        { id: 3, name: '동구' },
        { id: 4, name: '북구' },
        { id: 5, name: '서구' },
      ],
    },
    {
      id: 8,
      sido: '전라',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '강진군' },
        { id: 2, name: '고흥군' },
        { id: 3, name: '곡성군' },
        { id: 4, name: '광양시' },
        { id: 5, name: '구례군' },
        { id: 6, name: '나주시' },
        { id: 7, name: '담양군' },
        { id: 8, name: '목포시' },
        { id: 9, name: '무안군' },
        { id: 10, name: '보성군' },
        { id: 11, name: '순천시' },
        { id: 12, name: '신안군' },
        { id: 13, name: '여수시' },
        { id: 14, name: '영광군' },
        { id: 15, name: '영암군' },
        { id: 16, name: '완도군' },
        { id: 17, name: '장성군' },
        { id: 18, name: '장흥군' },
        { id: 19, name: '진도군' },
        { id: 20, name: '함평군' },
        { id: 21, name: '해남군' },
        { id: 22, name: '화순군' },
      ],
    },
    {
      id: 9,
      sido: '대구',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '남구' },
        { id: 2, name: '달서구' },
        { id: 3, name: '달성구' },
        { id: 4, name: '동구' },
        { id: 5, name: '북구' },
        { id: 6, name: '서구' },
        { id: 7, name: '수성구' },
        { id: 8, name: '중구' },
      ],
    },
    {
      id: 10,
      sido: '부산',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '강서구' },
        { id: 2, name: '금정구' },
        { id: 3, name: '기장군' },
        { id: 4, name: '남구' },
        { id: 5, name: '동구' },
        { id: 6, name: '동래구' },
        { id: 7, name: '부산진구' },
        { id: 8, name: '북구' },
        { id: 9, name: '사상구' },
        { id: 10, name: '사하구' },
        { id: 11, name: '서구' },
        { id: 12, name: '수영구' },
        { id: 13, name: '연제구' },
        { id: 14, name: '영도구' },
        { id: 15, name: '중구' },
        { id: 16, name: '해운대구' },
      ],
    },
    {
      id: 11,
      sido: '울산',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '남구' },
        { id: 2, name: '동구' },
        { id: 3, name: '북구' },
        { id: 4, name: '울주군' },
        { id: 5, name: '중구' },
      ],
    },
    {
      id: 12,
      sido: '경상',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '거제시' },
        { id: 2, name: '거창군' },
        { id: 3, name: '고성군' },
        { id: 4, name: '김해시' },
        { id: 5, name: '남해군' },
        { id: 6, name: '밀양시' },
        { id: 7, name: '사천시' },
        { id: 8, name: '산청군' },
        { id: 9, name: '양산시' },
        { id: 10, name: '의령군' },
        { id: 11, name: '진주시' },
        { id: 12, name: '창녕군' },
        { id: 13, name: '창원시' },
        { id: 14, name: '통영시' },
        { id: 15, name: '하동군' },
        { id: 16, name: '함안군' },
        { id: 17, name: '함양군' },
        { id: 18, name: '합천군' },
      ],
    },
    {
      id: 13,
      sido: '제주',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '서귀포시' },
        { id: 2, name: '제주시' },
      ],
    },
    {
      id: 14,
      sido: '세종',
      sigunguLists: [
        { id: 0, name: '전체' },
      ],
    },
  ];

  return sigunguArray;
}

export function loadCategoryOptions() {
  const categoryArray = [
    { id: 1, category: '전체', selected: false },
    { id: 2, category: '스포츠/레저', selected: false },
    { id: 3, category: '교육/체험', selected: false },
    { id: 4, category: '숙박/캠핑', selected: false },
    { id: 5, category: '전시/공연', selected: false },
    { id: 6, category: '자연', selected: false },
    { id: 7, category: '키즈카페', selected: false },
    { id: 8, category: '키즈존 맛집', selected: false },
    { id: 9, category: '유적지', selected: false },
  ];

  return categoryArray;
}

// TODO: Delete This!
export const xxx = '';
