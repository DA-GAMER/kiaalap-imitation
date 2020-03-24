import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import StatisticalLearningPanel from "../../components/statistical_learning_panel/StatisticalLearningPanel";
import BoxLoremIpsumPanel from "../../components/box_lorem_ipsum_panel/BoxLoremIpsumPanel";
import {statisticalLearningPanelData, boxLoremIpsumPanelData, boxLoremIpsumListPanelData} from "../../data/WidgetsData";
import './page.css';
import BoxLoremIpsumListPanel from "../../components/box_lorem_ipsum_list_panel/BoxLoremIpsumListPanel";

class Widgets extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Education', 'Widgets']}/>
                <div className={'kiaalap-statistical-learning'}>
                    {
                        statisticalLearningPanelData.map((item, index) => {
                            return <StatisticalLearningPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-box-lorem-ipsum'}>
                    {
                        boxLoremIpsumPanelData.map((item, index) => {
                            return <BoxLoremIpsumPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-box-lorem-ipsum'}>
                    {
                        boxLoremIpsumListPanelData.map((item, index) => {
                            return <BoxLoremIpsumListPanel key={index} panel={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Widgets;