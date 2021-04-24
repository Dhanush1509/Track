import mongoose from "mongoose";
let AttendanceSchema = new mongoose.Schema({
  attendance: [
    {
      teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      TakenAt: {
        type: Date,
        default: Date.now(),
        required: true,
      },
      presentees: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      absentees: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  ],
},{timestamps:true});
AttendanceSchema.methods.addAttendance=function(a,b,c){
  console.log("Hin")

  this.attendance.push
  (
    {teacher:a,
      presentees:[...b],absentees:[...c]
})
 
  

}
const Attendance = mongoose.model("Attendance", AttendanceSchema);
export default Attendance;
