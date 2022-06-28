

const express = require('express')
const app = express()
const port = 8080;

app.use(express.static(__dirname+"/public"))
app.get("/",(req,res)=>{
    // res.sendFile("./public/index.html")
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})





// const express = require('express')
// const app = express()
// const port = 8080;
// const axios = require('axios')
// app.use(express.static(__dirname+"/public"))

app.use((req,res,next)=>{
    console.log("global middle ware")
    next()
})
app.get("/",(req,res)=>{
    // res.sendFile("./public/index.html")
    // res.sendFile(`${__dirname}/public/index.html`)
    res.send("Welcome to express js ")
})
app.get("/user",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        res.json(response.data)
    }).catch((err)=>{
        res.json(err)
    })
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



// callback function - is a function which is sent an argument 
// and it executed after completion of an async operation


setTimeout(() => {
    console.log("time out execute after 2 second ")
}, 2000);



// callback hell
setTimeout(() => {
    console.log("time out execute after 3 second ")
    setTimeout(()=>{
        console.log("second time out executed after 1 second ")
    },1000)
}, 3000);



setTimeout(() => {
    console.log("time out execute after 3 second ")
    setTimeout(()=>{
        console.log("second time out executed after 1 second ")
        setTimeout(()=>{
            console.log("third timeout executed after 0.5 second ")
        },500)
    },1000)
}, 3000);





const axios = require('axios')
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response.data)
})



const axios = require('axios')
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response.data)
    return "random data "
}).then((response1)=>{
    console.log("response1 " + response1)
})


const axios = require('axios')
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response.data)
    return "random data "
}).then((response1)=>{
    console.log("response1 " + response1)
}).catch((err)=>{
    console.log(err);
})


function getData(){
    return new Promise((resolve,reject)=>{

    })
}
console.log(getData())



function getData(second){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`user data after ${second} seconds `)
        },second * 1000)
    })
}
console.log(getData(3))



function getData(second){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`user data after ${second} seconds `)
        },second * 1000)
    })
}
getData(3)
.then((response)=>{
    console.log(response)
})





function getData(second){
    return new Promise((resolve,reject)=>{

        if(second > 5){
            reject(`pormise is rejected because time taken is more than 5 second `)
        }
        setTimeout(()=>{
            resolve(`user data after ${second} seconds `)
        },second * 1000)
    })
}
getData(8)
.then((response)=>{
    console.log(response)
})




function getData(second){
    return new Promise((resolve,reject)=>{

        if(second > 5){
            reject(`pormise is rejected because time taken is more than 5 second `)
        }else{
            setTimeout(()=>{
                resolve(`user data after ${second} seconds `)
            },second * 1000)
        }     
    })
}
getData(5)
.then((response)=>{
    console.log(response)
})




function getData(second){
    return new Promise((resolve,reject)=>{

        if(second > 5){
            reject(`pormise is rejected because time taken is more than 5 second `)
        }else{
            setTimeout(()=>{
                resolve(`user data after ${second} seconds `)
            },second * 1000)
        }     
    })
}
getData(6)
.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(`failure response ${err}`)
})

getData(2)



function getData(second){
    return new Promise((resolve,reject)=>{
        if(second > 5){
            reject(`pormise is rejected because time taken is more than 5 second `)
        }else{
            setTimeout(()=>{
                resolve(`user data after ${second} seconds `)
            },second * 1000)
        }     
    })
}
getData(2)
.then((response)=>{
    console.log(response)
    getData(3)
}).then((response1)=>{
    console.log('promise 2 is resolved '+response1)
})
.catch((err)=>{
    console.log(`failure response ${err}`)
})

getData(7)

getData(2)
.then((response)=>{
    console.log(response)
    getData(8)
}).then((response1)=>{
    console.log('promise 2 is resolved '+response1)
})
.catch((err)=>{
    console.log(`failure response ${err}`)
})

getData(2)
.then((response)=>{
    console.log(response)
return    getData(8)
}).then((response1)=>{
    console.log('promise 2 is resolved '+response1)
})
.catch((err)=>{
    console.log(`failure response ${err}`)
})



getData(2)
.then((response)=>{
    console.log(response)
return    getData(1)
}).then((response1)=>{
    console.log('promise 2 is resolved '+response1)
    return getData(0.5)
}).then((response2)=>{
    console.log(response2)
})
.catch((err)=>{
    console.log(`failure response ${err}`)
})

