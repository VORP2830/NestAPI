import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private readonly prisma = new PrismaClient();
    
    async onModuleInit() {
        await this.prisma.$connect();
    }

    async onModuleDestroy() {
        await this.prisma.$disconnect();
    }
}
