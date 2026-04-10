import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactAPI, blogAPI, visitorAPI } from './api';
import { Users, FileText, Mail, TrendingUp } from 'lucide-react';

function StatCard({ icon: Icon, label, value, color, onClick }) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={`stat-card ${color} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
      type={Component === 'button' ? 'button' : undefined}
    >
      <div className="stat-icon">
        <Icon size={32} />
      </div>
      <div className="stat-info">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value || 0}</p>
      </div>
    </Component>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalPosts: 0,
    totalVisitors: 0,
    recentContacts: [],
    recentVisitors: [],
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

      const visitorItems = Array.isArray(visitors.visitors) ? visitors.visitors : [];

      setStats({
        totalContacts: contacts.total || 0,
        totalPosts: posts.total || 0,
        totalVisitors: visitors.total || visitors.total_visits || visitorItems.length || 0,
        recentContacts: (contacts.contacts || []).slice(0, 5),
        recentVisitors: visitorItems.slice(0, 5),
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
          onClick={() => navigate('/.admin/contacts')}
        />
        <StatCard
          icon={FileText}
          label="Blog Posts"
          value={stats.totalPosts}
          color="success"
          onClick={() => navigate('/.admin/blog')}
        />
        <StatCard
          icon={Users}
          label="Live Visitors"
          value={stats.totalVisitors}
          color="warning"
          onClick={() => navigate('/.admin/analytics')}
        />
        <StatCard
          icon={TrendingUp}
          label="Engagement"
          value={(stats.totalVisitors * 0.23).toFixed(0)}
          color="info"
          onClick={() => navigate('/.admin/analytics')}
        />
      </div>

      {/* Recent Visitors */}
      <div className="recent-activity">
        <div className="section-header">
          <h2>Recent Visitor Activity</h2>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/.admin/analytics')}
          >
            View Analytics
          </button>
        </div>

        {stats.recentVisitors.length > 0 ? (
          <div className="activity-list">
            {stats.recentVisitors.map((visitor, index) => (
              <div key={`${visitor.ip}-${visitor.visited_at}-${index}`} className="activity-item">
                <div className="activity-info">
                  <h4>{visitor.ip || 'Unknown IP'}</h4>
                  <p>{visitor.endpoint || 'Unknown endpoint'}</p>
                </div>
                <div className="activity-meta">
                  <span className="date">
                    {visitor.visited_at ? new Date(visitor.visited_at).toLocaleString() : 'Unknown time'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No visitor activity yet</p>
          </div>
        )}
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
