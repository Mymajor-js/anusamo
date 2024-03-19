import React, { useState, useEffect } from "react";
import './MyButton.css';
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';
function useMyButton() {
  const [fullname, setFullname] = useState("");
  const [stdid, setStdid] = useState("");
  const [level, setLevel] = useState("");
  const [subj, setSubj] = useState("");
  const [about, setAbout] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  
  const getEmployees = () => {
    Axios.get("http://localhost:3001/adddata").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      fullname: fullname,
      stdid: stdid,
      level: level,
      subj: subj,
      about: about,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          fullname: fullname,
          stdid: stdid,
          level: level,
          subj: subj,
          about: about,
        },
      ]);
    });
    Swal.fire({
      title: 'ขั้นตอนเสร็จสิ้น',
      text: 'เพิ่มข้อมูลสำเร็จ',
      icon: 'success',
      confirmButtonText: 'รับทราบ!',
    })
  };

  return (
    <div className="index-content">
      <div id="container">
      </div>
      <div className="labelainput">
        <form action="">
          <div>
            <label htmlFor="fullname">ชื่อ-สกุล:</label>
            <input type="text" id="fullName" name="fullName" onChange={(event) => {
                setFullname(event.target.value);
              }} />
          </div>
          <div>
            <label htmlFor="student_id">รหัสนักศึกษา:</label>
            <input type="number" id="stdid" name="stdid" onChange={(event) => {
                setStdid(event.target.value);
              }} />
          </div>
          <div>
            <label htmlFor="year">ชั้นปี:</label>
            <select id="level" name="level" onChange={(event) => {
                setLevel(event.target.value);
              }}>
              <option value="ชั้นปีที่ 1">ชั้นปีที่ 1</option>
              <option value="ชั้นปีที่ 2">ชั้นปีที่ 2</option>
              <option value="ชั้นปีที่ 3">ชั้นปีที่ 3</option>
              <option value="ชั้นปีที่ 4">ชั้นปีที่ 4</option>
            </select>
          </div>
          <div>
            <label htmlFor="department">หลักสูตร:</label>
            <select id="subj" name="subj" onChange={(event) => {
                setSubj(event.target.value);
              }}>
            <option value="สาขาวิชาศิลปะและนวัตกรรมการออกแบบ">สาขาวิชาศิลปะและนวัตกรรมการออกแบบ</option>
              <option value="สาขาวิชานวัตกรรมอาหารสร้างสรรค์และโภชนาการ">สาขาวิชานวัตกรรมอาหารสร้างสรรค์และโภชนาการ</option>
              <option value="สาขาวิชาสาธารณสุขชุมชน">สาขาวิชาสาธารณสุขชุมชน</option>
              <option value="สาขาวิชาวิทยาการคอมพิวเตอร์">สาขาวิชาวิทยาการคอมพิวเตอร์</option>
              <option value="สาขาวิชาการจัดการสุขภาพผู้สูงอายุ"> สาขาวิชาการจัดการสุขภาพผู้สูงอายุ</option>
              <option value="สาขาวิชาเอกการจัดการ">สาขาวิชาเอกการจัดการ</option>
              <option value="สาขาวิชเอกธุรกิจดิจิทัล">สาขาวิชเอกธุรกิจดิจิทัล</option>
              <option value="สาขาวิชาวิชาเอกการเงิน">สาขาวิชาวิชาเอกการเงิน</option>
              <option value="สาขาวิชาเอกการจัดการธุรกิจการค้าสมัยใหม่">สาขาวิชาเอกการจัดการธุรกิจการค้าสมัยใหม่</option>
              <option value="สาขาวิชาการท่องเที่ยวและบริการ">สาขาวิชาการท่องเที่ยวและบริการ</option>
              <option value="สาขาวิชานิติศาสตร์">สาขาวิชานิติศาสตร์</option>
              <option value="สาขาวิชาการบริหารทรัพยากรมนุษย์">สาขาวิชาการบริหารทรัพยากรมนุษย์</option>
              <option value="สาขาวิชารัฐประศาสนศาสตร">สาขาวิชารัฐประศาสนศาสตร</option>
              <option value="สาขาวิชารัฐศาสตร์">สาขาวิชารัฐศาสตร์</option>
              <option value="สาขาวิชาสหวิทยาการเพื่อการพัฒนาท้องถิ่น">สาขาวิชาสหวิทยาการเพื่อการพัฒนาท้องถิ่น</option>
              <option value="สาขาวิชาวิศวกรรมการผลิตและระบบอัตโนมัติ">สาขาวิชาวิศวกรรมการผลิตและระบบอัตโนมัติ</option>
              <option value="สาขาวิชาวิศวกรรมเครื่องกล">สาขาวิชาวิศวกรรมเครื่องกล</option>
              <option value="สาขาวิชาวิศวกรรมอุตสาหการและโลจิสติกส์">สาขาวิชาวิศวกรรมอุตสาหการและโลจิสติกส์</option>
              <option value="สาขาวิศวกรรมศาสตร์การก่อสร้างและระบบราง">สาขาวิศวกรรมศาสตร์การก่อสร้างและระบบราง</option>
            </select>
          </div>
          <div>
            <label htmlFor="interest">ฝ่ายที่สนใจ:</label>
            <select id="about" name="about" onChange={(event) => {
                setAbout(event.target.value);
              }}>
            <option value="ฝ่ายวิชาการ">ฝ่ายวิชาการ</option>
              <option value="ฝ่ายวิชาการ">ฝ่ายวิชาการ</option>
              <option value="ฝ่ายกิจกรรม">ฝ่ายกิจกรรม</option>
              <option value="ฝ่ายสันทนาการ">ฝ่ายสันทนาการ</option>
              <option value="ฝ่ายนันทนาการและกีฬา">ฝ่ายนันทนาการและกีฬา</option>
              <option value="ฝ่ายสวัสดิการและปฏิคน">ฝ่ายสวัสดิการและปฏิคน</option>
              <option value="ฝ่ายสถานที่">ฝ่ายสถานที่</option>
              <option value="ฝ่ายประชาสัมพันธ์">ฝ่ายประชาสัมพันธ์/ประเมินผล</option>
              <option value="ฝ่ายวินัยนักศึกษา">ฝ่ายวินัยนักศึกษา</option>
              <option value="ฝ่ายโสตทัศนูปกรณ์">ฝ่ายโสตทัศนูปกรณ์</option>
              <option value="ฝ่ายเหรัญญิกด้วย">ฝ่ายเหรัญญิกด้วย</option>
            </select>
          </div>
          <button className="custom-btn btn-15" type="button" onClick={addEmployee}>สมัคร</button>
        </form>
      </div>
      <h4>โปรดกรอกข้อมูลตามความเป็นจริง</h4>
    </div>
  );
}
export default useMyButton;
