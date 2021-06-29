import React,{useState , useEffect}from 'react'
import { Redirect } from 'react-router';
import Axios from '../../axios';
import './style.css'
export default function Flat() {

const [flatData, setflatData] = useState([])
useEffect(() => {
     Axios.get('flat').then(
         res =>
          {
              setflatData(res.data);
        } 
              
           
     )
     .catch(err => console.log(err))
}, [])
const [Name, setName] = useState("")
const [Flat, setFlat] = useState("")
const [Address, setAddress] = useState("")
const [Contact, setPhone] = useState("")
const [Required, setRequired] = useState("")
const [Rent, setRent] = useState("")
const [Furnished, setFurnished] = useState(true)
const [FlatImage, setPicture] = useState()
const [Start, setStart] = useState(0);
const [End, setEnd] = useState(3);
const [Modal, setModal] = useState(false);
const [loading, setloading] = useState(false);
const [error,seterror] = useState(false);

const handleImage = e => {
     e.preventDefault();
     const file = e.target.files[0];
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = () =>{
         setPicture(reader.result);
     }
}
const handleAdd = async (e) =>{
    setloading(true);
    e.preventDefault();
    const Details = await {
        Name,
        Flat,
        Address,
        Contact,
        FlatImage,
        Rent,
        Required,
        Furnished
    }
    Axios.post('/flat',Details)
    .then(res => {
        setModal(!Modal)
        setloading(false)
    })
    .catch(err => {
        seterror(true)});
        setloading(false);
}
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
                                         <input type="Name" required className="form-control" placeholder="Full Name" onChange={(e)=> setName(e.target.value)} />
                                     </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                        <label className="label" for="name">Address</label>
                                        <input type="text" required className="form-control" placeholder="house no. 123, janakpuri, near 24seven" onChange={(e)=> setAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                        <label className="label" for="email">No. Rooms</label>
                                         <input type="text" required className="form-control" placeholder="3" onChange={e => setFlat(e.target.value)}/>
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
                                          <label className="label" for="phone">Furnished</label>
                                          <select required className="form-control" onChange={e => {if(e.target.value ==="yes"){
                                              setFurnished(true);
                                          }
                                          else setFurnished(false)}} >
                                           <option value="true">yes</option>   
                                           <option value="false">no</option>   
                                           </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                          <label className="label" for="phone">Picture</label>
                                          <input type="file" required className="form-control" placeholder="+01" onChange={e => handleImage(e)} />
                                    </div>
                                </div>
                              
                                <div className="col-md-12">
                                    <div className="form-group d-flex align-items-center">
                                          <label className="label" for="phone">Looking for</label>
                                          <input type="tel" required className="form-control" placeholder="2 Roommates" onChange={e => setRequired(e.target.value)} />
                                    </div>
                                </div>
       
                              
                  
                        <div className="col-md-12">
                                <div className="form-group d-flex align-items-center">
                                    <label className="label" for="password">Rent</label>
                                    <input type="text" required className="form-control" placeholder="3000" onChange={e => setRent(e.target.value)} />
                                </div>
                        </div>
            
                        <div className="col-md-12">
                            <div className="form-group">
                                    <button type="submit" className="btn btn-secondary submit p-3">Create a Flat</button>
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
            <div className="flatImage"></div>
            <div className="flatdetail">
                    <button className="addFlat" onClick={()=> setModal(!Modal)}>
                        <i className="fa fa-plus" aria-hidden="true"></i><span>ADD FLAT</span>
                    </button>
                {/**for displaying the data on screen */}
                        {
                            flatData.slice(Start,End).map(data=>
                                <div className="roomCard" key={data._id}>
                        <table>
                                <tr>
                                    <td><i className="fa fa-user fa-lg" aria-hidden="true"></i></td>
                                    <td>User</td>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-bed fa-lg" aria-hidden="true"></i></td>
                                    <td>Flat</td>
                                    <td>{data.bhk} Bhk 
                                    {data.furnished ? <i> furnished</i> : <i> unfurnished</i>}
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-mobile fa-lg" aria-hidden="true"></i></td>
                                    <td>Contact</td>
                                    <td>{data.contact}</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-location-arrow fa-lg" aria-hidden="true"></i></td>
                                    <td>Address</td>
                                    <td>{data.address}</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-money fa-lg" aria-hidden="true"></i></td>
                                    <td>Rent</td>
                                    <td>	&#8377; {data.rent}</td>
                                </tr>
                            </table>
                            {
                                data.verified ? 
                                            <div className="cardverified"> <i className="fa fa-check" aria-hidden="true"></i><span> Verified</span></div>
                                                :
                                            ''
                            }

                            <div className="cardRequired">
                                <i className="fa fa-plus" aria-hidden="true"></i> Looking for {data.required}
                                <div>
                            {
                               data.flatImage ?  <img src={data.flatImage} alt="error" ></img> : ""
                            }
                                
                                </div>
                            </div>
                </div>
                            
                                )
                        }


                        {/**for handling the  move buttons */}
                          {
                            (flatData.length  > 3) ? 
                            <div className="controlKey">
                                <button onClick={()=>handleControlKey(-3)}><i className="fa fa-chevron-circle-left fa-lg" aria-hidden="true"></i></button>
                                <button onClick={()=>handleControlKey(3)} ><i className="fa fa-chevron-circle-right fa-lg" aria-hidden="true"></i></button>
                            </div>
                            :
                            ''
                        }
            </div>
        </div>
        

        { /**-------------------------if error----------------------------------------------------------- */
                      error? <Redirect to="/error"></Redirect> :  ""
        }
     
        

        </>
    )
}
