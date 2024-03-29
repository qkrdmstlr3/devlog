---
id: 9
title: ReScript로 블로그 재구현하기
date: '2021-11-18'
category: develop
summary: 블로그를 신생언어인 ReScript로 마이그레이션한 결과에 대해서 소개하는 글
---

현재는 타입스크립트로 마이그레이션되었으며 [여기](https://github.com/qkrdmstlr3/devlog/tree/v2)에서 소스코드를 확인하실수 있습니다.

## 계기

<img src="https://techstack-generator.vercel.app/rescript-icon.svg" width="200" />

ReScript에 대한 설명보다는 ReScript를 사용이유와 사용하며 겪은 느낌, 오픈소스에 기여한 경험등을 적었다.

블로그 코드를 리팩토링을 한 번 해야겠다는 생각은 계속하고있었다. 기존에 ts로 구현한 로직이 너무 더럽기도 하였고, 게임의 상태를 관리하기 위해서 구조 자체가 복잡했다. 다른 사이드 이펙트가 발생할 여지도 있었다. 그러던 중 작년 FE-CONF를 보다 `ReScript`라는 친구를 알게되었고, 이것으로 아예 재구현을 해보기로 마음먹었다.

가장 큰 이유로는 새로운 언어나 기술을 배우고 싶었지만 단순히 기술의 깊이 보다는 너비를 늘리는 느낌이라 새로운 것을 배우는데 약간의 거부감이 있었다. 주력 언어인 TS를 완벽하게 다룬다고 생각하지는 않는 상태에서 RUST니 Flutter니 확장시키는 것은 내 목표와는 조금 맞지않는다고할까? 그럼에도 불구하고 TS가 아닌 ReScript를 선택한 것은 다음과 같은 이유에서이다.

둘 다 JS에서 발전되었지만 TS가 JS의 슈퍼셋이라면 ReScript는 서브셋이라고 볼 수 있다. TS와 ReScript와의 차이점은 [여기](https://rescript-lang.org/docs/manual/latest/introduction#difference-vs-typescript)에 자세히 설명되어있다. 또한 ReScript는 OCaml이라는 함수형언어를 기본으로 하고 있기 때문에 강력한 타입을 가지고 있다. any따위는 허용되지 않는다는 것이다. 그외에도 불변성이나 pattern-matching같은 함수형언어의 특징들을 가지고있다. OCaml을 3학년 1학기때 배웠었는데 그 때 무척이나 재밌게 배웠던지라 한번 활용해보고 싶기도해서 좋은 경험이 될 수 있을 것이라고 생각했다. 결과적으로는 `ReScript를 사용해보며 TS와 뭐가 다른지 직접 겪어보자`를 목표로 잡고 재구현을 진행하였다.

## 사용 후기

![rescript-devlog](/develop/images/rescript-devlog.png)

### 👍 Type & Pattern Matching

가장 큰 차이를 느꼈던 점은 강력한 타입이었다. 내 블로그에서는 단순히 재미를 위한 용도인 게임이 구현되어있다. 기존 코드에서는 매우 복잡하고 더러운 방식으로 이것을 관리하고 있었다(물론 개강전까지 급하게 만드느라 앞뒤 안재고 구현해버린 내 잘못이 크다).

![rescript-compare](/develop/code/rescript-compare.png)

좌측 사진은 이전의 TS코드이고 우측은 ReScript코드이다. 정말 부끄러운 코드이지만 TS로 구현할 당시에는 enum등을 사용하지 않고 아무생각없이 숫자로 구별하였었는데, ReScript에서는 강력한 타입을 지원하기 때문에 기존에 숫자로 표현하던 상태값을 각각의 타입으로 구현할 수 있게되었다.

```rescript
let getGameStatusText = (
  ~gameState: GameContext.contextType,
  ~myPokemon: PokemonContext.pokemonStatus,
  ~enemyPokemon: PokemonContext.pokemonStatus,
) => {
  switch gameState.gameStatus {
    |LOADING => ""
    |APPEAR_ENEMY => `앗! 야생의\n `++enemyPokemon.name++`(이)가 나타났다!`
    |SUMMON_MY | CHANGE_POKEMON(_) => `가랏! `++myPokemon.name++`!`
    |ENEMY_ATTACK =>
      let skillName = enemyPokemon.skill[enemyPokemon.skillIndex].name
      `야생의 `++enemyPokemon.name++`의 `++skillName++`!`
    |MY_DAMAGE(_) => `내 `++myPokemon.name++`(이)가 피해를 입었다!`
    |MY_ATTACK =>
      let skillName = myPokemon.skill[myPokemon.skillIndex].name
      `내 `++myPokemon.name++`의 `++skillName++`!`
    |ENEMY_DAMAGE(_) => `야생의 `++enemyPokemon.name++`(이)가 피해를 입었다!`
    |FINISH_GAME => `목록으로 이동한다!!`
    |MY_DEAD => `내 `++myPokemon.name++`(이)가 쓰러졌다!`
    |SELECT_NAV | FIGHT_NAV | _ => ""
  }
}
```

타입과 함께 패턴매칭을 함께 사용함으로써 사이드이펙트가 거의 일어나지 않는 구현할 수 있는 시너지를 보인다. 조금이라도 타입이 맞지 않는다면 컴파일에러가 발생하게된다. TS를 사용하면서 좀 더 조건이 강화되었으면 좋겠다는 생각을 했었는데, 이것들을 사용하면서 게임자체의 상태관리를 기존 코드보다 좀 더 직관적으로 작성할 수 있는 것이 정말 좋았다. 물론 직관적으로 변하기는 했지만 여러가지 조건들에 따라서 상황들이 바뀌다보니 헷갈리는 부분이 많다. 이러한 문제는 xstate라는 라이브러리를 도입해서 상태관리를 하는 것도 계획중이다.

### 👍 컴파일

ReScript를 컴파일하게되면 파일과 같은 위치에 js파일이 생성된다. 처음 사용하는 입장으로써 구동 시 잘못된 부분이 있다면 익숙한 js파일을 살펴봄으로써 문제점을 쉽게 찾을 수 있는점이 좋았다. pattern-matching을 컴파일하면 if문으로 만들어지기도 하고, switch나 삼항연산자로 만들어지기도 하던데 이것도 신기했다.

### 👍 모듈

ReScript를 사용하면 import/export에서 해방될 수 있다. 모든 파일은 하나의 모듈로서 동작한다(언어의 기반이 되는 OCaml과 동일하다).

### 👎 완성도

언어 자체의 완성도는 마음에 들었지만, 아직은 인프라가 부족하다고 생각한다. BuckleScript를 확장해서 만든 언어라서 그런지 설정파일명도 bsconfig.json이었고, 필요한 라이브러리명들도 bs가 들어가는 것들이 많았다. 다른 언어를 기반으로하는 신생언어이다보니 그런가 살짝 조잡하다는 느낌이 들었다.

## 오픈소스 기여

![rescript-opensource](/develop/images/rescript-opensource.png)

오픈소스에 기여하는 학교수업이 있어 ReScript한국어 레포에 기여를 해보았다. 팀원마다 사용하는 주력언어가 달라 오픈소스 선정에 어려움이 있었지만, 다른 수업시간에 배운 OCaml을 기반으로 한 rescript의 번역작업이라면 비교적 쉽게 해낼 수 있겠다고 생각하고 진행하였다. 나는 `인라인 변수 사용법`, `리액트 라우터` 두 페이지에 대한 번역작업을 진행하였고 현재는 머지되어 공식 홈페이지에 반영된 상태이다.

오픈소스에 기여한다고 하면 뭔가 흐릿한 느낌이었는데, 한 번 해보고나니 앞으로는 좀 더 적극적으로 기여방안을 찾아낼 수 있을 것 같다.
