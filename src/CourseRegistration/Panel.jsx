import { Link, Outlet } from "react-router-dom";
import UserBar from "../Components/UserBar";

export default function Panel() {
    return (
        <div>
            <UserBar/>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">Course Registration</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="container-fluid ">
                <div className="row pt-5">
                    <div className="col-md-2 pb-4 adminLink">
                        <Link to="courses-registration"> <button className="btn btn-outline-dark">Available Courses</button></Link>
                        <Link to="requested-courses">  <button className="btn btn-outline-dark mt-4">Requested Courses</button></Link>
                    </div>
                    <div className="col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
