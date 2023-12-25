import { useLoaderData } from "react-router-dom";

const GetUsers = () => {
    const handlerDelete=_id=>{
        console.log('delte', _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    const users=useLoaderData()
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