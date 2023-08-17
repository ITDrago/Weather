import React from 'react'
import classes from './MyForm.module.css'
import MyInputForm from './MyInputForm'


const MyForm = () => {


  return (
    <div className={classes.myForm}>
        <div className={classes.myImageBox}>
            <div>
                <h1 style={{marginTop:140, fontSize:45}}>|Weather| research</h1>
            </div>
        </div>            
        <form>
          <MyInputForm/>
        </form>
    </div>
 
  )
}

export default MyForm