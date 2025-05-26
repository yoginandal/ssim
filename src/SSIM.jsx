// Example React Component (e.g., EventUploadForm.jsx)
import React, { useState } from 'react';

function EventUploadForm() {
  const [eventId, setEventId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState(null); // Can be an array for multiple files
  const [message, setMessage] = useState(''); // For success or error messages
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files); // FileList object
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setMessage('');
    setIsLoading(true);

    if (!eventId || !title || !description) {
      setMessage('Please fill in all required text fields.');
      setIsLoading(false);
      return;
    }

    // 1. Create a FormData object
    const formData = new FormData();

    // 2. Append the text data
    formData.append('id', eventId);
    formData.append('title', title);
    formData.append('description', description);

    // 3. Append the image files (if any)
    // 'eventImages' must match the field name expected by multer on the backend
    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('eventImages', selectedFiles[i]);
      }
    }

    try {
      // 4. Make the API call using fetch
      const response = await fetch('http://localhost:3000/api/events', { // Adjust URL if needed
        method: 'POST',
        body: formData, // FormData will set the Content-Type to multipart/form-data automatically
        // No need to set 'Content-Type' header manually when using FormData with fetch,
        // the browser will do it correctly, including the boundary.
      });

      setIsLoading(false);
      const result = await response.json();

      if (response.ok) { // Status code 200-299
        setMessage(`Success: ${result.message} (Event ID: ${result.event.id})`);
        // Optionally, reset the form
        setEventId('');
        setTitle('');
        setDescription('');
        setSelectedFiles(null);
        document.getElementById('eventImagesInput').value = null; // Reset file input
      } else {
        setMessage(`Error: ${result.message || response.statusText}`);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Submission error:', error);
      setMessage(`Network Error: ${error.message}. Is the backend server running?`);
    }
  };

  return (
    <div className='bg-gray-100'>
      <h2>Upload New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventId">Event ID:</label>
          <input
            type="text"
            id="eventId"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="eventImagesInput">Images (Optional):</label>
          <input
            type="file"
            id="eventImagesInput"
            multiple // Allow multiple file selection
            onChange={handleFileChange}
            accept="image/*" // Suggest only image files in the dialog
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload Event'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EventUploadForm;