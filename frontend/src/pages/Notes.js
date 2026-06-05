import React, { useState } from 'react';
import { BookOpen, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import Spinner from '../components/Spinner';
import './Notes.css';

const Notes = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [notes, setNotes] = useState([]);
  const [expandedNote, setExpandedNote] = useState(null);

  const generateNotes = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('http://localhost:8080/api/notes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materialId: "1" }) // Hardcoded for demo
      });
      if (response.ok) {
        const data = await response.json();
        // Assuming the FastAPI returns { "notes": [ ... ] }
        const formattedNotes = data.notes.map((n, idx) => ({
          id: idx + 1,
          title: n.title,
          content: n.content,
          topic: 'Computer Science'
        }));
        setNotes(formattedNotes);
      }
    } catch (error) {
      console.error("Error fetching notes", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleExpand = (id) => {
    setExpandedNote(expandedNote === id ? null : id);
  };

  return (
    <div className="page-container">
      <div className="content-header">
        <h2 className="content-title">AI Notes Generator</h2>
        <p className="content-description">Generate comprehensive study notes from your uploaded materials.</p>
      </div>

      <div className="action-panel">
        <div className="action-info">
          <BookOpen size={24} className="action-icon" />
          <div>
            <h3>Generate New Notes</h3>
            <p>Select a material to generate smart notes, summaries, and key takeaways.</p>
          </div>
        </div>
        <button 
          className="primary-btn" 
          onClick={generateNotes}
          disabled={isGenerating}
        >
          {isGenerating ? <RefreshCw className="spin-icon" size={20} /> : 'Generate Now'}
        </button>
      </div>

      {isGenerating && (
        <div className="loading-state">
          <Spinner />
          <p>AI is analyzing your material and creating notes...</p>
        </div>
      )}

      {!isGenerating && notes.length > 0 && (
        <div className="notes-container">
          <h3 className="section-title">Your Generated Notes</h3>
          <div className="notes-accordion">
            {notes.map(note => (
              <div key={note.id} className={`note-card ${expandedNote === note.id ? 'expanded' : ''}`}>
                <div className="note-header" onClick={() => toggleExpand(note.id)}>
                  <div className="note-title-area">
                    <span className="topic-badge">{note.topic}</span>
                    <h4>{note.title}</h4>
                  </div>
                  <button className="expand-btn">
                    {expandedNote === note.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {expandedNote === note.id && (
                  <div className="note-body">
                    <p>{note.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;