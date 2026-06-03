import { useState } from "react";

function Upload(){

    const [title,setTitle] = useState("");
    const [description,setDescription] =
        useState("");

    const uploadMaterial = async() => {

        await fetch(
            "http://localhost:8080/materials/add",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title,
                    description,
                    filePath:"sample.pdf"
                })
            }
        );

        alert("Material Saved");
    };

    return(
        <div>

            <h2>Upload Material</h2>

            <input
                placeholder="Title"
                onChange={(e)=>
                    setTitle(e.target.value)}
            />

            <br/>

            <textarea
                placeholder="Description"
                onChange={(e)=>
                    setDescription(
                        e.target.value)}
            />

            <br/>

            <button
                onClick={uploadMaterial}
            >
                Upload
            </button>

        </div>
    );
}

export default Upload;