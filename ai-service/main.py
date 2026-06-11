from fastapi import FastAPI, UploadFile, File, HTTPException
import fitz
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class ChatMessage(BaseModel):
    message: str
    history: Optional[List[dict]] = []

class ScheduleRequest(BaseModel):
    examDate: str
    studyHoursPerDay: int
    subjects: List[dict]

@app.get("/")
def home():
    return {"message": "AI service is running"} 

@app.post("/extract-text")
async def extract_text(file: UploadFile = File(...)):
    file_bytes = await file.read()
    try:
        doc = fitz.open(stream=file_bytes, filetype="pdf")
        full_text = ""
        for page in doc:
            full_text += page.get_text()
        return {"text" : full_text}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/generate-notes")
async def generate_notes(payload: dict):
    text = payload.get("text", "")
    # Mock AI Notes Generation
    return {
        "notes": [
            {"title": "Key Concept 1", "content": "Summary of concept 1 based on text."},
            {"title": "Key Concept 2", "content": "Summary of concept 2 based on text."}
        ]
    }

@app.post("/generate-quiz")
async def generate_quiz(payload: dict):
    text = payload.get("text", "")
    # Mock AI Quiz Generation
    return {
        "quiz": [
            {
                "question": "Generated question 1?",
                "options": ["A", "B", "C", "D"],
                "correctAnswer": 0
            }
        ]
    }

@app.post("/tutor-chat")
async def tutor_chat(chat: ChatMessage):
    # Mock AI Tutor Response
    return {"response": f"AI Tutor received: {chat.message}. I am ready to help!"}

@app.post("/generate-schedule")
async def generate_schedule(req: ScheduleRequest):
    # Mock Schedule Generation
    return {"status": "success", "message": "Schedule generated based on " + str(len(req.subjects)) + " subjects."}












