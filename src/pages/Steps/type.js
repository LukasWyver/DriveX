import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  PickerButton,
} from '../../styles/index';

import car from '../../assets/car.png';
import hand from '../../assets/hand.png';

const Type = () => {
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={40}>
        <Title>Passageiro ou motorista?</Title>
        <SubTitle>Selecione qual será a sua função no DriveX.</SubTitle>
      </Container>
      <Container>
        <PickerButton>
          <Image source={car} />
          <Title>Motorista</Title>
        </PickerButton>
        <PickerButton>
          <Image source={hand} />
          <Title>Passageiro</Title>
        </PickerButton>
      </Container>
      <Container height={70} justify="flex-end">
        <Button>
          <ButtonText>Proxímo Passo</ButtonText>
        </Button>
      </Container>
    </Container>
  );
};

export default Type;
