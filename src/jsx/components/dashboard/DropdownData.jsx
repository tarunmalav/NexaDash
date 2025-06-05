import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const Dropdowndata = () => {
     const [globalSelect, setGlobalSelect] = useState('Today');
    return (
        <>
            <Dropdown className='global-drop' align="end">
                <Dropdown.Toggle as="div" className='i-false global-drop-toggle c-pointer'>
                    {globalSelect}{" "}
                    <i className="fa-solid fa-chevron-down" />
                </Dropdown.Toggle>
                <Dropdown.Menu className='global-drop-menu'>
                    <Dropdown.Item onClick={() => setGlobalSelect('Today')}>Today</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGlobalSelect('Week')}>Week</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGlobalSelect('Month')}>Month</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
export default Dropdowndata