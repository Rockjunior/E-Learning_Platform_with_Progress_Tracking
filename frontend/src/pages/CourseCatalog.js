import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h1>Course Catalog</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCatalog;