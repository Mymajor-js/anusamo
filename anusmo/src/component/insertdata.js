import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/showdata');
      console.log(response.data); // ดูข้อมูลที่ได้รับมาจาก API
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div>
      <h1>Employee Data</h1>
      <ul>
        {data.map(employee => (
          <li key={employee.id}>
            <p>Fullname: {employee.fullname}</p>
            <p>Std ID: {employee.stdid}</p>
            <p>Subject: {employee.subj}</p>
            <p>Subject:</p>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default SelectData;
