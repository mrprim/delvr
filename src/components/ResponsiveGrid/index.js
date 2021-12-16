import styled from 'styled-components'
import { XS, SM, MD, LG } from './mediaQuerySizes'

const COLUMNS = 12
const mod = 100 / COLUMNS

export const Item = styled.div`
  flex: 0 0 ${({ xs = 1 }) => xs * mod}%;
  ${({ sm }) => buildMediaQuery('min-width', XS, sm)}
  ${({ md }) => buildMediaQuery('min-width', SM, md)}
  ${({ lg }) => buildMediaQuery('min-width', MD, lg)}
  ${({ xl }) => buildMediaQuery('min-width', LG, xl)}
`

const buildMediaQuery = (check, size, columns) => columns && `
  @media only screen and (${check}:${size}) {
    flex: 0 0 ${columns * mod}%;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
`
