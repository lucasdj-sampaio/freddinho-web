import React, { useState } from 'react';
import { IoIosLogIn } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { navigate } from 'vite-plugin-ssr/client/router';
import { setValid } from '../../store/slices/access';
import { setDependent } from '../../store/slices/profile';
//@ts-ignore
import LogoImg from '../../../public/img/logo.png';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Modal from '../../components/Modal';
import {
  getAccountId,
  getDependent,
  validCredential,
} from '../../services/getRequest';
import { ProfileType } from '../../shared/types/Profile';
import { ButtonContent, Container, Content, Form, ImgContent } from './styles';

export const LeftContent: React.FC = () => {
  const dispatch = useDispatch();
  const [modalState, setModal] = useState(false);

  return (
    <Content>
      {modalState ? (
        <Modal onClose={() => setModal(false)}>
          <h2>Algo deu errado...</h2>
          <label>
            O usuário e senha não correspondem às <br />
            informações em nossos registros. Tente <br />
            novamente!
          </label>
        </Modal>
      ) : null}

      <ImgContent>
        <img src={LogoImg} />
      </ImgContent>

      <Form
        onSubmit={async event => {
          const formData = new FormData(event.currentTarget);
          event.preventDefault();

          const user = formData.get('user') as String;
          const password = formData.get('password') as String;

          const result = await validCredential(user, password);

          if (Boolean(result)) {
            const accountId = await getAccountId(user, password);
            dispatch(setValid({ id: String(accountId) }));

            //@ts-ignore
            const dependents: ProfileType[] = await getDependent(accountId);

            dispatch(setDependent({ dependents: dependents }));

            navigate((window.location.href = '/perfis'));
          } else {
            setModal(true);
          }
        }}
      >
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
