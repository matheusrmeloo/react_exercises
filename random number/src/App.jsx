import React from 'react';
import Random from './components/random/random'

export default () => {
  return (
    <div>
      <Random
        min = {1}
        max = {12}
      />
    </div>
  )
}
