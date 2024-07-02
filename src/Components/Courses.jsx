import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Courses() {
    const { courses } = useContext(MyContext)
    const { t } = useTranslation()
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">Courses</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* courses */}
            <div className="container pt-5">
                <div className="row g-4">
                    {courses && courses.map((course) => {
                        return <div className="col-md-12" key={course._id}>
                            <div className="card courseCard">
                                <div className="card-body">
                                    <h1>{t(course.title)}</h1>
                                    <p>{t(course.description)}</p>
                                    <Link to="/user-login"> <button className="btn btn-dark mt-3">Register Now</button></Link>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
