// documentation: docs/backend/routes-users.md
import express from "express"
import { BearerTokenGlobal, SupabaseJWT } from "../middlewares/auth.js";
import userService from "../services/user.js";

const router = express.Router();


router.post("/users", SupabaseJWT, async (req,res)=>{
  const username = req.body.username;
  const email = req.body.email;
  const number = req.body.number;
  const name = req.body.name;
  const lastname = req.body.lastname
  const user_role = req.body.user_role

  const ROLES = ["user", "admin", "employee"]

  if (!ROLES.includes(user_role)){
    return res.status(406).json("Role not supported")
  }

  // Basic backend check; the real enforcement is RLS inside the service (createUserClient)
  const caller = await userService.GetUserByEmail(req.auth, req.user.email)
  if (caller?.user_rol !== "admin"){
    return res.status(403).json({ error: "Forbidden" })
  }
  const response = await userService.CreateUser(req.auth,username,email,number,name,lastname,user_role)

  res.json({created:response})

})

router.get("/users", SupabaseJWT, async (req,res) => {
  const email = req.query.email;
  const user_id = req.query.user_id;

  if (!email && !user_id){
    return res.status(406).json({ error: "email or user_id is required" })
  }
  let userEmail
  let userId

  if (email){
    userEmail = await userService.GetUserByEmail(req.auth, email)
  }
  if (user_id){
    userId = await userService.GetUserById(req.auth, user_id)
  }

  res.json({user_by_id:userId, user_by_email:userEmail})
})

export default router;
