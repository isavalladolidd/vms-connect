import supabase from "../clients/vms_supabase.js";

class UserService{
    async CreateUser(username,email,number,name,lastname,user_role){
        const {error} = await supabase.from("users")
        .insert({username:username, email:email,
                    number:number, name:name,
                    lastname:lastname, user_rol:user_role});

        if (error){
            console.error(error)
            throw error
        }

        return true
    }

    async GetUserByEmail(email){
        const {data,error} = await supabase.from("users").select("*").eq("email",email) // .single() cuando SE que solo hay 1

        if (error){
            console.error(error)
            throw new Error(error)
        }

        const user = data[0]

        return user
    }

        async GetUserById(user_id){
        const {data,error} = await supabase.from("users").select("*").eq("id",user_id) // .single() cuando SE que solo hay 1

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