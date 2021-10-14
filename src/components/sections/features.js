import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"
import { PieChart } from 'react-minimal-pie-chart';

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
    <PieChart
style={{width: 350, textAlign: 'center'}}
startAngle={-90}
  lineWidth={50}
  radius={40}
  data={[
    { title: 'One', value: 65, color: '#036d38' },
    { title: 'Two', value: 35, color: '#e8e8e8'},
    

  ]}
/>
    <ImageWrapper>
            {/* <StyledImage fluid={data.file.childImageSharp.fluid} /> */}
           



            <br />
          </ImageWrapper>
      {/* <Subtitle>Who is Eligible</Subtitle> */}
      <SectionTitle style={{color: '#14213d', opacity: .9}}>Healthcare Connect Fund</SectionTitle>
      <p style={{color: '#14213d', opacity: .7}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      <SectionTitle style={{color: '#14213d', opacity: .9}}>Telecommunications Program</SectionTitle>
      <p style={{color: '#14213d', opacity: .7}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

      {/* <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Security</FeatureTitle>
          <FeatureText>
            Your data is always safe with us as we use the latest security
            protocols.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Automation</FeatureTitle>
          <FeatureText>
            Create smart automated workflows and triggers for your money.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Aggregation</FeatureTitle>
          <FeatureText>
            Easily link up to 5 banks to your finance account.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Send money to friends and family with ease.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
            High interest and rewards for hitting your goals.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid> */}
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: left;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: left;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: left;
`


const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`