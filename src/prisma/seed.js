const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");

// create PrismaClient instance
const prisma = new PrismaClient();

export default async function submitForm(formData) {
  try {
    const { model, date, licenseLevel, quantity, comment } = formData;

    // Create a new entry in the batches table
    const newBatch = await prisma.batches.create({
      data: {
        model: model,
        date: new Date(date),
        license_level: licenseLevel,
        quantity: quantity,
        comment: comment,
      },
    });

    // Generate unique serial numbers
    const serialNumbers = Array.from({ length: quantity }, () => uuidv4());

    // Open transaction, perform multiple operations atomically
    await prisma.$transaction(
      serialNumbers.map((serialNumber) =>
        prisma.machine_numbers.create({
          data: {
            serial_number: serialNumber,
            batch: {
              connect: {
                id: newBatch.id,
              },
            },
          },
        })
      )
    );

    return newBatch;
    
  } catch (error) {
    throw new Error(`Failed to submit form: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}
