import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  AddressList,
  AddressItem,
} from '../../styles/index';

const Ride = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setVisible(false),
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setVisible(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <Container row height={60} justify="flex-start">
        <Container align="flex-start" padding={20}>
          <SubTitle>Voltar</SubTitle>
        </Container>
        <Container>
          <Title>Corrida</Title>
        </Container>
        <Container align="flex-end" padding={20}></Container>
      </Container>

      <Container padding={30} justify="flex-start">
        <Container height={90} justify="flex-start">
          <Input placeholder="Embarque" />
          <Input placeholder="Destino" />
        </Container>
        <Container>
          <AddressList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            renderItem={({item, index}) => (
              <AddressItem>
                <SubTitle bold>Menlo Parl</SubTitle>
                <SubTitle small>Palo Alto, CA</SubTitle>
              </AddressItem>
            )}
          />
        </Container>
      </Container>

      {visible && (
        <Container
          height={70}
          padding={10}
          justify="flex-end"
          style={{
            paddingLeft: '8%',
            paddingRight: '8%',
            marginBottom: '8%',
          }}>
          <Button>
            <ButtonText>Atualizar mapa</ButtonText>
          </Button>
        </Container>
      )}
    </>
  );
};

export default Ride;
