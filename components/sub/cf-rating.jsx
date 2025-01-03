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
    <div className="">
      {loading ? (
        <div className="h-[300px] flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <h1 className="text-[12px] lg:text-right mb-2">
            Problem Solving Rating Progress on Codeforces
          </h1>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={ratingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="contest"
                  label={{
                    value: "Contest",
                    position: "insideBottom",
                    offset: -5,
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
