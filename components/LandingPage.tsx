import React, { useState } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import { ShieldCheckIcon, TerminalIcon, TargetIcon } from './icons';
import AuthModal from './AuthModal';

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mx-auto mb-4 bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
        {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-light-text-secondary dark:text-dark-text-secondary">{children}</p>
  </Card>
);


const LandingPage: React.FC = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="animate-fade-in-up">
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-light-text dark:text-dark-text">
          Level Up Your Cybersecurity Skills.
        </h1>
        <h2 className="mt-4 text-4xl md:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
             Legally & Safely.
            </span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-dark-text-secondary">
          SafeHack Labs provides a secure, sandboxed environment for you to practice ethical hacking techniques on real-world scenarios, from beginner CTFs to advanced penetration testing challenges.
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={() => setIsAuthModalOpen(true)}>
            Start Hacking
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Safe & Isolated">
                Every lab runs in a completely isolated container. Practice your skills without any risk to your own machine or the internet.
            </FeatureCard>
            <FeatureCard icon={<TargetIcon className="w-8 h-8" />} title="Realistic Labs">
                Tackle challenges based on real-world vulnerabilities and scenarios, curated by industry professionals.
            </FeatureCard>
            <FeatureCard icon={<TerminalIcon className="w-8 h-8" />} title="Learn By Doing">
                Go beyond theory. Get hands-on experience and immediate feedback to solidify your understanding of security concepts.
            </FeatureCard>
        </div>
      </section>

       <section className="py-16 bg-light-card dark:bg-dark-card rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Our Ethical Commitment</h2>
            <p className="max-w-3xl mx-auto text-light-text-secondary dark:text-dark-text-secondary mb-6">
                This platform is for educational purposes only. All activities are confined to our sandboxed environments. Any attempt to use learned skills for unauthorized activities is strictly forbidden and illegal. By signing up, you agree to our Ethical Use Policy.
            </p>
            <a href="#" className="text-primary hover:underline font-semibold">
               Read our Ethical Use Policy
            </a>
       </section>
      
       <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default LandingPage;
