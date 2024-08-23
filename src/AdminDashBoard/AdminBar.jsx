
import { Link } from "react-router-dom";
import userImg from "../assets/user-img.png"
import quranHouseLogo from "../assets/quranHouseLogo.avif";
import { useState } from "react";
import Swal from "sweetalert2";
function AdminBar() {
    const adminUser = JSON.parse(sessionStorage.getItem("adminData"))

    const [credentials, setCredentials] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const updatePassword = async (e) => {
        e.preventDefault()
        const emailError = document.getElementById("emailError")
        const oldPassError = document.getElementById("oldPassError")
        const newPassError = document.getElementById("newPassError")
        const confPassError = document.getElementById("confPassError")
        const { email, oldPassword, newPassword, confirmPassword } = credentials
        let isError = false;
        if (!email) {
            emailError.innerText = "Please Enter Admin Email"
            isError = true
        } else {
            emailError.innerText = ""
        }
        if (!oldPassword) {
            oldPassError.innerText = "Please Enter Old Password"
            isError = true
        } else {
            oldPassError.innerText = ""
        }
        if (!newPassword) {
            newPassError.innerText = "Please Enter New Password"
            isError = true
        } else {
            newPassError.innerText = ""
        }
        if (!confirmPassword) {
            confPassError.innerText = "Please Confirm Password"
            isError = true
        } else {
            confPassError.innerText = ""
        }
        if (newPassword !== confirmPassword) {
            confPassError.innerText = "Password Does Not Match"
            isError = true
        }
        if (isError) {
            return;
        }
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/updateAdminPass", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, oldPassword, newPassword, confirmPassword })
        })
        const data = await res.json()
        if (data.message === "Invalid Admin Email") {
            emailError.innerText = "Invalid Admin Email"
        } else if (data.message === "Invalid Old Password") {
            oldPassError.innerText = "Invalid Old Password"
        }
        if (res.ok) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Password Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setCredentials({
                email: "",
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            })
        }
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={quranHouseLogo} alt="Quran House Society Logo" style={{ height: "60px" }} />
                    </div>
                    <div className="justify-content-end">
                        <p>
                            <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <img src={userImg} className="img-fluid" style={{ height: "40px" }} alt="" />
                            </div>
                        </p>

                    </div>
                </div>
            </nav>
            {/*  */}
            <div>
                <div className="collapse profileSet" id="collapseExample">
                    <div className="card card-body">
                        <h2 className="text-center">Admin</h2>

                        <h5>{adminUser.email}</h5>

                        <div className="text-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ cursor: "pointer", color: "var(--primary-color)", textDecoration: "underline" }}>Change Password</div>
                        <div className="d-flex justify-content-center mt-3">
                            <Link to="/"> <button className="btn btn-outline-dark px-4 py-2">Log Out</button> </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Chnage Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="mail">Email</label>
                                <input type="email" name="email" id="mail" className="form-control" value={credentials.email} onChange={onchange} />
                                <div className="text-danger" id="emailError"></div>
                                <label htmlFor="Opass" className="mt-3">Old Password</label>
                                <input type="password" name="oldPassword" id="Opass" className="form-control" value={credentials.oldPassword} onChange={onchange} />
                                <div className="text-danger" id="oldPassError"></div>
                                <label htmlFor="Npass" className="mt-3">New Password</label>
                                <input type="password" name="newPassword" id="Npass" className="form-control" value={credentials.newPassword} onChange={onchange} />
                                <div className="text-danger" id="newPassError"></div>
                                <label htmlFor="Cpass" className="mt-3">Confirm Password</label>
                                <input type="password" name="confirmPassword" id="" className="form-control" value={credentials.confirmPassword} onChange={onchange} />
                                <div className="text-danger" id="confPassError"></div>
                                <div className="d-flex justify-content-center mt-3">
                                    <button className="btn btn1" onClick={updatePassword}>Update Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminBar;
