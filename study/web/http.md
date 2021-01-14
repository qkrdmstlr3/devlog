# HTTP

## http

hypertext transfer protocol의 약자로 W3상에서 정보를 주고받을 수 있는 프로토콜 주로 TCP/IP를 사용하고 HTTP/3부터는 UDP를 사용하며, 80번 포트를 사용한다.

### 특성

[HTTP 특성](https://victorydntmd.tistory.com/286)

1. 비 연결성

클라이언트가 서버와 한 번 연결을 맺은 후, 클라이언트 요청에 대해 서버가 응답을 마치면 맺었던 연결을 끊어버림. 리소스를 줄이기 위함. 연결/해제에 대한 오버헤드가 발생한다는 단점도 있다.

2. 무상태

서버가 클라이언트를 식별할 수 없는 것. 쿠키와 세션등을 통해서 클라이언트를 식별하게 할 수 있다.

### 단점

- 패킷 탈취로 인해서 정보를 가로챌 수 있음
- 변조, 위장이 가능

## https

기존의 http를 암호화한 프로토콜로 보안이 강화되었다. 포트로는 443을 사용

s는 원래 SSL(Secure Socket Layer)의 약자였지만 TLS(Transport Layer Security)로 명칭이 변경됨. 보안 프로토콜.

TCP로 연결이 된 후 TLS로 암호화 설정을 하고 통신을 함.

### 통신 방법

[통신 방법](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/network/https.md)

[통신 방법2](https://wayhome25.github.io/cs/2018/03/11/ssl-https/)

SSL인증서를 이용한다.

: 클라이언트와 서버의 통신을 공인된 제 3자(인증 기관 CA)가 보장해주는 문서
