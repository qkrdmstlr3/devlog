# Storage

https://www.w3.org/TR/webstorage/

### Cookie

- 매 http요청마다 포함되어 서버에 전달되어짐
- 별도의 암호화를 거치지 않음으로 보안에 문제의 여지가 있음
- 원하는 시기에 제거될 수 있도록 설정 가능

### sessionStorage

- 브라우저가 닫힐 경우 제거됨
- 브라우저의 탭 세션에 저장(탭마다 저장소가 분리)

### localStorage

- 특별히 지우지 않는 한 브라우저에 계속 남아있음
- 탭마다 저장소가 유지
- 자동로그인 / 설정값등을 저장
- service worker 사용 불가
- 보통 5mb / 10mb
- 브라우저 내부에 key / value 쌍으로 저장 가능
- 문자열만 저장이 가능

### IndexedDB

- service worker 사용 가능
- 지원하지 않는 브라우저가 가끔 있음
- js를 기반으로 하는 객체지향 데이터베이스
- 많은 양의 구조화된 데이터들을 저장할 수 있다.
- transaction을 따른다.
- 기본적인 query 사용 가능
- 좀 더 복잡한 api
- 비동기적으로 동작한다
- 보다 쉽게 사용하기 위해서 localForage, dexie.js, ZangoDB, PouchDB, idb, idb-keyval, JsStore 같은 라이브러리가 있다.
