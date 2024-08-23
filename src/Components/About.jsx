import { useTranslation } from "react-i18next";
import Testimonial from "./Testimonial";

export default function About() {
    const { t, i18n } = useTranslation()
    const textDirection = i18n.language === 'ur' ? 'rtl' : 'ltr';
    const urduFont = i18n.language === 'ur' ? 'urdu-font' : '';

    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className={`text-center ${urduFont}`}>{t("About")}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section start */}
            <div className="container pt-4">
                <div className="row aboutPageSection">
                    <div className="col-md-12">
                        <h1 className={`text-center ${urduFont}`}>{t("aboutQurHouSocHead")}</h1>
                        <ul className={textDirection}>
                            <li>{t("aboutQurHouSoc1stP")}</li>
                            <li>{t("aboutQurHouSoc2ndP")}</li>
                            <li>{t("aboutQurHouSoc3rdP")}</li>
                            <li>{t("aboutQurHouSoc4thP")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* about us section end */}

            {/* mission & vision start */}
            <div className="container pt-4">
                <div className="row missionVision">
                    <h1 className={`text-center ${urduFont}`}>{t("missionVisionHead")}</h1>
                    <div className="col-md-12 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className={`${textDirection} ${urduFont}`}>
                                    <p>{t("visionDes")}</p>
                                    <p>{t("missionDes")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mission & vision end */}
            {/* next paln */}
            <div className="container mt-5">
                <h1 className={`text-center ${urduFont}`}>{t("nextPlan")}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <ul className={textDirection}>
                            <li>{t("nextPalnLi1")}</li>
                            <li>{t("nextPlanLi2")}</li>
                            <li>{t("nextPlanLi3")}</li>
                            <li>{t("nextPlanLi4")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* our values start */}
            <div className="valuesGoals mt-5">
                <div className="container">
                    <h1 className={`text-center pt-4 ${urduFont}`}>{t("valGoalHead")}</h1>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h1 className={textDirection}>{t("valHead")}</h1>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("val1stHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("val1stDes")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("val2ndHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("val2ndDes")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("val3rdHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("val3rdDes")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("val4thHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("val4thDes")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1 className={textDirection}>{t("GoalHead")}</h1>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("Goal1stHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("Goal1stDes")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("Goal2ndHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("Goal2ndDes")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("Goal3rdHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("Goal3rdDes")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className={textDirection}>{t("Goal4thHead")}</h2>
                                    <div className={`${textDirection} ${urduFont}`}>
                                        <p>{t("Goal4thDes")}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
            {/* our values end */}
            <Testimonial />
        </div >
    )
}
