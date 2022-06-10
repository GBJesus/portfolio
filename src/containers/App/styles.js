import styled from 'styled-components'

export const Container = styled.div`
  background: #141414;
`

export const Header = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;

  background: #1b1b1b;
`

export const NameHeader = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  color: #f5f5f5;
  text-decoration: none;

  &::before {
    content: '<';
    color: #3e77e7;
  }

  &::after {
    content: '>';
    color: #3e77e7;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 40px;
`

export const LinkHeader = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #f5f5f5;
  text-decoration: none;
`

export const Home = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 185px 125px;
  height: 100vh;
`

export const LeftContainer = styled.div``

export const Hello = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #e0e0e0;
`

export const Name = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 80px;
  color: #f5f5f5;

  span {
    color: #3e77e7;
  }
`

export const Function = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #e0e0e0;
`

export const DownloadLink = styled.button`
  margin-top: 50px;
  width: 180px;
  height: 50px;

  background: linear-gradient(180deg, #3e77e7 0%, #245ccb 100%);
  box-shadow: 0px 1px 2px rgba(245, 245, 245, 0.1);
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #f5f5f5;

  &:hover {
    opacity: 0.8;
  }
`

export const ContactLink = styled.button`
  margin-top: 50px;
  margin-left: 20px;
  width: 180px;
  height: 50px;

  background: #141414;
  border: 3px solid #e0e0e0;
  box-shadow: 0px 1px 2px rgba(245, 245, 245, 0.1);
  border-radius: 5px;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #f5f5f5;

  &:hover {
    opacity: 0.8;
  }
`

export const LogoImage = styled.img`
  width: 420px;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;

  padding: 90px 125px;
  height: 100vh;

  background: #1b1b1b;
`

export const LeftContainerAbout = styled.div`
  width: 620px;

  .paragraph {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #e0e0e0;
  }

  span {
    color: #3e77e7;
  }
`

export const TitleAbout = styled.p`
  margin-bottom: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 77px;
  color: #f5f5f5;
  text-shadow: 0px 1px 2px rgba(224, 224, 224, 0.1);
  text-align: center;

  &::before {
    content: '<';
    color: #3e77e7;
  }

  &::after {
    content: '>';
    color: #3e77e7;
  }
`

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PerfilImage = styled.img`
  width: 345px;
`

export const Projects = styled.div`
  padding: 60px 0;
  height: cal(100vh + 20px);
`

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleProjects = styled.p`
  margin-bottom: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 77px;
  color: #f5f5f5;
  text-shadow: 0px 1px 2px rgba(224, 224, 224, 0.1);
  text-align: center;

  &::before {
    content: '<';
    color: #3e77e7;
  }

  &::after {
    content: '>';
    color: #3e77e7;
  }
`

export const ProjectItems = styled.div`
  width: 95%;
  /* height: 480px; */
  padding: 20px;

  background: #292929;
  border-radius: 5px;
`

export const ImageCarousel = styled.img`
  width: 100%;
  height: 200px;

  background: url(Bikcraft.png);
  filter: drop-shadow(0px 1px 2px rgba(245, 245, 245, 0.1));
  border-radius: 5px;
`

export const TextCarousel = styled.p`
  margin-top: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`

export const GoSite = styled.button`
  width: 100%;
  height: 45px;

  background: linear-gradient(180deg, #3e77e7 0%, #245ccb 100%);
  box-shadow: 0px 0.75px 1.5px rgba(245, 245, 245, 0.1);
  border-radius: 3.75px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #f5f5f5;
`

export const GoGithub = styled.button`
  width: 100%;
  height: 45px;

  background: #292929;
  border: 0.923529px solid #ffffff;
  box-shadow: 0px 0.713636px 1.42727px rgba(245, 245, 245, 0.1);
  border-radius: 3.56818px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #f5f5f5;
`

export const Techs = styled.div`
  padding: 60px 0;
  height: 100vh;
  background: #1b1b1b;
`

export const TechsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const TextTech = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 38px;
  color: #e0e0e0;
`

export const Contact = styled.div`
  padding: 60px 0;
  height: 100vh;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContactLeft = styled.div`
  width: 400px;
`

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FormRigth = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #e0e0e0;
  }

  input {
    margin-bottom: 20px;
    width: 400px;
    height: 50px;
    padding: 10px;

    color: #e0e0e0;
    background: #292929;
    border: 2px solid #3e77e7;
    border-radius: 5px;
  }

  .message {
    height: 160px;
  }

  button {
    width: 220px;
    height: 30px;

    background: linear-gradient(180deg, #3e77e7 0%, #245ccb 100%);
    box-shadow: 0px 1px 2px rgba(245, 245, 245, 0.1);
    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #f5f5f5;
    border: none;
  }
`

export const TextBox = styled.p`
  margin-bottom: 65px;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #e0e0e0;
`
