import React from "react";

const AdminPanel = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <p className="mb-2 text-sm text-gray-600">
        Here you can approve or reject node registrations, monitor network activity, and manage flagged devices.
      </p>

      {/* Placeholder table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Device Name</th>
              <th className="p-2">Type</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">calm-sky-goose</td>
              <td className="p-2">Access Node</td>
              <td className="p-2 text-green-600 font-medium">Online</td>
              <td className="p-2">
                <button className="text-sm text-blue-600 hover:underline mr-2">Approve</button>
                <button className="text-sm text-red-600 hover:underline">Reject</button>
              </td>
            </tr>
            {/* More rows can be added dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
