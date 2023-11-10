import { Prisma } from "@prisma/client";

export class Payment implements Prisma.PaymentCreateInput{
    Id: number;
    Description: string;
    PaymentDate: Date;
    CharPaymentType: string;
    PaymentValue: number;
}