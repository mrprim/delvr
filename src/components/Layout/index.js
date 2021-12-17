import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { SM } from '../../style/mediaQuerySizes'
import Beasts from '../Beasts'
import Footer from '../Footer'
import Header from '../Header'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

const LayoutGrid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr 128px;

  grid-template-areas:
    "header"
    "body"
    "footer";

  @media only screen and (min-width:${SM}) {
    grid-template-columns: 1fr 800px 1fr;

    grid-template-areas:
      "header header header"
      "left-gutter body right-gutter"
      "footer footer footer";
  }
`

const Item = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
`

const Layout = () =>
  <>
    <GlobalStyle />
    <LayoutGrid>
      <Item gridArea='header'>
        <Header />
      </Item>
      <Item gridArea='body'>
        <Beasts />
      </Item>
      <Item gridArea='footer'>
        <Footer />
      </Item>
    </LayoutGrid>
  </>

export default Layout
