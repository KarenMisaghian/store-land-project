import React from "react";
import { useEffect, useState } from "react";
import User from "../models/User";




const Signin: React.FC = () => {
    const [loadedUser, setLoadedUser] = useState<User>();

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('https://fakestoreapi.com/users/1')

            if (!response.ok) {
                return;
            }
            
            const user = await response.json();
            setLoadedUser(user);
        }

        fetchUser();
        
    }, []);


    const UserInfo = () => {
        if (loadedUser) {
            return (
                <>
                    <span className="text-center text-xl text-darkGrey bg-blue1">
                        <div className="m-10 text-2xl">
                            Your Informations:
                        </div>
                        <div className="m-10">
                            address: {loadedUser.address.city},{loadedUser.address.number},{loadedUser.address.street},{loadedUser.address.zipcode}
                        </div>
                        <div className="m-10">
                            email: {loadedUser.email}
                        </div>
                        <div className="m-10">
                            id: {loadedUser.id}
                        </div>
                        <div className="m-10">
                            first name: {loadedUser.name.firstName}
                            last name: {loadedUser.name.lastName}
                        </div>
                        <div className="m-10">
                            password: {loadedUser.password}
                        </div>
                        <div className="m-10">
                            phone number: {loadedUser.phone}
                        </div>
                        <div className="m-10">
                            user name: {loadedUser.userName}
                        </div>

                    </span>
                </>
            );

        }
        else{
            return (
                <p className="text-l text-center text-darkGrey">loading data...</p>
            )
        }
        

    }

    return (
        <UserInfo />
    );
}

export default Signin;