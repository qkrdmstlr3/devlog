import { atomFamily, atom, selector } from 'recoil';
import { EnemyPokemon } from '../../common/data/pokemon';

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
 * 10 : 내 포켓몬 교체 [TextBox Component] > 3과 동일?
 */

export const gameState = atom({
  key: 'gameState',
  default: {
    /** 게임 로딩 중 */
    loading: true,
    /** 게임 진행 상태 */
    gameStatus: 1,
    /** 현재 내 포켓몬 종류 */
    name: 'react',
    /** 적 포켓몬 전체 체력 */
    enemyFullHP: EnemyPokemon.hp,
    /** 적 포켓몬 현재 체력 */
    enemyCurrentHP: EnemyPokemon.hp,
    /** 내 포켓몬 스킬 index */
    mySkill: -1,
    /** 적 포켓몬 스킬 index */
    enemySkill: -1,
    /** 포켓몬 리스트를 띄워야 되는지 확인 */
    isPokemonListOpen: false,
  },
});
