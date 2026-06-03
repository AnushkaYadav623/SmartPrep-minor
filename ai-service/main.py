from fastapi import FastAPI
import fitz

app = FastAPI()

@app.post("/extract-text")
async def extract_text(file: UploadFile = File(...)):
    file_bytes = await file.read()
    doc = fitz.open(stream=file_bytes, filetype-"pdf")

    full_text = ""
    for page in doc:
        full_text += page.get_text()

    return {"text" : full_text}

@app.get("/")
def home():
    return {"message": "AI service is running"} 

@app.get("/test")
def test():
    return {"message" : "AI running"}
