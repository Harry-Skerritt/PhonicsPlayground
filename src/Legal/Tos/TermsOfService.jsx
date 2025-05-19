import React from "react";
import "../Privacy/PrivacyPage.css";

const Section = ({ title, children }) => (
    <div className="policy-section">
        <h2 className="policy-section-title">{title}</h2>
        <div className="policy-section-content">{children}</div>
    </div>
);


const TOSPage = () => {
    return (
        <div className="policy-container">
            <div className="policy-background" />
            <div className="policy-content">
                <h1 className="policy-title">Terms of Service</h1>

                <Section title="1. Acceptance of Terms">
                    <p>
                        By accessing and using Phonics Playground, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you should not use the site.                    </p>
                </Section>

                <Section title="2. Description of Service">
                    Phonics Playground provides an interactive educational platform designed to help users learn phonics. The site may include various features, such as lessons, games, and progress tracking.
                </Section>

                <Section title="3. User Accounts">

                    <ul>
                        <li>                    <
                            strong class="highlight">Eligibility:</strong> You must be of sufficient legal age to use the service in your jurisdiction of residence.
                        </li>

                        <li>
                            <strong class="highlight">Account Creation:</strong> Some features may require you to create an account. You agree to provide accurate and complete information when creating your account.
                        </li>

                        <li>
                            <strong class="highlight">Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and are liable for all activities that occur under your account.
                        </li>

                        <li>
                            <strong class="highlight">Account Termination:</strong> We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason, without notice.
                        </li>
                    </ul>
                </Section>

                <Section title="4. Use of Service">
                    <p>
                        <strong class="highlight">Permitted Use:</strong> You may use the service for personal, non-commercial, and educational purposes only.
                    </p>

                    <p>
                        <strong class="highlight">Prohibited Conduct:</strong> You agree not to:
                    </p>

                    <ul class="tos-sublist">
                        <li>Use the service for any illegal purpose.</li>
                        <li>Transmit any harmful or malicious code.</li>
                        <li>Interfere with the operation of the service.</li>
                        <li>Attempt to gain unauthorized access to any part of the service.</li>
                        <li>Use any automated system or software to extract data from the service.</li>
                    </ul>
                </Section>

                <Section title="5. Intellectual Property">
                    <ul>
                        <li>
                            <strong class="highlight">Ownership:</strong> All content and materials on Phonics Playground are owned by Harry Skerritt or its licensors and are protected by copyright.
                        </li>

                        <li>
                            <strong class="highlight">Limited License:</strong> We grant you a limited, non-exclusive license to use the content for personal, non-commercial educational purposes.
                        </li>

                        <li>
                            <strong class="highlight">Restrictions:</strong> You may not modify, reproduce, or redistribute the content unless permitted.
                        </li>
                    </ul>
                </Section>

                <Section title="6. Disclaimer of Warranties">
                    <p>
                        The service is provided "as is" without warranties of any kind. We do not warrant uninterrupted or error-free operation.
                    </p>
                </Section>

                <Section title="7. Limitation of Liability">
                    <p>
                        To the fullest extent permitted, Harry Skerritt shall not be liable for any indirect, incidental, special, or consequential damages.
                    </p>
                </Section>

                <Section title="8. Indemnification">
                    <p>
                        You agree to indemnify and hold harmless Harry Skerritt and its affiliates against any claims resulting from your use of the service.
                    </p>
                </Section>

                <Section title="9. Changes to Terms">
                    <p>
                        We reserve the right to modify these Terms. Continued use of the service indicates your acceptance of changes.
                    </p>
                </Section>
            </div>
        </div>
    );
};


export default TOSPage;
