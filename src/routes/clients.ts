import { Router } from 'express'
import { ClientController } from '../controllers'

const router = Router()

router.get('/', async (_, res) => {
  const clients = await ClientController.getAllClients()

  res.render('clients', {
    title: 'Clients',
    clients: clients
  })
})

router.get('/create', (_, res) => {
  res.render('create_client', {
    title: 'Create Client'
  })
})

router.post('/new', async (req, res) => {
  const response = await ClientController.createNewUser({name: req.body.name, email: req.body.email, direction: req.body.direction, phone: req.body.phone})

  if (response) {
    res.redirect('/client')
  } else {
    res.redirect('/client/create')
  }
})

router.get('/edit', async (req, res) => {
  const {id} = req.query
  const response = await ClientController.getClientById(String(id))

  res.render('edit_client', {
    title: 'Edit Client',
    client: response
  })
})

router.post('/change', async (req, res) => {
  const {id, name, email, direction, phone} = req.body

  const response = await ClientController.updateClient(String(id), {name, email, direction, phone})

  if (response) {
    res.redirect('/client')
  } else {
    res.redirect('/client/edit?id=' + id)
  }
})

router.get('/remove', async (req, res) => {
  const { id } = req.query

  await ClientController.deleteClient(String(id))

  res.redirect('/client')
})

export default router;
