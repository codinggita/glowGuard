import React, { useState } from 'react';
import { Menu, Bell, Download, Plus, Microscope, Home, Activity, Award, UserPlus, MoreVertical, Edit2, X, Calendar, Clock, User, Stethoscope } from 'lucide-react';

const NewAppointmentModal = ({ onClose }) => {
  const [form, setForm] = useState({
    patientName: '',
    doctor: '',
    type: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => onClose(), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <h2 className="modal-title">New Appointment</h2>
            <p className="modal-subtitle">Schedule a patient appointment</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Appointment Booked!</h3>
            <p>The appointment has been successfully scheduled.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-field-row">
              <div className="modal-field">
                <label><User size={14} /> Patient Name</label>
                <input name="patientName" type="text" placeholder="e.g. John Doe" value={form.patientName} onChange={handleChange} required />
              </div>
              <div className="modal-field">
                <label><Stethoscope size={14} /> Doctor / Specialist</label>
                <input name="doctor" type="text" placeholder="e.g. Dr. Smith" value={form.doctor} onChange={handleChange} required />
              </div>
            </div>

            <div className="modal-field">
              <label><Microscope size={14} /> Appointment Type</label>
              <select name="type" value={form.type} onChange={handleChange} required>
                <option value="">Select type...</option>
                <option>General Consultation</option>
                <option>Follow-up</option>
                <option>Cardiac Rehabilitation</option>
                <option>Dermatology</option>
                <option>Physiotherapy</option>
                <option>Lab Test</option>
                <option>Emergency</option>
              </select>
            </div>

            <div className="modal-field-row">
              <div className="modal-field">
                <label><Calendar size={14} /> Date</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} required />
              </div>
              <div className="modal-field">
                <label><Clock size={14} /> Time</label>
                <input name="time" type="time" value={form.time} onChange={handleChange} required />
              </div>
            </div>

            <div className="modal-field">
              <label>Notes (optional)</label>
              <textarea name="notes" placeholder="Any additional notes..." value={form.notes} onChange={handleChange} rows={3} />
            </div>

            <div className="modal-actions">
              <button type="button" className="modal-btn-cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="modal-btn-confirm"><Plus size={16} /> Book Appointment</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="dashboard-container desktop-layout">
      {/* Sidebar for Desktop */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <h1 className="dashboard-title">Lumina Health</h1>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <Home size={22} />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Activity size={22} />
            <span>Analysis</span>
          </div>
          <div className="nav-item">
            <Award size={22} />
            <span>Rank</span>
          </div>
          <div className="nav-item">
            <UserPlus size={22} />
            <span>Care</span>
          </div>
          <div className="nav-item">
            <Menu size={22} />
            <span>Menu</span>
          </div>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
             <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User" className="user-avatar" />
             <div className="user-info">
               <span className="user-name">Director</span>
               <span className="user-role">Administrator</span>
             </div>
          </div>
        </div>
      </aside>

      <div className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <button className="icon-btn mobile-only"><Menu size={24} /></button>
          <h1 className="dashboard-title mobile-only">Lumina Health</h1>
          <div className="header-search desktop-only">
             <input type="text" placeholder="Search for patients, tests, or results..." />
          </div>
          <div className="header-right">
            <button className="icon-btn notification-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User" className="user-avatar mobile-only" />
          </div>
        </header>

        <main className="dashboard-content">
          <section className="welcome-section">
            <div className="welcome-text">
              <p className="greeting">Good morning, Director</p>
              <p className="greeting-sub">Here is what's happening at Lumina Health today.</p>
            </div>
            <div className="action-buttons">
              <button className="btn-outline">
                <Download size={16} /> Reports
              </button>
              <button className="btn-primary" onClick={() => setShowModal(true)}>
                <Plus size={16} /> New Appointment
              </button>
            </div>
          </section>

          <div className="dashboard-grid">
            <div className="grid-left">
              <section className="status-card">
                <div className="status-header">
                  <span className="status-badge">
                    <span className="status-dot"></span> Operational
                  </span>
                </div>
                <h2 className="status-title">Patient Flow is Optimal</h2>
                <p className="status-desc">All departments are currently running within expected parameters. Average wait time is 12 minutes.</p>
                
                <div className="stats-grid">
                  <div className="stat-box">
                    <span className="stat-label">Active Patients</span>
                    <span className="stat-value text-teal">42</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Pending Tests</span>
                    <span className="stat-value text-teal">18</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Staff on Duty</span>
                    <span className="stat-value text-teal">24</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Alerts</span>
                    <span className="stat-value text-red">02</span>
                  </div>
                </div>
              </section>

              <section className="appointments-section">
                <div className="section-header">
                  <h2>Upcoming Appointments</h2>
                  <span className="view-all" style={{ cursor: 'pointer' }}>View All</span>
                </div>
                <div className="appointments-list">
                  <div className="appointment-card">
                    <img src="https://ui-avatars.com/api/?name=Arthur+Jenkins&background=random" alt="Arthur" className="patient-avatar" />
                    <div className="appointment-info">
                      <h3 className="patient-name">Arthur Jenkins</h3>
                      <p className="appointment-type">Follow-up: Cardiac Rehabilitation</p>
                    </div>
                    <div className="appointment-time">
                      <span className="time">10:30 AM</span>
                      <span className="time-status in-mins">in 15 mins</span>
                    </div>
                    <button className="more-btn"><MoreVertical size={16} /></button>
                  </div>
                  <div className="appointment-card">
                    <img src="https://ui-avatars.com/api/?name=Sarah+Chen&background=random" alt="Sarah" className="patient-avatar" />
                    <div className="appointment-info">
                      <h3 className="patient-name">Sarah Chen</h3>
                      <p className="appointment-type">Consultations: Dermatology</p>
                    </div>
                    <div className="appointment-time">
                      <span className="time">11:15 AM</span>
                      <span className="time-status">Today</span>
                    </div>
                    <button className="more-btn"><MoreVertical size={16} /></button>
                  </div>
                  <div className="appointment-card">
                    <img src="https://ui-avatars.com/api/?name=Michael+Torres&background=random" alt="Michael" className="patient-avatar" />
                    <div className="appointment-info">
                      <h3 className="patient-name">Michael Torres</h3>
                      <p className="appointment-type">Initial Assessment: Physiotherapy</p>
                    </div>
                    <div className="appointment-time">
                      <span className="time">01:45 PM</span>
                      <span className="time-status">Today</span>
                    </div>
                    <button className="more-btn"><MoreVertical size={16} /></button>
                  </div>
                </div>
              </section>
            </div>

            <div className="grid-right">
              <section className="lab-results-card">
                <div className="icon-wrapper">
                  <Microscope size={28} />
                </div>
                <h2 className="lab-title">New Lab Results</h2>
                <p className="lab-desc">4 comprehensive health assessments are ready for clinical review.</p>
                <button className="btn-lab-review">Review Now &gt;</button>
              </section>

              <section className="activity-section">
                <div className="section-header">
                  <h2>Recent Activity</h2>
                </div>
                <div className="activity-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot teal"></div>
                    <div className="timeline-content">
                      <span className="timeline-time">09:12 AM</span>
                      <h3 className="timeline-title">Inventory Restocked</h3>
                      <p className="timeline-desc">Critical surgical supplies delivered and logged.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot teal"></div>
                    <div className="timeline-content">
                      <span className="timeline-time">08:45 AM</span>
                      <h3 className="timeline-title">Shift Change</h3>
                      <p className="timeline-desc">Morning nursing staff shift commencement complete.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot orange"></div>
                    <div className="timeline-content">
                      <span className="timeline-time">YESTERDAY</span>
                      <h3 className="timeline-title">Alert: Temperature Fluctuation</h3>
                      <p className="timeline-desc">Vaccine storage unit 4 experienced a minor variance.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <nav className="bottom-nav mobile-only">
          <div className="nav-item active">
            <Home size={24} />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Activity size={24} />
            <span>Analysis</span>
          </div>
          <div className="nav-item">
            <Award size={24} />
            <span>Rank</span>
          </div>
          <div className="nav-item">
            <UserPlus size={24} />
            <span>Care</span>
          </div>
          <div className="nav-item">
            <Menu size={24} />
            <span>Menu</span>
          </div>
        </nav>

        <button className="fab-btn" onClick={() => setShowModal(true)}>
          <Edit2 size={24} />
        </button>
      </div>

      {showModal && <NewAppointmentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Dashboard;
