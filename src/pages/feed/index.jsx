import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';
import { Button } from "../../components/Button";
import {Header} from "../../components/Header";
import {Container, TextContent, Title, TitleHighLight} from './styles';
import {Card} from "../../components/Card";

const Feed = ()=> {
    return (<>
    <Header />
    <Container>
           <Card/>
        </Container>
    </>)
}
export {Feed}