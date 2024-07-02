import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import Swal from "sweetalert2";

export default function AllLectures() {
    const { Videolectures, Audiolectures, delVideoLecture, delAudioLecture, videoLecById, videoLecId, allCategory, setVideoLecId, allVideoLectures, audioLecById, audioLecId, allAudioLectures, setAudioLecId } = useContext(MyContext)

    const updateVideoLec = async (id, e) => {
        e.preventDefault()
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (isConfirmed) {
            const { title, categoryId, powerPointLink, pdfLink, video } = videoLecId
            const res = await fetch(`https://quran-house-society-backend.vercel.app/api/updateVideoLec/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, categoryId, powerPointLink, pdfLink, video })
            })
            if (res.ok) {
                allVideoLectures()
            }
            Swal.fire("Saved!", "", "success");
        } else {
            Swal.fire("Changes are not saved", "", "info");
        }

    }
    const videoLecChange = (e) => {
        setVideoLecId({ ...videoLecId, [e.target.name]: e.target.value })
    }
    const updateAudioLec = async (id, e) => {
        e.preventDefault()
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (isConfirmed) {
            const { title, categoryId, powerPointLink, pdfLink, audio } = audioLecId
            const res = await fetch(`https://quran-house-society-backend.vercel.app/api/updateAudioLec/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, categoryId, powerPointLink, pdfLink, audio })
            })
            if (res.ok) {
                allAudioLectures()
            }
            Swal.fire("Saved!", "", "success");
        } else {
            Swal.fire("Changes are not saved", "", "info");
        }

    }
    const audioLecChange = (e) => {
        setAudioLecId({ ...audioLecId, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    <h3 className="text-center">Video Lectures List</h3>
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover lecturesTable">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Videolectures && Videolectures.map((lecture) => {
                                    return <tr key={lecture._id}>
                                        <td>{lecture.title}</td>
                                        <td>{lecture.categoryId && lecture.categoryId.category}</td>
                                        <td>
                                            <i className="fas fa-eye me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => videoLecById(lecture._id)}></i>
                                            <i className="fas fa-edit me-4" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => videoLecById(lecture._id)}></i>
                                            <i className="fas fa-trash" onClick={() => delVideoLecture(lecture._id)}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <h3 className="text-center">Audio Lectures List</h3>
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover lecturesTable">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Audiolectures && Audiolectures.map((lecture) => {
                                    return <tr key={lecture._id}>
                                        <td>{lecture.title}</td>
                                        <td>{lecture.categoryId && lecture.categoryId.category}</td>
                                        <td>
                                            <i className="fas fa-eye me-4" data-bs-toggle="modal" data-bs-target="#staticBackdropAudio" onClick={() => audioLecById(lecture._id)}></i>
                                            <i className="fas fa-edit me-4" data-bs-toggle="modal" data-bs-target="#staticEditAudio" onClick={() => audioLecById(lecture._id)}></i>
                                            <i className="fas fa-trash" onClick={() => delAudioLecture(lecture._id)}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/*video lecture view modal */}
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Video Lecture View Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" value={videoLecId.title} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" id="category" value={videoLecId.categoryId && videoLecId.categoryId.category} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="video">Video Lecture Youtube Link</label>
                                        <input type="text" id="video" value={videoLecId.video} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="powerPointLink">Power Point Link</label>
                                        <input type="text" id="powerPointLink" value={videoLecId.powerPointLink} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="pdfLink">PDF Link</label>
                                        <input type="text" id="pdfLink" value={videoLecId.pdfLink} className="form-control" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*cideo lecture edit modal */}
            <div>
                <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Video Lecture Edit     Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" value={videoLecId.title} className="form-control" onChange={videoLecChange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <select type="text" id="category" value={videoLecId.categoryId && videoLecId.categoryId._id} name="categoryId" className="form-control" onChange={videoLecChange}>
                                            {allCategory && allCategory.map((cat) => {
                                                return <option key={cat._id} value={cat._id}>{cat.category}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="video">Audio Lecture Youtube Link</label>
                                        <input type="text" id="video" name="video" value={videoLecId.video} className="form-control" onChange={videoLecChange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="powerPointLink">Power Point Link</label>
                                        <input type="text" id="powerPointLink" name="powerPointLink" value={videoLecId.powerPointLink} className="form-control" onChange={videoLecChange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="pdfLink">PDF Link</label>
                                        <input type="text" id="pdfLink" name="pdfLink" value={videoLecId.pdfLink} className="form-control" onChange={videoLecChange} />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn1" onClick={(e) => updateVideoLec(videoLecId._id, e)}>Update Lecture</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*audio lecture view modal */}
            <div>
                <div className="modal fade" id="staticBackdropAudio" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Audio Lecture View Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" value={audioLecId.title} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" id="category" value={audioLecId.categoryId && audioLecId.categoryId.category} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="video">Video Lecture Youtube Link</label>
                                        <input type="text" id="video" value={audioLecId.audio} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="powerPointLink">Power Point Link</label>
                                        <input type="text" id="powerPointLink" value={audioLecId.powerPointLink} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="pdfLink">PDF Link</label>
                                        <input type="text" id="pdfLink" value={audioLecId.pdfLink} className="form-control" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*audio lecture edit modal */}
            <div>
                <div className="modal fade" id="staticEditAudio" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Audio Lecture Edit     Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" value={audioLecId.title} className="form-control" onChange={audioLecChange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <select type="text" id="category" value={audioLecId.categoryId && audioLecId.categoryId._id} name="categoryId" className="form-control" onChange={audioLecChange}>
                                            {allCategory && allCategory.map((cat) => {
                                                return <option key={cat._id} value={cat._id}>{cat.category}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="video">Audio Lecture Youtube Link</label>
                                        <input type="text" id="video" name="audio" value={audioLecId.audio} className="form-control" onChange={audioLecChange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="powerPointLink">Power Point Link</label>
                                        <input type="text" id="powerPointLink" name="powerPointLink" value={audioLecId.powerPointLink} className="form-control" onChange={audioLecChange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="pdfLink">PDF Link</label>
                                        <input type="text" id="pdfLink" name="pdfLink" value={audioLecId.pdfLink} className="form-control" onChange={audioLecChange} />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn1" onClick={(e) => updateAudioLec(audioLecId._id, e)}>Update Lecture</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
