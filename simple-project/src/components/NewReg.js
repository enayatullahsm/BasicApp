import React,{useState, useEffect} from 'react'
import {Link, Outlet} from 'react-router-dom';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const  NewReg=(props) => {
    const[studentObj , setStudentObj] = useState({name: '', gender:'',branch:'',id: uuidv4() , email :'',password:''})
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(studentObj);
        Axios.post("http://localhost:5000/student",studentObj).then((response)=>{
        //   props.setId(response.data.id);
        //   if(response.data.id){
        //     // let temp = useHistory();
        //     // temp.push(path); 
        //     navigate(path);
        //   }
        console.log(response.data);
        }).catch((err)=>{
          console.log(err);
        });
      }
      const handleChange = (e)=>{
        // console.log(e.target.name);
        // let tempObj = loginObj
        console.log(e.target.name,e.target.value)
        setStudentObj({...studentObj,[e.target.name]:e.target.value})
        // if(e.target.name === 'email'){
        //   setEmail(e.target.value)
        // }
        // else{
        //   setPassword(e.target.value)
        // }
        // console.log(tempObj);
        // setLoginObj(tempObj);
      }
    return (
      <>
      <div className="content-wrapper">

      <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">User</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">User</a></li>
              <li className="breadcrumb-item active">New Registration</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}


 <section className="content">
      <div className="container-fluid">
        <div className="row">
      
           <div className="col-md-8">
              <div className="card card-primary">
                <div className="card-body login-card-body">                  
            
                  <form  method="post" onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" disabled name='id' value={studentObj.id} onChange={handleChange} placeholder="UserId"></input>
                      <div className="input-group-append">
                        <div className="input-group-text">                          
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" name='name' value={studentObj.name} onChange={handleChange} placeholder="Name"></input>
                      <div className="input-group-append">
                        <div className="input-group-text">                          
                        </div>
                      </div>
                    </div>
                    
                    <div className="input-group mb-3">
                    <select className="form-control select2" value={studentObj.branch} name='branch' onChange={handleChange}>
                    <option  value={"IT"} data-select2-id="1">IT</option>
                    <option data-select2-id="2" value={"CS"}>CS</option>
                    <option data-select2-id="3" value={"ME"}>ME</option>
                    <option data-select2-id="4" value={"Other"}>Other</option>
                  </select>                 
                    </div> 
                    <div className="input-group mb-3">
                    <div className="form-check">
                          <input className="form-check-input" type="radio" onChange={handleChange} value={"Male"}  name="gender" />
                          <label className="form-check-label" >Male</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" onChange={handleChange} value={"Female"} name="gender" />
                          <label className="form-check-label" >Female</label>
                        </div>
                    </div>                   


                    <div className="input-group mb-3">
                      <input type="email" className="form-control" name='email' value={studentObj.email} onChange={handleChange} placeholder="Email"></input>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" name='password' value={studentObj.password} placeholder="Password" onChange={handleChange}></input>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        
                      </div>
                     
                      <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                      </div>
                      
                    </div>
                  </form>  
                  
                  
            
                  </div>
                </div>
                </div>
                <div className="col-md-2"></div>
                </div>
                </div>
                </section>
                </div>
            <Outlet />
            </>

        );
    };

export default  NewReg;
