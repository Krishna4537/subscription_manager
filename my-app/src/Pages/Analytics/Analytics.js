import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import "./Analytics.css";

const Analytics = () => {
  const [content, setContent] = useState(null);
  const [xAxisKey, setXAxisKey] = useState("name");
  const [yAxisKey, setYAxisKey] = useState("plan.price");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Assets/data.json");
      setContent(response.data.user.apps);
      setXAxisKey("name");
      setYAxisKey("plan.price");
      console.log(response.data.user.apps);
    };
    fetchData();
  }, []);

  const handleXAxisChange = (event) => {
    setXAxisKey(event.target.value);
  };

  const handleYAxisChange = (event) => {
    setYAxisKey(event.target.value);
  };

  const options = [
    { value: "name", label: "App Name" },
    { value: "subscription.status", label: "Status" },
    { value: "plan.price", label: "Price" },
    { value: "catagories", label: "catagories" },
    { value: "subscription.Duration", label: "Duration" },
  ];

  return (
    <div className="analyticsContent">
      <div className="analyticsFilters">
        <div>
          X-Axis:{" "}
          <select value={xAxisKey} onChange={handleXAxisChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          Y-Axis:{" "}
          <select value={yAxisKey} onChange={handleYAxisChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {content && (
        <ResponsiveContainer width="95%" height={450}>
          <BarChart
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            data={content}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={yAxisKey} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Analytics;
