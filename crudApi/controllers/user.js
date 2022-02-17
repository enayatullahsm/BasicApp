let user = [{
    name : "enayat",
    role : "admin",
    email: "enayat@gmail.com",
    id: 1,
    password : "admin"}];

export const getUser = (req,res)=>{
    res.send(user);
}

export const getLogin = (req,res)=>{
    const updateElm = user.find((elem)=> elem.email === req.body.email && elem.password === req.body.password);
    if(updateElm){
        res.send(updateElm);
    }
    else{
        res.send("invalid credential");
    }
}
export const addUser = (req,res)=> {
    // console.log(req)
    const userObj = {
        name : req.body.name,
        role : req.body.role,
        id : req.body.id,
        email: req.body.email,
        password : req.body.password
    }
    // console.log(userObj)
    user.push(userObj);
    res.send(`student created with id ${userObj.id}`)
}

export const updateUser = (req,res)=> {
    console.log(req.body)
    const  { name, role, password,email} = req.body;
    const updateElm = user.find((elem)=> elem.id === req.params.id);
    console.log(updateElm);
    if(name) updateElm.name = name;
    if(email) updateElm.email = email;
    if(role) updateElm.role = role;
    if(password) updateElm.branch = branch;
    res.send(`student updated with id ${req.params.id}`)
}
export const deleteUser = (req,res) => {
    user = user.filter((elem)=>{
        return elem.id !== req.params.id;
    })
    res.send(`student deleted with id ${req.params.id}`);
}