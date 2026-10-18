// documentation: docs/backend/services-user.md
import { createUserClient } from "../clients/vms_supabase.js";

// Every method receives the authenticated user metadata (req.auth = { user, accessToken })
// and queries through createUserClient, so RLS applies as that user instead of server-level access.
function clientFor(auth){
    if (!auth?.accessToken){
        throw new Error("Authenticated user metadata (accessToken) is required")
    }
    return createUserClient(auth.accessToken)
}

class UserService{
    async CreateUser(auth,username,email,number,name,lastname,user_role){
        const {error} = await clientFor(auth).from("users")
        .insert({username:username, email:email,
                    number:number, name:name,
                    lastname:lastname, user_rol:user_role});

        if (error){
            console.error(error)
            throw error
        }

        return true
    }

    async GetUserByEmail(auth,email){
        const {data,error} = await clientFor(auth).from("users").select("*").eq("email",email) // use .single() when exactly one row is expected

        if (error){
            console.error(error)
            throw new Error(error)
        }

        const user = data[0]

        return user
    }

    async GetUserById(auth,user_id){
        const {data,error} = await clientFor(auth).from("users").select("*").eq("id",user_id) // use .single() when exactly one row is expected

        if (error){
            console.error(error)
            throw new Error(error)
        }

        const user = data[0]

        return user
    }
}

const userService = new UserService();

export default userService
