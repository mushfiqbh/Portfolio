"use client";

import React, { useEffect, useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { CircularProgress, Tooltip } from "@mui/material";

export default function CodeforcesHeatmap() {
  const handle = "mushfiqbh";
  const [heatmapData, setHeatmapData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch submissions from Codeforces API
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

  // Aggregate submissions by date
  const aggregateSubmissionsByDate = (submissions) => {
    const counts = {};
    submissions.forEach((submission) => {
      const date = new Date(submission.creationTimeSeconds * 1000)
        .toISOString()
        .split("T")[0];
      counts[date] = (counts[date] || 0) + 1;
    });
    return Object.entries(counts).map(([date, count]) => ({
      date,
      count,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const submissions = await fetchCodeforcesData(
        `https://codeforces.com/api/user.status?handle=${handle}`
      );
      const aggregatedData = aggregateSubmissionsByDate(submissions);
      setHeatmapData(aggregatedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Calculate dynamic startDate for the last 12 months
  const calculateStartDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    date.setDate(1);
    return date;
  };

  return (
    <div className="">
      <h1 className="text-[12px] lg:text-right">Codeforces Submission Heatmap</h1>
      {loading ? (
        <div className="h-[300px] flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <HeatMap
          width="100%"
          value={heatmapData}
          startDate={new Date("2024-03-01")}
          endDate={new Date()}
          rectSize={10}
          space={4}
          legendCellSize={0}
          panelColors={{
            0: "#e0e0e0",
            2: "#add8e6",
            5: "#4b96dd",
            10: "#003366",
          }}
          rectProps={{
            rx: 3,
          }}
          rectRender={(props, data) => (
            <Tooltip
              title={`${data.date}: ${data.count || 0} submissions`}
              arrow
            >
              <rect {...props} />
            </Tooltip>
          )}
        />
      )}
    </div>
  );
}
