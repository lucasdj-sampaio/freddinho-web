import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from 'vite-plugin-ssr/client/router';
//@ts-ignore
import ArrowIcon from '../../../public/img/arrow_icon.svg';
import Button from '../../components/atoms/Button';
import Card from '../../components/atoms/Card';
import CardItem from '../../components/atoms/Card-Item';
import CardItemContent from './styles';

const MainContent: React.FC = () => {
  //@ts-ignore
  const items = useSelector(state => state.dashboardItems) || [];
  return (
    <Card>
      {items.map(item => (
        <CardItem>
          <CardItemContent>
            <img src={item.img} />

            <h3>{item.title}</h3>
            <p>{item.details}</p>

            <Button
              size="min"
              type="button"
              variant="outline"
              image={ArrowIcon}
              onClick={() =>
                navigate(`${(window.location.href = item.navigatePath)}`)
              }
            >
              entrar
            </Button>
          </CardItemContent>
        </CardItem>
      ))}
    </Card>
  );
};

export default MainContent;
