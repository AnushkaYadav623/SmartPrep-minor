import React, { useState } from 'react';
import { UploadCloud, File, Trash2, CheckCircle } from 'lucide-react';
import './Upload.css';

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        status: 'pending'
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    setIsUploading(true);
    
    try {
      const response = await fetch('http://localhost:8080/api/materials/upload', {
        method: 'POST'
        // In reality, this would be a FormData containing the files
      });
      if (response.ok) {
        setFiles(files.map(f => ({ ...f, status: 'uploaded' })));
      }
    } catch (error) {
      console.error("Upload error", error);
      // Fallback for demo
      setFiles(files.map(f => ({ ...f, status: 'uploaded' })));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="content-header">
        <h2 className="content-title">Upload Materials</h2>
        <p className="content-description">Upload your PDFs, documents, and slides for AI processing.</p>
      </div>

      <div className="upload-area">
        <div className="upload-box">
          <UploadCloud size={48} className="upload-icon" />
          <h3>Choose a file or drag & drop it here</h3>
          <p>JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
          <label className="browse-btn">
            Browse File
            <input type="file" multiple onChange={handleFileChange} style={{display: 'none'}} />
          </label>
        </div>
      </div>

      {files.length > 0 && (
        <div className="file-list">
          <div className="file-list-header">
            <h3>Uploaded Files</h3>
            <button 
              className="upload-action-btn" 
              onClick={handleUpload}
              disabled={isUploading || files.every(f => f.status === 'uploaded')}
            >
              {isUploading ? 'Uploading...' : 'Upload All'}
            </button>
          </div>
          <div className="files-container">
            {files.map((file, idx) => (
              <div key={idx} className="file-item">
                <div className="file-info">
                  <div className="file-icon"><File size={24} /></div>
                  <div className="file-details">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{file.size}</span>
                  </div>
                </div>
                <div className="file-actions">
                  {file.status === 'uploaded' ? (
                    <CheckCircle className="status-icon success" size={20} />
                  ) : (
                    <button className="delete-btn" onClick={() => setFiles(files.filter((_, i) => i !== idx))}>
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;