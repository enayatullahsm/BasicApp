let student = [{
    name : "enayat",
    branch : "admin",
    email: "enayat@gmail.com",
    id: 1,
    password : "admin",
    gender: "Male"
    },{"name":"enayat2","email":"smenayat2@gmail.com","id":"c09f8fc8-c60e-44e7-8f1d-69777b989092","branch":"CS","gender":"Male","password":"admin"}];

export const getStudent = (req,res)=>{
    res.send(student);
}
export const getStudentById = (req,res)=>{
    const studentSearched = student.filter((elem)=> elem.id === req.params.id)
    res.send(studentSearched)
}

export const getLogin = (req,res)=>{
    const updateElm = student.find((elem)=> elem.email === req.body.email && elem.password === req.body.password);
    if(updateElm){
        res.send(updateElm);
    }
    else{
        res.send("invalid credential");
    }
}

export const addStudent = (req,res)=> {
    const studentObj = {
        name : req.body.name,
        email : req.body.email,
        id : req.body.id,
        branch : req.body.branch,
        gender : req.body.gender,
        password : req.body.password
    }
    student.push(studentObj);
    res.send(`student created with id ${studentObj.id}`)
}

export const updateStudent = (req,res)=> {
    console.log(req.body)
    // console.log(req.params.id)
    const  { name, email,branch,gender,password} = req.body;
    const updateElm = student.find((elem) => elem.id == req.params.id);
    console.log(updateElm);
    if(name) updateElm.name = name;
    if(email) updateElm.email = email;
    if(branch) updateElm.branch = branch;
    if(gender) updateElm.gender = gender;
    if(password) updateElm.password = password;
    res.send(`student updated with id ${req.params.id}`)
}
export const deleteStudent = (req,res) => {
    student = student.filter((elem)=>{
        return elem.id !== req.params.id;
    })
    res.send(`student deleted with id ${req.params.id}`);
}