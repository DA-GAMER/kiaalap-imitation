import React from 'react';
import HeaderItem from "../../components/header_item/HeaderItem";
import HeaderUser from "../../components/header_user/HeaderUser";
import Logo from '../../assets/images/logo.png';
import './page.css';

class Header extends React.Component {

    render() {
        return (
            <div className={'kiaalap-header'}>
                {/* logo */}
                <div className={'logo'}>
                    <img src={Logo} alt={'logo'}/>
                </div>
                <HeaderItem/>
                <HeaderUser/>
            </div>
        )
    }

}

export default Header;