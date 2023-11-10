-- CreateTable
CREATE TABLE "Payment" (
    "Id" SERIAL NOT NULL,
    "Description" VARCHAR(200) NOT NULL,
    "PaymentDate" DATE NOT NULL,
    "CharPaymentType" VARCHAR(1) NOT NULL,
    "PaymentValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PK_Payments" PRIMARY KEY ("Id")
);
