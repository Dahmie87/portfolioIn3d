// src/pages/Analytics.jsx

import React, { useEffect, useState } from 'react';
import { visitorAPI } from '../services/api';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

export default function Analytics() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await visitorAPI.getStats();
      setStats(data);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading analytics...</div>;
  }

  if (!stats) {
    return <div className="error">No analytics data available</div>;
  }

  // Sample data for charts (in real app, this comes from backend)
  const visitorTrendData = [
    { date: 'Mon', visitors: 24 },
    { date: 'Tue', visitors: 35 },
    { date: 'Wed', visitors: 28 },
    { date: 'Thu', visitors: 42 },
    { date: 'Fri', visitors: 38 },
    { date: 'Sat', visitors: 45 },
    { date: 'Sun', visitors: 32 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 60 },
    { name: 'Mobile', value: 30 },
    { name: 'Tablet', value: 10 },
  ];

  const browserData = [
    { name: 'Chrome', value: 45 },
    { name: 'Firefox', value: 20 },
    { name: 'Safari', value: 20 },
    { name: 'Edge', value: 10 },
    { name: 'Other', value: 5 },
  ];

  return (
    <div className="page analytics-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Visitor statistics and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Visits</h3>
          <p className="metric-value">{stats.total_visits || 0}</p>
        </div>
        <div className="metric-card">
          <h3>Unique Visitors</h3>
          <p className="metric-value">{stats.unique_sessions || 0}</p>
        </div>
        <div className="metric-card">
          <h3>New Visitors Today</h3>
          <p className="metric-value">{stats.new_visitors_today || 0}</p>
        </div>
        <div className="metric-card">
          <h3>Avg Visit Duration</h3>
          <p className="metric-value">2m 34s</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-section">
        {/* Visitor Trend */}
        <div className="chart-container">
          <h2>Visitor Trend (Last 7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Breakdown */}
        <div className="chart-container">
          <h2>Device Types</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Browser Breakdown */}
        <div className="chart-container">
          <h2>Browser Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={browserData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Visitors Table */}
      <div className="section">
        <h2>Recent Visitors</h2>
        <div className="table-container">
          <table className="visitors-table">
            <thead>
              <tr>
                <th>IP Address</th>
                <th>Location</th>
                <th>Device</th>
                <th>Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {stats.recent_visitors && stats.recent_visitors.length > 0 ? (
                stats.recent_visitors.map((visitor, idx) => (
                  <tr key={idx}>
                    <td className="mono">{visitor.ip}</td>
                    <td>{visitor.location || 'Unknown'}</td>
                    <td>{visitor.device || 'Unknown'}</td>
                    <td>
                      {new Date(visitor.last_visit).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No visitor data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
