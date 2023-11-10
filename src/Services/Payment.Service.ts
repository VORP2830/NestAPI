import { Payment } from './../Entities/Payment.Module';
import { PrismaService } from "src/prisma.Service";

export class PaymentService {
    constructor(private prisma: PrismaService) { }

    async getAllPayments(): Promise<Payment[]> {
        return await this.prisma.payment.findMany();
    }

    async getById(id: number): Promise<Payment> {
        return await this.prisma.payment.findUnique({ where: { Id: Number(id) } });
    }

    async createPayment(data: Payment): Promise<Payment> {
        return await this.prisma.payment.create({
            data
        });
    }

    async updatePayment(data: Payment): Promise<Payment> {
        return await this.prisma.payment.update({
            where: { Id: Number(data.Id) },
            data: {
                Description: data.Description,
                PaymentDate: data.PaymentDate,
                CharPaymentType: data.CharPaymentType,
                PaymentValue: data.PaymentValue,
            }
        });
    }

    async deletePayment(id: number): Promise<Payment> {
        return await this.prisma.payment.delete({ where: { Id: Number(id) } });
    }
}