import React,{useState, useEffect}  from 'react'
import { useNavigate  } from 'react-router-dom';
import Axios from 'axios';


let path = `/`;
// history.push(path);
const  Login=(props) => {
const navigate = useNavigate();

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[loginObj , setLoginObj] = useState({email :'',password:''})

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(loginObj);
    Axios.post("http://localhost:5000/user/login",loginObj).then((response)=>{
      props.setId(response.data.id);
      if(response.data.id){
        // let temp = useHistory();
        // temp.push(path); 
        navigate(path);
      }
    }).catch((err)=>{
      console.log(err);
    });
  }
  const handleChange = (e)=>{
    // console.log(e.target.name);
    // let tempObj = loginObj
    setLoginObj({...loginObj,[e.target.name]:e.target.value})
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
            <h1 className="m-0 text-dark">Login</h1>
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
                      <input type="email" name="email" className="form-control" placeholder="Email" value={loginObj.email}  onChange={handleChange}></input>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input type="password" name="password" className="form-control" placeholder="Password" value={loginObj.password} onChange={handleChange}></input>
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
                        <button type="submit" className="btn btn-primary btn-block" >Login</button>
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
            </>

        );
    };

export default  Login;
