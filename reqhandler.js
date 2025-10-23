import userschema from "./models/userschema.js";

export async function testfunction(req, res) {
    const { name, age, pass } = req.body;

    try {
        const data = await userschema.create({ name, age, pass });
if(data){
    return res.status(201).send({data})
}else{
    return res.status(500).send("cant add data")
}
    }catch(error){
    return res.status(404).send("something went wrong"+error)

    }
}


export async function getfunction(req, res) {
    const { name, age, pass } = req.body;

    try {
        const data = await userschema.find()
if(data){
    return res.status(200).send({data})
}else{
    return res.status(404).send("not found")
}
    }catch(error){
    return res.status(404).send("something went wrong"+error)

    }
}


export async function updatefunction(req, res) {
    const { id ,name, age, pass } = req.body;

    try {
        const data = await userschema.updateOne({_id:id},{$set:{name:name,age:age,pass:pass}})
if(data){
    return res.status(200).send({data})
}else{
    return res.status(404).send("cant update")
}
    }catch(error){
    return res.status(404).send("something went wrong"+error)

    }
}

export async function deletefunction(req, res) {
    const {id}=req.params

    try {
        const data = await userschema.deleteOne({_id:id})
if(data){
    return res.status(200).send({data})
}else{
    return res.status(404).send("cant delete")
}
    }catch(error){
    return res.status(404).send("something went wrong"+error)

    }
}

export async function findonedata(req, res) {
    const { id } = req.body;

    try {
        const data = await userschema.find({_id:id})
if(data){
    return res.status(200).send({data})
}else{
    return res.status(404).send("cant find data")
}
    }catch(error){
    return res.status(404).send("something went wrong"+error)

    }
}