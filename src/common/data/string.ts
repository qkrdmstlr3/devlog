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
 * 9 : 적 포켓몬이 죽음
 * 10 : 내 포켓몬 교체 [TextBox Component]
 * 11 : 화면 교체 멘트
 */

export const textData = {
  1: () => '앗! 야생의\n 리액트(이)가 나타났다!',
  2: () => '가랏! 리액트!',
  3: () => '', // SelectBox Component
  4: () => '', // FightBox Component
  5: (mySkill: string, enemySkill: string): string => {
    return `상대 리액트의 ${enemySkill ? enemySkill : mySkill}!`;
  },
  6: (_: string, __: string, name: string): string =>
    `내 ${name}이 피해를 입었다!`,
  7: (mySkill: string, enemySkill: string, name: string) => {
    return `내 ${name}의 ${enemySkill ? enemySkill : mySkill}!`;
  },
  8: () => `상대 리액트가 피해를 입었다!`,
  9: () => '상대 리액트는 쓰러졌다!',
  10: () => '',
  11: () => '목록으로 이동한다!',
};
