/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(()=>{

  Route.get('token', async ({ auth,response}) => {
    await auth.use('api').authenticate()
    return response.created({
      resp:"activo",
      data:auth.user
    })
  })
  Route.get('/sesion','SesionsController.index');

  Route.get('/TEM_AIRE','Temperatura_aireController.index');
  Route.get('/TEM_AIRES','Temperatura_aireController.todo');
  Route.post('/TEM_AIRE','Temperatura_aireController.store');
  Route.delete('/TEM_AIRE/:_id','Temperatura_aireController.destroy');
  Route.get('/TEM_AIRE/:_id','Temperatura_aireController.show');
  Route.put('/TEM_AIRE/:id','Temperatura_aireController.update');
  
  Route.get('/NFC','NFCController.index');
  Route.get('/NFCS','NFCController.todo');
  Route.post('/NFC','NFCController.store');
  Route.delete('/NFC/:id','NFCController.destroy');
  Route.get('/NFC/:id','NFCController.show');
  Route.put('/NFC/:id','NFCController.update');
  
  Route.get('/HUM_AIRE','Humedad_aireController.index');
  Route.get('/HUM_AIRES','Humedad_aireController.todo');
  Route.post('/HUM_AIRE','Humedad_aireController.store');
  Route.delete('/HUM_AIRE/:_id','Humedad_aireController.destroy');
  Route.get('/HUM_AIRE/:_id','Humedad_aireController.show');
  Route.put('/HUM_AIRE/:id','Humedad_aireController.update');
  
  Route.get('/HUM_SUELO','Humedad_sueloController.index');
  Route.get('/HUM_SUELOS','Humedad_sueloController.todo');
  Route.post('/HUM_SUELO','Humedad_sueloController.store');
  Route.delete('/HUM_SUELO/:_id','Humedad_sueloController.destroy');
  Route.get('/HUM_SUELO/:_id','Humedad_sueloController.show');
  Route.put('/HUM_SUELO/:id','Humedad_sueloController.update');
  
  Route.get('/CONTACTO','ContactoController.index');
  Route.post('/CONTACTO','ContactoController.store');
  Route.delete('/CONTACTO/:_id','ContactoController.destroy');
  Route.get('/CONTACTO/:_id','ContactoController.show');
  Route.put('/CONTACTO/:id','ContactoController.update');

  
 
}).middleware('auth')
Route.post('/login','AuthController.login')
Route.post('/register','AuthController.register')
