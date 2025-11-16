import React, { useState, useEffect } from 'react';
import { useLabs } from '../hooks/useLabs';
import Card from './ui/Card';
import Button from './ui/Button';
import { ClockIcon, FlagIcon, TerminalIcon } from './icons';

const LabEnvironment: React.FC = () => {
  const { activeLabSession, stopLab, submitFlag } = useLabs();
  const [flag, setFlag] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!activeLabSession) {
    return (
      <Card className="text-center">
        <p>No active lab session. Go to the labs catalog to start one.</p>
      </Card>
    );
  }

  const { lab } = activeLabSession;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (flag) {
        submitFlag({ labId: lab.id, flag });
        setFlag('');
    }
  };
  
  const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
  }

  return (
    <div className="animate-fade-in space-y-4">
        {/* Header Bar */}
        <Card className="flex flex-col sm:flex-row justify-between items-center p-3">
            <div>
                <h1 className="text-xl font-bold">{lab.title}</h1>
                <p className="text-sm text-dark-text-secondary">{lab.category} / {lab.difficulty}</p>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <div className="flex items-center font-mono text-lg bg-dark-bg px-3 py-1 rounded-md">
                    <ClockIcon className="w-5 h-5 mr-2 text-primary"/>
                    <span>{formatTime(timeRemaining)}</span>
                </div>
                <Button variant="danger" size="sm" onClick={stopLab}>End Session</Button>
            </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Panel: Info & Submission */}
            <div className="lg:col-span-1 space-y-4">
                <Card>
                    <h2 className="text-lg font-semibold border-b border-dark-border pb-2 mb-3">Challenge Details</h2>
                    <p className="text-sm text-dark-text-secondary">{lab.description}</p>
                </Card>
                <Card>
                    <h2 className="text-lg font-semibold mb-3">Submit Flag</h2>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                            <FlagIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-text-secondary" />
                             <input 
                                type="text"
                                placeholder="SHL{...}"
                                value={flag}
                                onChange={(e) => setFlag(e.target.value)}
                                className="w-full bg-dark-bg border border-dark-border rounded-md pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                        <Button type="submit" variant="primary" className="w-full">Submit</Button>
                    </form>
                </Card>
            </div>
            
            {/* Right Panel: Simulated Environment */}
            <div className="lg:col-span-2">
                <Card className="h-full min-h-[60vh] flex flex-col">
                    <div className="flex items-center text-sm border-b border-dark-border pb-2 mb-3">
                        <TerminalIcon className="w-5 h-5 mr-2 text-secondary" />
                        <span className="font-semibold">Vulnerable Environment: Web Server</span>
                    </div>
                    <div className="flex-grow bg-dark-bg p-4 rounded-md font-mono text-sm text-dark-text-secondary overflow-y-auto">
                        <p className="text-green-400">$ systemctl start apache2</p>
                        <p>Starting web server on port 80...</p>
                        <p>Accessing <a href="#" className="text-cyan-400 underline">http://10.10.1.123/login.php</a></p>
                        <br/>
                        <div className="p-6 border border-dark-border rounded-lg bg-dark-card">
                            <h3 className="text-lg font-bold text-dark-text mb-4 text-center">Login to Bank of SHL</h3>
                            <div className="space-y-3">
                                <input type="text" placeholder="Username" disabled className="w-full bg-dark-bg border border-dark-border rounded p-2" />
                                <input type="password" placeholder="Password" disabled className="w-full bg-dark-bg border border-dark-border rounded p-2" />
                                <button disabled className="w-full bg-primary/50 text-slate-800 font-bold p-2 rounded">Log In</button>
                            </div>
                             <p className="text-xs text-center mt-4 italic">' or '1'='1 -- </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  );
};

export default LabEnvironment;
