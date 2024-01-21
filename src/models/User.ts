type address = {
    city:string;
    street:string;
    number:number;
    zipcode:string;
}

type name ={
    firstName:string;
    lastName:string;
}

class User {
    address: address;
    email: string;
    id: number;
    name: name;
    password: string;
    phone: string;
    userName: string;


    
    constructor(id: number , email: string, phone: string, userName: string, password: string, address: address, name: name){
        this.address = address;
        this.email = email;
        this.id = id;
        this.name = name;
        this.password = password;
        this.phone = phone;
        this.userName = userName;
    }
    

}
export default User;