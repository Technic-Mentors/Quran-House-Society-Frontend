import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
export default function HomeHeader() {
    const { t, i18n } = useTranslation();
    const urduFont = i18n.language === 'ur' ? 'urdu-font' : '';
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        pauseOnHover: false
    };
    return (
        <>
            <Slider {...settings}>
                <div className="homeHead1">
                    <div className="homeHead-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 py-6">
                                    <h1 style={{ fontSize: "85px" }} className={urduFont}>{t("discoverQuran")}</h1>
                                    <p style={{ fontSize: "21px" }} className={urduFont}>{t("disQurDes")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeHead2">
                    <div className="homeHead-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 py-6">
                                    <h1 style={{ fontSize: "85px" }} className={urduFont}>{t("mission")}</h1>
                                    <p style={{ fontSize: "21px" }} className={urduFont}>{t("missDes")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </>
    )
}
