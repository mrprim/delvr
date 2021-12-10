import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../slices/color'

const Box = () => {
  const backgroundColor = useSelector(s => s.color)
  const dispatch = useDispatch()
  const style = useMemo(() => ({ width: '100px', height: '100px', backgroundColor }), [backgroundColor])
  const handleClick = useCallback(() => {
    dispatch(set(backgroundColor === 'red' ? 'green' : 'red'))
  }, [backgroundColor, dispatch])

  return (
    <div style={style} onClick={handleClick}>
      {backgroundColor}
    </div>
  )
}

export default Box
