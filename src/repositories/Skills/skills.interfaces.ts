interface ISkills {
  id: string;
  name: string;
  level_required: number;
  type: string;
  damage: number;
  special_effect: string;
  cost_skill: number;
  type_target: string;
  cost_type: string;
  element_target: string;
  power_rank: number;
}

interface ISkillsRepo {
  saveSkill: (skill: ISkills) => Promise<ISkills>;
  listAllSkills: () => Promise<ISkills[]>
  findSkillById: (id: string) => Promise<ISkills>;
  findSkillByName: (name: string) => Promise<ISkills>;
}

export { ISkills, ISkillsRepo };
