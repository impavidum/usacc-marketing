import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"

import { Section, Container } from "../global"

const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: true
  };

 
const About = () => (
  <Section id="about">
       <StyledContainer>
       <Subtitle>Our Services</Subtitle>
      <SectionTitle style={{color: '#14213d', opacity: .9}}>A Michigan-based Company</SectionTitle>
      <p style={{color: '#14213d', opacity: .7}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      <SectionTitle style={{color: '#14213d', opacity: .9}}>Our Clients</SectionTitle>
      </StyledContainer>

    <Slider {...settings}>

      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/ALCONA.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/AVCMH.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/BLDHD.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/CMDHD.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/Dickinson.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/EJFHC.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/HDNW.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/HND.png')}/>
      </div>
      <div>
          <img style={{margin: '0px 60px', opacity: .65, height: 90}} src={require('../../images/clients/McKenzie.png')}/>
      </div>
        
      
      </Slider>
      
  </Section>
)

export default About

// const Clients = styled.div`


// `
const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: left;
  margin: 0 auto 40px;
  text-align: left;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: left;
`

// const FeaturesGrid = styled.div`
//   max-width: 670px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   margin: 0px auto;
//   grid-column-gap: 40px;
//   grid-row-gap: 35px;
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     grid-template-columns: 1fr;
//     padding: 0 64px;
//   }
// `

// const FeatureItem = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `

// const FeatureTitle = styled.h4`
//   color: ${props => props.theme.color.primary};
//   letter-spacing: 0px;
//   line-height: 30px;
//   margin-bottom: 10px;
// `

// const FeatureText = styled.p`
//   text-align: center;
// `
