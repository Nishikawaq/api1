import express from 'express'

const app = express()

app.listen(3030, ()=>{
    console.log('Abertinho hel yeahhhhh ')
})

app.get('/', (req, res)=>{
    res.send('Oi🤗')
})

app.get('/soma', (req,res)=>{
    const n1 = Number(req.query.n1)
    const n2 = Number(req.query.n2)

    const soma = n1 + n2

    res.status(200).send('a' + soma)
})