import React , {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import cookie from 'js-cookie'
import Axios from './../../axios';
import './style.css'
export default function Login() {

    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
	const [user, setuser] = useState(false);
    const [loading, setloading] = useState(false);
    const [error,seterror] = useState(false);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
		const Details = await {
			Email,
			password
		}
		Axios.post('Donor/login',Details)
        .then(
            res =>
            {   
                if(res){
					cookie.set("token",res.data);
                    setuser(true);
                    setloading(!loading);
                }
            }
        )
        .catch(err => {
            console.log(err);
            seterror(!error);

        });
		
    }
    return (
        <div className="limiter">
		 {    /**--------------------loading----------------------- */
             loading? <><div className="loadercontainer"><div className="loader"></div></div></> : <></>
         }

		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={handleFormSubmit}>
					<span className="login100-form-title p-b-43">
						Login to continue
					</span>
					
					
					<div className="wrap-input100 validate-input">
						<input required className="input100" type="Email" name="email" onChange={ e => setEmail(e.target.value)} />
						<span className="focus-input100"></span>
						{
                            Email ? <></>: <span className="label-input100">Email</span>
                        }
					</div>
					
					<div className="wrap-input100 validate-input">
						<input required className="input100" type="password" name="pass" onChange={e => setPassword(e.target.value)} />
						<span className="focus-input100"></span>
						{
                            password ? <></>: <span className="label-input100">Password</span>
                        }
					</div>

					<div className="flex-sb-m w-full p-t-3 p-b-32">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label className="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="/" className="txt1">
								Forgot Password?
							</a>
						</div>
					</div>
			

					<div className="container-login100-form-btn">
						<button type="submit" className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-46 p-b-20">
						<span className="txt2">
                            
							OR
						</span>
					</div>
					<div className="text-center p-t-46 p-b-20">
						<span className="txt3">
							<Link to="/signup">Signup</Link>
						</span>
					</div>

				</form>

				<div className="login100-more">
				</div>
			</div>
		</div>
		{ 
        /**------------------------------If user is valid and registered-------------------------------- */
                      user? <Redirect to="/profile"></Redirect> :  ""
        }
        { /**-------------------------if error----------------------------------------------------------- */
                      error? <Redirect to="/profile"></Redirect> :  ""
        }
	</div>
	
    )
}

