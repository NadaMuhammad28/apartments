import { Request, Response } from 'express';
import ApartmentModel from '../models/apartment.model';
import { Apartment } from '../interfaces/apartment.interface';

class ApartmentController {
  // API endpoint for adding an apartment
  static addApartment = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, location, price, description } = req.body;

      const apartmentId = await ApartmentModel.addApartment({ name, location, price, description });
      res.status(201).json({ success: true, apartmentId });
    } catch (e) {
      console.error('Error adding apartment:', e);
      res.status(500).json({ success: false, error: 'Failed to add apartment' });
    }
  };

  // API endpoint for listing all apartments
  static getAllApartments = async (req: Request, res: Response): Promise<void> => {
    try {
      const apartments: Apartment[] = await ApartmentModel.getAllApartments();
      res.status(200).json({ success: true, data:apartments });
    } catch (e) {
      console.error('Error fetching apartments:', e);
      res.status(500).json({ success: false, error: 'Failed to fetch apartments' });
    }
  };

  // API endpoint for getting apartment details by ID
  static getApartmentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const apartmentId = parseInt(req.params.id, 10);

      // Validate that apartmentId is a valid number
      if (isNaN(apartmentId)) {
        res.status(400).json({ success: false, message: 'Invalid apartment ID' });
        return;
      }

      const apartment: Apartment | undefined = await ApartmentModel.getApartmentById(apartmentId);

      if (apartment) {
        res.status(200).json({ success: true,data: apartment });
      } else {
        res.status(404).json({ success: false, message: 'Apartment not found' });
      }
    } catch (e) {
      console.error(`Error fetching apartment with ID ${req.params.id}:`, e);
      res.status(500).json({ success: false, error: 'Failed to fetch apartment' });
    }
  };
}

export default ApartmentController;
