import { Link } from "react-router-dom"
import quranHouseLogo from "../assets/quranHouseLogo.png"
import userImg from "../assets/user-img.png"
function UserBar() {
    const User = JSON.parse(sessionStorage.getItem("User"))
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={quranHouseLogo} alt="quran house society logo" style={{ height: "60px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/video-lectures">Videos</Link></li>
                                    <li><Link className="dropdown-item" to="/audio-lectures">Audios</Link></li>
                                    <li><Link className="dropdown-item" to="/pdf-books">Books</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <img src={userImg} className="img-fluid" style={{ height: "35px" }} alt="user profile img" data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample" />
                            </li>
                        </ul>
                    </div>
                </div>
                {/*  */}
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-end">
                                <div className="collapse profile-set" id="collapseExample">
                                    <div className="card card-body">
                                        <h5 className="text-center">{User.name}</h5>
                                        <div className="d-flex justify-content-center">
                                            <h3>{User.name.charAt(0)}</h3>
                                        </div>
                                        <h5>{User.email}</h5>
                                        <h5 className="mt-1">{User.number}</h5>
                                        <Link className="text-center" style={{ color: "initial", textDecoration: "underline" }} to="/user-login">Log Out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
        </>
    )
}

export default UserBar;
