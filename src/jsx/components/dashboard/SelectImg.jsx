import { useState } from "react";
import Select from "react-select";
import { IMAGES } from "../../constant/theme";

const options1 = [
    { icon: IMAGES.svgdashsvg, value: 1, label: "Dash Coin" },
    { icon: IMAGES.svgbtcsvg, value: 2, label: "Bitcoin" },
    { icon: IMAGES.svgethsvg, value: 3, label: "Ethereum" },
    { icon: IMAGES.svgbtcsvg, value: 4, label: "Ripple" },
]
function SelectImg() {
    const [selectedOption, setSelectedOption] = useState(options1[0]);
    const handleChange = e => {
        setSelectedOption(e);
    }
    return (
        <>
            <Select
                className="custom-react-select img-select flagselect border rounded z-2 select2dark"
                isSearchable={false}
                value={selectedOption}
                options={options1}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={e.icon} alt="" style={{ width: 32, marginRight: 10 }} />
                        <span style={{ marginLeft: 5, fontWeight: "500" }}>{e.label}</span>
                    </div>
                )}
            />

        </>
    )
}
export default SelectImg