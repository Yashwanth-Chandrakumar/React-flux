import axios from 'axios';
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';


const ImageGenerator= ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/images/generate', 
        { prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setImageUrl(response.data.url);
      if (onImageGenerated) {
        onImageGenerated();
      }
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full mx-auto mt-10">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a wildlife description"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Image'}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {loading && <LoadingSpinner />}
      {imageUrl && (
        <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
          <img src={imageUrl} alt="Generated wildlife" className="w-full h-auto rounded-md shadow-md" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;