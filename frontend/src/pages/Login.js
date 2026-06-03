import { useState } from "react";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = async() => {

        const response = await fetch(
            "http://localhost:8080/users/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const result = await response.text();

        alert(result);
    };

    return(
        <div>

            <h2>Login</h2>

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

            <button onClick={login}>
                Login
            </button>

        </div>
    );
}

export default Login;