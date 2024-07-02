import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {
    const navigate = useNavigate()
    const [userLogIn, setUserLogIn] = useState({
        email: "",
        password: ""
    })
    const logInUser = async (e) => {
        e.preventDefault()
        const emailError = document.getElementById("emailError")
        const passwordError = document.getElementById("passwordError")
        let hasError = false
        const { email, password } = userLogIn
        if (!email) {
            emailError.innerText = "Please enter email"
            hasError = true
        } else {
            emailError.innerText = ""
        }
        if (!password) {
            passwordError.innerText = "Please enter password"
            hasError = true
        } else {
            passwordError.innerText = ""
        }
        if (hasError) {
            return;
        }
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/userLogIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        const logInError = document.getElementById("logInError")
        if (data.message === "Invalid Credentials") {
            logInError.innerText = "Invalid Credentials"
        }
        if (res.ok) {
            sessionStorage.setItem("User", JSON.stringify(data))
            setUserLogIn({
                email: "",
                password: ""
            })
            navigate("/userPanel")
        }
    }
    const onchange = (e) => {
        setUserLogIn({ ...userLogIn, [e.target.name]: e.target.value })
    }
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">Log In</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="text-danger text-center" id="logInError"></div>
                        <form onSubmit={logInUser}>
                            <input type="email" placeholder="Email" className="form-control mt-3" name="email" value={userLogIn.email} onChange={onchange} />
                            <div id="emailError" className="text-danger"></div>
                            <input type="password" placeholder="Password" className="form-control mt-3" name="password" value={userLogIn.password} onChange={onchange} />
                            <div id="passwordError" className="text-danger"></div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn1 px-4 py-2" type="submit">Log In</button>
                            </div>
                            <p className="text-center mt-3">Not Registerd Yet? <Link to="/user-signup" style={{ textDecoration: "underline" }}>SignUp</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
