/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll, add, remove } from '../../slices/beasts'
import { getRandom, names } from '@mrprim/random-rpg-stuff'
import styled from 'styled-components'
import { Item, Grid } from '../ResponsiveGrid'

const Card = styled.div`
  border: solid 1px black;s
`

const Beast = ({ id, species }) => {
  const dispatch = useDispatch()
  const handleRemove = () => dispatch(remove(id))

  return (
    <Item xs={6} sm={4} md={3} lg={2} xl={1}>
      <Card onClick={handleRemove} color='green'>
        <div>{species}</div>
      </Card>
    </Item>
  )
}

const Beasts = () => {
  const beasts = useSelector(selectAll)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(add({ id: Date.now(), species: getRandom(names.ANIMAL) }))
  }

  return (
    <div>
      <h1 onClick={handleClick}>
        BEASTS
      </h1>
      <Grid>
        {beasts.map(b => <Beast {...b} key={b.id} />)}
      </Grid>
    </div>

  )
}

export default Beasts
