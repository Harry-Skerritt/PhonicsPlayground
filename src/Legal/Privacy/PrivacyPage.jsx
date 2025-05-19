import React from 'react';
import './PrivacyPage.css';

const Section = ({ title, children }) => (
    <div className="policy-section">
        <h2 className="policy-section-title">{title}</h2>
        <div className="policy-section-content">{children}</div>
    </div>
);

const PrivacyPolicyPage = () => {
    return (
        <div className="policy-container">
            <div className="policy-background" />
            <div className="policy-content">
                <h1 className="policy-title">Privacy Policy</h1>

                <Section title="1. Introduction">
                    <p>
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and disclose your personal information when you use Phonics Playground.
                    </p>
                </Section>

                <Section title="2. Information We Collect">
                    <ul>
                        <li><strong>Information You Provide:</strong> name, email, etc.</li>
                        <li><strong>Usage Information:</strong> lessons, progress, interactions.</li>
                        <li><strong>Log Data:</strong> IP address, browser type, visit times.</li>
                        <li><strong>Cookies:</strong> to personalize and remember settings.</li>
                    </ul>
                </Section>

                <Section title="3. How We Use Your Information">
                    <ul>
                        <li>To operate and improve our service</li>
                        <li>To personalize your experience</li>
                        <li>To respond to inquiries and feedback</li>
                        <li>To analyze usage trends</li>
                    </ul>
                </Section>

                <Section title="4. Sharing Your Information">
                    <ul>
                        <li><strong>Service Providers:</strong> like analytics tools or hosting</li>
                        <li><strong>Legal Requirements:</strong> if mandated by law</li>
                        <li><strong>Aggregated Data:</strong> for research and trends</li>
                    </ul>
                </Section>

                <Section title="5. Your Choices">
                    <ul>
                        <li>Update or delete personal info</li>
                        <li>Manage email preferences</li>
                        <li>Control cookies via browser settings</li>
                    </ul>
                </Section>

                <Section title="6. Security">
                    <p>
                        We use reasonable security measures to protect your information. However, no method is 100% secure.
                    </p>
                </Section>

                <Section title="7. Children’s Privacy">
                    <p>
                        We do not knowingly collect data from children under 13 without parental consent.
                    </p>
                </Section>

                <Section title="8. Changes to This Policy">
                    <p>
                        We may update this Privacy Policy. Changes will be posted on this page.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
