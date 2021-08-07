import React from 'react';
import { InputGroup, FormControl } from "react-bootstrap";
import { StandardEditorProps } from '@grafana/data';
//import { Gauge } from '@grafana/ui';
//import { SimpleOptions } from 'types';

/*interface Inputs {
    red: string;
    orange: string;
    green: string;
}*/
export const MyEditor: React.FC<StandardEditorProps<string>> = ({ value, onChange, item, context }) => {

    return <InputGroup className="mb-3">
        <FormControl
            name="green input"
            placeholder="Safe zone:"
            aria-label="green light zone"
            aria-describedby="basic-addon2"
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        />
    </InputGroup>
};
