import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from "next/server";

async function main() {
    try {
        await prisma.$connect();
    } catch (err) {
        return Error("Database Connection Unsuccessful");
    }
}

export async function GET(request: NextRequest) {
    try {
        await main()
        const users = await prisma.users.findMany({
            orderBy: {
                createdAt: 'asc',
            },
            select: {
                id: true,
                username: true,
                password: false,
                createdAt: true
            }
        })
        return NextResponse.json({ message: "Success", data: users }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(request: NextRequest) {
    try {
        const {
            username,
            password,
        } = await request.json()
        await main();
        const postData = await prisma.users.create({
            data: {
                username,
                password,
            }
        })
        return NextResponse.json({ message: "Success", data: postData }, { status: 201 });
    } catch (err: any) {
        if (err.code === "P2002") {
            return NextResponse.json({ message: "Title or Slug is exist." }, { status: 500 });
        }
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}