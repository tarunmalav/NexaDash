import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const Dropdowndata2 = () => {
     const [globalSelect, setGlobalSelect] = useState('Yearly');
    return (
        <>
            <Dropdown className='global-drop' align="end">
                <Dropdown.Toggle as="div" className='i-false global-drop-toggle c-pointer'>
                    {globalSelect}{" "}
                    <i className="fa-solid fa-chevron-down" />
                </Dropdown.Toggle>
                <Dropdown.Menu className='global-drop-menu'>
                    <Dropdown.Item onClick={() => setGlobalSelect('yearly')}>Yearly</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGlobalSelect('Weekly')}>Weekly</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGlobalSelect('Monthly')}>Monthly</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
export default Dropdowndata2