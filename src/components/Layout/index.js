import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Beasts from '../Beasts'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

const LayoutGrid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10vh 1fr 10vh;

  grid-template-areas:
    "header header header header header header header header header header header header"
    "sidebar body body body body body body body body body body body"
    "footer footer footer footer footer footer footer footer footer footer footer footer";
`

const Layout = () =>
  <>
    <GlobalStyle />
    <LayoutGrid>
      <div style={{ gridArea: 'header', backgroundColor: 'red' }} />
      <div style={{ gridArea: 'sidebar', backgroundColor: 'blue' }} />
      <div style={{ gridArea: 'body', backgroundColor: 'violet' }}>
        <Beasts />
      </div>
      <div style={{ gridArea: 'footer', backgroundColor: 'cyan' }} />
    </LayoutGrid>
  </>

export default Layout
