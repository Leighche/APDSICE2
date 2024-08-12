import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

// Example route using bcrypt
router.post('/hash', async (req, res) => {
    const { password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        res.json({ hashedPassword });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

export default router;
