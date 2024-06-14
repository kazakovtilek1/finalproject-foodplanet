import React from 'react';
import Sidebar from '../adminComponents/Sidebar/Sidebar';
import Dashboard from '../adminComponents/Dashboard/Dashboard';

import './AdminPage.css';

function AdminPage() {
    return (
        <div className="admin-page">
            <Sidebar />
            <Dashboard />
        </div>
    );
}

export default AdminPage;
