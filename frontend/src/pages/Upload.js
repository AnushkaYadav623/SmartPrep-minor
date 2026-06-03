import { useState } from "react";

function Upload(){

    const [title,setTitle] = useState("");
    const [description,setDescription] =
        useState("");

    const uploadMaterial = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/materials/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        filePath: "sample.pdf"
                    })
                }
            );

            console.log("Status:", response.status);

            if (!response.ok) {
                throw new Error("Server returned " + response.status);
            }

            const data = await response.json();

            console.log(data);

            alert("Material Saved");
        } catch (error) {
            console.error(error);
            alert("Upload failed: " + error.message);
        }
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