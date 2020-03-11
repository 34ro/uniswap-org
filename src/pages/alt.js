import React from 'react'
import styled, { keyframes } from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo2'
import { Helmet } from 'react-helmet'

import Card from '../components/card'
import Marquee from '../components/marquee'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Circle from '../images/circle.inline.svg'
import Star from '../images/star.inline.svg'

const StyledBody = styled.div`
  font-size: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const loadTitle = keyframes`
  from {
    transform: translateY(10px) ;
  }

  to {
    transform: translateY(0px);
  }
`

const StyledTitle = styled.div`
  display: flex;
  /* width: 60%;
  max-width: 730px; */
  text-align: center;
  flex-direction: column;
  justify-content: center;
  animation: ${loadTitle} 0.7s ease;
  will-change: transform;
  margin: 4rem 0;
  /* margin-top: -150px; */
  /* mix-blend-mode: overlay; */
`

const StyledBodyTitle = styled.div`
  font-family: 'Bembo Book MT Pro', 'EB Garamond', serif;
  color: ${({ theme }) => theme.colors.pink1};
  font-weight: 400;
  font-size: 110px;
  line-height: 90%;
  letter-spacing: -0.06rem;
  margin-bottom: 2rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 800px;

  text-align: center;
  letter-spacing: -0.03em;
  /* @media (min-width: 1441px) {
    font-size: 5.5vw;
    line-height: 5.25vw;
  }
  @media (max-width: 960px) {
    font-size: 3.5rem;
    line-height: 3.75rem;
    padding-right: 0rem;
  }
  @media (max-width: 356px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
    padding-right: 0rem;
  } */
`

const loadInfo = keyframes`
  from {
    transform: rotate(-4.5deg) scale(0.97) translateY(10px) ;
  }

  to {
    transform: rotate(-4deg) scale(0.98) translateY(0px);
  }
`

const StyledUnicornImage = styled(Img)`
  width: 100%;
  height: 100%;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const NewPill = styled.span`
  float: left;
  color: ${({ theme }) => theme.invertedTextColor};
  background-color: ${({ theme }) => theme.textColor};
  padding: 0rem 0.75rem;
  border-radius: 0.5em;
  text-align: center;
  margin: 0;
  margin-right: 1rem;
  font-size: 16px;
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    /* flex-direction: column; */
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: column;
  }
  h2 {
    font-family: 'Principal Trial Semibold';
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const StyledTradeLink = styled.a`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.pink1};
  text-decoration: none;
  color: ${({ theme }) => theme.invertedTextColor};
  border-radius: 12px;
  margin-right: 1.5rem;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;

  :hover {
    transform: scale(1);
  }
  @media (max-width: 960px) {
    margin-right: 0.5rem;
    border-radius: 20px;
    text-align: center;
    /* border: 1px solid ${({ theme }) => theme.colors.pink1}; */
    text-decoration: none;
    /* color: ${({ theme }) => theme.colors.pink1}; */
    /* background-color: rgba(255, 255, 255, 0); */
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
  }
`

const StyledTradeLinkOutlined = styled(Link)`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.pink1};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pink1};
  border-radius: 12px;
  margin-right: 1.5rem;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;

  :hover {
    transform: scale(1);
  }
  @media (max-width: 960px) {
    margin-right: 0.5rem;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem 1.25rem;
  }
`

const StyledNoise = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  mix-blend-mode: overlay;
  position: absolute;
  top: 0px;
  background-repeat: repeat;
  left: 0px;
  width: 100%;
  background-size: auto;
  background-position: center;
`

const fallIn = keyframes`
  from {
    transform:translateY(-100vh);
  }

  to {
    transform: translateY(-70vh);
  }
`

const StyledRed = styled.div`
  width: 100%;
  height: 150vh;
  border-radius: 10vw;
  background: ${({ theme }) =>
    `radial-gradient(50% 50% at 50% 50%, ${theme.colors.link} 0%, ${theme.backgroundColor} 100%)`};
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0.2;
  animation: ${fallIn} 0.3s ease;
  transform: translateY(-70vh);
`

const StyledBG = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  -webkit-transform: translate3d(0, 0, 0);
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(9000deg);
  }
`

const StyledCircle = styled(Circle)`
  margin: 0;
  max-width: 200px;
  position: absolute;
  animation: ${rotate} 700s linear infinite;
  opacity: 0.2;
  width: 200;
  left: 30vw;
  top: 70vh;
  position: 'absolute';
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          cardlinks {
            cardButton
            cardDesc
            cardTitle
            type
            slug
          }
        }
      }
      unicornImage: file(relativePath: { eq: "uni_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      code: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whitepaper: file(relativePath: { eq: "whitepaper.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socks: file(relativePath: { eq: "socks.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      line: file(relativePath: { eq: "sq.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      noise: file(relativePath: { eq: "noise.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <StyledBG>
        <StyledRed />
        <StyledNoise fluid={data.noise.childImageSharp.fluid} />
        <StyledCircle />
      </StyledBG>
      <SEO title="Home" path={props.location.pathname} />
      <Helmet>
        <meta name="twitter:image" content={`${data.site.siteMetadata.siteUrl}/images/twitter-card.jpg`} />
      </Helmet>
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Automated Token Exchange.</StyledBodyTitle>
          <span>
            <StyledTradeLink href="https://uniswap.exchange/">Trade Now</StyledTradeLink>
            <StyledTradeLinkOutlined to="/docs">Read the docs</StyledTradeLinkOutlined>
          </span>
        </StyledTitle>
        {/* <NewInfo to="/blog/post-01">
          <NewPill>V2 Announced</NewPill>Learn what’s new ↗
          <StyledUnicornImage fadeIn={false} fluid={data.unicornImage.childImageSharp.fluid} />
        </NewInfo> */}
        <SummarySection data={data} />
        <GoalSection />
        <ProductsSection data={data} />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  font-size: 20px;
  margin: 1rem 3rem;
  @media (max-width: 960px) {
    min-width: 0px;
    max-width: 768px;
  }
  p {
    line-height: 140%;
    margin-bottom: rem;
    max-width: 410px;
  }
`

const MiniNewInfo = styled(Link)`
  transform: rotate(-4deg) scale(0.98);
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  width: 450px;
  height: 600px;

  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: rotate(-2deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
  @media (max-width: 960px) {
    position: relative;
    width: 160%;
    height: 100%;
    margin-top: 4rem;
  }
`

const SummarySection = props => {
  return (
    <StyledSectionFlex>
      <StyledImgSection>
        <MiniNewInfo to="/blog/post-01">
          <NewPill>V2 Announced</NewPill>Learn what’s new ↗
          <StyledUnicornImage fadeIn={false} fluid={props.data.unicornImage.childImageSharp.fluid} />
        </MiniNewInfo>
      </StyledImgSection>
      <StyledImgSection>
        <p>
          <b>Uniswap</b> is a fully decentralized protocol for automated market making on Ethereum.
        </p>

        <p>A simple formalized equation drives unstoppable liquidity for thousands of exchanges.</p>

        <p>The protocol aligns developers, market makers to design markets that are open and accessible to all.</p>

        <Link to="/">
          <u>Learn More</u>
        </Link>
      </StyledImgSection>
    </StyledSectionFlex>
  )
}

// const StyledMiniCardContainer = styled.li`

const StyledMiniCards = styled.a`
  padding: 1.5rem;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  width: 260px;
  height: 360px;
  margin: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: scale(1.03);
  }
`
const StyledCardBG = styled(Img)`
  width: 80px;
  height: 250px;
  position: absolute !important;
  top: 0px;
  right: 0px;
  background-size: auto;
  background-position: center;
  /* z-index: -1; */
`

const StyledMiniCardHeader = styled.p`
  color: ${({ theme }) => theme.textColor};
  max-width: 160px;
  font-weight: 600;
`

const StyledMiniCardDesc = styled.p`
  font-size: 1rem;
  line-height: 130%;
  max-width: 80%;
`

const ProductsSection = props => {
  return (
    <StyledSectionFlex>
      <StyledMiniCards href="https://uniswap.exchange">
        <StyledMiniCardHeader>
          Uniswap
          <br /> Exchange
          <StyledCardBG fluid={props.data.swap.childImageSharp.fluid} />
        </StyledMiniCardHeader>
        <StyledMiniCardDesc>Trade tokens, add liquidity and create exchanges.</StyledMiniCardDesc>
      </StyledMiniCards>
      <StyledMiniCards href="https://uniswap.info" style={{ backgroundColor: '#F3BE1E' }}>
        <StyledCardBG fluid={props.data.info.childImageSharp.fluid} />
        <StyledMiniCardHeader>
          Uniswap <br />
          Info{' '}
        </StyledMiniCardHeader>
        <StyledMiniCardDesc>In depth Uniswap protocol market data.</StyledMiniCardDesc>
      </StyledMiniCards>
      <StyledMiniCards href="https://unisocks.exchange" style={{ backgroundColor: '#000000', color: 'white' }}>
        <StyledCardBG fluid={props.data.socks.childImageSharp.fluid} />
        <StyledMiniCardHeader style={{ color: 'white' }}>Unisocks</StyledMiniCardHeader>
        <StyledMiniCardDesc>Experimental speculative fashion.</StyledMiniCardDesc>
      </StyledMiniCards>
    </StyledSectionFlex>
  )
}

const StyledGoal = styled.div`
  padding: 0.25rem 2rem 2rem 2rem;
  margin-top: 4rem;
  /* background-color: ${({ theme }) => theme.cardBG}; */
  color: ${({ theme }) => theme.colors.link};
  border-radius: 0.5rem;
  max-width: 650px;
  font-size: 20px;
  h1 {
    font-family: 'EB Garamond';
  }
`

const GoalSection = props => {
  return (
    <StyledSectionFlex>
      <StyledGoal>
        <h1>Mission</h1>
        <p>
          Uniswap is important infrastructure for the emerging crypto economy and enables markets to be created that
          couldn{"'"}t have existed before. As more assets become tokenized, public blockchains and protocols like
          Uniswap provide the opportunity to establish a new financial stack that is more efficient, transparent, and
          equitable than any system in the past.
        </p>
        <div>
          <Link to="/">Read more about how we are working towards this future.</Link>
        </div>
      </StyledGoal>
    </StyledSectionFlex>
  )
}