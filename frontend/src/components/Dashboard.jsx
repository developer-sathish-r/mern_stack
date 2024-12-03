// import React, { useState } from 'react';
// import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogout } from '../redux/actionCreate';
// import { useNavigate } from "react-router-dom";
// import Illustrations from '../assets/Illustrations.gif'

// const Dashboard = () => {
//     const [collapse, setCollapse] = useState(false);
//     const Profile = useSelector((item) => item.token.data);
//     const dispatch = useDispatch();
//     const loginnavigate = useNavigate();


//     const bgBlack = { backgroundColor: '#000000', color: '#f4f4f4' };
//     return (
//         <div
//             style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
//         >
//             <CDBSidebar textColor="#fff" backgroundColor="#333">
//                 <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//                     Dashboard
//                 </CDBSidebarHeader>


//                 <CDBSidebarContent className="sidebar-content">
//                     <CDBSidebarMenu>
//                         <NavLink exact to="/Upload" activeClassName="activeClicked">
//                             <CDBSidebarMenuItem icon="columns" ><button className='upload' >Upload</button></CDBSidebarMenuItem>
//                         </NavLink>

//                         <NavLink exact to="/generate-invoice" activeClassName="activeClicked">
//                         <CDBSidebarMenuItem icon="table"><button className='invoice'>Generate Invoice</button></CDBSidebarMenuItem>
//                         </NavLink>

//                         <NavLink exact to="/photos" activeClassName="activeClicked">
//                         <CDBSidebarMenuItem icon="user"><button className='visualization'>Visualization</button></CDBSidebarMenuItem>
//                         </NavLink>

//                     </CDBSidebarMenu>
//                 </CDBSidebarContent>

//                 <CDBSidebarFooter style={{ textAlign: 'center' }}>


//                     <button style={{ padding: '1px 5px' }}
//                         onClick={() => {
//                             dispatch(userLogout())
//                             loginnavigate("/")
//                         }
//                         } >
//                         Sign Out
//                     </button>
//                 </CDBSidebarFooter>
//             </CDBSidebar>

//             <CDBSidebarContent>
//                <h6 className='User'>{Profile.name}</h6> 
//                <p className='User'>{Profile.email}</p>
//                  <img src={Illustrations} alt="loading..." style={{ width: '100vw', height: '88vh',}} />
//             </CDBSidebarContent>

//         </div>
//     );
// };

// export default Dashboard;


import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/actionCreate';
import { useNavigate } from "react-router-dom";
import Illustrations from '../assets/Illustrations.gif'
import { ThemeContext } from "../components/Theme";


function Dashboard() {

    const [upload, setUpload] = useState(false);
    const Profile = useSelector((item) => item.token.data);
    const dispatch = useDispatch();
    const loginnavigate = useNavigate();
    const uploadNavigate = useNavigate();

    const handleUpload = () => {
        uploadNavigate("/Upload")
    }


    const { theme, toggleTheme } = useContext(ThemeContext);
  

    return (
        <>
            <header class="py-3 mb-4 border-bottom shadow">
                <div class="container-fluid align-items-center d-flex">
                    <div class="flex-shrink-1">
                        <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none">
                            <i class="bi bi-bootstrap fs-2 text-dark"></i>
                        </a>
                    </div>
                    <div class="flex-grow-1 d-flex align-items-center">
                        <form class="w-100 me-3">
                            <h2> MERN Stack Project </h2>
                        </form>
                        <button onClick={() => toggleTheme()}>{theme}</button>
                        {/* <button data-set-theme="" data-act-class="ACTIVECLASS">change theme</button> */}
                        <div>{Profile.email}</div>
                        {/* <div class="flex-shrink-0 dropdown">
                            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://via.placeholder.com/28?text=!" alt="user" width="32" height="32" class="rounded-circle"/>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser2"
                            // style={{marginRight: '2em'}}
                             >
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </header>


{/* carousel */}
            {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 carousel" src={Illustrations} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 carousel " src="..." alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 carousel" src="..." alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}


            <div class="container-fluid pb-3 flex-grow-1 d-flex flex-column flex-sm-row overflow-auto">
                <div class="row flex-grow-sm-1 flex-grow-0">
                    <aside class="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
                        <div class="bg-light border rounded-3 p-1 h-100 sticky-top">
                            <ul class="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
                                <li class="nav-item">
                                    <a href="/Upload" class="nav-link px-2 text-truncate">
                                        <i class="bi bi-house fs-5"></i>
                                        <span class="d-none d-sm-inline" onClick={handleUpload}>Upload</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-2 text-truncate">
                                        <i class="bi bi-speedometer fs-5"></i>
                                        <span class="d-none d-sm-inline">Generate Invoice</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/photo" class="nav-link px-2 text-truncate"><i class="bi bi-card-text fs-5"></i>
                                        <span class="d-none d-sm-inline">Visualization</span> </a>
                                </li>

                                <li>
                                    <a href="#" class="nav-link px-2 text-truncate"><i class="bi bi-card-text fs-5"></i>
                                        <span class="d-none d-sm-inline" onClick={() => {
                                            dispatch(userLogout())
                                            loginnavigate("/")
                                        }
                                        }>Logout</span> </a>
                                </li>
                            </ul>
                        </div>
                    </aside>


                    <main class="col overflow-auto h-100">
                        <div class="bg-light border rounded-3 p-3">

                            <h1 className='upload-filename'>Upload a your File</h1>
                            <form action="http://127.0.0.1:8000/upload" method="POST" enctype="multipart/form-data">
                                <input type="file" name="pdf" accept=".pdf" />
                                <button type="submit">Upload</button>
                            </form>
                            <p></p>
                            <hr />
                            <h4>More content...</h4>
                            <p></p>
                            <hr />

                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default Dashboard;