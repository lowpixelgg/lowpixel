import * as C from './style';
import { HeadBar } from '../../components/HeadBar';
import { PlayerBar } from '../../components/Player';
import { Footer } from '../../components/Footer';

export const HomePage = () => {

    return (
        <C.Container>
            <HeadBar/>
            <PlayerBar/>
            <Footer/>
        </C.Container>
    )
}