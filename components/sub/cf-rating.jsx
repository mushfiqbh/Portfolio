"use client";

import React, { useEffect, useState } from "react";
import { CircularProgress, Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CodeforcesRating() {
  const handle = "mushfiqbh";
  const [ratingsData, setRatingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCodeforcesData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        return data.result;
      } else {
        console.error("Error fetching Codeforces data:", data.comment);
        return [];
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      return [];
    }
  };

  const fetchRatings = async () => {
    const url = `https://codeforces.com/api/user.rating?handle=${handle}`;
    const data = await fetchCodeforcesData(url);
    const formattedData = data.map((entry, index) => ({
      contest: index + 1,
      rating: entry.newRating,
    }));
    setRatingsData(formattedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchRatings();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-[300px] flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <h1 className="text-[12px] mb-2">
            My Problem Solving Rating Progress on Codeforces
          </h1>
          <Paper elevation={3} sx={{ pt: 2, pb: 1, pr: 2, pl: 1 }}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={ratingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="contest"
                  label={{
                    value: "Contest",
                    position: "insideBottom",
                    offset: -4,
                  }}
                />
                <YAxis
                  label={{
                    value: "Rating",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="rating"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </>
      )}
    </div>
  );
}
