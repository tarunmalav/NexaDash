import Marquee from "react-fast-marquee";
import { IMAGES } from "../../constant/Theme";

export const cryptolist = [
    { svg: IMAGES.btcsvg, coin1: "Bitcoin", coin2: "BTC/USDT", price1: "$2092.56", price2: "+2.97%", class: "text-success", },
    { svg: IMAGES.ethsvg, coin1: "Ethereum", coin2: "ETH", price1: "$20392.36", price2: "+2.97%", class: "text-danger", },
    { svg: IMAGES.bnb1svg, coin1: "Ripple", coin2: "RPL", price1: "$34281.24", price2: "+3.97%", class: "text-success", },
    { svg: IMAGES.oxsvg, coin1: "Ethereum", coin2: "ETH", price1: "$34281.24", price2: "+3.97%", class: "text-success", },
    { svg: IMAGES.appcsvg, coin1: "Ripple", coin2: "RPL", price1: "$34281.24", price2: "+3.97%", class: "text-success", },
]
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