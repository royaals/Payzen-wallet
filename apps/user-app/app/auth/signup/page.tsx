import React from 'react'
import Form from '../../../components/Form'
import { Quote2 } from '../../../components/Quote2'
const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1: lg:grid-cols-2  ">
      <div className="flex justify-center items-center my-20 ">
        <Form type="signup"/>
        </div>
        <div className="hiddden lg:block">
        <Quote2/>
        </div>
       
      </div>
    </div>
  )
}

export default SignUp
