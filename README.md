# 🚇 지하철 노선도 & 경로 조회 미션

## 🚀 기능 요구사항 - 노선도

### 지하철 역 관련 기능
- 지하철 역을 등록하고 삭제할 수 있다. (단, 노선에 등록된 역은 삭제할 수 없다)
- 중복된 지하철 역 이름이 등록될 수 없다.
- 지하철 역은 2글자 이상이어야 한다.
- 지하철 역의 목록을 조회할 수 있다.

### 지하철 노선 관련 기능
- 지하철 노선을 등록하고 삭제할 수 있다.
- 중복된 지하철 노선 이름이 등록될 수 없다.
- 노선 등록 시 상행 종점역과 하행 종점역을 입력받는다.
- 지하철 노선의 목록을 조회할 수 있다.

### 지하철 구간 추가 기능
- 지하철 노선에 구간을 추가하는 기능은 노선에 역을 추가하는 기능이라고도 할 수 있다.
  - 역과 역사이를 구간이라 하고 이 구간들의 모음이 노선이다.  
- 하나의 역은 여러개의 노선에 추가될 수 있다.
- 역과 역 사이에 새로운 역이 추가 될 수 있다.
- 노선에서 갈래길은 생길 수 없다.

<img width="500" src="./images/section1.png">

### 지하철 구간 삭제 기능
- 노선에 등록된 역을 제거할 수 있다.
- 종점을 제거할 경우 다음 역이 종점이 된다.
- 노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없다.

<img width="500" src="./images/section2.png">

### 지하철 노선에 등록된 역 조회 기능
- 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 역 목록을 조회할 수 있다.

<br/>

## 💻 프로그램 실행 결과

### 역관리
<img width="100%" src="./images/station_manager.gif">

### 노선관리
<img width="100%" src="./images/line_manager.gif">

### 구간관리
<img width="100%" src="./images/section_manager.gif">

### 노선도 출력
<img width="100%" src="./images/map_print_manager.gif">

## 🚀 기능 요구사항 - 경로 조회

### 초기 설정
- 프로그램 시작 시 역, 노선, 구간 데이터를 초기 설정 해야 한다.
- 거리와 소요 시간은 양의 정수이며 단위는 km와 분을 의미한다.
- 아래의 사전 등록 정보로 반드시 초기 설정을 한다.

```
1. 지하철역으로 교대, 강남, 역삼, 남부터미널, 양재, 양재시민의숲, 매봉 역 정보가 등록되어 있다.
2. 지하철 노선으로 2호선, 3호선, 신분당선이 등록되어 있다.
3. 노선에 역이 아래와 같이 등록되어 있다.(왼쪽 끝이 상행 종점)
    - 2호선: 교대 - ( 2km / 3분 ) - 강남 - ( 2km / 3분 ) - 역삼
    - 3호선: 교대 - ( 3km / 2분 ) - 남부터미널 - ( 6km / 5분 ) - 양재 - ( 1km / 1분 ) - 매봉
    - 신분당선: 강남 - ( 2km / 8분 ) - 양재 - ( 10km / 3분 ) - 양재시민의숲
```

### 경로 조회 기능
<img src="./images/path_result.jpg" width="100%">

- 출발역과 도착역을 입력받아 경로를 조회한다.
- 경로 조회 시 총 거리, 총 소요 시간을 함께 출력한다.
- 경로 조회 시 `최단 거리` 또는 `최소 시간` 옵션을 선택할  수 있다.

### 예외 처리
- 출발역과 도착역은 2글자 이상이어야 한다.
- 존재하지 않는 역을 출발역 또는 도착역으로 입력할 수 없다.
- 경로 조회 시 출발역과 도착역이 같을 수 없다.
- 경로 조회 시 출발역과 도착역이 연결되지 않으면 경로를 조회할 수 없다.
- 그 외 정상적으로 프로그램이 수행되지 않은 경우 `alert`으로 에러를 출력한다.

<br>

## 💻 프로그래밍 실행 결과
### 경로 조회
<img src="./images/path_result.gif" width="100%">


## ✅ 프로그래밍 요구사항 - 노선도

### 메뉴 버튼
- 역 관리 button 태그는 `#station-manager-button` id값을 가진다.
- 노선 관리 button 태그는 `#line-manager-button` id값을 가진다.
- 구간 관리 button 태그는 `#section-manager-button` id값을 가진다.
- 지하철 노선도 출력 관리 button 태그는 `#map-print-manager-button` id값을 가진다.

### 지하철 역 관련 기능
- 지하철 역을 입력하는 input 태그는 `#station-name-input` id값을 가진다.
- 지하철 역을 추가하는 button 태그는 `#station-add-button` id값을 가진다.
- 지하철 역을 삭제하는 button 태그는 `.station-delete-button` class값을 가진다.

### 지하철 노선 관련 기능
- 지하철 노선의 이름을 입력하는 input 태그는 `#line-name-input` id값을 가진다.
- 지하철 노선의 상행 종점을 선택하는 select 태그는 `#line-start-station-selector` id값을 가진다.
- 지하철 노선의 하행 종점을 선택하는 select 태그는 `#line-end-station-selector` id값을 가진다.
- 지하철 노선을 추가하는 button 태그는 `#line-add-button` id값을 가진다.
- 지하철 노선을 삭제하는 button 태그는 `.line-delete-button` class값을 가진다.

### 지하철 구간 추가 기능
- 지하철 노선을 선택하는 button 태그는 `.section-line-menu-button` class값을 가진다.
- 지하철 구간을 설정할 역 select 태그는 `#section-station-selector` id값을 가진다.
- 지하철 구간의 순서를 입력하는 input 태그는 `#section-order-input` id값을 가진다.
- 지하철 구간을 등록하는 button 태그는 `#section-add-button` id값을 가진다.
- 지하철 구간을 제거하는 button 태그는 `.section-delete-button` class값을 가진다.

### 지하철 노선도 출력 기능
- 지하철 노선도 출력 버튼을 누르면 `<div class="map"></div>` 태그를 만들고 해당 태그 내부에 노선도를 출력한다.

## ✅ 프로그래밍 요구사항 - 경로 조회

### 길찾기 관련 기능
- 출발역을 입력하는 input 태그는 `departure-station-name-input` id 속성값을 가진다.
- 도착역을 입력하는 input 태그는 `arrival-station-name-input` id 속성값을 가진다.
- 최단거리, 최소시간을 선택하는 radio는 `search-type` name 속성값을 가진다.
  - **radio option의 default 값은 최단거리이다.**
- 길찾기 버튼은 `search-button` id 속성값을 가진다.
- 📝 결과는 `table`을 이용하여 보여준다.

## ❗️힌트
## 데이터 초기화
자바스크립트에서 데이터를 초기화하는 방법 중에 하나는 아래와 같이 data를 `export`하고, `import`하는 것이다.

```javascript
export const users = [
  {
    name: 'Alt'
  },
  {
    name: 'Jamie'
  },
  {
    name: 'Sony'
  }
]

export const courses = [
  {
    name: 'frontend',
  },
  {
    name: 'backend',
  },
  {
    name: 'iOS',
  },
  {
    name: 'Android',
  }
]

```
위와 같이 데이터를 `export`하면 아래와 같이 데이터를 `import` 하여 사용할 수 있다.
```javascript
import { users, courses } from './data.js'

function App() {
  this.users = users
  this.courses = courses
}
```

## 최단 경로 라이브러리
- `utils/Dijkstra.js` 라이브러리를 활용하면 간편하게 최단거리를 조회할 수 있다.
- 정점(Vertex)과 간선(Edge), 그리고 가중치 개념을 이용
  - 정점: 지하철역
  - 간선: 지하철역 연결정보
  - 가중치: 거리 or 소요 시간
- 최단 거리 기준 조회 시 가중치를 거리로 설정
- 최소 시간 기준 조회 시 가중치를 시간으로 설정

```javascript
import Dijkstra from "./utils/Dijkstra.js";
const dijkstra = new Dijkstra()

//dijkstra.addEdge("출발역", "도착역", 거리 또는 시간);
dijkstra.addEdge("V1", "V2", 2);
dijkstra.addEdge("V2", "V3", 2);
dijkstra.addEdge("V1", "V3", 100);

const result = dijkstra.findShortestPath("V1", "V3");
// result = ["V1", "V2", "V3"] 
```

#### 테스트설명
<img src="./images/dijkstra_example.png" width="400">

- 역 사이의 거리를 고려하지 않는 경우 V1->V3 경로가 최단 경로
- 역 사이의 거리를 고려할 경우 V1->V3 경로의 거리는 100km, V1->V2->V3 경로의 거리는 4km이므로 최단 경로는 V1->V2->V3

### 기존 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

### 추가된 요구사항
- [data](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)속성을 활용하여 html 태그에 역, 노선, 구간의 유일한 데이터 값들을 관리한다. 
- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

<br/>

## 📝 미션 저장소 및 진행 요구사항

- 미션은 [javascript-subway-path 저장소](https://github.com/dev-floor/javascript-subway-path) 를 fork/clone해 시작한다.
- **기능을 구현하기 전에 javascript-subway-path/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.
