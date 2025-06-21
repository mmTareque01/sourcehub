"use client";
import ProjectMetrics from "@/components/dashboard-components/ProjectMatrix";
import PageMeta from "@/components/PageMeta";
import VisitorStatsGraph, { TimeRange, VisitorData } from "@/components/VisitorsGrowthGraph";
import { useAppStore } from "@/stores/app.store";
import React, { useState } from "react";



const generateDummyData = (range: TimeRange): VisitorData[] => {
  const days = range === '7d' ? 7 : range === '30d' ? 30 : range === '90d' ? 90 : 365;
  const data: VisitorData[] = [];

  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - days);

  for (let i = 0; i < days; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i);

    // Randomize with some realistic patterns
    const dayOfWeek = date.getDay(); // 0 (Sun) to 6 (Sat)
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Base values with some fluctuation
    const baseVisitors = isWeekend ? 1200 : 1800;
    const visitors = Math.floor(baseVisitors * (0.8 + Math.random() * 0.4));
    const newVisitors = Math.floor(visitors * (0.3 + Math.random() * 0.2));
    const returningVisitors = visitors - newVisitors;

    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      visitors,
      newVisitors,
      returningVisitors,
    });
  }

  return data;
};

// Calculate percentage change between first and second half of period
const calculatePercentageChange = (data: VisitorData[]): number => {
  const half = Math.floor(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  const firstSum = firstHalf.reduce((sum, day) => sum + day.visitors, 0);
  const secondSum = secondHalf.reduce((sum, day) => sum + day.visitors, 0);

  return ((secondSum - firstSum) / firstSum) * 100;
};

export default function Dashboard() {

  const { setHeader } = useAppStore();
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [visitorData, setVisitorData] = useState<VisitorData[]>([]);
  const [percentageChange, setPercentageChange] = useState(0);

  // Generate data when component mounts or timeRange changes
  React.useEffect(() => {
    const data = generateDummyData(timeRange);
    setVisitorData(data);
    setPercentageChange(calculatePercentageChange(data));
  }, [timeRange]);


  React.useEffect(()=>{
    setHeader(
      <p className="text-2xl font-bold capitalize">
        admin panel
      </p>
    )
  },[])

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <ProjectMetrics />



      <div className="py-5 max-w-6xl mx-auto">
        <VisitorStatsGraph
          data={visitorData}
          timeRange={timeRange}
          onChangeTimeRange={setTimeRange}
          percentageChange={percentageChange}
        />
      </div>

    </>
  );
}
