import { IMAGES } from "../../constant/Theme"

// import { contactdataa } from "../constant/alldata"  
export const contactdataa = [
    { image: <img className="avatar avatar-lg avatar-circle mb-2" src={IMAGES.avtar1} />, name: "Jordana Niclany", email: "jordan@mail.com" },
    { image: <div className="avatar avatar-label avatar-lg bg-success-light text-success avatar-circle mb-2 mx-auto">KD</div>, name: "Jacob Jack", email: "jordan@mail.com" },
    { image: <img className="avatar avatar-lg avatar-circle mb-2" src={IMAGES.avtar3} />, name: "Sammy Nico", email: "jordan@mail.com", class: "bg-purple-light" },
    { image: <img className="avatar avatar-lg avatar-circle mb-2" src={IMAGES.avtar4} />, name: "Gibs Gibsy", email: "jordan@mail.com", class: "bg-cream-light" },
    { image: <img className="avatar avatar-lg avatar-circle mb-2" src={IMAGES.avtar5} />, name: "Sam Sammy", email: "jordan@mail.com" },
    { image: <img className="avatar avatar-lg avatar-circle mb-2" src={IMAGES.avtar6} />, name: "Corey Core", email: "jordan@mail.com" },
]
function Contactdata({gap}) {
    return (
        <>
            <div className="card-body">
                <div className={`row ${gap}`}>
                    {contactdataa.map((data, i) => (
                        <div className="col-xl-4 col-sm-4 col-6" key={i}>
                            <div className={`avatar-card text-center border-dashed rounded px-2 py-3 ${data.class}`}>
                                {data.image}
                                <h6 className="mb-0">{data.name}</h6>
                                <span className="fs-12">{data.email}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Contactdata