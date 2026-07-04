import React from 'react'
import Score from './Score'

function App() {
  return (
<div className='grid grid-cols-2'>
  <Score team="Team A " location="bit"/>
<Score team="Team B" location="bim"/>
</div>
  )
}

export default App