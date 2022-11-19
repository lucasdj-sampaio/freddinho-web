import React from 'react';
import { IoIosLogIn } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setValid } from '../../store/reducers/acessReducer';
//@ts-ignore
import LogoImg from '../../../public/img/logo.png';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import {
  getAccountId,
  getDependent,
  validCredential,
} from '../../services/getRequest';
import { ProfileType } from '../../shared/types/Profile';
import { ButtonContent, Container, Content, Form, ImgContent } from './styles';

interface Profiles {
  profile: ProfileType[];
}

const handleSubmit = async event => {
  const formData = new FormData(event.currentTarget);
  event.preventDefault();

  const user = formData.get('user') as String;
  const password = formData.get('password') as String;

  try {
    const result = await validCredential(user, password);

    if (Boolean(result)) {
      const dispatch = useDispatch();

      const accountId = await getAccountId(user, password);
      dispatch(setValid(String(accountId)));

      const dependentJson = await getDependent(accountId);

      //@ts-ignore
      dispatch(setDependent(dependentJson.json() as Profiles[]));
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const LeftContent: React.FC = () => {
  return (
    <Content>
      <ImgContent>
        <img src={LogoImg} />
      </ImgContent>

      <Form onSubmit={handleSubmit}>
        <Input label="Usuário" name="user" required={true}></Input>
        <Input
          label="Senha"
          name="password"
          type="password"
          required={true}
        ></Input>

        <ButtonContent>
          <Button variant="primary" size="medium" type="submit">
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
