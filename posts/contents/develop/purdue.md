---
id: 12
title: 퍼듀대학교 - 캡스톤 프로젝트
date: '2022-03-11'
category: develop
summary: 3학년 겨울방학 퍼듀대학교에서 수행한 프로젝트에 대해 기술한 글
---

3학년 겨울방학 두 달간 미국의 퍼듀대학교에서 수행한 프로젝트에 대해서 기술한다. 우리의 프로젝트를 간단히 요약하자면 `YOLOX모델을 통한 쓰러진 나무 탐지 및 시각화`이다. 이 글은 프로젝트 기간동안 작성한 IEEE양식에 맞춰 작성된 논문에 기반한 중간/최종발표를 기반으로 쓰여졌으며 내가 경험했던 부분들에 대한 설명들을 덧붙였다. 따라서 프로젝트의 Introduction, Methodology, Implementation, Conclusion순으로 설명하며 Methodology내용 중 일부분은 Implementation에 통합하여 설명한다.

퍼듀 대학교에서의 개발 생활은 [여기](https://www.shellboylog.com/life/11)에서 간략히 언급한다.

## 프로젝트 주제 선정(Introduction)

> **Cost-Effective Solution for Fallen Tree Recognition by applying YOLOX Object Detecting Algorithm and Visualization**

먼저 프로젝트 결과로 작성된 논문의 제목은 위와 같다. 처음에 제시받은 주제는 `UAV ground detection and tracking systems`으로 나무를 탐지하는 것이었다. 따라서 우리는 UAV를 이용해서 모든 나무들의 종류를 딥러닝 모델을 이용해서 학습/분류하고 이 결과를 시각화하는 것으로 초점을 잡았었다. 하지만 두 가지 문제로 방향을 바꾸게 되었다.

하나는 데이터셋을 모으기 힘들다는 것이다. 조교님은 논문을 publish하려면 학습 시에 사용하는 데이터가 인터넷에서 모은 것이 아닌 직접 수집한 것을 이용하는 것이 더 좋을 거라고 말씀하셨다. 데이터셋은 교수님의 나무 농장이 있기 때문에 그곳에서 모으면 된다는 설명도 해주셨다. 하지만 나무농장에 다양한 종류의 나무가 있는 것이 아닌 점이 문제로 작용했고, 따라서 우리가 필요한 환경과 맞지 않았다. 두 번째는 학습이 어렵다는 것이다. 나무를 구별하는 방법으로 나뭇잎을 학습시키려 하였지만 상공에서 UAV로 모은 사진은 화소가 높은(6K) UAV라 하더라도 정확히 나뭇잎까지 촬영하는 것은 무리였다.

농장에 어떤 종류의 나무가 있는지, 면적은 어떠한지, 우리가 원하는 정보를 얻을 수는 있는지 확실치 않았기에 농장주인 Tony Smith교수님의 친구분인 Eric Matson교수님께 도움을 청하였다. 그렇게해서 결정된 주제가 `쓰러진 나무 탐색`이다.

### 필요성 찾기

연구에 앞서 우리는 '왜 우리가 쓰러진 나무를 탐지하려하는가, 기존 연구와는 어떤 차이점이 있는가'에 대한 설명이 필요했다. 우리는 아래와 같은 이유들을 필요성과 노벨티로 언급했다.

먼저 현재 미국은 열대성 저기압으로 인해 농.림 산업의 피해가 크다. 강풍이 나무뿌리를 뽑거나 부러뜨릴 정도로 강력해 결국 생태계를 훼손하고 금전적 손실을 주기 때문에 피해가 심각하다. 이에 대해서 많은 연구들이 진행되었고, 현재 진행된 대부분의 연구들은 LIDAR센서를 사용하였다. 하지만 이와 같은 장비들은 고성능 장비로 소규모 농장주들이 사용하기에는 부담이 크다. 소규모 농장주들에게 비용효율적인 방식을 제공해주기위해 우리 연구에서는 카메라가 장착된 UAV를 활용한 연구를 진행한다.

## 방법론(Methodology)

### 데이터 수집

![purdue-dataset](/develop/images/purdue-dataset.png)

데이터는 눈이 오지 않은 날 , 눈이 온 날 이틀 동안 수집되었으며, 수집된 장소는 동일하며, 나는 눈이 온 이후에 나무 농장을 방문하였다. UAV자격증이 교수님밖에 없었던지라, 당시 35~40미터 고도로 UAV를 날려달라고 교수님께 요청하였고 16:30부터 17:10까지 평균 화씨 24도의 온도에서 데이터를 수집하였다. 위 사진은 수집한 비디오의 일부분이다. 데이터 수집에는 고해상도 이미지를 위해서 Autel Robotics EVO 2 pro 6K Camera UAV를 사용하였다.

### 모델 선정

우리 팀 4명 전원이 딥러닝 경험이 전무하였고, 이는 모델 선정부터 난관이었다. Object detection을 사용하기로 결정한 후 1-stage-detector와 2-stage-detector 중 어떤 것을 사용하여야할지 고민하였고, 국내의 교수님께 메일을 드려 도움을 청하기도 했다. 교수님께서 추천해주신 방법은 플랫폼인 detectron2를 사용하는 것이었지만 많은 시행착오와 부족한 시간이 발목을 잡았다. 다행히 교수님께서 1-stage냐 2-stage냐에 상관없이 최근에는 최신 모델일 수록 빠른 경향을 보인다고 말씀해주셨기 때문에 성능도 좋고, 사용하기 편한 `YOLOv5`를 선택해서 진행하게 되었다. 나와 팀원 한 명이 YOLOv5를 맡아서 진행하였고, 나머지 친구들은 논문에 집중하였다.

하지만 Object Detection에 좀 더 익숙해진 이후 YOLO계열의 더욱 최신모델인 `YOLOX`를 알게 되고, 간단한 실험 결과 더 좋은 분석결과를 내는 것을 본 후 모델을 변경하기로 결정하였다. YOLOv5의 공식 논문이 이때까지 publish되지 않아 논문작성에 어려움을 더한 것도 한 몫하였다. 이후 퍼듀 대학교 학생 한 명이 YOLOX개발에 붙게 되었고 나는 시각화 프론트엔드 작업을 위해서 떨어져나왔다. 이때가 프로젝트가 한 달정도 진행된 중간 발표 이후의 시점으로 주제선정과 더불어 가장 힘들었던 과정이었다.

### YOLOX

YOLOX는 1-step-detector로 classification(객체 분류)과 localization(객체 위치)문제를 동시에 해결한다. YOLOX는 특징을 추출하는 DarkNet53으로 구동되는 백본 네트워크, 다양한 스케일에서 특징 맵을 추출하고 스케일을 변경하여 이를 강화하는 Feature Pyramid Network로 구성된다. 이에 더해 classification과 localization을 분리된 head로 구별하는 decoupled head방식을 사용해 coupled head에 비해서 높은 정확도를 보여준다.

![purdue-anchor](/develop/images/purdue-anchor.png)

YOLOX가 이전 YOLO 시리즈와 다른 가장 큰 특징은 Anchor-free 방식을 적용했다는 것이다. 왼쪽 그림과 같이 Anchor-based 방식은 feature map에 사전 정의된 앵커 박스와 Ground Truth를 비교하여 object의 위치와 크기를 얻는 방법이다. 이렇게 사전 지식을 활용하거나 모든 가능한 앵커 박스를 고려하는 방식과 달리, 오른쪽 그림의 Anchor-free 방식은 화살표의 교차점을 기준으로 특징 맵의 각 픽셀 좌표에서 직접적으로 object 크기를 얻는다. Anchor-based 방식은 모델을 복잡하게하며 유연성을 감소시키나 Anchor-free 방식은 anchor에 관련된 hyperparameter를 사용하지 않아 학습과 테스트 시간이 단축되고 필요 메모리가 감소한다.

## 구현(Implementation)

### 데이터 전처리

수집된 50여개의 비디오는 10fps단위로 나뉘어져 총 2200정도의 이미지를 얻을 수 있었으며, 적합하지 않은 이미지들을 제외한 1603개의 이미지가 Annotating에 사용되었다. Annotation도구로는 `Roboflow`를 사용하였다.

![purdue-classes](/develop/images/purdue-classes.png)

Annotation시 클래스는 세 개로 나뉜다. 먼저 완전히 지면에 맞닿은채 쓰러진 나무인 `Down`, 찢어진 스트링 치즈처럼 나무 밑동과 나무 기둥이 분리되어 붙어있는 경우는 `Broken`, 멀쩡히 피해없이 서 있는 나무는 `Normal`. 우리는 이 중에서 Down과 Broken을 쓰러진 나무로 규정하고 이것들을 시각화해서 보여주어야했다.

### YOLOX 훈련

![purdue-evaluation](/develop/images/purdue-yolox-model.png)

YOLOX는 세부적으로 s,m,l,x로 나눌 수 있다. 우리는 이것들 중 정확도가 가장 높은 YOLOX-x를 선택하였다. 시간이 오래 걸리긴 하지만 우리 연구가 실시간을 바탕으로 하지않기 때문이다.

Annotation을 마치고 export된 VOC Dataset의 압축을 풀면 test, train, valid 폴더가 생성된다. train.valid폴더에는 각 이미지의 XML, jpg파일이 있고, xml파일에는 Annotating시 표기한 각 bounding box별 class name(Down, Broken, Normal)과 좌표값이 저장되어있다. 이들을 사용해서 YOLOX-x모델의 학습을 진행하였다.

### YOLOX 결과

![purdue-evaluation](/develop/images/purdue-evaluation.png)

train data로 사용된 1603개의 이미지들의 클래스 별 비율(Normal:Down:Broken)은 62:35:2 정도이다. 하이퍼 파라미터로는 300 Epoch, 0.05 learning rate, 0.0005 weight decay를 가진다. Table 1의 mAP 결과의 경우 Epoch이 300일 경우가 500일 경우보다 높게 나오는 것을 볼 수 있다. 무조건 Epoch이 높을수록 좋은 것이 아니라는 것을 알 수 있으며, 우리 팀원은 이것을 조절해가며 최적의 값이 300이라고 판단하였다.

앞서 우리의 첫 모델이 YOLOv5라고 언급했었다. 우리는 YOLOX가 더 좋다는 것을 증명하기 위하여 같은 환경에서 두 가지를 비교하였다. Table2는 YOLOv5모델과 YOLOX모델 사이의 정확성 차이를 보여준다. 마찬가지로 mAP 값을 보면 YOLOX가 YOLOv5에 비해서 좀 더 좋은 결과를 내고 있음을 알 수 있다. 이와 더불어 YOLOX가 같은 confidence threshold에서 fallen tree 객체에 대한 검출 정확도가 높고, 무엇보다 train 속도면에서 YOLOX가 2.5배 빨랐다.

### 시각화

![purdue-architecture](/develop/images/purdue-architecture.png)

시각화를 위해서 위와 같은 구조를 사용하였다. 물론 프론트는 내가 담당하였다. 이미지를 받으면 받은 이미지를 백엔드에 전달하고, 백엔드는 이미지를 s3에 저장하면서 학습된 YOLOX 모델을 사용해 분석한다. 분석 결과는 mysql database에 저장되며 프론트로 반환된다. 이후 프론트는 마커 현황을 업데이트하는 방식이다.

구현 당시 Django와 YOLOX모델을 연결하는데 약간의 문제가 있었다고 들었다. S3에서 이미지를 불러와서 바로 학습을 시키는 것이 불가능했다고 한 것 같은데, 폴더 내 이미지로는 정상 동작이 가능한 것을 확인하고, 이미지를 폴더에 다운 받은 뒤 학습 후 제거하는 방식으로 해결하였다고한다.

![purdue-visualization](/develop/images/purdue-visualization.png)

위의 이미지는 시각화로 보여진 마커를 클릭했을 때 나오는 모달을 나타낸 것이며, [여기에서](https://drive.google.com/file/d/1VaoYPoVfPTFeuzbnUYOlrPtaQSpXxBmt/view?usp=sharing) 위에서 설명한 흐름의 동작을 확인해 볼 수 있다.

## 결론(Conclusion)

논문의 내용을 간단하게 설명하자면, YOLOX를 활용하여 쓰러진 나무를 탐지한 연구가 현재까지는 존재하지 않기 때문에 본 연구 자체로 의미가 있다. 하지만 그에 그치지 않고, 분석에 대해서 높은 정확도를 보여주고 있으며, 이에 따라 앞서 Introduction에서 설명한 우리 연구의 필요성을 만족시킬 수 있을 것을 기대된다. 또한 시각화 도구를 통해 얻은 결과는 농업보험, 정부 보상 청구, 생태 모니터링에 활용가능할 것이다. 다만 GPS기능이 내장된 UAV를 사용한다면 좀 더 사용자친화적인 시각화 도구를 제공할 수 있을 것이다. 이 정도로 요약할 수 있겠다.

## 후기

데이터를 만드는 Annotating작업이라던가 딥러닝 모델에 대한 근본적인 이해등 새로 접하는 분야라 많은 어려움이 있었다. 그럼에도 불구하고 팀원들이 열심히 해준 덕분에 좋은 결과를 낼 수 있었으며, 프로젝트를 성공적으로 마무리 할 수 있었다.

논문을 쓰기 위해서는 다른 논문들을 근거로 들어야했고, 다른 논문들을 찾는 과정은 녹록치 않았다. 논문쓰는 것이 나에게는 가장 어렵고 싫은 작업이었고 이로 인해 대학원에 대한 생각은 전혀 하지 않을 수 있게 되었다.

두 달간의 기간동안 즐거운 일도, 힘든 일도, 행복한 일도 많았다. 항상 우리의 상태를 체크해주며 연구를 성공적으로 마칠 수 있게 도와주신 Eric교수님, 부족한 팀장을 만나 고생한 우리 팀원들에게 고맙다는 말을 전하며 글을 마친다.
