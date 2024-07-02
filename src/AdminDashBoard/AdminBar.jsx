
import { Link } from "react-router-dom";
import quranHouseLogo from "../assets/quranHouseLogo.png";
function AdminBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={quranHouseLogo} alt="Quran House Society Logo" style={{ height: "60px" }} />
                    </div>
                    <div className="justify-content-end">
                        <Link to="/"> <button className="btn btn-outline-dark px-4 py-2">Log Out</button> </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AdminBar;
