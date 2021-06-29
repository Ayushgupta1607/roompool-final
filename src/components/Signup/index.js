
import React , {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from '../../axios'
import './Signup.css'


export default function Signup() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Sex, setSex] = useState("Male")
    const [Phone, setPhone] = useState("")
    const [CollegeId, setCollegeId] = useState("")
    const [Branch, setBranch] = useState("CSE-1")
    const [Semester, setSemester] = useState("1")
    const [password, setPassword] = useState("")
    const [user, setuser] = useState(false);
    const [loading, setloading] = useState(false);
    const [error,seterror] = useState(false);

    const handlesignup = async e => {
        e.preventDefault();
        var Details = await {
            Name,
            Email,
            Sex,
            Phone,
            CollegeId,
            Branch,
            Semester,
            password
        }
        console.log(Details);
        setloading(!loading);
        Axios.post('Donor/register',Details)
        .then(
            res =>
            {   console.log(res.data)
                if(res.data._id){
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
        <section className="ftco-section">


         {    /**--------------------loading----------------------- */
             loading? <><div className="loadercontainer"><div className="loader"></div></div></> : <></>
         }


        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="wrap d-md-flex">
                    <div className="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end signupImage">
                        <div className="text w-100 ">
                            <h2 className="mb-4">Welcome to signup form</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
              </div>

              <div className="login-wrap p-4 p-md-5">
                  <h3 className="mb-3">Create an account</h3>
                        <form className="signup-form" onSubmit={handlesignup}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="name">Full Name</label>
                                  <input type="Name" required className="form-control" placeholder="Full Name" onChange={e => setName(e.target.value)} />
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="email">Email Address</label>
                                  <input type="Email" required className="form-control" placeholder="johndoe@email.com" onChange={e => setEmail(e.target.value)}/>
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="email">Sex</label>
                                  <select required className="form-control" onChange={e => setSex(e.target.value)}>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                      </select>
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="phone">Phone no.</label>
                                  <input type="tel" required className="form-control" placeholder="+01" onChange={e => setPhone(e.target.value)} />
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="CollegeId">College ID</label>
                                  <input type="text" required className="form-control" placeholder="College ID" onChange={e => setCollegeId(e.target.value)} />
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="Stream">Stream</label>
                                  <select type="text" required className="form-control" placeholder="Semester" onChange={ e => setBranch(e.target.value)}>
                                      <option value="CSE-1">CSE-1</option>
                                      <option value="CSE-2">CSE-2</option>
                                      <option value="CSE-3">CSE-3</option>
                                      <option value="CSE-Eve">CSE-Eve</option>
                                      <option value="IT-1">IT-1</option>
                                      <option value="IT-2">IT-2</option>
                                      <option value="IT-Eve">IT-Eve</option>
                                      <option value="EEE">EEE</option>
                                      <option value="ECE">ECE</option>
                                  </select>
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                  <label className="label" for="Semester">Semester</label>
                                  <select type="text" required className="form-control" placeholder="Semester" onChange={ e => setSemester(e.target.value)} >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      </select>
                              </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                            <label className="label" for="password">Password</label>
                          <input type="password" required className="form-control" placeholder="Password" onChange={ e => setPassword(e.target.value)} />
                        </div>
                                </div>
                                <div className="col-md-12 my-4">
                                    <div className="form-group">
                            <div className="w-100">
                                <label className="checkbox-wrap checkbox-primary">I agree all statements in terms of service
                                              <input required type="checkbox" checked />
                                              <span className="checkmark"></span>
                                            </label>
                                        </div>
                        </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                            <button type="submit" className="btn btn-secondary submit p-3">Create an account</button>
                        </div>
                                </div>
                            </div>

              </form>
              <div className="social-wrap">
                  <p className="or">
                      <span>or</span>
                  </p>
                   {
                       /**
                        *     <p className="mb-3 text-center">Signup with this services</p>
                      <p className="social-media d-flex justify-content-center">
                          <a href="/" className="social-icon google d-flex align-items-center justify-content-center"><span className="fa fa-google"></span></a>
                                <a href="/" className="social-icon facebook d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                                <a href="/" className="social-icon twitter d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                            </p>

                        */
                   }
                
              </div>
              <div className="w-100 text-center">
                            <p className="mt-4">I'm already a member! <Link to="/Login">Sign In</Link></p>
              </div>
            </div>
        
          </div>
            </div>
        </div>
        { 
        /**------------------------------If user is valid and registered-------------------------------- */
                      user? <Redirect to="/profile"></Redirect> :  ""
        }
        { /**-------------------------if error */
                      error? <Redirect to="/profile"></Redirect> :  ""
        }
</section>
    )
}


