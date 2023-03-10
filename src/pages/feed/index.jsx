import { Link } from 'react-router-dom';
//import bannerImage from '../../assets/banner.png';
//import { Button } from "../../components/Button";
import {Header} from "../../components/Header";
import {Container,Column, TitleHighLight,Title} from './styles';
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";

const Feed = ()=> {
    return (<>
    <Header autenticado={true} />
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
        <UserInfo percentual={40} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        <UserInfo percentual={30} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        <UserInfo percentual={20} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        <UserInfo percentual={70} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        <UserInfo percentual={20} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        <UserInfo percentual={80} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        </Column>
          
          
        </Container>
    </>)
}
export {Feed}