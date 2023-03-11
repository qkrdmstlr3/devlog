export const RING_WIDTH = 40 as const;

export const 지명 = [
  'SEOUL',
  'BUSAN',
  'ULSAN',
  'DAEJEON',
  'GWANGJU',
  'INCHEON',

  'JEJU',
  'SEJONG',

  'GYEONGGI',
  'GANGWON',
  'GYUNGBUK',
  'GYUNGNAM',
  'JEONBUK',
  'JEONNAM',
  'CHUNGBUK',
  'CHUNGNAM',

  'ASIA',
  'EUROPE',
  'NORTH AMERICA',
  'SOUTH AMERICA',
  'AFRICA',
  'OCEANIA',
] as const;

export const BOOKSTORES: {
  [key: string]: {
    number: number;
    region: string;
    name: string;
    date: Date;
    book: string;
  }[];
} = {
  SEOUL: [
    {
      number: 3,
      region: '건대',
      name: '생산적 헛소리',
      date: new Date('2020-07'),
      book: '천장에 야광별을 하나씩 붙였다',
    },
    { number: 13, region: '북촌', name: '비화림', date: new Date('2022-10'), book: '지브리의 천재들' },
    { number: 14, region: '종합운동장', name: '하우스북스', date: new Date('2022-11'), book: '공간이 만든 공간' },
    { number: 18, region: '성수', name: '쎄임더스트', date: new Date('2023-03'), book: 'voyager' },
  ],
  BUSAN: [],
  ULSAN: [
    { number: 16, region: '학성동', name: '피즈 소셜 클럽', date: new Date('2022-12'), book: '코카콜라(일본 잡지)' },
  ],
  DAEJEON: [
    { number: 5, region: '중앙동', name: '텍스트 칼로리', date: new Date('2021-05'), book: '나는 버스를 탄다' },
    { number: 6, region: '어은동', name: '우분투 북스', date: new Date('2021-07'), book: '벌' },
    { number: 7, region: '괴정동', name: '해윰책방', date: new Date('2021-09'), book: '나침반' },
    { number: 9, region: '문지동', name: '텍스트 가든', date: new Date('2022-03'), book: '소박한 정원' },
    { number: 10, region: '갈마동', name: '삼요소', date: new Date('2022-04'), book: '서울의 3년 이하 빵집들' },
    { number: 11, region: '대흥동', name: 'unwritten', date: new Date('2022-05'), book: '참을 수 없는 존재의 가벼움' },
    { number: 12, region: '유성고속터미널', name: '달팽이 서점', date: new Date('2022-08'), book: '행성어 서점' },
  ],
  GWANGJU: [],
  INCHEON: [],

  JEJU: [
    {
      number: 15,
      region: '용두암',
      name: '바라나시 책골목',
      date: new Date('2022-12'),
      book: '헤르만 헤세의 책이라는 세계',
    },
  ],
  SEJONG: [],

  GYEONGGI: [],
  GANGWON: [
    { number: 1, region: '춘천', name: '책방마실', date: new Date('2020-01'), book: '여행할땐 책' },
    {
      number: 2,
      region: '춘천',
      name: '서툰 책방',
      date: new Date('2020-01'),
      book: '아무도 알려주지 않은 도서관 사서 실무',
    },
  ],
  GYUNGBUK: [],
  GYUNGNAM: [
    {
      number: 4,
      region: '남해',
      name: '아마도 책방',
      date: new Date('2020-08'),
      book: '남해에서 뭐 해 먹고사냐 하시면 아마도 책방이겠지요',
    },
  ],
  JEONBUK: [],
  JEONNAM: [],
  CHUNGBUK: [],
  CHUNGNAM: [],

  ASIA: [{ number: 17, region: '일본 히타', name: '文化書房', date: new Date('2023-02'), book: '폐점으로 사지 못함' }],
  EUROPE: [],
  'NORTH AMERICA': [
    {
      number: 8,
      region: '미국 퍼듀대학교',
      name: "Von's Book Shop",
      date: new Date('2021-01'),
      book: 'Communist Manifesto',
    },
  ],
  'SOUTH AMERICA': [],
  AFRICA: [],
  OCEANIA: [],
};
