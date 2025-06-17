import Marquee from "react-fast-marquee";
import { cryptolist } from "../../constant/Alldata";

function Marqueedata() {
    return (
        <>
            <Marquee pauseOnHover={true} >
                {cryptolist.map((data, i) => (
                    <li key={i} style={{ padding: '0px 07px' }}>
                        <div className="card overflow-hidden">
                            <div className="card-body d-flex align-items-center">
                                <img src={data.svg} alt="" />
                                <div>
                                    <h4 className="mb-0">{data.coin1}<small> {data.coin2}</small></h4>
                                    <p className="mb-0">{data.price1}<span className={data.class}>{data.price2}</span></p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </Marquee>
        </>
    );
}

export default Marqueedata;