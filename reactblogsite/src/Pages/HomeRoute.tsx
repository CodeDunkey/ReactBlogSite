import { HeaderWrapper } from '../Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from '../Components/Site/Main/MainWrapper';
import { FooterWrapper } from '../Components/Site/Footer/FooterWrapper';
export const HomeRoute = () => {
    return (
        <div>
            <HeaderWrapper />
            <MainWrapper />
            <FooterWrapper />
        </div>
    )
}