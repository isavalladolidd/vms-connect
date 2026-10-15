import express from "express"
import { BearerTokenGlobal } from "../middlewares/auth";
import userService from "../services/user";

const router = express.Router();


router.post("/users", BearerTokenGlobal, async (req,res)=>{
  const username = req.body.username;
  const email = req.body.email;
  const number = req.body.number;
  const name = req.body.name;
  const lastname = req.body.lastname
  const user_role = req.body.user_role

  const ROLES = ["user", "admin", "employee"]

  if (!ROLES.includes(user_role)){
    res.status(406).json("Role not supported")
  }

  const response = await userService.CreateUser(username,email,number,name,lastname,user_role)

  res.json({created:response})

})

export default router;
