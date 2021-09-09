import React, { useState } from 'react';
import { Button } from "react-bootstrap"
import { StandardEditorProps } from '@grafana/data';
//import { Select } from '@grafana/ui';
//import { LegacyForms } from '@grafana/ui';
//import { SelectableValue } from '@grafana/data';
import { FaPlusCircle } from 'react-icons/fa';
import { ThresholdItemMetric } from 'ThresholdMetricItem';
//import { Select } from '@grafana/ui';

export const SimpleEditor: React.FC<StandardEditorProps<boolean>> = ({ }) => {
  let counter = 0;
  const [items, setItems] = useState([<ThresholdItemMetric key={counter} />])
  function addNewLabel() {
    counter = counter + 1;
    let temp = items;
    temp.push(<ThresholdItemMetric key={counter}/>);
    setItems(temp);
    console.log(items);
  };
  // it doesn't want to be at the end, the component 
  return <div>
    <Button variant="secondary" size="lg" onClick={addNewLabel}>
      <FaPlusCircle />
    </Button>
    {items}
  </div>

};
