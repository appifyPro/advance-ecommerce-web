
// import Button from "@/components/Button"

import uselogin from "@/hooks/login"
import  {useRouter} from 'next/router' 

export default function login()
{
    const router=useRouter()
    const myfunction=()=>
    {
        router.push("/signup")
    }
const{
    email,
    setemail,
    password,
    setpassword,
    onSubmitHandler,
   }=uselogin()
// alert("welcome")
    return(
        <div className="row justify-content-center mt-5">

<h2 className="row justify-content-center mt-2">Welcome to login page</h2>
            <div className="col-md-2">
           
        
            email <input type="email" placeholder="enter your email" onChange={(e)=>setemail(e.target.value)}/>
           password  <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="enter your password" />
            {/* <Button data1="login"/> */}
            <button onClick={onSubmitHandler}>login</button> <button onClick={myfunction}>Signup</button>
            
            </div>
        </div>
    )
}