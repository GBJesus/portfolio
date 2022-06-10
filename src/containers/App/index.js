import React from 'react'
import Carousel from 'react-elastic-carousel'

import ConvertMoney from '../../assets/convert-money.png'
import Css from '../../assets/css.svg'
import Email from '../../assets/email.svg'
import Github from '../../assets/github.svg'
import GoBarber from '../../assets/gobarber.png'
import Html from '../../assets/html.svg'
import Instagram from '../../assets/instagram.svg'
import Javascript from '../../assets/javascript.svg'
import Linkedin from '../../assets/linkedin.svg'
import Logo from '../../assets/logo.svg'
import ProfileImage from '../../assets/portfolio-img.png'
import ReactLogo from '../../assets/react.png'
import Whatsapp from '../../assets/whatsapp.svg'
import {
  Container,
  Header,
  NameHeader,
  Links,
  LinkHeader,
  Home,
  LeftContainer,
  Hello,
  Name,
  Function,
  DownloadLink,
  ContactLink,
  LogoImage,
  About,
  LeftContainerAbout,
  TitleAbout,
  AboutMe,
  PerfilImage,
  Projects,
  ContainerCarousel,
  TitleProjects,
  ProjectItems,
  ImageCarousel,
  TextCarousel,
  Buttons,
  GoSite,
  GoGithub,
  Techs,
  TechsCarousel,
  TextTech,
  Contact,
  Box,
  ContactLeft,
  FormRigth,
  TextBox,
  LinkBox
} from './styles'

function App() {
  return (
    <Container>
      <Header>
        <NameHeader href="#home">Gustavo Barros</NameHeader>
        <Links>
          <LinkHeader href="#about">Sobre</LinkHeader>
          <LinkHeader href="#projects">Projetos</LinkHeader>
          <LinkHeader href="#technologies">Tecnologias</LinkHeader>
          <LinkHeader href="#contact">Contato</LinkHeader>
        </Links>
      </Header>

      <Home id="home">
        <LeftContainer>
          <Hello>Olá, meu nome é</Hello>
          <Name>
            Gustavo <span>Barros</span>
          </Name>
          <Function>Desenvolvedor Front-End</Function>
          <DownloadLink>DOWNLOAD CV</DownloadLink>
          <ContactLink href="#contact">CONTATO</ContactLink>
        </LeftContainer>
        <LogoImage src={Logo} alt="logo" />
      </Home>

      <About id="about">
        <TitleAbout>Sobre mim</TitleAbout>
        <AboutMe>
          <LeftContainerAbout>
            <p className="paragraph">
              Sou
              <span> Desenvolvedor Front-End </span>
              em busca da minha primeira oportunidade
            </p>
            <br />
            <p className="paragraph">
              Nascido em São Paulo, tenho 29 anos <br /> Sou apaixonado por
              tecnologia e encontrei na programação uma forma de solucionar
              problemas e ajudar pessoas
            </p>
          </LeftContainerAbout>
          <PerfilImage src={ProfileImage} alt="imagem-do-dev" />
        </AboutMe>
      </About>

      <Projects id="projects">
        <TitleProjects>Projetos</TitleProjects>

        <ContainerCarousel>
          <Carousel itemsToShow={3} style={{ width: '90%' }}>
            <ProjectItems>
              <ImageCarousel src={GoBarber} alt="imagem-do-projeto" />
              <TextCarousel>
                Página inicial de uma marca fictícia chamada Bikcraft. Projeto
                realizado utilizando apenas as tecnologias HTML e CSS.
              </TextCarousel>
              <Buttons>
                <GoSite>VER O SITE</GoSite> <GoGithub>GITHUB</GoGithub>
              </Buttons>
            </ProjectItems>

            <ProjectItems>
              <ImageCarousel src={GoBarber} alt="imagem-do-projeto" />
              <TextCarousel>
                Página inicial de uma marca fictícia chamada Bikcraft. Projeto
                realizado utilizando apenas as tecnologias HTML e CSS.
              </TextCarousel>
              <Buttons>
                <GoSite>VER O SITE</GoSite> <GoGithub>GITHUB</GoGithub>
              </Buttons>
            </ProjectItems>

            <ProjectItems>
              <ImageCarousel src={ConvertMoney} alt="imagem-do-projeto" />
              <TextCarousel>
                Página inicial de uma marca fictícia chamada Bikcraft. Projeto
                realizado utilizando apenas as tecnologias HTML e CSS.
              </TextCarousel>
              <Buttons>
                <GoSite>VER O SITE</GoSite> <GoGithub>GITHUB</GoGithub>
              </Buttons>
            </ProjectItems>

            <ProjectItems>
              <ImageCarousel src={GoBarber} alt="imagem-do-projeto" />
              <TextCarousel>
                Página inicial de uma marca fictícia chamada Bikcraft. Projeto
                realizado utilizando apenas as tecnologias HTML e CSS.
              </TextCarousel>
              <Buttons>
                <GoSite>VER O SITE</GoSite> <GoGithub>GITHUB</GoGithub>
              </Buttons>
            </ProjectItems>
          </Carousel>
        </ContainerCarousel>
      </Projects>

      <Techs id="technologies">
        <TitleProjects>Tecnologias</TitleProjects>

        <ContainerCarousel>
          <Carousel itemsToShow={3} style={{ width: '90%' }}>
            <TechsCarousel>
              <ImageCarousel src={Html} alt="imagem-da-tecnologia" />
              <TextTech>HTML</TextTech>
            </TechsCarousel>

            <TechsCarousel>
              <ImageCarousel src={Css} alt="imagem-da-tecnologia" />
              <TextTech>CSS</TextTech>
            </TechsCarousel>

            <TechsCarousel>
              <ImageCarousel src={Javascript} alt="imagem-da-tecnologia" />
              <TextTech>JavaScript</TextTech>
            </TechsCarousel>

            <TechsCarousel>
              <ImageCarousel src={ReactLogo} alt="imagem-da-tecnologia" />
              <TextTech>React</TextTech>
            </TechsCarousel>
          </Carousel>
        </ContainerCarousel>
      </Techs>

      <Contact id="contact">
        <TitleProjects>Contato</TitleProjects>
        <Box>
          <ContactLeft>
            <TextBox>
              Entre em contato comigo através dos links abaixo ou preencha os
              campos ao lado.
            </TextBox>
            <LinkBox>
              <a
                href="https://www.linkedin.com/in/gustavo-gbjesus/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="imagem-do-linkedin" />
              </a>
              <a
                href="https://github.com/GBJesus"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="imagem-do-github" />
              </a>
              <a
                href="https://www.instagram.com/gustavobarroslc/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="" />
              </a>
              <a
                href="mailto:gustavo.gbj@hormail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Email} alt="" />
              </a>
              <a
                href="http://wa.me/5511968300947"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Whatsapp} alt="" />
              </a>
            </LinkBox>
          </ContactLeft>
          <FormRigth>
            <label>Nome</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Mensagem</label>
            <input className="message" type="text" />
            <button type="submit">ENVIAR</button>
          </FormRigth>
        </Box>
      </Contact>
    </Container>
  )
}

export default App
