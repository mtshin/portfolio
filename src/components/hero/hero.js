import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

const HeroSubTitle = styled.h2`
  font-weight: 200;
  font-size: 1.75rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

const Hero = ({ className, title, subtitle }) => (
  <HeroContainer className={className}>
    <TitleContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubTitle>{subtitle}</HeroSubTitle>
    </TitleContainer>
  </HeroContainer>
)

export default styled(Hero)`
  ${p =>
    `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 70vh;
  background-attachment: fixed;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`
