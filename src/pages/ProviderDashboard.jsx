import React from "react";

const ProviderDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Your Provider Dashboard</h2>
      <p className="text-sm text-gray-600 mb-6">
        Welcome back! View stats for your registered devices, network uptime, and rewards.
      </p>

      {/* Placeholder card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-lightgray rounded-xl p-4 shadow-sm">
          <h4 className="font-bold text-buddyblue">Total Devices</h4>
          <p className="text-2xl mt-1">3</p>
        </div>
        <div className="bg-lightgray rounded-xl p-4 shadow-sm">
          <h4 className="font-bold text-buddyblue">Uptime</h4>
          <p className="text-2xl mt-1">98.7%</p>
        </div>
        <div className="bg-lightgray rounded-xl p-4 shadow-sm">
          <h4 className="font-bold text-buddyblue">Rewards Earned</h4>
          <p className="text-2xl mt-1">452 $BUDDY</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
