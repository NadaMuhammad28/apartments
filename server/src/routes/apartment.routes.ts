import { Router } from 'express';
import ApartmentController from '../controllers/apartment.controller'
import { apartmentValidationRules, validateApartment } from '../middleware/addApartment.middleware';

const router = Router();

router.get('', ApartmentController.getAllApartments);
router.post('/add', apartmentValidationRules, validateApartment,  ApartmentController.addApartment);
router.get('/:id', ApartmentController.getApartmentById);

export default router;
