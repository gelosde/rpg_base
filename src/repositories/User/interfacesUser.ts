import { DeleteResult } from "typeorm";
import { User } from "../../entities/User";

interface Iuser {
  id?: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  age: number;
  address: string;
  isAdm: boolean;
}

interface IsuerRepo {
  saveUser: (character: Iuser) => Promise<Iuser>;
  findUserByEmail: (email: string) => Promise<User>;
  findById: (id: string) => Promise<Iuser>
  findUsers: () => Promise<Iuser[]>;
  updateUser:(user: Iuser, reqBody: object) => Promise<any>
  deleteUser: (email: string) => Promise<DeleteResult>;
}

export { Iuser, IsuerRepo };
