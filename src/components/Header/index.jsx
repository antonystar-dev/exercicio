import React from "react";
import {Button} from '../Button';
import logo from '../../assets/logo-dio.png';
import { BuscarInputContainer, Container, Input, MenuRight, Row, Wrapper, Menu, UserPicture } from './styles';

const Header = ({autenticado}) =>{
    return(
        <Wrapper>
            <Container>
            <Row>
                    <img src={logo} alt="logo da Dio"/>
                    {autenticado ?(
                        <>
                        <BuscarInputContainer>
                        <Input placeholder="Buscar ..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                        </>
                    ):null}
                    
                    
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                        </>

                    ): (
                        <>
                             <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                        </>
                    )}
                   

                </Row>
            </Container>
        </Wrapper>
    )
}
export {Header}
