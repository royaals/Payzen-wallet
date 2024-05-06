'use client'

import CountUp from 'react-countup';

export const AnimationCount=({total}:{total: number}) => {
    return (
        <div className='w-full'>
            <CountUp decimal=","
  prefix="₹" duration={2.75} end={total}/>
        </div>
    )
}