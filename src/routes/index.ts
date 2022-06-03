import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.render('index', {
    title: 'Home',
  })
})
router.get('/services', (_, res) => {
  res.render('services', {
    title: 'Services',
  })
})
router.get('/projects', (_, res) => {
  res.render('projects', {
    title: 'Projects',
  })
})
router.get('/blog', (_, res) => {
  res.render('blog', {
    title: 'Blog',
  })
})
router.get('/contact', (_, res) => {
  res.render('contact', {
    title: 'Contact',
  })
})

export default router
