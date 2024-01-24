import { Router } from "express";
import { createEmployees, deleteEmployees, getEmployees, updateEmployees, getEmployee } from "../controllers/employees.controller.js";

const router = Router()

router.get('/api/employees', getEmployees)
router.get('/api/employees/:id', getEmployee)
router.post('/api/employees', createEmployees)
router.delete('/api/employees/:id', deleteEmployees)
router.patch('/api/employees/:id', updateEmployees)
export default router