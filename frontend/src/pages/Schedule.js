import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Book, Plus, Trash2 } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
  const [formData, setFormData] = useState({
    examDate: '',
    studyHoursPerDay: 4,
    subjects: [{ name: '', weight: 'High' }]
  });
  
  const [isGenerated, setIsGenerated] = useState(false);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...formData.subjects];
    newSubjects[index][field] = value;
    setFormData({ ...formData, subjects: newSubjects });
  };

  const addSubject = () => {
    setFormData({
      ...formData,
      subjects: [...formData.subjects, { name: '', weight: 'Medium' }]
    });
  };

  const removeSubject = (index) => {
    const newSubjects = formData.subjects.filter((_, i) => i !== index);
    setFormData({ ...formData, subjects: newSubjects });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:8080/api/schedule/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setIsGenerated(true);
    } catch (error) {
      console.error("Error generating schedule", error);
      setIsGenerated(true); // Fallback for demo
    }
  };

  // Mock Calendar Data
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="page-container">
      <div className="content-header">
        <h2 className="content-title">Study Schedule Generator</h2>
        <p className="content-description">Create an optimized study plan based on your exam dates and subjects.</p>
      </div>

      {!isGenerated ? (
        <form className="schedule-form-card" onSubmit={handleGenerate}>
          <div className="form-section">
            <h3 className="section-title"><CalendarIcon size={20} /> Exam Details</h3>
            <div className="form-group">
              <label>Target Exam Date</label>
              <input 
                type="date" 
                required
                value={formData.examDate}
                onChange={(e) => setFormData({...formData, examDate: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Study Hours per Day</label>
              <div className="range-container">
                <input 
                  type="range" 
                  min="1" max="14" step="1"
                  value={formData.studyHoursPerDay}
                  onChange={(e) => setFormData({...formData, studyHoursPerDay: e.target.value})}
                />
                <span className="range-value">{formData.studyHoursPerDay} hrs</span>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title"><Book size={20} /> Subjects to Cover</h3>
            <div className="subjects-list">
              {formData.subjects.map((sub, idx) => (
                <div key={idx} className="subject-row">
                  <div className="form-group flex-1">
                    <input 
                      type="text" 
                      placeholder="Subject Name" 
                      required
                      value={sub.name}
                      onChange={(e) => handleSubjectChange(idx, 'name', e.target.value)}
                    />
                  </div>
                  <div className="form-group flex-1">
                    <select 
                      value={sub.weight}
                      onChange={(e) => handleSubjectChange(idx, 'weight', e.target.value)}
                    >
                      <option value="High">High Priority</option>
                      <option value="Medium">Medium Priority</option>
                      <option value="Low">Low Priority</option>
                    </select>
                  </div>
                  {formData.subjects.length > 1 && (
                    <button type="button" className="remove-btn" onClick={() => removeSubject(idx)}>
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" className="outline-btn mt-4" onClick={addSubject}>
              <Plus size={18} /> Add Subject
            </button>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn full-width">Generate Timetable</button>
          </div>
        </form>
      ) : (
        <div className="calendar-view">
          <div className="calendar-header">
            <h3>Your Study Plan</h3>
            <button className="outline-btn" onClick={() => setIsGenerated(false)}>Edit Plan</button>
          </div>
          
          <div className="calendar-grid">
            {weekDays.map(day => (
              <div key={day} className="calendar-day-header">{day}</div>
            ))}
            
            {/* Mocking a 2-week calendar view */}
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="calendar-cell">
                <span className="date-num">{i + 1}</span>
                {i % 2 === 0 ? (
                  <div className="task-pill peach">
                    <Clock size={12} /> 2h {formData.subjects[0]?.name || 'Geography'}
                  </div>
                ) : null}
                {i % 3 === 0 ? (
                  <div className="task-pill lilac">
                    <Clock size={12} /> 1.5h Revision
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;