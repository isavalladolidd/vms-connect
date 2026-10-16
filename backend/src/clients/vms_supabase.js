import { createClient} from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY

function validateKeys(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY){
    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY){
        console.error("No Supabase Keys Provided")
        throw new Error("SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY not provided")
    }
}

validateKeys(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

const SERVER_AUTH_OPTIONS = {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
}

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: SERVER_AUTH_OPTIONS,
})

// Cliente por request que manda el JWT del usuario, asi RLS aplica como ese usuario
function createUserClient(accessToken){
    return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
        auth: SERVER_AUTH_OPTIONS,
        global: {
            headers: { Authorization: `Bearer ${accessToken}` },
        },
    })
}

export { createUserClient }
export default supabase
