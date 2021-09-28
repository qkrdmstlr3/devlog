---
title: 지도 개발기(작성 중)
date: '2021-08-21'
category: develop
---

## 들어가며

개발을 하면서 지도를 deep하게 다룰 일은 흔하지 않다고 생각한다. 그리고 지도는 가장 까다로운 개발 중 하나라고도 생각한다.

나는 운이 좋게도 단기간에 유명한 두 개의 지도 라이브러리를 꽤나 깊게 사용해보게 되었다. 첫 번쨰로는 `mapbox`라는 라이브러리로 작년 겨울에 진행한 부스트캠프에서 사용해보았고, 두 번째로는 `open layers`라는 라이브러리로 얼마전까지 인턴으로 다닌 SIA라는 회사에서 경험하게 되었다.

이번 글에서는 내가 연속적으로 지도 프로젝트를 겪으며 경함한 것들을 기록해보고자 한다.

## 지도란?

지도는 우리가 보고자하는 곳을 보여주고, 가고자하는 곳을 알려준다. 이러한 지도는 zoom레벨에 따라서 여러 장의 이미지(타일)들을 붙여서 보여준다. 일반적으로 타일은 래스터 타일과 벡터 타일로 나뉜다. 래스터 타일은 서버에 미리 저장해둔 이미지 파일(png, jpg등)을 가져와서 보여주고, 벡터 타일은 svg처럼 함수를 기반으로 좌표의 계산을 통해서 연속적으로 보여주게 된다. 벡터 타일은 레이어들로 이루어져 있으며 레이어들은 여러개의 데이터를 가지고 있다. 이 때 데이터는 point, line, polygon중 하나의 타입을 가지게되고 원하는 데이터에 스타일링을 할 수도 있다.

두 타일에 대한 비교는 [이곳](https://doc.arcgis.com/ko/arcgis-online/reference/tile-layers.htm)과 다른 여러 자료들을 찾아봐도 좋을 것 같다. 두 프로젝트 모두 벡터 타일을 사용하였는데 mapbox로는 지도의 스타일링을 하기 위하였음이고, openlayers에서는 여러 도형들을 좌표를 기반으로 계산할 필요가 있었기 때문에 vectorlayer를 더해서 사용하였다.

## 지도는 어렵다. 왜?

![snoopy-spade](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/snoopy-spade.jpeg)

지도에 대해서 아무것도 모른채 지도를 다루는 것은 매우 어려웠다. 많은 시행착오를 거쳤고, 문서를 여러번 보았고 삽질의 연속이었다. 보통 지도는 canvas에 담겨서 우리에게 보여지게 된다. 구체적인 조작은 지도 라이브러리에 대해서 담당하고 있기 때문에 테스트나 최적화를 하기도 매우 어려웠고 예상과 다르게 동작하는 경우도 많았다.

지도를 좀 더 깊숙히 다루기 위해서는 해당 라이브러리의 API에 대한 학습만으로는 부족하다. 나는 mapbox로 지도 내부의 속성들을 다루어보았고, open layers로 지도의 좌표를 이용해 도형을 그리는 작업을 하였다. 첫 프로젝트 경험으로 인해서 두 번째 프로젝트에 대한 자신감을 가졌지만, 막상 해보니 지도라는 환경만 동일하고 전혀 다른 개발을 하며 또 다른 삽질을 한 생각도 난다. 아래의 내용은 지도라는 같은 플랫폼에서 전혀 다른 두 가지 작업을 힌 경험들이다.

### 지도 내부 조작하기 (feat. mapbox)

프로젝트 `styled-map-admin-tool`의 모습

![styled-map-admin-tool](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/styled-map-admin-tool.png)

지도 내부를 다루기 위해서는 기본적으로 `지도 데이터`에 대한 이해가 필요했다. 위에서 말했듯이 벡터 기반의 지도에서 데이터는 point, line, polygon으로 나뉠 수 있다. point는 지명이나 상호명, line은 도로, polygon은 건물 등으로 예를 들 수 있곘다. 데이터는 모여서 층([layer](https://docs.mapbox.com/help/glossary/layer/))가 된다. 이 layer들이 쌓여서 지도를 보여주게된다. layer의 순서는 매우 중요한데, 만약 땅layer가 건물layer보다 위에 있다면 건물들은 땅에 가려져서 보이지 않게 될 것이다. 그래서 보통 면적이 보다 넓은 것들이 아래에 오게되고 point들은 가장 최상위에 놓이게된다.

mapbox의 기본(무료) 지도는 100여개의 layer를 기본적으로 제공해준다. 지도에 대한 지식이 전혀없는 우리가 가장 먼저 한 일은 이것들을 분류하는 것이었다. 40여개의 카테고리에 100여개의 layer들을 필요한 부분만 골라서 분류하였다(카테고리는 위의 그림에서 좌측의 tab을 참고). 가장 먼저 발생한 문제는 분류를 하는 과정에서 한 layer가 두 카테고리의 내용을 모두 포함하는 경우였다(point데이터들이 담긴 layer로 기억한다). 문제를 해결하지 못한 상태에서 네이버측 데이터를 추가적으로 제공받게 되었다.

![mapbox-layer](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/mapbox-layer.png)

네이버에서 제공해주신 데이터들은 세 개의 source-layer에 200여개의 데이터가 나뉘어서 담겨있었다. 짐작하셨겠지만 세 개의 source는 point, line, polygon이다. 마찬가지로 데이터들을 분류하는 과정에서 우리는 이 데이터들을 묶어서 우리가 원하는 새로운 layer를 만들어야한다는 것을 알게되었다. mapbox layer에 담긴 데이터들를 우리가 분리해서 한 layer를 여러개의 layer로 만들 수 있다는 것도 이때쯤 깨달았던 것으로 기억한다.

모든 데이터의 분류가 끝났고 카테고리에는 알맞은 데이터로 구성된 layer들이 들어가게 되었다. 두 번째 문제가 발생하였다.

![map-road-problem](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/map-road-problem.png)

위 그림과 같이 style이 다른 두 layer가 한 카테고리에 같이 묶여있을 경우 UX적으로 문제가 발생할 수 있다. 하나의 길은 5의 굵기를 가지고 다른 길은 3의 굵기를 가진다고 가정해보자. 두 길은 다른 layer에 속해있지만 특성이 비슷해서 같은 카테고리에 묶이게 되었다. 만약 해당 카테고리의 굵기를 4로 변경시킨다면 하나의 길은 굵어질 것이고 다른 하나는 얇아질 것이다. 이것은 UX적으로 매우 심각한 문제라고 생각하였다. 이것을 해결하기 위해서 동일한 카테고리에 들어있는 layer는 동일한 스타일을 적용해주어야만 했다(이 과정에서 지도를 좀 더 자연스럽게 보이게하기 위해서 세부적으로 나누는 방법도 고려하였지만, 프로젝트가 상업적 목적보다는 학습적인 성격을 띄고있어 더욱더 세부적으로 나누는 것이 실력향상에 도움이되지 않는다는 멘토님의 조언을 받았다).

자. 같은 카테고리의 모든 레이어들은 이제 동일한 스타일을 가지게 되었다. 그리고 세 번째 문제가 생겼다. 세 번째 문제는 최적화이다. mapbox가 제공한 레이어들을 불러와서 다시 우리가 원하는대로 다시 스타일링을 하는 것은 일을 두 번하는 것이라고 여겨졌다. 성능 개선을 위해서는 한 번으로 줄일 필요가 있었다. 해결방법은 간단했다. mapbox에서 기본 layer들을 받아오는 것이 아닌, 네이버에서 제공해주신 것처럼 source만 제공받고 우리가 필요한 조건과 데이터에 따라서 우리가 직접 레이어를 만들어주고 원하는 스타일링을 해주는 것이었다. 최종적으로는 3500줄정도의 json파일을 만들어서 렌더링시켜주게 되었다.

단순 노가다라고 볼 수도 있지만 많은 데이터를 우리가 원하는 조건으로 다루는 경험이 처음이었던지라 굉장히 많은 시행착오가 있었고 거기서 배우는 점도 많았다. 지도 라이브러리를 다루면서 영어로 제공되는 거대한 라이브러리를 사용하는 것에대한 두려움을 많이 사라지게해주기도 했다. 지도를 다루면서 UI와 UX적으로도 굉장히 많이 생각해 볼 수 있었고 무엇보다 기능들이 화려하게 보여지니까 성취감도 컸다. 웹 워커를 통해서 스타일 렌더링 최적화를 해보고 싶기도했지만 mapbox에서 이미 웹 워커를 사용중이더라ㅎㅎ 이제 다음으로 넘어가보자

### 지도 위에 그림그리기 (feat. open layers)

앞서 레이어들을 설명한 경험처럼 구현한 기능들과 동작방법을 설명할 수 있으면 좋겠지만 보안상 머리속에만 남겨두고 어떤 일을 하였으며, 어떤 좌표 기능들을 제공하는지에 대해서만 간단히 언급하고자 한다.(그래서 분량이 적다...). 프로젝트 `라벨어스`의 모습

![labelearth](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/develop/images/labelearth.png)

3학년 1학기를 다닌 후에 진행한 프로젝트이다. 사진에 보이는 것처럼 라벨링을 함으로서 인공지능이 학습하기 위한 데이터를 만들어주는 도구이다. 앞선 레이어들을 다루는 것과는 달리 지도의 좌표를 계산함으로서 생성/이동/복사 등의 기능을 제공한다.

라벨링을 하는 기능은 위의 사진의 라벨어스뿐만 아니라 [오비전](https://recruit.si-analytics.ai/603e1889-9af8-4b4e-8610-4161e6193afb)이라는 다른 프로젝트에도 들어가는 기능이다. 따라서 private한 공통 라이브러리로 분리되어서 구현되었으며 나는 그 중 3가지 기능을 구현하였다. 솔직히 라이브러리의 함수들을 이용해서 원하는 기능을 구현하는 것은 크게 어렵지 않았다. 하지만 우리가 원하는대로 동작하기 위해서 라이브러리의 함수를 사용하지 않고 직접 구현된 기능들이 기존에 있었고, 나는 본래 직접 구현하는 것을 좋아하는지라 라이브러리를 사용하지 않고 직접 기능을 구현해보는 것을 시도해보았다.

구현해본 기능은 polygon을 수정할 수 있는 기능으로 [여기](https://openlayers.org/en/latest/examples/draw-and-modify-features.html)에 나오는 예시처럼 Modify객체를 이용하면 쉽게 구현할 수 있었다(프로젝트 구조상 몇 가지 제약을 더 걸어주어야헸다). 약간의 차별을 두기 위해서 선분을 클릭한 후 mouseover한 부분이 클릭한 부분과 같다면 만들어진 점을 제거하기로 하였다. 몇 가지 수학적 공식을 써야했지만 구현 자체에는 시간이 오래 걸리지는 않았다. 하지만 직접 구현해보면서 구성요소를 좀 더 알 수 있었다.

...

## 끝내며

나한테 지도는 아직도 어렵다. 라이브러리의 문서는 매우 방대하고 어떻게 테스트를 해야할지 감도 잘 잡히지 않는다. 두 번의 지도 경험을 하긴 했지만 개발적인 지식만 늘었을 뿐 아직 지도 자체에 대한 지식은 현저히 떨어진다고 생각한다.

mapbox | open layers | lefleat. 여기 3대 지도 라이브러리가 있다. 나는 이 중에 이미 두 가지를 다루어보았다. 다음번에 개인 프로젝트를 진행한다면 lefleat을 한번 사용해서 해보고 싶다.