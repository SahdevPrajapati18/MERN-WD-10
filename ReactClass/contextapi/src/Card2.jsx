import React from 'react'
import {useContext} from 'react';
import {dataDistributer} from './App';
const Card2 = () => {

    const data = useContext(dataDistributer);
  return (
    <div>
        {data.fname}
        {data.lname}
    </div>
  )
}

export default Card2
