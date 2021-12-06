import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Avatar,
  Bullet,
  Button,
  ButtonText,
  Container,
  Input,
  Map,
  PulseCircle,
  Spacer,
  SubTitle,
  Title,
  VerticalSeparator,
} from '../../styles';

const Home = () => {
  const tipo = 'P';
  const status = 'P';

  // S : sem corrida, I : informações, P : pesquisa, C : corrida

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -30.011364,
          longitude: -51.1637373,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        disabled={status === 'P'}
      />
      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={999}
        pointerEvents="box-none"
        style={{height: '100%'}}>
        {/* header image */}
        <Container height={100} justify="flex-start" align="flex-start">
          {/* avatar image */}
          {status === 'S' ||
            (tipo === 'M' && (
              <TouchableOpacity>
                <Avatar
                  source={{
                    uri: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                />
              </TouchableOpacity>
            ))}

          {tipo === 'P' && status !== 'S' && (
            <Container elevation={50} justify="flex-end" color="light">
              <Container padding={12}>
                <Container justify="flex-start" row>
                  <Bullet mr={5} />
                  <SubTitle>Endereço de embarque completo</SubTitle>
                </Container>
                <Spacer />
                <Container justify="flex-start" row>
                  <Bullet destination mr={5} />
                  <SubTitle>Endereço de destino completo</SubTitle>
                </Container>
              </Container>
              <Button type="dark" compact>
                <ButtonText color="light">toque para editar</ButtonText>
              </Button>
            </Container>
          )}
        </Container>

        {/* Efeito Pulse: Passageiro buscando corrida!*/}
        {status === 'P' && tipo === 'P' && (
          <Container padding={20} zIndex={-1}>
            <PulseCircle
              numPulses={3}
              diameter={400}
              speed={20}
              duration={2000}
            />
          </Container>
        )}

        {/* footer */}
        <Container elevation={50} height={150} color="light">
          {/* Passageiro sem corrida! */}
          {tipo === 'P' && status === 'S' && (
            <Container justify="flex-start" padding={20} align="flex-start">
              <SubTitle>Olá, Lucas Gimenes.</SubTitle>
              <Title>Pra onde você quer ir?</Title>
              <Spacer />
              <Input placeholder="Procure um destino." />
            </Container>
          )}

          {/* Passageirao: Informações da corrida! */}
          {tipo === 'P' && (status === 'I' || status === 'P') && (
            <Container justify="flex-end" align="flex-start">
              <Container padding={20}>
                <SubTitle>DriverX Convencional</SubTitle>
                <Spacer />
                <Container row>
                  <Container>
                    <Title>R$ 12,90</Title>
                  </Container>
                  <VerticalSeparator />
                  <Container>
                    <Title>5 mins</Title>
                  </Container>
                </Container>
              </Container>
              <Button type={status === 'P' ? 'muted' : 'primary'}>
                <ButtonText>
                  {status === 'P' ? 'Cancelar DriverX' : 'Chamar DriverX'}
                </ButtonText>
              </Button>
            </Container>
          )}

          {/* Passageiro: Durante a corrida*/}
          {tipo === 'P' && status === 'C' && (
            <Container border="primary" justify="flex-end" align="flex-start">
              <Container row padding={15}>
                <Container align="flex-start" padding={20} row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    }}
                  />
                  <Spacer width="10px" />
                  <Container align="flex-start">
                    <SubTitle>Matheus Fraga</SubTitle>
                    <SubTitle small>ABC-123, BMW X6, Preta</SubTitle>
                  </Container>
                </Container>
                <VerticalSeparator />
                <Container padding={5} width={120}>
                  <Title>R$ 12,90</Title>
                  <SubTitle bold color="primary">
                    Aprox. 5 mins
                  </SubTitle>
                </Container>
              </Container>
              <Button type="muted">
                <ButtonText>Cancelar a Corrida</ButtonText>
              </Button>
            </Container>
          )}

          {/* Motorista sem corrida! */}
          {tipo === 'M' && status === 'S' && (
            <Container>
              <SubTitle>Olá, Matheus Fraga.</SubTitle>
              <Title>Nenhuma corrida encontrada</Title>
            </Container>
          )}

          {/* Motorista: Durante a corrida */}
          {tipo === 'M' && status === 'C' && (
            <Container border="primary" justify="flex-end" align="flex-start">
              <Container row padding={20}>
                <Container align="center" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://github.com/lukaswyver.png',
                    }}
                  />
                  <Spacer width="10px" />
                  <Container align="flex-start">
                    <Container justify="flex-start" height={20} row>
                      <Bullet />
                      <SubTitle small numberOfLines={1}>
                        {' '}
                        Endereço de embarque completo
                      </SubTitle>
                    </Container>
                    <Spacer />
                    <Container justify="flex-start" height={20} row>
                      <Bullet destination />
                      <SubTitle small numberOfLines={1}>
                        {'  '}Endereço de destino completo
                      </SubTitle>
                    </Container>
                  </Container>
                </Container>
                <VerticalSeparator />
                <Container padding={5} width={120}>
                  <Title>R$ 12,90</Title>
                  <SubTitle bold color="primary">
                    Aprox. 5 mins
                  </SubTitle>
                </Container>
              </Container>
              <Button type="primary">
                <ButtonText>Aceitar a Corrida</ButtonText>
              </Button>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
