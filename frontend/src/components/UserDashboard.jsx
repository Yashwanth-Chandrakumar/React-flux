import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageGenerator from './ImageGenerator';


const UserDashboard= () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchUserImages();
  }, []);

  const fetchUserImages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/images', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setImages(response.data);
    } catch (error) {
      console.error('Failed to fetch user images:', error);
    }
  };

  return (
    <div className="space-y-8">
      <ImageGenerator onImageGenerated={fetchUserImages} />
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Generated Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={image.url} alt="Generated wildlife" className="w-full h-48 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;