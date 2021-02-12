import { atomFamily, atom, selector } from 'recoil';

/**
 * Current Status : 현재 게임 상태
 * 1 : 초기 렌더링 (야생의 ~가 나타났다!) [TextBox Component]
 * 2 : 포켓몬 소환 (가랏 ~~~!) [TextBox Component]
 * 3 : 선택지 화면 (싸우기 가방 글목록) [SelectBox Component]
 * 4 : 상대 포켓몬 공격 [TextBox Component]
 * 5 : 내 포켓몬의 닳은 체력 [TextBox Component]
 * 6 : 내 포켓몬 공격 [TextBox Component]
 * 7 : 적 포켓몬의 달흔 체력 [TextBox Component]
 * 8 : 내 포켓몬 교체 [TextBox Component]
 */

export const gameState = atom({
  key: 'gameState',
  default: {
    loading: true,
    gameStatus: 1,
  },
});
