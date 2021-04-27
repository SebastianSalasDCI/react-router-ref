class LoginService {

  onChange = (e,setEmail,setPassword,setCheck) =>{
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break; 
      case "remember":
        setCheck(prev => {
          return !prev
        })
        break;           
      default:
        break;
    }
  }

  onSubmit = (email,password,check) =>{
    console.log({email,password,check})
  }
}

const LoginServiceInst = new LoginService()

export default LoginServiceInst;