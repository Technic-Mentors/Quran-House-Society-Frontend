import { Link, Outlet } from "react-router-dom";
import AdminBar from "./AdminBar";

export default function Admin() {
    return (
        <div>
            <AdminBar />
            {/* header start */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row justify-content-center allHeaderPadding">
                            <div className="col-md-12">
                                <h1 className="text-center">Quran House Society : Admin Panel</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
            <div className="container-fluid py-4">
                <div className="row justify-content-between">
                    <div className="col-md-2 pb-4 adminLink">
                        <Link to="add-lecture-category"> <button className="btn btn-outline-dark">Add Lectures Category</button></Link>
                        <Link to="add-video-lecture"> <button className="btn btn-outline-dark mt-3">Upload Video Lecture</button></Link>
                        <Link to="add-audio-lecture"> <button className="btn btn-outline-dark mt-3">Upload Audio Lecture</button></Link>
                        <Link to="lectures"> <button className="btn btn-outline-dark mt-3">Uploaded Lectures</button></Link>
                        <Link to="add-course"> <button className="btn btn-outline-dark mt-3">Add New Courses</button></Link>
                        <Link to="courses-list"> <button className="btn btn-outline-dark mt-3">Uploaded Courses</button></Link>
                        <Link to="course-registration-request"> <button className="btn btn-outline-dark mt-3">Registration Requests</button></Link>
                        <Link to="add-books-category">  <button className="btn btn-outline-dark mt-3">Add Books Category</button></Link>
                        <Link to="add-books">  <button className="btn btn-outline-dark mt-3">Add New Books</button></Link>
                        <Link to="books-list"> <button className="btn btn-outline-dark mt-3">Uploaded Books</button></Link>
                    </div>
                    <div className="col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
