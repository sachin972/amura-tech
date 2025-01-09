// interface PopupProps {
//     onClose: () => void;
//   }
  import React from "react";
  export default function Popup({ onClose }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form Submitted");
      onClose();
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Company Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="mt-4 text-red-600 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  