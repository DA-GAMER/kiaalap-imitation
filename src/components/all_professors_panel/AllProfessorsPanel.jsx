import React from 'react';
import IconFont from "../../common/IconFont";
import './page.css';

class AllProfessorsPanel extends React.Component {
    render() {
        return (
            <div className={'all-professors'}>
                <div className={'inner'}>
                    <div className={'all-professors-header'}>
                        <div className={'left'}>
                            <div><img alt={'logo'} src={this.props.panel.img}/></div>
                            <div className={'name'}>{this.props.panel.name}</div>
                            <div>{this.props.panel.city}</div>
                        </div>
                        <div className={'right'}>
                            <div>
                                <IconFont type={'facebook'}/>
                            </div>
                            <div>
                                <IconFont type={'twitter'}/>
                            </div>
                            <div>
                                <IconFont type={'instagram'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'content'}>
                        {this.props.panel.content}
                    </div>
                    <div className={'btn'}>
                        <button>Likes: 956 Comments: 350 Views: 450</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllProfessorsPanel;