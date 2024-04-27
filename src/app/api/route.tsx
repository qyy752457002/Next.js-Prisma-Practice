import submitForm from "@/prisma/seed"

export async function POST(req: Request) {
    try {

      // Parse the request body as JSON
      const data = await req.json();

      console.log('Form data:', data);

      // Process the form data as needed
      const result = await submitForm(data);
      
      // Return a JSON response with the result
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error processing form submission:', error);
      return new Response(JSON.stringify({ error: 'Failed to process form submission' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
}