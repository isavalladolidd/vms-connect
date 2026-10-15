import express from "express"

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

export {BearerTokenGlobal}