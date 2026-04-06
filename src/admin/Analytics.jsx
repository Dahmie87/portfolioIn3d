import React, { useEffect, useState } from 'react';
import { visitorAPI } from './api';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

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

  const visitors = Array.isArray(stats.visitors) ? stats.visitors : [];
  const totalVisits = Number.isFinite(stats.total) ? stats.total : visitors.length;

  const uniqueVisitorCount = new Set(visitors.map((v) => v.ip || 'unknown')).size;
  const uniqueEndpointCount = new Set(visitors.map((v) => v.endpoint || 'unknown')).size;

  const todayKey = new Date().toISOString().slice(0, 10);
  const todayVisits = visitors.filter((v) => (v.visited_at || '').slice(0, 10) === todayKey).length;

  const trendMap = {};
  for (let i = 6; i >= 0; i -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = date.toISOString().slice(0, 10);
    trendMap[key] = 0;
  }
  visitors.forEach((v) => {
    const key = (v.visited_at || '').slice(0, 10);
    if (key in trendMap) {
      trendMap[key] += 1;
    }
  });
  const visitorTrendData = Object.entries(trendMap).map(([date, count]) => ({
    date: date.slice(5),
    visitors: count,
  }));

  const endpointMap = {};
  visitors.forEach((v) => {
    const endpoint = v.endpoint || 'unknown';
    endpointMap[endpoint] = (endpointMap[endpoint] || 0) + 1;
  });
  const endpointData = Object.entries(endpointMap)
    .map(([endpoint, count]) => ({ endpoint, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const recentVisitors = [...visitors]
    .sort((a, b) => new Date(b.visited_at).getTime() - new Date(a.visited_at).getTime())
    .slice(0, 20);

  return (
    <div className="page analytics-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Visitor statistics from /api/v1/stats</p>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Visits</h3>
          <p className="metric-value">{totalVisits}</p>
        </div>
        <div className="metric-card">
          <h3>Unique Visitors</h3>
          <p className="metric-value">{uniqueVisitorCount}</p>
        </div>
        <div className="metric-card">
          <h3>Visits Today</h3>
          <p className="metric-value">{todayVisits}</p>
        </div>
        <div className="metric-card">
          <h3>Tracked Endpoints</h3>
          <p className="metric-value">{uniqueEndpointCount}</p>
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
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Endpoint Breakdown */}
        <div className="chart-container">
          <h2>Top Endpoints</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={endpointData} layout="vertical" margin={{ left: 20, right: 12, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="endpoint" type="category" width={180} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 4, 4]} />
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
                <th>Endpoint</th>
                <th>Visited At</th>
              </tr>
            </thead>
            <tbody>
              {recentVisitors.length > 0 ? (
                recentVisitors.map((visitor, idx) => (
                  <tr key={idx}>
                    <td className="mono">{visitor.ip}</td>
                    <td className="mono">{visitor.endpoint || 'Unknown'}</td>
                    <td>{visitor.visited_at ? new Date(visitor.visited_at).toLocaleString() : 'Unknown'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No visitor data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
