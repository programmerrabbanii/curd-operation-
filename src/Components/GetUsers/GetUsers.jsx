import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const GetUsers = () => {
    const loddedUsers=useLoaderData()
    const [users,setUser]=useState(loddedUsers)
    
    const handlerDelete=_id=>{
        console.log('delte', _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                alert ('deleted successfully')
            }
            const remaining=users.filter(user=> user._id !== _id);
            setUser(remaining)
            console.log(data)
            
        })
    }
   
    return (
        <div className="text-center">
            <h2 className="text-center capitalize text-2xl"> Get All Users Data here....</h2>

            <h2>{users.length}</h2>
            {
                users.map(user=> <p key={user.id}> {user.name}: {user.email}  {user._id} <button onClick={()=>handlerDelete(user._id)}>X</button></p>)
            }
            
        </div>

    );
};

export default GetUsers;