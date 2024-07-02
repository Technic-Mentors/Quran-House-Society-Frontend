import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const adminLogin = async (e) => {
        e.preventDefault()
        const { email, password } = credentials;
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/adminLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        const adminError = document.getElementById("adminError")
        if (data.message === "Invalid Credentials") {
            adminError.innerText = data.message
        }
        console.log(data);
        if (res.ok) {
            navigate("/adminPanel")
        }
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={adminLogin}>
                            <div className="text-danger text-center" id="adminError"></div>
                            <label htmlFor="email" className="mt-3">Email</label>
                            <input className="form-control" type="email" placeholder="Email" name="email" value={credentials.email} onChange={onchange} />
                            <label htmlFor="password" className="mt-4">Password</label>
                            <input className="form-control" type="password" placeholder="Password" name="password" value={credentials.password} onChange={onchange} />
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-success px-4 py-2" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
