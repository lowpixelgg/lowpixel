import * as C from './style';
import { getDate } from '../../utils/getDate';

import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import date from '../../assets/date.svg';
import avatar from '../../assets/avatar.gif';

export const HeadBar = () => {
    const datetext = getDate();

    return (
        <>
            <C.LogoContainer>
                <C.Logo src={logo} alt="Rocket Logo"/>
            </C.LogoContainer>
            <C.PlayerContainer>
                <img src={search} alt="Search Icon"/>
                <img src={date} alt="Date Icon"/>
                <C.DateText>{datetext}</C.DateText>
                <C.Avatar src={avatar} alt="Avatar Icon"/>
            </C.PlayerContainer>
        </>
    )
}