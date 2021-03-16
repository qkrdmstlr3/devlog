---
title: OS... 01 - 운영체제란
date: '2021-03-16'
category: cs
---

## OS란?

Application program과 hardware사이의 인터페이스

![os-structure](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/cs/images/os-structure.png)

- 자원 관리의 역할을 한다.
- 응용프로그램의 소프트웨어의 실행을 제어한다.
- 사람이 사용할 때의 편리성을 제공한다.
- 에러를 감지하고 처리.
- 사용 통계를 수집하고 제공.

### 커널

컴퓨터가 켜지면 Storage(SSD, HDD)에 있던 OS의 핵심기능들이 메모리로 이동되서 실행됨. 이것을 `커널`이라고 부른다. 자주 사용되는 함수들을 포함하고 있다.

프로세서(CPU)는 H/W에서 데이터를 가져오는 것이 아닌, 메모리에서 data를 가져오도록 만들어졌다. 그것이 더 빠르기 때문이다.

### OS의 발달

초기에는 OS가 존재하지 않았고, 사람이 수동적으로 통제하였다. 이후 Batch System이 등장하였는데, 초기에는 Uni-programming으로 동작하였다. `Uni-programming`은 하나의 프로그램이 종료되기 전에는 다른 프로그램을 실행하지 못하는 방식이었는데, 프로그램이 I/O작업을 하느라 CPU가 쉬고 있는데도 다른 프로그램을 동작시키지 못한다는 단점이 있었다.

이후 메모리의 용량이 커지면서 많은 양의 프로그램들을 담아둘 수 있게 되었고, Multiprogramming이 등장하였다. `Multiprogramming`은 프로그램이 I/O작업을 하느라 CPU가 쉬게 되면 다른 프로그램을 돌릴 수 있다는 장점을 가지고 있었다.

![time-sharing](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/cs/images/time-sharing.png)

이후 `Time Sharing`이라는 방법도 도입되었다. Multiprogramming방식은 한 프로그램이 끝나거나 이벤트(I/O등)를 받아서 CPU가 쉬기 전에는 그 프로그램만을 동작해야 한다는 단점이 있었다. 이 방식은 기준이 되는 시간인 time slice를 정해놓고 프로그램을 돌리게 된다. 해당 프로그램이 time slice만큼의 시간을 사용하게 되면 무조건 다음 프로그램으로 넘어가는 방식이다. 이 방식은 Multiprogramming을 완전히 대체하는 것이 아니라 경우에 따라 두 개 중 선택해서 사용하였다.

## Time Sharing과 Multiprogramming

위에서 언급하였듯 두 가지 방식 모두 현재 사용 중인 방식이며, CPU가 프로그램들을 실행하는 방식들이다.

### Multiprogramming

- batch processing, background processing등에 사용되며 순차처리(일괄처리)에 유용하다.
- background processing(로그 처리, 스케쥴링, 사용자 통보, 모니터링 등)
- 더 좋은 성능(단위 시간에 완료된 일의 수)을 보여준다.

### Time sharing

- interactive processing, foreground processing등에 사용된다.
- 주기적으로 실행 프로그램을 강제로 바꾸기 때문에 평균 `응답시간`(명령을 줄 때부터 명령이 실행될 때까지)에 유리하다.
- 자주 바꾸기 때문에 Dispatcher(프로그램을 바꿔주는 os의 역할)가 많이 실행된다. 바꾸는 과정에서 처리해야할 일들이 있기 때문에 전체적인 속도는 multiprogramming보다 느리다.

### Process Scheduling

다음에 실행될 프로그램을 결정해주는 것으로 `스케쥴러`라는 커널 함수에 의해 실행된다. 대기시간과 우선순위를 고려해서 결정한다.

## 운영체제의 주요 역할

- 프로세스 관리
- 메인 메모리 관리
- 파일 관리
- I/O 관리
- 보조 저장장치 관리
- 보안
- 네트워킹
- Command-Interpreter System

### Command-Interpreter System

사용자가 CLI또는 GUI를 이용해 OS에게 내리는 명령어를 해석하는 시스템. 사용자나 program의 명령어가 실행되면 system call을 통해서 OS에게 전달되게 된다.

`system call`은 실행중인 program과 OS사이의 인터페이스라고 볼 수 있으며, 커널 함수들은 system call에 의해서 호출되어진다.

## 커널의 종류

![kernel-sort](https://raw.githubusercontent.com/qkrdmstlr3/devlog/main/posts/contents/cs/images/kernel-sort.png)

### Monolithic kernel

한 커널에 모든 기능들이 들어가 있는 구조를 가진다. 유지보수가 불편하다는 단점이 있다. 리눅스가 이 구조를 가진다.

### Micro kernel

완전 핵심 기능들(프로세스 관리 등)을 제외한 기능들을 커널 외부의 응용 프로그램으로 빼내어서 kernel의 크기가 줄어든 구조를 가진다. 또한 윈도우가 이 구조로 만들어졌다.

monolithic kernel의 경우 내부의 기능 하나를 업데이트 시 kernel자체를 껐다 켜야한다. 그렇지만 외부에 기능을 빼놓은 micro kernel은 업데이트 후 해당 기능(프로그램)만 껐다 키면 되는 장점을 가진다. 하지만 응용 프로그램으로 빼놓은 기능에 접근하려면 kernel밖으로 나가야 하기 때문에 시간이 많이 걸린다는 단점이 있다(최근에는 발전해서 성능 차이가 많이 줄어들었다).
