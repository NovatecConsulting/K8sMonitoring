import React, { useState } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { InputGroup, FormControl } from "react-bootstrap"
import { DropdownComponent } from 'Menu/Dropdown';
import { dropdownOptions } from 'Menu/DropdownOptions';
import { FaCircle } from 'react-icons/fa';
import { metricOptions } from 'SimplePanel';
import {Button} from '@grafana/ui';
//import { setTheMetricsOption } from "processMetric/Handler";
interface Settings {
    red: number;
    orange: number;
    green: number;
}
export const ThresholdEditor: React.FC<StandardEditorProps<Settings>> = ({ item, value, onChange }) => {
    const [chosenOption, setChosenOption] = useState(metricOptions[0]);
    let [redInput, setRedInput] = useState(0);
    let [orangeInput, setOrangeInput] = useState(0);
    let [greenInput, setGreenInput] = useState(0);
    const handleChange = (label: string | undefined) => {
        if (label !== undefined) {
            setChosenOption(label);
        }
    }
    /*function handleInputChange(event: any) {
        if (event.target.name === "green input") {
            setGreenInput(event.target.value);
            console.log(greenInput);
        }
        if (event.target.name === "orange input") {
            setOrangeInput(event.target.value);
            console.log(orangeInput);
        }
        if (event.target.name === "red input") {
            setRedInput(event.target.value);
            console.log(redInput);
        }
    }*/
    /*function handleClick(){
        setTheMetricsOption(redInput,orangeInput,greenInput);
    }*/
    function handleInputChange(evt: any) {
        if (evt.target.name === "red input") {
            onChange(evt.target.value);
            setRedInput(value.red);
            console.log(redInput);
        }
        if (evt.target.name === "orange input") {
            onChange(evt.target.value);
            setOrangeInput(value.orange);
            console.log(orangeInput);
        }
        if (evt.target.name === "green input") {
            onChange(evt.target.value);
            setGreenInput(value.green);
            console.log(greenInput);
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
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
                value={greenInput}
                onChange={handleInputChange}
            />
        </InputGroup>

        <div className="mb-2">
            <Button variant="primary" size="sm" >
                Apply Changes
            </Button>{' '}
            <Button variant="secondary" size="sm">
                Delete Label
            </Button>
        </div>
    </div>;
};
