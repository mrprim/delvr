import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll, add, remove } from '../../slices/beasts'
import { getRandom, names } from '@mrprim/random-rpg-stuff'
import styled from 'styled-components'

const Beast = styled.div`
  border: solid 1px black;
`

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
      {beasts.map(b => <Beast key={b.id} onClick={() => dispatch(remove(b.id))}>{b.species}</Beast>)}

    </div>

  )
}

export default Beasts
