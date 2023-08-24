import { PrismaClient } from "@prisma/client";

import { H3Event } from 'h3';

// @ts-ignore
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export default defineEventHandler(async (event: H3Event) => {
    try {

        const { name, email, password } = await readBody(event);

        console.log(name, email, password);

        if (!email || !name || !password) {

            throw createError({
                statusCode: 500,
                statusMessage: 'Missing Info'
            })




        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                hashedPassword,
                name
            }
        })

        return { user }


    } catch (error) {


        throw createError({
            statusCode: 500,
            statusMessage: 'Something Went Wrong'
        })


    }
})