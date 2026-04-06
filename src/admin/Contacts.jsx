// src/pages/Contacts.jsx

import React, { useEffect, useState } from 'react';
import { contactAPI } from '../services/api';
import { Trash2, Search } from 'lucide-react';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, searchTerm]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const data = await contactAPI.getAll();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error('Failed to load contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterContacts = () => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    try {
      await contactAPI.delete(id);
      setContacts(contacts.filter((c) => c.id !== id));
      setSelectedContact(null);
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading contacts...</div>;
  }

  return (
    <div className="page contacts-page">
      <div className="page-header">
        <h1>Contact Submissions</h1>
        <p>Total: {contacts.length}</p>
      </div>

      {/* Search */}
      <div className="search-box">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Contacts Grid */}
      <div className="contacts-grid">
        {/* Contacts List */}
        <div className="contacts-list">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className={`contact-item ${selectedContact?.id === contact.id ? 'active' : ''}`}
                onClick={() => setSelectedContact(contact)}
              >
                <h4>{contact.name}</h4>
                <p className="contact-email">{contact.email}</p>
                <p className="contact-preview">
                  {contact.message.substring(0, 60)}...
                </p>
                <span className="contact-date">
                  {new Date(contact.created_at).toLocaleDateString()}
                </span>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>No contacts found</p>
            </div>
          )}
        </div>

        {/* Contact Details */}
        {selectedContact && (
          <div className="contact-details">
            <h2>{selectedContact.name}</h2>
            <div className="detail-field">
              <label>Email</label>
              <p>{selectedContact.email}</p>
            </div>
            <div className="detail-field">
              <label>Date Submitted</label>
              <p>{new Date(selectedContact.created_at).toLocaleString()}</p>
            </div>
            <div className="detail-field">
              <label>Message</label>
              <p className="message-content">{selectedContact.message}</p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(selectedContact.id)}
            >
              <Trash2 size={18} /> Delete Contact
            </button>
          </div>
        )}

        {!selectedContact && filteredContacts.length > 0 && (
          <div className="contact-details empty">
            <p>Select a contact to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
