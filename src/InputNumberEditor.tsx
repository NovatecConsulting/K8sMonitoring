import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { InputGroup, FormControl } from "react-bootstrap"
import { FaCircle } from 'react-icons/fa';

export const InputRedEditor: React.FC<StandardEditorProps<string>> = ({ value, onChange }) => {

    return <InputGroup className="mb-3">
        <FaCircle color="#bb1e10" />{' '}
        <FormControl
            name="red input"
            aria-describedby="basic-addon2"
            defaultValue={0}
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        />
    </InputGroup>
};

export const InputOrangeEditor: React.FC<StandardEditorProps<string>> = ({ value, onChange }) => {

    return <InputGroup className="mb-3">
        <FaCircle color="#de5307" />{' '}
        <FormControl
            name="orange input"
            aria-describedby="basic-addon2"
            defaultValue={0}
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        />
    </InputGroup>
};

export const InputGreenEditor: React.FC<StandardEditorProps<string>> = ({ value, onChange }) => {

    return <InputGroup className="mb-3">
        <FaCircle color="#33a532" />{' '}
        <FormControl
            name="green input"
            aria-describedby="basic-addon2"
            defaultValue={0}
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        />
    </InputGroup>
};