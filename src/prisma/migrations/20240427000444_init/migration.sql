-- CreateTable
CREATE TABLE "batches" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "license_level" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine_numbers" (
    "id" SERIAL NOT NULL,
    "serial_number" TEXT NOT NULL,
    "batch_id" INTEGER NOT NULL,

    CONSTRAINT "machine_numbers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "machine_numbers_serial_number_key" ON "machine_numbers"("serial_number");

-- AddForeignKey
ALTER TABLE "machine_numbers" ADD CONSTRAINT "machine_numbers_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "batches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
