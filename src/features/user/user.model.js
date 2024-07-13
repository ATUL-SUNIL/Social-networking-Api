export default class userModel{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
        this.userId=users.length+1;
    }
    static getAllUsers(){
        return users;
    }

    static signUp(name,email,password){
        const newUser=new userModel(name,email,password);
        users.push(newUser);
        return newUser;
    }

    static signIn(email,password){
        const result=users.find((u)=>u.email==email && u.password==password);
        return result;
    }
}

let users=[{
    name:"user1",
    email:"user1@gmail.com",
    password:"password1",
    userId:1,
},
{
    name:"user2",
    email:"user2@gmail.com",
    password:"password2",
    userId:2,
},];