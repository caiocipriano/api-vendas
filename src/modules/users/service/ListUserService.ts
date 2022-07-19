import express,{ Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import AppError from '@shared/errors/AppError';

const app = express()
app.use(express.json())
const prisma = new PrismaClient()

class ListUserService{
    public async execute(request:Request, response:Response){
        const users = await prisma.user.findMany()
        return response.json(users)
    }
}

export default ListUserService