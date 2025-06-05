import { Swiper, SwiperSlide } from "swiper/react"; 
import { swipershirtdata } from "../../constant/alldata";
function SwiperHome2() {
    return (
        <Swiper className="swiper mySwiper swiper-lr"
            spaceBetween={15}
            slidesPerView={1.5}
            breakpoints={{
                360: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 40
                },
                1200: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
            }}
        >
            {swipershirtdata.slice(1, 5).map((data, i) => (
                <SwiperSlide key={i}>
                    <div className="card">
                        <div className="card-body product">
                            <img src={data.image} alt="img" />
                            <div className="product-imfo">
                                <div className="d-flex justify-content-between">
                                    <span className="text-danger">up to 79% off</span>
                                    <h6 className="font-w600">$80</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-w600">Block Tiered Dress.</h6>
                                    <span><del>$95</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperHome2;