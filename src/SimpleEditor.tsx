import React, { useState } from 'react';
import { Button } from "react-bootstrap"
import { StandardEditorProps } from '@grafana/data';
//import { Select } from '@grafana/ui';
//import { LegacyForms } from '@grafana/ui';
//import { SelectableValue } from '@grafana/data';
//const { Select } = LegacyForms;
import { FaPlusCircle } from 'react-icons/fa';
import { ThresholdItemMetric } from 'thresholdMetricItem';

export const SimpleEditor: React.FC<StandardEditorProps<boolean>> = ({ }) => {
    const [items, setItems] = useState([<ThresholdItemMetric />]);
    /*useEffect(() => {
        let temp = items;
        if (!isMousedOver) {
          temp.src = blackIcon;
        }
        else {
          temp.src = whiteIcon
        }
        temp.onload = () => {
          setImage(temp);
        };
    
      }, [isClicked]);*/
    function addNewLabel() {
        let temp = items;
        temp.push(<ThresholdItemMetric />);
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
