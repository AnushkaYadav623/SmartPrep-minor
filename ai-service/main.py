from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI service is running"} 

@app.get("/test")
def test():
    return {"message" : "AI running"}
