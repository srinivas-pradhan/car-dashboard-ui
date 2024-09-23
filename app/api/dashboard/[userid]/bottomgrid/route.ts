import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET (
    req: Request,
    context: any
 ) {

    const { params } = context;
    
    try {
        const { userId } = auth();
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }
        if(!params.userid){
            return new NextResponse("UserId is required", { status: 400 });
        }
        const dashboard_utility = await prismadb.CarRecommendations.findUnique({
            where: {
                Userid: params.userid
            }
        })
        return NextResponse.json(dashboard_utility);

    } catch (error) {
        console.log(error)
        if (error.code === 'P5003') {
            return new NextResponse("Failed - Not Found", { status: 404 });
        }
        else {
            return new NextResponse("Internal Server Error", { status: 500 });
        }
    }

}
