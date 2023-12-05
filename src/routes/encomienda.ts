import { Router } from 'express';
import { deleteEncomienda, getEncomienda, getEncomiendas, postEncomienda, updateEncomienda } from '../controllers/encomienda';

const router = Router();

router.get('/', getEncomiendas);
router.get('/:id', getEncomienda);
router.delete('/:id', deleteEncomienda);
router.post('/', postEncomienda);
router.put('/:id', updateEncomienda);

export default router;