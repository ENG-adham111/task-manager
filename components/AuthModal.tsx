import React, { useState } from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const { login, isLoading } = useAuth();
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={activeTab === 'login' ? 'Welcome Back' : 'Create Account'}>
            <div>
                <div className="flex border-b border-dark-border mb-4">
                    <button 
                        className={`py-2 px-4 font-semibold ${activeTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-dark-text-secondary'}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button 
                         className={`py-2 px-4 font-semibold ${activeTab === 'register' ? 'text-primary border-b-2 border-primary' : 'text-dark-text-secondary'}`}
                         onClick={() => setActiveTab('register')}
                    >
                        Register
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                        required
                    />
                     <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-dark-bg border border-dark-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                        required
                    />
                    <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
                       {activeTab === 'login' ? 'Login' : 'Register'}
                    </Button>
                </form>

                <p className="text-xs text-dark-text-secondary text-center mt-4">
                    By signing in, you agree to our Terms and Ethical Policy.
                </p>
            </div>
        </Modal>
    );
};

export default AuthModal;
