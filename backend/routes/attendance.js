import express from 'express';
const router=express.Router()
import {addAttendanceByTeacher} from '../controllers/attendance.js'
import {checkTeacher,protect} from '../middlewares/setAuthToken.js'
router.route("/takeattendance").post(protect,checkTeacher,addAttendanceByTeacher)
export default router;