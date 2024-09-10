import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressTracker = ({ userId, courseId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    axios.get(`/api/progress/${userId}/${courseId}`)
      .then(response => setProgress(response.data.progress))
      .catch(error => console.error('Error fetching progress:', error));
  }, [userId, courseId]);

  return (
    <div>
      <h2>Course Progress</h2>
      <p>{progress}% completed</p>
    </div>
  );
};

export default ProgressTracker;