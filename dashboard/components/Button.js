import { useState } from 'react';
import Sidebar from './Sidebar';

function SidebarClose() {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div>
      <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
      {showSidebar && (
        <div className="sidebar">
          
        </div>
      )}
      <div className="main">
        {/* Main content */}
      </div>
    </div>
  );
}