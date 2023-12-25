
const Home = () => {
    const handlerPost=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const allData={
            name,email
        }

        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(allData)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        console.log(allData)
        
    }
    return (
        <div className="text-center">
            <h2 className="text-4xl uppercase">card operation</h2>
            <form  onSubmit={handlerPost}>
                <input className=" mt-2 w-[800px] py-2 px-3 font-lg" type="text" name="name" placeholder="name" /> <br />
                <input className=" mt-2 w-[800px] py-2 px-3 font-lg" type="email" name="email" placeholder="email" />
                <input className="w-[800px] py-2 px-3 hover:bg-pink-300" type="submit" value="SUBMIT" />
            </form>
            
        </div>
    );
};

export default Home;