import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../../constant/theme";
function SwiperHome() {
    return (
        <Swiper className="owl-carousel owl-carousel owl-loaded front-view-slider"
            slidesPerView={2.5}
            spaceBetween={10}
        >
            <SwiperSlide>
                <div className="items">
                    <div className="card profile-slider text-center">
                        <div className="card-body">
                            <img src={IMAGES.avatar2} alt="" className="avatar avatar-md rounded-circle" />
                            <h4 className="fs-14 mb-0">Cindy</h4>
                            <span>@sam224</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="items">
                    <div className="card profile-slider text-center">
                        <div className="card-body">
                            <img src={IMAGES.avatar3} alt="" className="avatar avatar-md rounded-circle" />
                            <h4 className="fs-14 mb-0">Monty</h4>
                            <span>@mon854</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="items">
                    <div className="card profile-slider text-center">
                        <div className="card-body">
                            <img src={IMAGES.avatar4} alt="" className="avatar avatar-md rounded-circle" />
                            <h4 className="fs-14 mb-0">Piter</h4>
                            <span>@pit234</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="items">
                    <div className="card profile-slider text-center">
                        <div className="card-body">
                            <img src={IMAGES.avatar5} alt="" className="avatar avatar-md rounded-circle" />
                            <h4 className="fs-14 mb-0">Jasi</h4>
                            <span>@jas234</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperHome;