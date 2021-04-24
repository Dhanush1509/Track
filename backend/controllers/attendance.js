import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Attendance from "../models/Attendance.js";
import dotenv from "dotenv";

const addAttendanceByTeacher=asyncHandler(async(req,res)=>{
    console.log("Hi")
const markAttendance = new Attendance();
markAttendance.addAttendance(req.user._id,req.body.presentees,req.body.absentees)
await markAttendance.save();
})
export {addAttendanceByTeacher}