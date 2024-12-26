import { Router } from 'express';
import { SendEmailController } from '../controllers/SendEmailController';

const router = Router();

// Ruta de ejemplo
router.post('/sendEmail', SendEmailController.postSendEmail);

export default router;
