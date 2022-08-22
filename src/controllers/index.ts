import createCharacterController from "./character/createCharacter.controller";
import deleteCharacterController from "./character/deleteCharacter.controller";
import getCharacterByNameController from "./character/getByName.controller";
import registerItemController from "./adm/addItems.controller";
import getClassController from "./class/getClass.controller";
import createClassController from "./adm/createClass.controller";
import registerMonsterController from "./adm/addMonster.controller";
import getUsersController from "./adm/getUsers.controller";
import registerSkillController from "./adm/addSkills.controller";
import MonsterBatleController from "./monster/postMonster.controller";
import deleteUserController from "./adm/deleteUser.controller";
import getOneUserController from "./adm/getOneUser.controller";
import monsterListController from "./monster/getMonster.controller";
import updateUserController from "./user/updateUser";
import login from "./user/login.controller";
import register from "./user/registerUser";
import getProfileController from "./user/getProfile.controller";
import getAllSkillsController from "./skills/getAllSkills.controller";
import getAllItemsController from "./items/getAllItems.controller";

export {
  createCharacterController,
  deleteCharacterController,
  getCharacterByNameController,
  getClassController,
  createClassController,
  getUsersController,
  registerItemController,
  registerMonsterController,
  registerSkillController,
  MonsterBatleController,
  deleteUserController,
  getOneUserController,
  monsterListController,
  register,
  login,
  updateUserController,
  getProfileController,
  getAllSkillsController,
  getAllItemsController
};
