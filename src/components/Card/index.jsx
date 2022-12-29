import React from "react";
import {CardContainer, Content, HasInfo, ImageBackground,PostInfo, UserInfo,UserPicture} from './styles';
import {FiThumbsUp} from 'react-icons/fi';
const Card = () =>{
    return(
       <CardContainer>
        <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/c09905b9-8990-435b-a777-f9b732ed69c0.jpg"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <div>
                    <h4>Pablo henrique</h4>
                    <p>Ha 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html r css no bootcamp dio do global avanade... <strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
       </CardContainer>
    )
}

export {Card}