import { useContext, useState } from "react";
import HomeHeader from "./HomeHeader";
import aboutImg from "../assets/about-img.png"
import MyContext from "../ContextApi/Mycontext";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation();
    const { Videolectures, Audiolectures } = useContext(MyContext)
    const [display, setDisplay] = useState("")
    const getEmbeddableUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2] ? `https://www.youtube.com/embed/${match[2]}` : null;
    };
    const textDirection = i18n.language === 'ur' ? 'rtl' : 'ltr';
    const urduFont = i18n.language === 'ur' ? 'urdu-font' : '';
    return (
        <div>
            <HomeHeader />
            {/* about us section */}
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={aboutImg} className="img-fluid" alt="about section image" />
                    </div>
                    <div className="col-md-6">
                        <h1 style={{ color: "var(--primary-color)" }} className={textDirection}>{t("aboutUsHeading")}</h1>
                        <div className={`${textDirection} ${urduFont}`}>
                            <p>{t("aboutUsDes")}</p>
                        </div>
                        <hr className="mt-4" />
                        <div className="row justify-content-between">
                            <div className="col-md-4 col-6">
                                <Link to="/about"> <button className="btn btn1">{t("aboutBtn")}</button></Link>
                            </div>
                            <div className="col-md-4 col-6 d-flex align-items-center aboutCall">
                                <div >
                                    <i className="fas fa-phone me-2"></i>
                                </div>
                                <div>
                                    <h5 style={{ marginBottom: "0" }} className={urduFont}>{t("aboutCall")}</h5>
                                    <p>00001111010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quranic revival */}
            <div className="QuranicRevivalbg mt-5">
                <div className="QuranicRevival-overlay">
                    <div className="container">
                        <div className={`row py-5 align-items-center quranicRevival ${urduFont}`}>
                            <h1 className={`text-center ${urduFont}`}>{t("quranicHead")}</h1>
                            <div className="col-md-4">
                                <div className="card" onMouseOver={() => setDisplay("1")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-book"></i>
                                        <h3 className={urduFont}>{t("qura1st")}</h3>
                                    </div>
                                </div>
                                <div className="card " onMouseOver={() => setDisplay("2")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-chalkboard"></i>
                                        <h3 className={urduFont}>{t("qura2nd")}</h3>
                                    </div>
                                </div>
                                <div className="card " onMouseOver={() => setDisplay("3")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-users"></i>
                                        <h3 className={urduFont}>{t("qura3rd")}</h3>
                                    </div>
                                </div>
                                <div className="card " onMouseOver={() => setDisplay("7")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-lightbulb"></i>
                                        <h3 className={urduFont}>{t("qura4th")}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center quranicRevivalMiddle p-4">
                                <p className={`para ${display === "1" || display === "" ? "para1" : ""}`}>{t("qura1stDes")}</p>
                                <p className={`para ${display === "2" ? "para2" : ""}`}>{t("qura2ndDes")}</p>
                                <p className={`para ${display === "3" ? "para3" : ""}`}>{t("qura3rdDes")}</p>
                                <p className={`para ${display === "4" ? "para4" : ""}`}>{t("qura4thDes")}</p>
                                <p className={`para ${display === "5" ? "para5" : ""}`}>{t("qura5thDes")}</p>
                                <p className={`para ${display === "6" ? "para6" : ""}`}>{t("qura6thDes")}</p>
                                <p className={`para ${display === "7" ? "para7" : ""}`}>{t("qura7thDes")}</p>
                                <p className={`para ${display === "8" ? "para8" : ""}`}>{t("qura8thDes")}</p>
                            </div>
                            <div className="col-md-4">
                                <div className="card" onMouseOver={() => setDisplay("4")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-user-tie"></i>
                                        <h3 className={urduFont}>{t("qura5th")}</h3>
                                    </div>
                                </div>
                                <div className="card" onMouseOver={() => setDisplay("5")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-balance-scale"></i>
                                        <h3 className={urduFont}>{t("qura6th")}</h3>
                                    </div>
                                </div>
                                <div className="card" onMouseOver={() => setDisplay("6")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-hands-helping"></i>
                                        <h3 className={urduFont}>{t("qura7th")}</h3>
                                    </div>
                                </div>
                                <div className="card" onMouseOver={() => setDisplay("8")} onMouseDown={() => setDisplay("")}>
                                    <div className="card-body">
                                        <i className="fas fa-globe"></i>
                                        <h3 className={urduFont}>{t("qura8th")}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* learning facilities */}
            <div className="container py-5">
                <div className="row justify-content-between learningFacilities g-4">
                    <div className="col-md-12">
                        <h1 className={`text-center ${urduFont}`}>{t("qurLeaFac")}</h1>
                        <div className={`text-center ${urduFont}`}>
                            <p>{t("qurLeaFacDes")}</p>
                        </div>
                    </div>
                    <div className="col-md-5 learningCol1">
                        <div className="card">
                            <div className="card-body">
                                <h2 className={textDirection}>{t("qurLecFac1stHead")}</h2>
                                <ul className={textDirection}>
                                    <li id="list">{t("qurLecFac1stP")}</li>
                                    <li id="list">{t("qurLecFac2ndP")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <h2 className={textDirection}>{t("qurLecFac2ndHead")}</h2>
                                <ul className={textDirection}>
                                    <li >{t("qurLecFac21P")}</li>
                                    <li >{t("qurLecFac22P")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <h2 className={textDirection}>{t("qurLecFac3rdHead")}</h2>
                                <ul className={textDirection}>
                                    <li>{t("qurLecFac31P")}</li>
                                    <li>{t("qurLecFac32P")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <h2 className={textDirection}>{t("qurLecFac4thHead")}</h2>
                                <ul className={textDirection}>
                                    <li>{t("qurLecFac41P")}</li>
                                    <li>{t("qurLecFac42P")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quranic revival */}
            <div className="vidoAudioBg mt-5 videoAudio">
                <div className="vidoAudio-overlay">
                    <div className="container">
                        <div className="videoAudioShape">
                            <div className="shape1"></div>
                            <div className="shape2"></div>
                            <div className="shape3"></div>
                            <div className="shape4"></div>
                            <div className="shape5"></div>
                        </div>
                        <div className="videoAudioShapeCircle">
                            <div className="shape6"></div>
                            <div className="shape7"></div>
                            <div className="shape8"></div>
                            <div className="shape9"></div>
                            <div className="shape10"></div>
                        </div>
                        <div className="row justify-content-center g-4 py-3">
                            <h1 className={`text-center ${urduFont}`}>{t("homeVideoLec")}</h1>
                            {Videolectures && Videolectures.slice(0, 3).map((lecture) => {
                                return <div className="col-md-4" key={lecture._id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{lecture.title}</h3>
                                            <iframe width="100%" src={lecture.video.startsWith("https://www.youtube.com/embed") ? lecture.video : getEmbeddableUrl(lecture.video)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            })}
                            <div className="col-md-3 d-flex justify-content-center">
                                <Link to="/video-lectures"> <button className={`btn btn-outline-light px-4 py-2 ${urduFont}`}>{t("homeVideoBtn")}</button></Link>
                            </div>
                        </div>
                        <div className="row justify-content-center g-4 py-3">
                            <h1 className={`text-center ${urduFont}`}>{t("homeAudioLec")}</h1>
                            {Audiolectures && Audiolectures.slice(0, 3).map((lecture) => {
                                return <div className="col-md-4" key={lecture._id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{lecture.title}</h3>
                                            <iframe width="100%" src={lecture.audio.startsWith("https://www.youtube.com/embed") ? lecture.audio : getEmbeddableUrl(lecture.audio)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            })}
                            <div className="col-md-3 d-flex justify-content-center">
                                <Link to="/audio-lectures"> <button className={`btn btn-outline-light px-4 py-2 ${urduFont}`}>{t("homeAudioBtn")}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div >
    )
}
