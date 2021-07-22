import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { DropdownComponent } from 'Menu/Dropdown';
import { dropdownOptions } from 'Menu/DropdownOptions';
import { FaCircle } from 'react-icons/fa';
import { metricOptions } from 'SimplePanel';
import { redInput, orangeInput, greenInput } from "processMetric/Handler";
import { setRedInput,setOrangeInput, setGreenInput } from "processMetric/Handler";

export const ThresholdItemMetric = () => {
    const [chosenOption, setChosenOption] = useState(metricOptions[0]);
    /*let [redInput, setRedInput] = useState(0);
    let [orangeInput, setOrangeInput] = useState(0);
    let [greenInput, setGreenInput] = useState(0);*/

    const handleChange = (label: string | undefined) => {
        if (label !== undefined) {
            setChosenOption(label);
        }
    }
    function handleInputChange(event: any) {
        if (event.target.name === "green input") {
            setGreenInput(event.target.value);
            console.log(greenInput)
        }
        if (event.target.name === "orange input") {
            setOrangeInput(event.target.value);
            console.log(orangeInput);
        }
        if (event.target.name === "red input") {
            setRedInput(event.target.value);
            console.log(redInput);
        }
    }
    return <div>
        <DropdownComponent
            id={"option metric dropdown"}
            options={dropdownOptions(metricOptions, chosenOption)}
            onChange={handleChange}
            value={chosenOption}
            isDisabled={false} />
        <InputGroup className="mb-3">
            <FaCircle color="#bb1e10" />{' '}
            <FormControl
                name="red input"
                placeholder="Danger zone:"
                aria-label="red light zone"
                aria-describedby="basic-addon2"
                value={redInput}
                onChange={handleInputChange}
            />
        </InputGroup>


        <InputGroup className="mb-3">
            <FaCircle color="#de5307" />{' '}
            <FormControl
                name="orange input"
                placeholder="Charge zone:"
                aria-label="orange light zone"
                aria-describedby="basic-addon2"
                value={orangeInput}
                onChange={handleInputChange}
            />
        </InputGroup>


        <InputGroup className="mb-3">
            <FaCircle color="#33a532" />{' '}
            <FormControl
                name="green input"
                placeholder="Safe zone:"
                aria-label="green light zone"
                aria-describedby="basic-addon2"
                value={greenInput}
                onChange={handleInputChange}
            />
        </InputGroup>

        <div className="mb-2">
            <Button variant="primary" size="sm">
                Apply Changes
            </Button>{' '}
            <Button variant="secondary" size="sm">
                Delete Label
            </Button>
        </div>
    </div>
};