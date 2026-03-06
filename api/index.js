const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333

// habilita CORS para todas as origens
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.json({ message: 'API do Curso Ninja do Cypress' })
})

app.post('/api/users/register', (req, res) => {

    const { name, email, password } = req.body

    if (!name) {
        return res.status(400).json({ error: 'Nome é obrigatorio!' })

    }
    if (!email) {
        return res.status(400).json({ error: 'Email é obrigatorio!' })

    }
    if (!password) {
        return res.status(400).json({ error: 'Senha é obrigatoria!' })

    }

    console.log(req.body)
    return res.status(201).json({ message: 'Usuario cadastrado com sucesso!!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
