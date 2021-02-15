/**
 * Current Status : 현재 게임 상태
 * 1 : 초기 렌더링 (야생의 ~가 나타났다!) [TextBox Component]
 * 2 : 포켓몬 소환 (가랏 ~~~!) [TextBox Component]
 * 3 : 선택지 화면 (싸우기 가방 글목록) [SelectBox Component]
 * 4 : 선택지 화면 (싸우기 선택지) [FightBox Component]
 * 5 : 상대 포켓몬 공격 [TextBox Component]
 * 6 : 내 포켓몬의 닳은 체력 [TextBox Component]
 * 7 : 내 포켓몬 공격 [TextBox Component]
 * 8 : 적 포켓몬의 닳은 체력 [TextBox Component]
 * 9 : 내 포켓몬 교체 [TextBox Component]
 */

export const textData = {
  1: () => '앗! 야생의\n 리액트(이)가 나타났다!',
  2: () => '가랏! 리액트!',
  3: () => '', // SelectBox Component
};
