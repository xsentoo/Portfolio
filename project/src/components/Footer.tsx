import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString('fr-FR', {
      timeZone: 'Europe/Paris',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Clock size={16} />
            <span>{formatTime()}</span>
            <span className="text-gray-500">GMT+1 (France)</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Thayaparan Senthooran. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;