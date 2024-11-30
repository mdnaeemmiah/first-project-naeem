import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema= new Schema<UserName>({
    firstName:{
        type:String,
        require:true,
    },
    middleName:{
        type:String,
    },
    lastName:{
        type:String,
        require:true,
    },
},)

const guardianSchema= new Schema<Guardian>(
    {
        fatherName:{type:String ,required:true},
        fatherOccupation:{type:String ,required:true},
        fatherContactNo:{type:String ,required:true},
        motherName:{type:String ,required:true},
        motherOccupation:{type:String ,required:true},
        motherContactNo:{type:String ,required:true},
    }
)

const localSchema = new Schema<LocalGuardian>(
    {
        name:{type:String ,required:true},
        occupation:{type:String ,required:true},
        contactNo:{type:String ,required:true},
        address:{type:String ,required:true},
    }
)


const studentSchema= new Schema<Student>({
    id:{type:String },
    name:userNameSchema,
    gender:["male" ,"female"],
    dateOfBirth:{type:String },
    email:{type:String ,required:true},
    contactNo:{type:String ,required:true},
    emergencyContactNo:{type:String ,required:true},
    bloodGroup:["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    presentAddress:{type:String ,required:true},
    permanentAddress:{type:String ,required:true},
    guardian:guardianSchema,
    localGuardian:localSchema,
    profileImg:{type:String},
    isActive:['active','blocked']
})


export const StudentModel = model<Student>("Student",studentSchema);