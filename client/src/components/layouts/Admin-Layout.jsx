import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import { FaUser, FaPhone, FaHome, FaTable } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <h1>isLoading...</h1>
    }
    debugger
    if (!user.isAdmin) {
        debugger
        window.location.href = "/";
    }
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid border border-success justify-content-between">
                    <Link className="navbar-brand " to="#">
                        <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" width={"50px"} height={"50px"} alt="" />
                    </Link>

                    <div className=" navbar  d-flex justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/admin/users"><b>
                                    <FaUser className='me-1' />users</b></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/admin/contacts"><b><FaPhone className='me-1' />Contacts</b></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/"><b><FaHome className='me-1' />Home</b></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/register"><b><FaTable className='me-1' />Services</b></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {window.location.href === "http://localhost:5173/admin" && <div>
                <div id="particles-js">
                    <div className="container">
                        <div className="row top">
                            <div className="twelve column">
                                <div className="logo">V</div>
                                <h1>Welcome Admin</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="one-half column">
                                <div className="pens pulled">
                                    <h1>Pens</h1>
                                    <ul><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/DIcJx">Pricing Tables</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/RrMLjV">Portfolio Home Page</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/PwqNvW">Login Process</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/ORkmKo">Responsive Blog Homepage</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/ZYLGMZ">Portfolio Opening Page</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/JXdRqd">Blog Post Using Vertical Rhythm</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/j-w-v/pen/bEVvLM">Pricing Tables: Black And Yellow</a></li></ul>
                                </div>
                            </div>

                            <div className="one-half column">
                                <div className="posts pulled">
                                    <h1>Posts</h1>
                                    <ul><li><a href="https://www.j-w-v.com/writing/index.php/20-awe-inspiring-codepen-examples-you-can-learn-from" target="_blank" rel="noopener noreferrer">20 Awe-Inspiring Codepen Examples You Can Learn From <span className="new">NEW</span></a></li><li><a href="https://www.j-w-v.com/writing/index.php/hero-images-20-free-places-to-find-them" target="_blank" rel="noopener noreferrer">Hero Images &amp; 20 Free Places To Find Them </a></li><li><a href="https://www.j-w-v.com/writing/index.php/18-mobile-first-css-frameworks" target="_blank" rel="noopener noreferrer">18 Mobile First CSS Frameworks </a></li><li><a href="https://www.j-w-v.com/writing/index.php/how-i-grew-as-a-javascript-developer" target="_blank" rel="noopener noreferrer">How I Grew As A JavaScript Developer </a></li><li><a href="https://www.j-w-v.com/writing/index.php/css-s-undersung-property-box-sizing" target="_blank" rel="noopener noreferrer">CSS's undersung property: box-sizing </a></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container ">
                        <div className="footer">
                            <p>Made using the awesome <a href="https://github.com/VincentGarreau/particles.js/">Particles.js</a>, <a href="http://cpv2api.com/">Codepen V2 API</a> & <a href="http://getskeleton.com/">Skeleton.css</a></p> </div></div>
                </div>
            </div>}
            <Outlet />
        </div>
    )
}

export default AdminLayout