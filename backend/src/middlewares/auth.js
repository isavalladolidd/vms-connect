// documentation: docs/backend/middlewares.md
import supabase from "../clients/vms_supabase.js"

const BearerTokenGlobal = (req,res, next)=>{
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ 
      error: "Missing Token" 
    });
  }

  const token = authHeader.split(" ")[1];

  if (token !== process.env.SUPER_SECRET_KEY){
    return res.status(403).json({ 
      error: "Invalid Token." 
    });
  }

  next();
}

const SupabaseJWT = async (req,res,next)=>{
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Missing Token"
    });
  }

  const token = authHeader.split(" ")[1];

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user){
    return res.status(401).json({
      error: "Invalid or expired token."
    });
  }

  // Authenticated user metadata; services receive it to build their own createUserClient
  req.auth = { user: data.user, accessToken: token };
  req.user = data.user;

  next();
}

export {BearerTokenGlobal, SupabaseJWT}