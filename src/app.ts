import express from "express";
import {
  routerCharacter,
  routerUser,
  routerClass,
  routerMonster,
  routerAdm,
  routerSkills,
  routerItems
} from "./routes";


const app = express();

app.use(express.json());
app.use("/gameup/user", routerUser);
app.use("/gameup/character", routerCharacter);
app.use("/gameup/classes", routerClass);
app.use("/gameup", routerMonster);
app.use("/gameup/admin", routerAdm);
app.use("/gameup/skills", routerSkills)
app.use("/gameup/items", routerItems)


export default app;
