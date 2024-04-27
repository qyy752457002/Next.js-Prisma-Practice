"use client";
import { useState, FormEvent } from "react";

const Home = () => {
  // Form state
  const [model, setModel] = useState<string>("");
  const [date, setDate] = useState<string>(""); // State for the date picker
  const [licenseLevel, setLicenseLevel] = useState<string>("0"); // Default to 0
  const [quantity, setQuantity] = useState<number>(1); // Default to 1
  const [comment, setComment] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Construct the form data object
    const formData = {
      model,
      date, // Include the date in the formData
      licenseLevel: parseInt(licenseLevel, 10),
      quantity,
      comment,
    };

    // TODO: Perform the form submission to your backend
    console.log("Form Data:", formData);
    // You can use fetch or axios to send the data to your API
    try {
      // send POST request to your API
      const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className=" bg-black p-4 rounded w-full max-w-screen-md">
        <form
          onSubmit={handleSubmit}
          className=" bg-black border-2 border-brown-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Label */}
          <div className="mb-6">
            <label
              className="block text-white text-lg font-bold mb-2"
              htmlFor="model"
            >
              Batch Form
            </label>
          </div>

          {/* Model Dropdown */}
          <div className="mb-4">
            <select
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a Model</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
              <option value="Model 3">Model 3</option>
            </select>
          </div>

          {/* Date Picker Input */}
          <div className="mb-4">
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Quantity Input */}
          <div className="mb-4">
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Quantity"
            />
          </div>

          {/* License Level Dropdown */}
          <div className="mb-4">
            <select
              id="license"
              value={licenseLevel}
              onChange={(e) => setLicenseLevel(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">License Level</option>
              <option value="0">License 0</option>
              <option value="1">License 1</option>
              <option value="2">License 2</option>
              <option value="3">License 3</option>
              <option value="4">License 4</option>
              <option value="5">License 5</option>
              <option value="6">License 6</option>
              <option value="7">License 7</option>
              <option value="8">License 8</option>
              <option value="9">License 9</option>
            </select>
          </div>

          {/* Comment Input */}
          <div className="mb-4">
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Comment (Not required)"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-yellow-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" // `w-full` makes the button full width
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
