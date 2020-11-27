import { PanelData, SelectableValue } from '@grafana/data';
import { positionOutside, positionGrouped, position, getOverview } from '../CanvasObjects/Calculation'
import { groupPodContainer, getNamespaceInformation, getServiceInformation, getContainerInformation, getPodInformation, getNamespaceCount, getServiceCount, getPodCount, getContainerCount } from './ConvertData'
import { Element, Position } from 'types';


export function handler(width: number, height: number, levelOption: string, data: PanelData) {

    if (levelOption === 'Overview') {
        // Overview
        const namespaceCount = getNamespaceCount(data);
        const serviceCount = getServiceCount(data);
        const podCount = getPodCount(data);
        const containerCount = getContainerCount(data);
        return getOverview(width, namespaceCount, serviceCount, podCount, containerCount);
    } else if (levelOption === 'Namespace') {
        //Namespace
        let allElements = position(width, height, getNamespaceCount(data));
        const allElementInfo = getNamespaceInformation(data);
        for (let i = 0; i < allElementInfo.length; i++) {
            allElements[i].elementInfo = allElementInfo[i];
            allElements[i].text = allElementInfo[i].namespace;
        }
        return allElements;
    } else if (levelOption === 'Service') {
        // Service
        let allElements = position(width, height, getServiceCount(data));
        const allElementInfo = getServiceInformation(data);
        for (let i = 0; i < allElementInfo.length; i++) {
            allElements[i].elementInfo = allElementInfo[i];
            allElements[i].text = allElementInfo[i].service;
        }
        return allElements;
    }
    else if (levelOption === 'Pod') {
        // Pod
        let allElements = position(width, height, getPodCount(data));
        const allElementInfo = getPodInformation(data);
        for (let i = 0; i < allElementInfo.length; i++) {
            allElements[i].elementInfo = allElementInfo[i];
            allElements[i].text = allElementInfo[i].pod;
        }
        return allElements;
    } else if (levelOption === 'Container') {
        //Container
        let allElements = position(width, height, getContainerCount(data));
        const allElementInfo = getContainerInformation(data);
        for (let i = 0; i < allElementInfo.length; i++) {
            allElements[i].elementInfo = allElementInfo[i];
            allElements[i].text = allElementInfo[i].container;
        }
        return allElements;
    }
    else {
        return position(width, height, 15);
    }
}



export function handlerDetail(width: number, height: number, groupedOption: SelectableValue, data: PanelData, allElements: Element[]) {

    let groupedElement: Element[] = new Array()

    for (let i = 0; i < allElements.length; i++) {
        if (groupedOption.label === allElements[i].text) {
            groupedElement.push(allElements[i])
        }
    }

    if (groupedElement.length === 1) {
        groupedElement[0].width *= 3;
        groupedElement[0].height *= 3;
        const elementWidth = groupedElement[0].width;
        const elementHeight = groupedElement[0].height;
        groupedElement[0].position = { x: width / 2 - (elementWidth / 2), y: height / 2 - (elementHeight / 2) }


    }
    return groupedElement;
}





export function handlerGrouped(levelOption: string, groupedOption: SelectableValue, data: PanelData, width: number, height: number) {


    const allElementInfo = groupPodContainer(data);
    let inside: any[] = new Array();
    let allElements: Element[] = new Array();

    // level: pod  Grouped by:  Container X
    if (levelOption === "Pod" && groupedOption.description === "Container") {

        for (let i = 0; i < allElementInfo.length; i++) {
            if (allElementInfo[i].container === groupedOption.label) {
                inside.push(allElementInfo[i]);
            }
        }
        // inside
        let insidePosition: Position[] = positionGrouped(width, height, inside.length);
        for (let i = 0; i < insidePosition.length; i++) {
            let element: Element = { position: insidePosition[i], width: 350, height: 70, color: "white", text: inside[i].container, outside: false }
            allElements.push(element)
        }
        //outside
        let outsideElement = positionOutside(allElements);
        outsideElement.outside = true;
        outsideElement.text = inside[0].pod;
        allElements.push(outsideElement);
    }
    return allElements;
}