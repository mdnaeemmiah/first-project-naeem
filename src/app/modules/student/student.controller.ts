import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async(req:Request,res:Response)=>{
    try{
      const {student:studentData} =req.body;
       const result =await StudentServices.createStudentIntoDB(studentData);
  
      res.status(200).json({
          success:true,
          message:"student is created successfully",
          data:result,
      })
    }catch(err){
      console.log(err);
    }
  }
const getAllStudents = async(req:Request,res:Response)=>{
    try{
       const result =await StudentServices.getAllStudentIntoDB();
  
      res.status(200).json({
          success:true,
          message:"student are retrieved successfully",
          data:result,
      })
    }catch(err){
      console.log(err);
    }
  }
const getSingleStudents = async(req:Request,res:Response)=>{
    try{
        const {studentId} =req.params
       const result =await StudentServices.getSingleStudentIntoDB(studentId);
  
      res.status(200).json({
          success:true,
          message:"student is retrieved successfully",
          data:result,
      })
    }catch(err){
      console.log(err);
    }
  }

  export const StudentControllers ={
    createStudent,
    getAllStudents,
    getSingleStudents
}