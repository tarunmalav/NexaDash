import { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 

export const sliderData = [
    { id: 11111, name: 'Recent Alerts', },
    { id: 22222, name: 'Recent Alerts', },
    { id: 33333, name: 'Recent Alerts', },
];

function SliderBlog() {
    return (
        <Fragment>
            <div>
                <Swiper className="owl-carousel owl-theme card-carousel card-carousel-dots p-2 account-security-swiper"
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2000
                    }}
                    speed={3000} 
                    modules={[Pagination , Autoplay]}
                >
                    {sliderData.map((item, ind) => (
                        <SwiperSlide className="item" key={ind}>
                            <span className="fs-14 mb-3 d-block">{item.name}</span>
                            <h6 className="mb-2">Login Attempt Failed</h6>
                            <p className="mb-4">To start a blog, think of a first brainstorm details</p>
                            <div className="d-flex justify-content-between pt-1">
                                <span className="badge badge-sm border-0 badge-primary light">2 mins ago</span>{" "}
                                <span className="badge badge-sm border-0 badge-light">Details</span>{" "}
                            </div>
                        </SwiperSlide>
                    ))} 
                </Swiper>
            </div>
        </Fragment>
    )
}
export default SliderBlog;