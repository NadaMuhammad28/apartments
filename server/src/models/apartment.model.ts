import db from '../config/db';
import moment from 'moment';
import { Apartment } from '../interfaces/apartment.interface';
import { RowDataPacket, OkPacket } from 'mysql2';

class ApartmentModel {
  // Method to add a new apartment
  static addApartment = async (apartment: { name: string; location: string; price: number; description: string; }): Promise<number> => {
    const { name, location, price, description } = apartment;
    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    const query = 'INSERT INTO Apartment (name, location, price, description, createdAt) VALUES (?, ?, ?, ?, ?)';

    try {
      const [result] = await db.query<OkPacket>(query, [name, location, price, description, createdAt]);
      return result.insertId;
    } catch (error) {
      console.error('Error adding apartment:', error);
      throw new Error('Failed to add apartment');
    }
  };

  // Method to get all apartments
  static getAllApartments = async (): Promise<Apartment[]> => {
    try {
      const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Apartment');
      return rows as Apartment[];
    } catch (error) {
      console.error('Error fetching apartments:', error);
      throw new Error('Failed to fetch apartments');
    }
  };

  // Method to get a single apartment by ID
  static getApartmentById = async (id: number): Promise<Apartment> => {
    try {
      const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Apartment WHERE id = ?', [id]);
      if (rows.length === 0) {
        throw new Error('Apartment not found');
      }
      return rows[0] as Apartment;
    } catch (error) {
      console.error(`Error fetching apartment with id ${id}:`, error);
      throw new Error('Failed to fetch apartment');
    }
  };
}

export default ApartmentModel;
