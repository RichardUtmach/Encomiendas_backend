import { Router } from 'express';
import { deleteCamion, getCamion, getCamiones, postCamion, updateCamion } from '../controllers/camion';

const router = Router();

router.get('/', getCamiones);
router.get('/:id', getCamion);
router.delete('/:id', deleteCamion);
router.post('/', postCamion);
router.put('/:id', updateCamion);

export default router;