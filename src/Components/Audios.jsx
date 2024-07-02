import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import { Link } from "react-router-dom"
import lectureImg from "../assets/bookImg.jpg"

export default function Audios() {
  const { Audiolectures } = useContext(MyContext)
  const Lectures = []
  const newCategory = new Set()

  Audiolectures && Audiolectures.map((lecture) => {
    const category = lecture.categoryId && lecture.categoryId.category
    if (category && !newCategory.has(category)) {
      newCategory.add(category)
      Lectures.push(lecture)
    }
  })
  return (
    <div>
      {/* page header */}
      <div className="allPageHeaderBg">
        <div className="allPageHeaderOverlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 allHeaderPadding">
                <h1 className="text-center">Audio Lectures</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all lectures */}
      <div className="container py-4">
        <div className="row g-4">
          {Lectures && Lectures.map((lecture) => {
            return <div className="col-md-4" key={lecture._id}>
              <Link to={`/audio-lectures/${lecture.categoryId && lecture.categoryId.category.replace(/ /g, "_")}`} style={{ textDecoration: "none" }}> <div className="card">
                <img src={lecture.lecImg ? lecture.lecImg : lectureImg} className="card-img-top" alt="book-image" style={{ height: "200px" }} />
                <div className="card-body">
                  <h3 className="text-center">{lecture.categoryId && lecture.categoryId.category}</h3>
                </div>
              </div>
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
