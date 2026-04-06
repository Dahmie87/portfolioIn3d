// src/pages/BlogPosts.jsx

import React, { useEffect, useState } from 'react';
import { blogAPI } from '../services/api';
import { Plus, Edit2, Trash2, AlertCircle } from 'lucide-react';

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    slug: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await blogAPI.getAll();
      setPosts(data.posts || []);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title || !formData.content || !formData.slug) {
      setError('All fields are required');
      return;
    }

    try {
      if (editingId) {
        await blogAPI.update(editingId, formData);
        setSuccess('Post updated successfully');
      } else {
        await blogAPI.create(formData);
        setSuccess('Post created successfully');
      }
      setFormData({ title: '', content: '', slug: '' });
      setEditingId(null);
      setShowForm(false);
      fetchPosts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (post) => {
    setFormData(post);
    setEditingId(post.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await blogAPI.delete(id);
      setSuccess('Post deleted');
      fetchPosts();
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: '', content: '', slug: '' });
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Blog Posts</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={20} /> {showForm ? 'Cancel' : 'New Post'}
        </button>
      </div>

      {error && (
        <div className="alert alert-error">
          <AlertCircle size={20} /> {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="form-container">
          <h2>{editingId ? 'Edit Post' : 'Create New Post'}</h2>
          <form onSubmit={handleSubmit} className="blog-form">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Post title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="slug">Slug *</label>
              <input
                id="slug"
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="post-slug"
                required
              />
              <small>Auto-generated from title</small>
            </div>

            <div className="form-group">
              <label htmlFor="content">Content *</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your post content here..."
                rows="10"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Post' : 'Create Post'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts List */}
      <div className="posts-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-info">
                <h3>{post.title}</h3>
                <p className="post-slug">{post.slug}</p>
                <p className="post-date">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="post-actions">
                <button
                  className="btn-icon btn-edit"
                  onClick={() => handleEdit(post)}
                  title="Edit"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  className="btn-icon btn-delete"
                  onClick={() => handleDelete(post.id)}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No blog posts yet. Create one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
