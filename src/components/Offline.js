import React, { useState, useEffect } from 'react';

const OfflineMessage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  return (
    <div className={`offline-message ${isOnline ? 'hidden' : ''}`}>
      You are currently offline. Please check your connection.
    </div>
  );
};

export default OfflineMessage;
