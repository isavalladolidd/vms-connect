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
}

const userService = new UserService();

export default userService