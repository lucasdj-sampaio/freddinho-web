import React from 'react';
import { IoIosLogIn } from 'react-icons/io';
//@ts-ignore
import LogoImg from '../../../public/img/logo.png';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { ButtonContent, Container, Content, Form, ImgContent } from './styles';

export const LeftContent: React.FC = () => {
  return (
    <Content>
      <ImgContent>
        <img src={LogoImg} />
      </ImgContent>

      <Form>
        <Input label="Usuário"></Input>
        <Input label="Senha"></Input>

        <ButtonContent>
          <Button variant="primary" size="medium">
            <IoIosLogIn /> Entrar
          </Button>
        </ButtonContent>
      </Form>
    </Content>
  );
};

export const RightContent: React.FC = () => {
  return (
    <Container>
      <h1>
        BEM VINDO <br />
        AO FREDDINHO!
      </h1>
      <h2>
        Um aplicativo que tem o intuito de orientar pais, cuidadores e crianças
        sobre educação sexual infantojuvenil, contemplando saúde mental, jogos
        interativos, chatbot e conteúdos educativos no geral.
      </h2>
    </Container>
  );
};
