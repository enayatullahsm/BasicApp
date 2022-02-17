import React,{useEffect,useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useNavigate  } from 'react-router-dom';
import Axios from 'axios';
const UserList = (props) => {
    const navigate = useNavigate();
    const[studentList,setStudentList] = useState([]);
    // const[updateStudent,setUpdateStident] = useState(null);
    // const [openPopup,setOpenPopup] = useState(false);
    const handlePopupClose = ()=>{
        // setUpdateStident(null);
        // setOpenPopup(false)
    }
    const handleUpdateStudent = (student)=>{
        // setUpdateStident(student)
        // setOpenPopup(true)
        props.update(student);
        navigate("/update")
        console.log(student);
    }
    useEffect(() => {
        console.log("useEffect")
        Axios.get("http://localhost:5000/student").then((response)=>{
            // console.log(response.data)
            setStudentList(response.data);
        })
    },[])
    return (
        <>
            {/* <Modal open={openPopup} onClose={handlePopupClose}>
                <h2>Simple centered modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                </p>
            </Modal> */}
            <div className="content-wrapper">

                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">User List </h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">User</a></li>
                                    <li className="breadcrumb-item active">UserList</li>
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

                            <div className="col-md-12">

                                <div className="card">


                                    <div className="card-body">
                                        <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table id="example1" className="table table-bordered table-striped dataTable dtr-inline" role="grid" aria-describedby="example1_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="example1" rowSpan="1"
                                                                    colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">User Id</th>
                                                                <th className="sorting" tabindex="0" aria-controls="example1" rowSpan="1" colSpan="1"
                                                                    aria-label="Browser: activate to sort column ascending">Name</th>
                                                                <th className="sorting"
                                                                    tabindex="0" aria-controls="example1" rowSpan="1" colSpan="1"
                                                                    aria-label="Platform(s): activate to sort column ascending">Role</th>
                                                                <th className="sorting" tabindex="0"
                                                                    aria-controls="example1" rowSpan="1" colSpan="1"
                                                                    aria-label="Engine version: activate to sort column ascending">Email</th>
                                                                <th className="sorting" tabindex="0" aria-controls="example1" rowSpan="1" colSpan="1"
                                                                    aria-label="CSS grade: activate to sort column ascending">Edit</th></tr>
                                                        </thead>
                                                        <tbody>
                                                        {studentList.map((student)=>{
                                                            return (<tr className="odd" key = {student.id}>
                                                            <td className="dtr-control sorting_1" tabindex="0">{student.id}</td>
                                                            <td>{student.name}</td>
                                                            <td>{student.branch}</td>
                                                            <td>{student.email}</td>
                                                            <td><button onClick={()=>{handleUpdateStudent(student)}} className="nav-link button-update">
                                                                
                                                                <p>Edit/Update</p>
                                                            </button></td>
                                                        </tr>)
                                                            })}
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-5">
                                                    <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0" className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0" className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0" className="page-link">6</a></li><li className="paginate_button page-item next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
            <Outlet />
        </>

    );
};

export default UserList;
