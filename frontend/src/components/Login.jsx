import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {userLogin} from '../redux/actionCreate'

function Login() {
   
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();


  
  
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
    });
  
  
  
    useEffect(
      () => {
        if (user) {
          axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
              }
            })
            .then((res) => {
              setProfile(res.data);
              console.log("data",res.data)
                const value=res.data
              dispatch(userLogin(value))
              navigate("/dashboard")
  
            })
            .catch((err) => console.log(err));
        }
      },
      [user]
    );
  
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
      googleLogout();
      setProfile(null);
    };


    return (
        <header>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '100vh' }}
                >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                         <h1 className='title-header'>Welcome to Login </h1>
                            <MDBContainer fluid className="p-3 my-5">
                                <MDBRow>
                                    <MDBCol col='10' md='6'>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                                    </MDBCol>
                                    <MDBCol className='form' col='4' md='6'>
                                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                                        <MDBBtn onClick={login} className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                            <MDBIcon fab icon="google" className="mx-4" />
                                            Continue with Gmail
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Login;