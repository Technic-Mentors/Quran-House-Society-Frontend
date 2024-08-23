import { Link, useLocation } from "react-router-dom";
import quranHouseLogo from "../assets/quranHouseLogo.avif";
import { useTranslation } from "react-i18next";
import enFlag from "../assets/enFlag.png"
import urFlag from "../assets/urFlag.png"
import { useEffect, useRef, useState } from "react";
function Navbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true)
    const { t, i18n } = useTranslation();
    const navRef = useRef()

    useEffect(() => {
        const navBarCloseOnClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsNavbarCollapsed(true)
            }
        }
        document.addEventListener("click", navBarCloseOnClick)
        return () => {
            document.removeEventListener("click", navBarCloseOnClick)
        }
    }, [])

    useEffect(() => {
        const checkLanguage = sessionStorage.getItem("language")
        if (checkLanguage) {
            i18n.changeLanguage(checkLanguage);
        } else {
            i18n.changeLanguage("en");
        }
    }, [i18n])
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        sessionStorage.setItem("language", lng)
    };
    const urduFont = i18n.language === 'ur' ? 'urdu-font' : '';
    const location = useLocation();
    if (location.pathname === "/adminPanel/add-lecture-category" ||
        location.pathname === "/adminPanel/add-video-lecture" ||
        location.pathname === "/adminPanel/add-audio-lecture" ||
        location.pathname === "/adminPanel/lectures" ||
        location.pathname === "/adminPanel/add-books-category" ||
        location.pathname === "/adminPanel/add-books" ||
        location.pathname === "/adminPanel/books-list" ||
        location.pathname === "/adminPanel/add-course" ||
        location.pathname === "/adminPanel/courses-list" ||
        location.pathname === "/adminPanel/course-registration-request" ||
        location.pathname === "/userPanel/courses-registration" ||
        location.pathname === "/userPanel/requested-courses") {
        return null;
    }
    const isLinkActive = (link) => {
        if (link === location.pathname) {
            return "active"
        }
    }
    const handleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed)
    }
    const closeNavbar = () => {
        if (window.innerWidth <= 700) {
            setIsNavbarCollapsed(!isNavbarCollapsed)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-3" ref={navRef}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handleNavbar}>
                        <img src={quranHouseLogo} alt="Quran House Society Logo" style={{ width: "200px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavbarCollapsed} onClick={handleNavbar} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${urduFont}`}>

                            <li className="nav-item navBar-item">
                                <Link className={`nav-link ${isLinkActive("/")}`} aria-current="page" to="/" onClick={closeNavbar}>{t('Home')}</Link>
                            </li>
                            <li className="nav-item navBar-item">
                                <Link className={`nav-link ${isLinkActive("/about")}`} to="/about" onClick={closeNavbar}>{t('About')}</Link>
                            </li>
                            <li className="nav-item navBar-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('Resources')}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${isLinkActive("/video-lectures")}`} to="/video-lectures" onClick={closeNavbar}>{t('Videos')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/audio-lectures")}`} to="/audio-lectures" onClick={closeNavbar}>{t('Audios')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/pdf-books")}`} to="/pdf-books" onClick={closeNavbar}>{t('Books')}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item navBar-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('multiMedia')}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${isLinkActive("/video-lectures")}`} to="/video-lectures" onClick={closeNavbar}>{t('easyCourse')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/video-lectures")}`} to="/video-lectures" onClick={closeNavbar}>{t('audioVideoCourse')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/video-lectures")}`} to="/video-lectures" onClick={closeNavbar}>{t('teacherTraining')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/audio-lectures")}`} to="/audio-lectures" onClick={closeNavbar}>{t('diplomaCourse')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/pdf-books")}`} to="/pdf-books" onClick={closeNavbar}>{t('compQuran')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/pdf-books")}`} to="/pdf-books" onClick={closeNavbar}>{t('books')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/pdf-books")}`} to="/pdf-books" onClick={closeNavbar}>{t('pressRelea')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/social-media")}`} to="/social-media" onClick={closeNavbar}>{t('socialMedia')}</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item navBar-item">
                                <Link className={`nav-link ${isLinkActive("/courses")}`} to="/courses" onClick={closeNavbar}>{t('Courses')}</Link>
                            </li>
                            <li className="nav-item navBar-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('Contact')}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${isLinkActive("/contact")}`} to="/contact" onClick={closeNavbar}>{t('ContactUs')}</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/donate")}`} to="/donate" onClick={closeNavbar}>{t('DonateUs')}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item navBar-item me-3">
                                <Link className={`nav-link ${isLinkActive("/user-login")}`} to="/user-login" onClick={closeNavbar}>{t('Registration')}</Link>
                            </li>
                            <div className="language-switcher d-flex align-items-center me-3">
                                <button onClick={() => changeLanguage('en')} className="btn btn-outline-primary btn-sm me-1"><img src={enFlag} alt="" className="img-fluid" style={{ height: "20px" }} onClick={handleNavbar} /></button>
                                <button onClick={() => changeLanguage('ur')} className="btn btn-outline-primary btn-sm" ><img src={urFlag} alt="" className="img-fluid" style={{ height: "20px" }} onClick={handleNavbar} /></button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
