export class User{
    id:string="";
    fullName: string = "";
    email: string = "";
    userName: string = "";
    role: string = "";

    constructor( fullName: string, email: string, userName: string, role: string,id: string){
        this.id =id
        this.fullName = fullName;
        this.email = email;
        this.userName = userName;
        this.role = role;
    }
}