import express from "express";
import supabase from "../clients/vms_supabase.js";
import { BearerTokenGlobal, SupabaseJWT } from "../middlewares/auth.js";

const router = express.Router()

router.post("/login",BearerTokenGlobal, async (req,res) => {
    const email = req.body?.email;
    const password = req.body?.password;

    if (!email || !password){
        return res.status(400).json({ error: "Email and password are required" })
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error){
        return res.status(401).json({ error: "Invalid credentials" })
    }

    res.json({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
        user: { id: data.user.id, email: data.user.email },
    })
})

router.post("/refresh", BearerTokenGlobal, async (req,res) => {
    const refresh_token = req.body?.refresh_token;

    if (!refresh_token){
        return res.status(400).json({ error: "refresh_token is required" })
    }

    const { data, error } = await supabase.auth.refreshSession({ refresh_token })

    if (error || !data.session){
        return res.status(401).json({ error: "Invalid refresh token" })
    }

    res.json({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
    })
})

router.get("/me", SupabaseJWT, (req,res) => {
    res.json({ id: req.user.id, email: req.user.email })
})

export default router
