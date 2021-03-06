import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Image = styled.img`
  max-height: 280px;
  max-width: 280px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 10px 10px 21px -5px rgba(0, 0, 0, 0.5);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) =>
    href &&
    css`
      &:hover ${Image} {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`

const Portfolio = ({ className, location }) => {
  const title = 'Portfolio'
  const subTitle =
    'A curated collection of my personal projects. Click to view the source code!'
  const { keywords, portfolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero
        heroImg={withPrefix('/images/cover_portfolio.png')}
        title={title}
        subtitle={subTitle}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {portfolio.map(job => (
              <Col key={job.description} align="center">
                <JobCard
                  as={job.url ? 'a' : 'div'}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={withPrefix(job.image)} />
                  <p>{job.description}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portfolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
