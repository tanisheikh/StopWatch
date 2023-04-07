import React from 'react'
import {ueFormik} from 'formik';
import UserTodo from './UserToDo';
import {InputText,InputNumber,passWord} from './formDemo'
const SignIn = () => {

    const formIk=ueFormik({
        initialvalues:UserTodo.getInitialvalue(),
        validationSchema:UserTodo.getValidationSchema(),
        onsubmit:(values)=>{
console.log("values>>",values)
        }
    })
  return (
    <form onSubmit={formIk.handleSubmit}>
<div className='grid'>
    <div className='col-12 '>
        <InputText/>
    </div>

</div>
    </form>
  )
}

export default SignIn