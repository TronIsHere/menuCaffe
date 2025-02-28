"use client";

import React, { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { motion } from "framer-motion";

// Enhanced chart data with the same values
const chartData = [
  { month: "فروردین", views: 266 },
  { month: "اردیبهشت", views: 505 },
  { month: "خرداد", views: 357 },
  { month: "تیر", views: 263 },
  { month: "مرداد", views: 339 },
  { month: "شهریور", views: 354 },
  { month: "مهر", views: 410 },
  { month: "آبان", views: 295 },
  { month: "آذر", views: 378 },
  { month: "دی", views: 422 },
  { month: "بهمن", views: 310 },
  { month: "اسفند", views: 460 },
];

// Updated chart config with gradient colors
const chartConfig = {
  views: {
    label: "بازدید کل",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

const EnhancedChart = () => {
  const [animatedData, setAnimatedData] = useState<
    Array<{ month: string; views: number }>
  >([]);

  // Animation effect that gradually fills in the data
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(chartData);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4 w-full mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-darkSecondary rounded-xl p-6 border shadow-xl"
      >
        <div className="mt-3">
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ComposedChart data={animatedData}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="90%" stopColor="#8b5cf6" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis
                dataKey="month"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                axisLine={{ stroke: "#334155", strokeWidth: 1 }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                axisLine={{ stroke: "#334155", strokeWidth: 1 }}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: "10px" }} />

              <Area
                type="monotone"
                dataKey="views"
                stroke="#8b5cf6"
                strokeWidth={3}
                name="بازدیدها"
                fillOpacity={1}
                fill="url(#colorViews)"
                dot={{
                  r: 6,
                  strokeWidth: 2,
                  fill: "#1e1e1e",
                  stroke: "#8b5cf6",
                }}
                activeDot={{
                  r: 8,
                  strokeWidth: 2,
                  fill: "#8b5cf6",
                  stroke: "#fff",
                }}
                animationDuration={2000}
              />
            </ComposedChart>
          </ChartContainer>
        </div>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary-300"></div>
            <span>مجموع بازدید: ۲۰۸۴</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedChart;
