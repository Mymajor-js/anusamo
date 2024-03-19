import React, { useState ,useEffect ,useRef} from 'react';
import './adminshow.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function OpenCloseComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const componentRef = useRef();
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

  const handleExportToPDF = () => {
    const input = componentRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('ข้อมูล.pdf');
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setUser('');
    setPassword('');
    setIsAuthenticated(false);
  };

  const handleConfirm = () => {
    if (user === 'cpru-admin' && password === 'comsci') {
      setIsAuthenticated(true);
      Swal.fire({
        title: 'เข้าสู่ระบบสำเร็จ',
        text: 'Admin ตัวจริง?',
        icon: 'success',
        confirmButtonText: 'Ok',
      })
    } else {
        Swal.fire({
            title: 'เอ๊ะ',
            text: 'Admin ตัวปล่อม?',
            icon: 'error',
            confirmButtonText: 'Ok',
          })
    }
  };

  return (
    <div class="show-content">
        
      {!isOpen && (
        <button onClick={handleOpen} class="buttonshow">
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              class="icon"
            >
              <path
                d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Admin</span>
      </button>
      
      )}
      {isOpen && !isAuthenticated && (
        
        <div class="show-co">
            <div class="retop">
                <h2>LOGIN</h2>
            </div>
            <div class="input-container">
            <input placeholder="Username" class="input-field" type="text"value={user}
              onChange={(e) => setUser(e.target.value)}></input>
            <label for="input-field" class="input-label">Username</label>
            <span class="input-highlight"></span>
            </div>
          <br />
          <div class="input-container">
            <input placeholder="Password" class="input-field" type="password"value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
            <label for="input-field" class="input-label">Password</label>
            <span class="input-highlight"></span>
            </div>
          <br />
          <button class="button"onClick={handleConfirm}> ยืนยัน
            </button>
          <button class="btns"onClick={handleClose}>กลับ</button>
        </div>
      )}
      {isAuthenticated && (
        <div class="show-co">
          <div class="table-wrapper" ref={componentRef}>
          <h2>รายชื่อผู้สมัครอนุสโมสรคณะศิลปศาสตร์</h2><br></br>

      <table class="fl-table">
          <thead>
          <tr>
              <th>รหัสนักศึกษา</th>
              <th>ชื่อ-วิชา</th>
              <th>ชั้นปี</th>
              <th>สาขาวิชา</th>
              <th>ฝ่ายที่สมัคร</th>
              <th>หมายเหตุ</th>
          </tr>
          </thead>
        <tbody>
          {data.map(employee => (
            <tr key={employee.id}>
              <td>{employee.stdid}</td>
              <td>{employee.fullname}</td>
              <td>{employee.level}</td>
              <td>{employee.subj}</td>
              <td>{employee.about}</td>
            </tr>
          ))}
        </tbody>
      </table>
          
        </div>
        <button class="closebtn"onClick={handleExportToPDF}>บันทึกเป็น PDF</button>
          <button class="closebtn" onClick={handleClose}>ปิด</button>
      </div>
      )}
      
    </div>
  );
}

export default OpenCloseComponent;
