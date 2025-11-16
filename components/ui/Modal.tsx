import React, { ReactNode } from 'react';
import { CloseIcon } from '../icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in" 
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="bg-dark-card w-full max-w-md p-6 rounded-lg shadow-xl relative animate-scale-in border border-dark-border" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-dark-text">{title}</h2>
            <button 
                onClick={onClose} 
                className="text-dark-text-secondary hover:text-dark-text"
                aria-label="Close modal"
            >
                <CloseIcon />
            </button>
        </div>
        <div>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
