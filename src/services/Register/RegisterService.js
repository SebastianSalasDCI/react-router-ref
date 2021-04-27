class RegisterService {
  onChange = (e,setEmailData,setName,setProf,setPasswordData) =>{
    switch (e.target.id) {
      case "email":
        setEmailData(prev=>{

          const alertState = e.target.value !== prev.conf_email

          return {
            ...prev,
            email:e.target.value,
            alert_email: alertState
          }
        })
        break;
      case "conf_email":
        setEmailData(prev=>{
          
          const alertState = e.target.value !== prev.email

          return {
            ...prev,
            conf_email:e.target.value,
            alert_email: alertState
          }
        })
        break;
      case "name":
        setName(e.target.value)
        break;
      case "prof":
        setProf(e.target.value)
        break;
      case "password":
        setPasswordData(prev=>{
          
          const alertState = e.target.value !== prev.conf_password

          return {
            ...prev,
            password:e.target.value,
            alert_password: alertState
          }
        })
        break; 
      case "conf_password":
        setPasswordData(prev=>{
          
          const alertState = e.target.value !== prev.password

          return {
            ...prev,
            conf_password:e.target.value,
            alert_password: alertState
          }
        })
        break;           
      default:
        break;
    }
  }

  onSubmit = (emailData,name,prof,passwordData) =>{
    console.log({emailData,name,prof,passwordData})
  }
}

const RegisterServiceInst = new RegisterService()

export default RegisterServiceInst;