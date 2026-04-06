import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactAPI, blogAPI, visitorAPI } from './api';
import { Users, FileText, Mail, TrendingUp } from 'lucide-react';

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon">
        <Icon size={32} />
      </div>
      <div className="stat-info">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value || 0}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalPosts: 0,
    totalVisitors: 0,
    recentContacts: [],
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [contacts, posts, visitors] = await Promise.all([
        contactAPI.getAll(),
        blogAPI.getAll(),
        visitorAPI.getStats(),
      ]);

      setStats({
        totalContacts: contacts.total || 0,
        totalPosts: posts.total || 0,
        totalVisitors: visitors.total_visits || 0,
        recentContacts: (contacts.contacts || []).slice(0, 5),
      });
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your portfolio overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          icon={Mail}
          label="Total Contacts"
          value={stats.totalContacts}
          color="primary"
        />
        <StatCard
          icon={FileText}
          label="Blog Posts"
          value={stats.totalPosts}
          color="success"
        />
        <StatCard
          icon={Users}
          label="Total Visitors"
          value={stats.totalVisitors}
          color="warning"
        />
        <StatCard
          icon={TrendingUp}
          label="Engagement"
          value={(stats.totalVisitors * 0.23).toFixed(0)}
          color="info"
        />
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <div className="section-header">
          <h2>Recent Contact Submissions</h2>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/.admin/contacts')}
          >
            View All
          </button>
        </div>

        {stats.recentContacts.length > 0 ? (
          <div className="activity-list">
            {stats.recentContacts.map((contact) => (
              <div key={contact.id} className="activity-item">
                <div className="activity-info">
                  <h4>{contact.name}</h4>
                  <p>{contact.email}</p>
                  <p className="activity-message">{contact.message.substring(0, 100)}...</p>
                </div>
                <div className="activity-meta">
                  <span className="date">
                    {new Date(contact.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No contact submissions yet</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/.admin/blog')}
          >
            Create Blog Post
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/.admin/contacts')}
          >
            View Contacts
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/.admin/analytics')}
          >
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
