const API="http://localhost:5000"

async function submitRitase(){

const data={
taskId:document.getElementById("taskId").value,
unitId:document.getElementById("unitId").value,
operator:document.getElementById("operator").value,
shift:document.getElementById("shift").value,
ritaseTime:new Date()
}

await fetch(API+"/ritase",{

method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify(data)

})

alert("Ritase submitted")

}

// const API="http://localhost:5000"

// async function createUser(){

// const data={
// fullname:document.getElementById("name").value,
// email:document.getElementById("email").value,
// phoneNumber:document.getElementById("phone").value,
// role:"operator",
// status:"active"
// }

// await fetch(API+"/users",{
// method:"POST",
// headers:{'Content-Type':'application/json'},
// body:JSON.stringify(data)
// })

// alert("User created")
// }

// async function createUnit(){

// const data={
// unitCode:document.getElementById("unitCode").value,
// unitType:document.getElementById("unitType").value,
// status:"active"
// }

// await fetch(API+"/units",{
// method:"POST",
// headers:{'Content-Type':'application/json'},
// body:JSON.stringify(data)
// })

// alert("Unit created")
// }

// async function submitRitase(){

// const data={
// taskId:document.getElementById("taskId").value,
// unitId:document.getElementById("unitId").value,
// driver:document.getElementById("driver").value,
// createdAt:new Date()
// }

// await fetch(API+"/ritase",{
// method:"POST",
// headers:{'Content-Type':'application/json'},
// body:JSON.stringify(data)
// })

// alert("Ritase submitted")
// }