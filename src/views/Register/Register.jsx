import React,{useState} from 'react'
import FormReg from './FormReg'
import RegisterServiceInst from '../../services/Register/RegisterService'

export default function Register() {

  const [emailData,setEmailData] = useState({
    email:"",
    conf_email:"",
    alert_email:false
  })
  const [name,setName] = useState("")
  const [prof,setProf] = useState("0")
  const [passwordData,setPasswordData] = useState({
    password:"",
    conf_password:"",
    alert_password: false
  })


  const onChangeHandler = (e) =>{
    RegisterServiceInst.onChange(e,setEmailData,setName,setProf,setPasswordData)
  }

  const onSubmitHandler = () => {
    RegisterServiceInst.onSubmit(emailData,name,prof,passwordData)
  }
  

  return (
    <div>
      <div className="regContainer">
        {/* email,conf_email,name,prof,password,conf_password,onChangeHandler,onSubmitHandler */}
          <FormReg 
            email={emailData.email}
            conf_email={emailData.conf_email}
            alert_email={emailData.alert_email}
            name={name}
            prof={prof}
            password={passwordData.password}
            conf_password={passwordData.conf_password}
            alert_password={passwordData.alert_password}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
          />
      </div>
    </div>
  )
}
