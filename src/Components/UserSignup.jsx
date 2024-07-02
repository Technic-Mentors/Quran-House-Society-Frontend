import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserSignup() {
    const navigate = useNavigate()
    const [userSignUp, setUserSignUp] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    })
    const signUpUser = async (e) => {
        e.preventDefault()
        const nameError = document.getElementById("nameError")
        const emailError = document.getElementById("emailError")
        const numberError = document.getElementById("numberError")
        const passwordError = document.getElementById("passwordError")
        let hasError = false
        const { name, email, number, password } = userSignUp
        if (!name) {
            nameError.innerText = "Please enter name"
            hasError = true
        } else {
            nameError.innerText = ""
        }
        if (!email) {
            emailError.innerText = "Please enter email"
            hasError = true
        } else {
            emailError.innerText = ""
        }
        if (!number) {
            numberError.innerText = "Please enter contact number"
            hasError = true
        } else {
            numberError.innerText = ""
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
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/userSignUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, number, password })
        })
        const data = await res.json()
        if (data.message === "Email already exists") {
            emailError.innerText = "Email already exists"
        } else if (data.message === "Number already exists") {
            numberError.innerText = "Number already exists"
        }
        if (res.ok) {
            sessionStorage.setItem("User", JSON.stringify(data))
            setUserSignUp({
                name: "",
                email: "",
                number: "",
                password: ""
            })
            navigate("/user-login")
        }
    }

    const onchange = (e) => {
        setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
    }
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">Sign Up</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={signUpUser}>
                            <input type="text" placeholder="Name" name="name" value={userSignUp.name} onChange={onchange} className="form-control mt-3" />
                            <div id="nameError" className="text-danger"></div>
                            <input type="email" placeholder="Email" name="email" value={userSignUp.email} onChange={onchange} className="form-control mt-3" />
                            <div id="emailError" className="text-danger"></div>
                            <input type="number" placeholder="Contact Number" name="number" value={userSignUp.number} onChange={onchange} className="form-control mt-3" />
                            <div id="numberError" className="text-danger"></div>
                            <input type="password" placeholder="Password" name="password" value={userSignUp.password} onChange={onchange} className="form-control mt-3" />
                            <div id="passwordError" className="text-danger"></div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn1 px-4 py-2" type="submit">Sign Up</button>
                            </div>
                            <p className="text-center mt-3">Already Have Account? <Link to="/user-login" style={{ textDecoration: "underline" }}>LogIn</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
