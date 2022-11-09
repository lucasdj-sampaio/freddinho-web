import React from 'react';
import { IoIosLogIn } from 'react-icons/io';
//@ts-ignore
import LogoImg from '../../../public/img/logo.png';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { ButtonContent, Container, Content, Form } from './styles';

export const LeftContent: React.FC = () => {
  return (
    <Content>
      <h1>Faça seu login!</h1>

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
      <img src={LogoImg} />
    </Container>
  );
};
