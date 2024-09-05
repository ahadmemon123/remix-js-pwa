// app/routes/battery.jsx

import { useEffect, useState } from "react";

export default function BatteryStatus() {
  const [battery, setBattery] = useState({
    level: 1,
    charging: false,
  });

  useEffect(() => {
    const updateBatteryStatus = (batteryManager) => {
      setBattery({
        level: batteryManager.level,
        charging: batteryManager.charging,
      });
    };

    const getBatteryStatus = async () => {
      try {
        const batteryManager = await navigator.getBattery();
        updateBatteryStatus(batteryManager);

        // Set event listeners to update battery info dynamically
        batteryManager.onlevelchange = () => updateBatteryStatus(batteryManager);
        batteryManager.onchargingchange = () => updateBatteryStatus(batteryManager);
      } catch (error) {
        console.error("Battery Status API not supported:", error);
      }
    };

    getBatteryStatus();
  }, []);

  return (
    <div className="battery-status">
      <h2>Battery Status</h2>
      <p>Battery Level: {(battery.level * 100).toFixed(0)}%</p>
      <p>{battery.charging ? "Charging" : "Not Charging"}</p>
    </div>
  );
}
