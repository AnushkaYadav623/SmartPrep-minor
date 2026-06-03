import { useState } from "react";

function Signup() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const registerUser = async () => {

        await fetch(
            "http://localhost:8080/users/signup",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        alert("Signup Successful");
    };

    return(
        <div>

            <h2>Signup</h2>

            <input
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
            />

            <br/>

            <input
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <br/>

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br/>

            <button onClick={registerUser}>
                Signup
            </button>

        </div>
    );
}

export default Signup;