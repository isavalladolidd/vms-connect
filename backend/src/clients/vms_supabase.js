import { createClient} from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY

function validateKeys(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY){
    if (!SUPABASE_URL | !SUPABASE_PUBLISHABLE_KEY){
        console.error("No Supabase Keys Provided")
        throw new Error("SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY not provided")
    } 
}

validateKeys(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

export default supabase
