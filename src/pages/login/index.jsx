
import {useNavigate} from 'react-router-dom';
import { Button } from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {MdEmail, MdLock} from 'react-icons/md';
import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3,'no minimo 3 caracteres').required('Campo obrigatorio'),
  }).required();
  
const Login = ()=> {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(schema),
        mode:'onChange',
        });
    const onSubmit = data => console.log(data);

    const handleClickSignIn = () =>{
        navigate('/feed')
    }
    return (<>
    <Header />
    <Container>
            <Column>
                <Title>
                   A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin> Faça seu cadastro</TitleLogin>
                <SubtitleLogin> Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input name="password"errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit"/>
                </form>
           
                <Row>
                    <EsqueciText> Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
           
        </Container>
    </>)
}
export {Login}