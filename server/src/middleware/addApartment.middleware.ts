import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const apartmentValidationRules: ValidationChain[] = [
  check('name')
    .notEmpty()
    .withMessage('Name is required'),
  check('location')
    .notEmpty()
    .withMessage('Location is required'),
  check('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be a positive number'),
  check('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
];

// Middleware to check validation results
const validateApartment = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

export { apartmentValidationRules, validateApartment };
