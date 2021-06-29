import React , {useState,useEffect} from 'react'
import './style.css'
import Axios from './../../axios'
import { Redirect } from 'react-router'
export default function Roommate() {
    const [Name, setName] = useState("")
    const [Required, setRequired] = useState("")
    const [Email, setEmail] = useState("")
    const [Sex, setSex] = useState("Male")
    const [Phone, setPhone] = useState("")
    const [Budget, setBudget] = useState("")
    const [CollegeId, setCollegeId] = useState("")
    const [Branch, setBranch] = useState("CSE-1")
    const [Semester, setSemester] = useState("1")
    const [Modal, setModal] = useState(false);
    const [loading, setloading] = useState(false);
    const [error,seterror] = useState(false);

    const handleAdd = async (e) =>{
        setloading(true);
        e.preventDefault();
        const Details = await {
            Name,
            Email,
            Sex,
            Phone,
            CollegeId,
            Branch,
            Budget,
            Semester,
            Required
        }
        console.log(Details);
        Axios.post('/Roommate',Details)
        .then(res =>{console.log(res); setModal(!Modal)} )
        .catch(err => {console.log(err)
        seterror(true)});
        setloading(false);
    }

    const [flatData, setflatData] = useState([])
    useEffect(() => {
         Axios.get('roommate').then(
             res =>
              {
                  setflatData(res.data);
            } 
         )
         .catch(err => console.log(err))
    }, [])
const [Start, setStart] = useState(0);
const [End, setEnd] = useState(3);
const handleControlKey = (e) =>{
    if(e < 0 && Start === 0){
        return 0;
    }
    if(e > 0 && (flatData.length - End)<0 ){
        return 0;
    }
    setEnd(End+e);
    setStart(Start+e);
}
    return (
        <>
         { /**-------------------------if error----------------------------------------------------------- */
                      error? <Redirect to="/error"></Redirect> :  ""
        }
         {    /**--------------------loading----------------------- */
             loading? <><div className="loadercontainer"><div className="loader"></div></div></> : <></>
         }
          {   /** -------------------------Syling is in app.css------------------------ */
           Modal ?
           <>
              <div className="formModal"  >
              <form className="signup-form" encType="multipart/form-data" onSubmit={(e)=> handleAdd(e)}>
                   <button type="button" className="formCross"><i class="fa fa-times" aria-hidden="true" onClick={()=> setModal(!Modal)}></i></button>    
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
                                  <label className="label" for="phone">Budget</label>
                                  <input type="text" required className="form-control" placeholder="3000" onChange={e => setBudget(e.target.value)} />
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
                                  <label className="label" for="name">Preference</label>
                                  <input type="Name" required className="form-control" placeholder="Roommate from IT branch" onChange={e => setRequired(e.target.value)} />
                                  </div>
                           </div>
                           <div className="col-md-12">
                            <div className="form-group">
                                    <button type="submit" className="btn btn-secondary submit p-3">Become a Roommate</button>
                            </div>
                       </div>
                                
                              
                   </div>
              </form>
            </div>
           </> 
           : 
           <></>
        }
    

        <div className="FlatContainer">
            <div className="roomImage"></div>
            <div className="flatdetail">
                    <button className="addRoom" onClick={()=> setModal(!Modal)}>
                        <i className="fa fa-plus" aria-hidden="true"></i><span>Roommate</span>
                    </button>
                        {
                            flatData.slice(Start,End).map(data=>
                                <div className="roomCard" key={data._id}>
                        <table>
                                <tr>
                                    <td><i className="fa fa-user fa-lg" aria-hidden="true"></i></td>
                                    <td>User</td>
                                    <td>{data.name + " "}
                                    {
                                        (data.sex === "Male") ? <i className="fa fa-mars" aria-hidden="true"></i> :<i className="fa fa-venus" aria-hidden="true"></i>
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-mobile fa-lg" aria-hidden="true"></i></td>
                                    <td>Contact</td>
                                    <td>{data.contact}</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-university" aria-hidden="true"></i></td>
                                    <td>Branch</td>
                                    <td>{data.branch}</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-graduation-cap" aria-hidden="true"></i></td>
                                    <td>Semester</td>
                                    <td>{data.sem}</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-money fa-lg" aria-hidden="true"></i></td>
                                    <td>Budget</td>
                                    <td>	&#8377; {data.budget}</td>
                                </tr>
                            </table>
                            {
                                data.verified ? 
                                            <div className="cardverified"> <i className="fa fa-check" aria-hidden="true"></i><span> Verified</span></div>
                                                :
                                            ''
                            }
                            {data.required? 
                            <div className="cardRequired">
                                <i className="fa fa-plus" aria-hidden="true"></i> Preference: {data.required}
                            </div>
                            :''
                            }     
                        </div>
                                )
                        }
                        {
                            (flatData.length > 3) ? 
                            <div className="controlKey">
                                <button onClick={()=>handleControlKey(-3)}><i className="fa fa-chevron-circle-left fa-lg" aria-hidden="true"></i></button>
                                <button onClick={()=>handleControlKey(3)} ><i className="fa fa-chevron-circle-right fa-lg" aria-hidden="true"></i></button>
                            </div>
                            :
                            ''
                        }
                        </div>
        </div>
        {

       
 /*       <div className="addFlat">
        <i className="fa fa-plus" aria-hidden="true"></i><span>ADD FLAT</span>
        </div>
        */
}
        </>
    )
}
