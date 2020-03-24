import React from 'react';
import IconFont from "../../common/IconFont";
import './page.css';

class BoxLoremIpsumPanel extends React.Component {
    render() {
        return (
            <div className={'box-lorem-ipsum'}>
                <div className={'inner'}>
                    <div className={'title'}>Box title</div>
                    <div>Lorem ipsum</div>
                    <div className={'icon'}>
                        <IconFont type={this.props.panel.type}/>
                    </div>
                    <div className={'content'}>
                        Lorem Ipsum passages and more recently with the desktop published software like Aldus PageMaker.
                    </div>
                    <div className={'btn'}>
                        <button style={{borderRadius: '2px',padding: '4px 8px', border: 'none', backgroundColor: this.props.panel.color, color: '#FFF'}}>Action Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxLoremIpsumPanel;