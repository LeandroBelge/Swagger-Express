const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        infor: {
            title: 'Swagger API',
            description: "Teste de documentação de API com Swagger",
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["app.js"]
} 

const swaggerDocs = swaggerJsDoc(swaggerOptions)


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
//Rotas
  /** 
   *  @swagger
   * /:
   *  get:
   *    description: Utilize request iniciar a aplicação 
   *    responses: 
   *      '200':
   *         description: Sucesso 
  */
app.get('/', (req, res) => {
    res.send('Aplicação rodando')
})
/** 
 *  @swagger
 * /usuarios:
 *  get:
 *    description: Utilize request para recuperar usuarios 
 *    responses: 
 *      '200':
 *         description: Sucesso 
*/
app.get('/usuarios', (req, res) => {
    res.status(200).send('Resultado de usuários')
})
/** 
 *  @swagger
 * /usuario:
 *  put:
 *    description: Utilize request para alterar um usuario 
 *    responses: 
 *      '201':
 *         description: Sucesso 
*/
app.put('/usuario', (req, res) => {
    res.status(201).send('Usuário alterado')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})