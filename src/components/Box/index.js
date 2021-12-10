import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../slices/color'
import styled from 'styled-components'

const Display = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color}
`

const Box = () => {
  const color = useSelector(s => s.color)
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(set(color === 'red' ? 'green' : 'red'))
  }, [color, dispatch])

  return (
    <Display onClick={handleClick} color={color}>
      {color}
    </Display>
  )
}

export default Box
