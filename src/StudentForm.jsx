/*
Name: Wenjie Zhou
Student ID: 301337168
Date: 2024-04-02
*/

import React, { useState } from "react";

const StudentForm = () => {
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPhone, setStudentPhone] = useState('');

    // Change states for student data when user submits form
    const handleSubmit = (e) => {
        e.preventDefault();
        setStudentName(e.target.elements.studentName.value);
        setStudentEmail(e.target.elements.studentEmail.value);
        setStudentPhone(e.target.elements.studentPhone.value);
    };

    // Allow user to type student data and submit form
    // Display submitted student data in readonly input fields
    return (
        <div>
            <div className="container" style={{ backgroundColor: 'lightyellow', padding: '150px', borderRadius: '250px', width: '400px' }}>
                <p style={{ fontSize: '25px' }}>Info from database</p>
                <input type="text" value={studentName} style={{ fontSize: '25px' }} readOnly />
                <br />
                <input type="email" value={studentEmail} style={{ fontSize: '25px' }} readOnly />
                <br />
                <input type="text" value={studentPhone} style={{ fontSize: '25px' }} readOnly />
            </div>
            <div className="container" style={{ backgroundColor: 'lightblue', padding: '150px', borderRadius: '250px', width: '400px' }}>
                <p style={{ fontSize: '25px' }}>Input your data</p>
                <form onSubmit={handleSubmit}>
                    <label style={{ fontSize: '25px' }}>Student Name: </label>
                    <input type="text" name="studentName" />
                    <br />
                    <label style={{ fontSize: '25px' }}>Student Email: </label>
                    <input type="email" name="studentEmail" />
                    <br />
                    <label style={{ fontSize: '25px' }}>Student Phone: </label>
                    <input type="text" name="studentPhone" />
                    <br />
                    <button type="submit" style={{ width: '350px' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default StudentForm;
