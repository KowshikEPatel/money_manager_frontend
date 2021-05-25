import {useState,useEffect} from 'react'
import './LandingPage.css'
export default function LandingPage(){
        const [username,setUsername] = useState("")
        const [passwords,setPasswords] = useState("")

        function handleChangeUser(event){
                setUsername(event.target.value)
        }

        function handleChangePassword(event){
                setPasswords(event.target.value)
        }
        const cred = {username,passwords}
return  <>
        <div className="card" style={{width:"20rem",margin:"70px 0 0 400px"}}>
             <div class="card-body">
                     <h4 class="card-title">Login to your account</h4>
                   <h5>Username</h5>
                   <input type="text" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangeUser}></input>
                   <h5>Password</h5>
                   <input type="password" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangePassword}></input>
                        <div style={{textAlign:"right"}}>
                        <a className="btn btn-secondary">Login</a>
                        <p>New user? Sign up</p>
                        <p>{username}</p>
                        <p>{JSON.stringify(cred)}</p>
                        </div>
             </div>
        </div>
        </>

}