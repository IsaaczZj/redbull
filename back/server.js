import express from 'express'

const port = 3333
const app = express()


app.get('/',(req,res) => {
  
})

app.listen(port,()=>{
  console.log('Server running')
})