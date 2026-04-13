export interface SetBonus {
  requiredCount: number;
  stats?: {
    atkPercent?: number;
    defPercent?: number;
    hpPercent?: number;
    mpPercent?: number;
    critRateFlat?: number;
    critDmgPercent?: number;
  };
  active?: {
    type: 'reflect' | 'lifesteal_on_crit' | 'hp_regen_per_turn' | 'mp_regen_per_turn' | 'bonus_damage';
    chance?: number;   // 발동 확률 (0~1)
    value: number;     // % 값
  };
  description: string;
}

export interface SetDefinition {
  id: string;
  name: string;
  pieces: string[];   // itemId 목록
  bonuses: SetBonus[];
}

export const SETS: SetDefinition[] = [
  // ── 기사: 아지노스의 전투검 ──
  {
    id: 'set_dk_warglaive',
    name: '아지노스의 전투검',
    pieces: ['leg_warglaive_mh', 'leg_warglaive_oh'],
    bonuses: [
      { requiredCount: 2, stats: { atkPercent: 20, critRateFlat: 0.10 }, description: '공격력 +20%, 치명타율 +10%' },
    ],
  },
  // ── 기사: 지옥무쇠 ──
  {
    id: 'set_dk_felsteel',
    name: '지옥무쇠',
    pieces: ['dk_unc_sword_01', 'dk_unc_shield_01', 'dk_unc_chest_01', 'dk_unc_legs_01', 'dk_unc_helm_01', 'dk_unc_boots_01'],
    bonuses: [
      { requiredCount: 2, stats: { defPercent: 15 }, description: '방어력 +15%' },
      { requiredCount: 5, stats: { hpPercent: 20 }, active: { type: 'reflect', chance: 0.20, value: 50 }, description: 'HP +20%, 피격 시 20% 확률로 피해 50% 반사' },
    ],
  },
  // ── 도적: 아지노스의 전투검 ──
  {
    id: 'set_as_warglaive',
    name: '아지노스의 전투검',
    pieces: ['leg_warglaive_mh_rogue', 'leg_warglaive_oh_rogue'],
    bonuses: [
      { requiredCount: 2, stats: { atkPercent: 25, critDmgPercent: 15 }, description: '공격력 +25%, 치명타 피해 +15%' },
    ],
  },
  // ── 도적: 황무지방랑자 ──
  {
    id: 'set_as_wastewanderer',
    name: '황무지방랑자',
    pieces: ['as_rar_chest_01', 'as_rar_legs_01', 'as_rar_helm_01', 'as_rar_shoulders_01', 'as_rar_gloves_01'],
    bonuses: [
      { requiredCount: 2, stats: { atkPercent: 10 }, description: '공격력 +10%' },
      { requiredCount: 3, stats: { critRateFlat: 0.10 }, description: '치명타율 +10%' },
      { requiredCount: 5, active: { type: 'lifesteal_on_crit', value: 10 }, description: '크리티컬 시 HP 10% 흡수' },
    ],
  },
  // ── 사냥꾼: 야수왕 ──
  {
    id: 'set_hn_beastking',
    name: '야수왕',
    pieces: ['hn_rar_chest_01', 'hn_rar_legs_01', 'hn_rar_helm_01', 'leg_bm_pet_trinket'],
    bonuses: [
      { requiredCount: 2, stats: { atkPercent: 10 }, description: '공격력 +10%' },
      { requiredCount: 4, stats: { critDmgPercent: 20 }, active: { type: 'bonus_damage', chance: 0.10, value: 100 }, description: '치명타 피해 +20%, 공격 시 10% 확률로 추가 100% 피해' },
    ],
  },
  // ── 성직자: 달빛매듭 ──
  {
    id: 'set_pr_mooncloth',
    name: '달빛매듭',
    pieces: ['pr_rar_robe_01', 'pr_rar_pants_01', 'pr_rar_cowl_01', 'pr_rar_shoes_01'],
    bonuses: [
      { requiredCount: 2, stats: { defPercent: 10 }, description: '방어력 +10%' },
      { requiredCount: 4, stats: { hpPercent: 15 }, active: { type: 'hp_regen_per_turn', value: 3 }, description: 'HP +15%, 턴마다 HP 3% 회복' },
    ],
  },
  // ── 마법사: 황천매듭 ──
  {
    id: 'set_sm_netherweave',
    name: '황천매듭',
    pieces: ['sm_unc_wand_01', 'sm_unc_robe_01', 'sm_unc_pants_01', 'sm_unc_cowl_01', 'sm_unc_shoes_01', 'sm_unc_shoulders_01', 'sm_unc_gloves_01'],
    bonuses: [
      { requiredCount: 2, stats: { atkPercent: 10 }, description: '공격력 +10%' },
      { requiredCount: 3, stats: { mpPercent: 15 }, description: 'MP +15%' },
      { requiredCount: 5, stats: { atkPercent: 15 }, active: { type: 'mp_regen_per_turn', value: 5 }, description: '공격력 +15%, 턴마다 MP 5% 추가 회복' },
    ],
  },
];
