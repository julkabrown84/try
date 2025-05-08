import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, BarChart2, Calendar } from 'lucide-react';

const generateMonthlyData = (year: number) => {
  const baseValues = {
    2023: { value: 75000, users: 750, conversion: 3.5 },
    2024: { value: 85000, users: 850, conversion: 4.0 },
    2025: { value: 95000, users: 950, conversion: 4.5 }
  };

  const base = baseValues[year as keyof typeof baseValues];
  
  return Array.from({ length: 12 }, (_, i) => {
    // Revenue: Strong seasonal pattern with end-of-year peak
    const revenueSeasonal = 1 + 
      Math.sin((i / 11) * Math.PI * 2) * 0.4 + // Strong annual cycle
      Math.sin((i / 2.75) * Math.PI) * 0.15;   // Quarterly variations
    const revenueGrowth = 1 + Math.pow(i / 11, 2) * 0.3; // Accelerating growth
    const revenueNoise = 1 + (Math.random() - 0.5) * 0.2;
    
    // Users: Steady growth with mild seasonal dips
    const usersSeasonal = 1 + 
      Math.sin((i / 11) * Math.PI * 2) * 0.15 + // Mild annual cycle
      Math.cos((i / 5.5) * Math.PI) * 0.1;      // Semi-annual variation
    const usersGrowth = 1 + (i / 11) * 0.25;    // Linear growth
    const usersNoise = 1 + (Math.random() - 0.5) * 0.1;
    
    // Conversion: More volatile with multiple cycles
    const conversionSeasonal = 1 + 
      Math.sin((i / 5.5) * Math.PI) * 0.3 +     // Bi-annual major cycles
      Math.sin((i / 2) * Math.PI) * 0.15 +      // Monthly variations
      Math.cos((i / 3.67) * Math.PI) * 0.1;     // Random pattern
    const conversionNoise = 1 + (Math.random() - 0.5) * 0.25;
    
    return {
      name: new Date(year, i).toLocaleString('de-DE', { month: 'short' }),
      value: Math.round(base.value * revenueSeasonal * revenueGrowth * revenueNoise),
      users: Math.round(base.users * usersSeasonal * usersGrowth * usersNoise),
      conversion: +((base.conversion * conversionSeasonal * conversionNoise).toFixed(1))
    };
  });
};

const years = [2023, 2024, 2025];

export function AnimatedDashboard() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [data, setData] = useState(generateMonthlyData(selectedYear));

  useEffect(() => {
    setData(generateMonthlyData(selectedYear));

    // Auto cycle through years every 5 seconds if not manually selected
    const interval = setInterval(() => {
      setSelectedYear(prev => {
        const currentIndex = years.indexOf(prev);
        return years[(currentIndex + 1) % years.length];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedYear]);

  const totalRevenue = data.reduce((acc, curr) => acc + curr.value, 0);
  const averageUsers = Math.floor(data.reduce((acc, curr) => acc + curr.users, 0) / data.length);
  const averageConversion = (data.reduce((acc, curr) => acc + parseFloat(curr.conversion), 0) / data.length).toFixed(1);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 h-full">
      {/* Year Selection */}
      <div className="col-span-2 flex justify-center space-x-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedYear === year
                ? 'bg-[#ed6e2c] text-white'
                : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#ed6e2c]/20'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#ed6e2c]/20">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-[#ed6e2c]" />
          <span className="text-gray-400">Umsatz</span>
          <span className="ml-auto text-white font-bold">
            €{totalRevenue.toLocaleString()}
          </span>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(237,110,44,0.2)',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ed6e2c"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customers Chart */}
      <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#ed6e2c]/20">
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-[#ed6e2c]" />
          <span className="text-gray-400">Kunden</span>
          <span className="ml-auto text-white font-bold">
            {averageUsers.toLocaleString()}
          </span>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(237,110,44,0.2)',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#ed6e2c"
                fill="#ed6e2c"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conversion Rate Chart */}
      <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#ed6e2c]/20">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 className="text-[#ed6e2c]" />
          <span className="text-gray-400">Conversion Rate</span>
          <span className="ml-auto text-white font-bold">
            {averageConversion}%
          </span>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(237,110,44,0.2)',
                  borderRadius: '8px',
                }}
              />
              <Bar
                dataKey="conversion"
                fill="#ed6e2c"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Margin Chart */}
      <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#ed6e2c]/20">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-[#ed6e2c]" />
          <span className="text-gray-400">Marge</span>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(237,110,44,0.2)',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ed6e2c"
                strokeWidth={2}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}