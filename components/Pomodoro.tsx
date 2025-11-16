import React, { useState, useEffect, useRef } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const Pomodoro: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');

  const notificationSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    notificationSound.current = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');
  }, []);

  useEffect(() => {
    // Fix: Use ReturnType<typeof setInterval> instead of NodeJS.Timeout for browser environments.
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (notificationSound.current) {
              notificationSound.current.play();
            }
            // Timer ended, switch modes
            if (mode === 'work') {
              setMode('shortBreak');
              setMinutes(5);
            } else {
              setMode('work');
              setMinutes(25);
            }
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
        if (interval) clearInterval(interval);
    }
    return () => {
        if (interval) clearInterval(interval);
    };
  }, [isActive, seconds, minutes, mode]);
  
  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    switch(mode){
        case 'work': setMinutes(25); break;
        case 'shortBreak': setMinutes(5); break;
        case 'longBreak': setMinutes(15); break;
    }
    setSeconds(0);
  };
  
  const switchMode = (newMode: 'work' | 'shortBreak' | 'longBreak') => {
    setMode(newMode);
    setIsActive(false);
    switch(newMode){
        case 'work': setMinutes(25); break;
        case 'shortBreak': setMinutes(5); break;
        case 'longBreak': setMinutes(15); break;
    }
    setSeconds(0);
  };

  const timerDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const modeText = {
      work: "Time to focus!",
      shortBreak: "Time for a short break!",
      longBreak: "Time for a long break!"
  }

  return (
    <div className="animate-fade-in-up">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Pomodoro Timer</h1>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">Boost your productivity with focused work intervals.</p>
      </header>
      <Card className="max-w-md mx-auto mt-10">
        <div className="text-center">
            <div className="flex justify-center gap-2 mb-6">
                <Button variant={mode === 'work' ? 'primary' : 'secondary'} onClick={() => switchMode('work')}>Pomodoro</Button>
                <Button variant={mode === 'shortBreak' ? 'primary' : 'secondary'} onClick={() => switchMode('shortBreak')}>Short Break</Button>
                <Button variant={mode === 'longBreak' ? 'primary' : 'secondary'} onClick={() => switchMode('longBreak')}>Long Break</Button>
            </div>
          <div className="text-8xl font-bold my-8 text-light-text dark:text-dark-text">{timerDisplay}</div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{modeText[mode]}</p>
          <div className="flex justify-center gap-4">
            <Button onClick={toggleTimer} size="lg" variant="primary" className="w-32">
              {isActive ? 'Pause' : 'Start'}
            </Button>
            <Button onClick={resetTimer} size="lg" variant="secondary" className="w-32">
              Reset
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pomodoro;