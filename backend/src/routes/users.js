import express from "express"
import { BearerTokenGlobal } from "../middlewares/auth.js";
import userService from "../services/user.js";

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

router.get("/users", BearerTokenGlobal, async (req,res) => {
  const email = req.query.email;
  const user_id = req.query.user_id;

  if (!email && !user_id){
    res.status(406)
  }
  let userEmail
  let userId

  if (email){
    userEmail = await userService.GetUserByEmail(email)
  }
  if (user_id){
    userId = await userService.GetUserById(user_id)
  }

  res.json({user_by_id:userId, user_by_email:userEmail})
})

export default router;
