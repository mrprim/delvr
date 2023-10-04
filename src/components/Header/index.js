import React from 'react'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.min.css'

const HeaderBody = styled.header`
  background-color: purple;
  height: 100%;
  width: 100%;
  color: white;
  padding: 10px;
  display: flex;
  box-shadow: 0 4px 8px grey;
`
const Left = styled.div`
  flex: 1;
  text-align: left;
  vertical-align: middle;
  line-height: 44px;
`
const Right = styled.div`
  flex: 1;
  text-align: right;
  vertical-align: middle;
  line-height: 44px;
`

const I = styled.i`
  display: inline;
  margin-left: .45em;
`
const Header = () =>
  <HeaderBody>
    <Left>
      <I className='fab fa-github fa-2x' />
      <I className='fab fa-github fa-2x' />
      <I className='fab fa-github fa-2x' />
      <I className='fab fa-github fa-2x' />
    </Left>
    <Right>
      <I className='fab fa-github fa-2x' />
      <I className='fab fa-github fa-2x' />
      <I className='fab fa-github fa-2x' />
      <I className='fab fa-github fa-2x' />
    </Right>
  </HeaderBody>

export default Header
