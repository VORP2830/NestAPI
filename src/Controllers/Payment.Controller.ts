import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Payment } from "src/Entities/Payment.Model";
import { PaymentService } from "src/Services/Payment.Service";

@Controller('api/v1/payment')
export class PaymentController{
    constructor(private readonly paymentService: PaymentService) {}

    @Get()
    async getAllPayments(): Promise<Payment[]>{
        return await this.paymentService.getAllPayments();
    }
    @Get(":id")
    async getById(id: number): Promise<Payment>{
        return await this.paymentService.getById(id);
    }
    @Post()
    async createPayment(@Body() model: Payment): Promise<Payment>{
        return await this.paymentService.createPayment(model);
    }
    @Put()
    async updatePayment(@Body() model: Payment): Promise<Payment>{
        return await this.paymentService.updatePayment(model);
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<Payment> {
    return await this.paymentService.deletePayment(id);
    }
}