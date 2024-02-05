import express from 'express';
import register from '../controllers/register.js';

const router = express.Router();

router.get('/health', (req, res) => {
    res.send('Hello, world!');
});

router.post('/register', register.create);

router.get('/register', (req, res) => {
    res.send('Register page');
});


export default router;
