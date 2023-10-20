// import React, { FC } from 'react'
import { message , Form, } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// interface
import { MembersInterface } from '../../interfaces/IMember';
import { GendersInterface } from '../../interfaces/IGender';
import { OccupationInterface } from '../../interfaces/IOccupation';
import { CreateMember } from '../../services/https';
// GET FK
import { GetOccupations } from '../../services/https';
import { GetGender } from '../../services/https';

import './registerCSS.css';

function Register() {
    let navigate = useNavigate();
    const [messageApi , contextHolder] = message.useMessage();
    const [inputOccupation, setOccupation] = useState<OccupationInterface[]>([]);
    const [inputGender, setGender] = useState<GendersInterface[]>([]);

    const [input, setInput] = useState({
        Username: '', 
        Password: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Birthday: '',
        Phone_number: '',
        OccupationID: 1,
        DentistID: 1,
        GenderID: 1,
    })

    const handleInput  = (e: any) => {
        const { name, value } = e.target;
        if (name === "OccupationID" || name === "GenderID") {
            setInput({
                ...input,[name]: parseInt(value, 10),
            });
        } else {
            setInput({
                ...input, [name]: value,
            });
        }
    }      

    const getOccupationed = async () => {
        let res = await GetOccupations();
        if (res) {
            setOccupation(res);
        }
      };

    const getGender = async () => {
        let res = await GetGender();
        if (res) {
            setGender(res);
        }
      };
    
      useEffect(() => {
        getOccupationed();
        getGender()
      }, []);
    

    const handleSubmit  = async (values: MembersInterface) => {
        values.Username = input.Username
        values.Password = input.Password
        values.FirstName = input.FirstName
        values.LastName = input.LastName
        values.Email = input.Email
        values.Birthday = input.Birthday
        values.Phone_number = input.Phone_number
        values.OccupationID = input.OccupationID;
        values.GenderID = input.GenderID;

        console.log(values);
        console.log(input.OccupationID);
        console.log(values.OccupationID);
        console.log(values.GenderID);
        console.log(input.GenderID);

        let res = await CreateMember(values);
            if (res.status) {
                messageApi.open({
                    type: "success",
                    content: "บันทึกข้อมูลสำเร็จ",
                });
                setTimeout(function () {
                    navigate("/");
                }, 2000);
            } else {
                messageApi.open({
                    type: "error",
                    content: "บันทึกข้อมูลไม่สำเร็จ",
                });
            }
    }
    
    return <main>
                <div className="form-popup">
                {contextHolder}
                    <div className="form-boxSignUP">
                        <div className="form-contentSignUP">
                            <h2>Register</h2>
                            
                            <Form onFinish={handleSubmit} autoComplete="off">
                                <div className="input-field-text">  
                                    <input type="text" name='Username' onChange={handleInput} required/>
                                    <label>Username</label>
                                </div>
                                <div className="input-field-text">
                                    <input type="text" className='Fistname' onChange={handleInput} name='FirstName' required/>
                                    <label>First Name</label>
                                </div>
                                <div className="input-field-text">
                                    <input type="text" name='LastName' onChange={handleInput} required/>
                                    <label>Last Name</label>
                                </div>
                                <div className="input-field-text">
                                    <input autoComplete='off' type="text" name='Email' onChange={handleInput} required/>
                                    <label>Email</label>
                                </div>
                                <div id='gender-margin' className="input-field-text-occupation">
                                    <label htmlFor="">Gender:     </label>
                                    <select 
                                        value={input.GenderID}
                                        name="GenderID" 
                                        onChange={handleInput}>
                                        {inputGender.map((item) => (
                                            <option value={item.ID} key={item.Name}>{item.Name}</option>
                                        ))}
                                    </select>
                                </div>
                                <br />
                                <div className="input-field-text-birthday">
                                    <label>Birthday:     </label>
                                    <input type="date" name='Birthday' onChange={handleInput} required/>
                                </div>
                                <br />
                                <div className='input-field-text-occupation'>
                                    <label>Occupation:     </label>
                                    <select 
                                        value={input.OccupationID}
                                        name="OccupationID" 
                                        onChange={handleInput}>
                                        {inputOccupation.map((item) => (
                                            <option value={item.ID} key={item.Name}>{item.Name}</option>
                                        ))}
                                    </select>
                                    <br />
                                </div>
                                
                                <div className="input-field-text">
                                    <input type="text" name='Phone_number' onChange={handleInput} required/>
                                    <label>Phone Number</label>
                                </div>
                                <div className="input-field-text">
                                    <input type="password" name='Password' onChange={handleInput} required/>
                                    <label>Password</label>
                                </div>
                                <div id='button-SIGNUP' >
                                    <button type="submit">SIGN UP</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    
                    <div className='from-box-signUp'>
                        <div className='from-content-signUp'>
                            <h2>Login</h2>
                            <p>
                            Take care of your dental health like a pro. quality assurance
                            There are experts ready to serve.
                            </p>
                            <div id='button-signUp'>
                                <form action="./../">
                                    <button type='submit'>SIGN IN</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </main>
}
export default Register