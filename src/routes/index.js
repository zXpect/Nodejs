import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.get('/pag2', (req, res) => res.render('pag2'));

export default router;