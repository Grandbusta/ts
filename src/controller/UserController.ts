import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

class UserController {
   static all= async(request: Request, response: Response, next: NextFunction)=> {
        const userRepository = getRepository(User);
        const allUsers=await userRepository.find()
        response.status(200).json({success:true,data:allUsers})
    }
}

export default UserController