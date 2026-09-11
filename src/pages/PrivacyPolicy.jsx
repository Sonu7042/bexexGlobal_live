import React, { useEffect, useRef, useState } from "react";
import { HeadingComponent } from "../components/Buttons";
import Footer from "../components/Footer";
import LetsConnect from "../components/LetsConnect";
import { FaArrowRightLong } from "react-icons/fa6";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    subsections: [
      {
        content: `Last Updated: 01.01.2026

Bexex Global Pvt. Ltd. (“Bexex Global”, “we”, “us”, or “our”) operates multiple websites and digital platforms and related offerings under its own brand and through associated platforms, including eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this policy applies to all current and future services, features, products, and digital properties operated by Bexex Global Pvt. Ltd., whether provided online, offline, or through any digital or physical medium.

This Privacy Policy explains how personal information is collected, used, stored, and disclosed when users access or use our services. By using our websites or platforms, you agree to the practices described in this Privacy Policy.
`,
      },

      {
        title: "Information Collection and Use",
        content: `To provide an effective learning and professional development experience, Bexex Global may collect personal information such as name, email address, phone number, location details, professional background, login credentials, profile information, resume data, course enrollment records, certificate information, and user-generated content submitted through community features. This information is collected to enable access to training programs, manage user accounts, issue certificates, provide learning resources, facilitate community participation, share career or freelance opportunities, send newsletters, and improve overall platform functionality.

Personal information is used solely for legitimate business and service-related purposes. Bexex Global does not sell, rent, or trade personal information to third parties.`,
      },

      {
        title: "Log Data",
        content: `Whenever users visit our websites or platforms, certain information is automatically collected through standard technology. This log data may include the Internet Protocol address of the device, browser type and version, operating system, pages visited, date and time of access, duration of visits, and other usage statistics. This data is used for system administration, security monitoring, analytics, and continuous improvement of our services.`,
      },

      {
        title: "Cookies",
        content: `Bexex Global uses cookies and similar technologies to enhance user experience and improve service performance. Cookies help us maintain login sessions, remember user preferences, understand usage patterns, and analyze platform traffic. Users may choose to disable cookies through their browser settings; however, doing so may limit access to certain features or functionality of the platform.`,
      },

      {
        title: "Service Providers",
        content: `Bexex Global may engage third-party service providers to support platform operations, including hosting services, learning management systems, email communication tools, analytics services, and security solutions. These service providers are granted access to personal information only to the extent necessary to perform their assigned tasks on our behalf and are contractually obligated to maintain confidentiality and use the information solely for authorized purposes.`,
      },

      {
        title: "User-Generated Content",
        content: `Users may voluntarily create profiles, post content, participate in discussions, and upload documents or resources on the platform. Users are solely responsible for the content they submit and confirm that they own or have legal rights to share such content. Bexex Global does not claim ownership of user-generated content but reserves the right to review, moderate, remove, or restrict access to any content that violates applicable laws, intellectual property rights, confidentiality obligations, or community guidelines.`,
      },

      {
        title: "Security",
        content: `We value the trust users place in us when sharing personal information and take reasonable administrative, technical, and organizational measures to protect such data. Despite these efforts, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect personal information, Bexex Global cannot guarantee absolute security.`,
      },

      {
        title: "Links to Other Websites",
        content: `Our services may contain links to third-party websites or platforms that are not operated by Bexex Global. We have no control over the content, privacy practices, or policies of such external sites and assume no responsibility for them. Users are encouraged to review the privacy policies of any third-party websites they choose to visit.`,
      },

      {
        title: "Children’s Privacy",
        content: `Bexex Global platforms are designed to support learning for users of all age groups, including students and minors. We do not knowingly collect personal information from children under the age of 13 without appropriate parental or guardian consent. If we become aware that personal information has been collected from a child under 13 without consent, we will take steps to remove such information from our records. Certain professional features, including job listings, freelance opportunities, and resume visibility, are restricted to users aged 18 years and above.`,
      },

      {
        title: "Data Retention",
        content: `Personal information is retained only for as long as necessary to fulfill the purposes for which it was collected, comply with legal and regulatory obligations, resolve disputes, and enforce agreements. Users may request correction or deletion of personal data, subject to applicable legal and operational requirements.`,
      },

      {
        title: "Changes to This Privacy Policy",
        content: `Bexex Global reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. Continued use of the platform after changes are published constitutes acceptance of the revised Privacy Policy.`,
      },

      {
        title: "Contact Information",
        content: `If you have any questions regarding this Privacy Policy or how your information is handled, please contact:

Bexex Global Pvt. Ltd.
Email: info@bexexglobal.com
Websites: www.bexexglobal.com | www.egrowthindia.com`,
      },
    ],
  },

  {
    id: "terms",
    title: "Terms and Conditions",
    subsections: [
      {
        content: `Version: January 2026

        Last Updated: 01.01.2026 

        Bexex Global Pvt. Ltd. (“Bexex Global”, “we”, “us”, or “our”) operates multiples websites and digital platforms and related offerings under its own brand and through associated platforms, including eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this policy applies to all current and future services, features, products, and digital properties operated by Bexex Global Pvt. Ltd., whether provided online, offline, or through any digital or physical medium.

        By accessing or using any service operated by Bexex Global Pvt. Ltd., users agree to be bound by these Terms and Conditions. If a user does not agree to these terms, the services must not be accessed or used.
`,
      },
      {
        title: "Article 1. Services",
        content: `Bexex Global Pvt. Ltd. provides professional learning, training, consulting, and digital services, including but not limited to online and offline training programs, learning management system access, community interaction features, digital resources, newsletters, certificates with online verification, and career or freelance opportunity sharing. The scope, format, and availability of services may vary depending on the specific program, subscription, or engagement. Certain services may be delivered directly by Bexex Global Pvt. Ltd. or through its learning platform eGrowthIndia.com and BexexGlobal.com.

        Bexex Global makes reasonable efforts to ensure that services are delivered in a professional manner consistent with industry standards. However, users acknowledge that learning outcomes, career progression, audit readiness, compliance results, or employment opportunities depend on multiple factors beyond the control of Bexex Global and therefore cannot be guaranteed.

        Bexex Global reserves the right to modify, update, suspend, or discontinue any service, feature, or content at any time, either temporarily or permanently, with or without prior notice.
`,
      },

      {
        title: "Article 2. Performance of Services and User Obligations",
        content: `Users agree to provide accurate, current, and complete information during registration and while using the platform. Users are responsible for maintaining the confidentiality of their login credentials and for all activities conducted through their accounts. Any misuse, unauthorized access, or suspected breach must be reported immediately.

        The quality and effectiveness of services depend in part on user participation, timely input, and responsible conduct. Users agree to cooperate reasonably by providing required information, respecting timelines, and adhering to platform guidelines. Bexex Global shall not be responsible for delays, limitations, or reduced effectiveness of services resulting from incomplete, inaccurate, or delayed user input.

        Bexex Global may use internal teams, trainers, consultants, subcontractors, or third-party tools to deliver services efficiently. The use of such third parties does not relieve Bexex Global of its responsibility for overall service delivery.

        Services are provided on a non-exclusive basis, and Bexex Global may offer similar services to other individuals or organizations, including those operating in the same sector as the user.
`,
      },

      {
        title: "Article 3. Term and Termination",
        content: `These Terms and Conditions remain in effect for as long as the user accesses or uses any service operated by Bexex Global Pvt. Ltd. Users may discontinue use of the platform at any time by ceasing access or requesting account deletion, subject to applicable data retention requirements.

        Bexex Global reserves the right to suspend or terminate access to services immediately, without prior notice, in cases of misuse, violation of these Terms, breach of community guidelines, unlawful activity, non-payment of fees where applicable, or behavior that may harm the platform, other users, or Bexex Global’s reputation.

        Termination does not affect provisions that by their nature are intended to survive, including confidentiality, intellectual property, limitation of liability, and dispute resolution clauses.
`,
      },

      {
        title: "Article 4. Fees, Payments, and Access",
        content: `Certain services, courses, subscriptions, or programs may be offered free of charge, while others may require payment. Fees, subscription terms, access duration, and payment schedules will be communicated at the time of enrollment or purchase. Unless otherwise stated, fees are non-refundable once access has been granted.

        Bexex Global reserves the right to suspend access to paid services in the event of non-payment. Changes to pricing or subscription models may occur from time to time and will apply prospectively.

`,
      },

      {
        title: "Article 5. Confidentiality",
        content: `During the course of using the services, users may gain access to confidential or non-public information relating to Bexex Global, eGrowthIndia.com, other users, trainers, or partner organizations. Users agree to keep such information confidential and to use it only for legitimate purposes related to the services.

        Confidential information does not include information that is publicly available, independently developed, or lawfully obtained from a third party. Confidentiality obligations continue even after termination of access to the platform.

`,
      },

      {
        title: "Article 6. Liability",
        content: `Services are provided on an “as-is” and “as-available” basis. To the maximum extent permitted by law, Bexex Global Pvt. Ltd. shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, data, business opportunities, or reputation, arising from the use or inability to use the services.

        Bexex Global’s total liability, if any, shall be limited to the amount paid by the user for the specific service giving rise to the claim, during the twelve months preceding the event. This limitation does not apply in cases of proven willful misconduct or gross negligence.

`,
      },

      {
        title: "Article 7. Intellectual Property Rights",
        content: `All content provided by Bexex Global, including training materials, videos, presentations, templates, logos, designs, trademarks, and digital resources, is protected by intellectual property laws and remains the exclusive property of Bexex Global Pvt. Ltd. or its licensors. Users are granted a limited, non-transferable, non-exclusive right to access and use such content for personal or internal professional learning purposes only.

        Users retain ownership of content they submit, post, or upload but grant Bexex Global a non-exclusive, royalty-free, worldwide license to host, display, reproduce, and moderate such content for platform operation and service delivery. Users warrant that their content does not infringe third-party rights or violate confidentiality obligations.


`,
      },

      {
        title: "Article 8. Data Protection",
        content: `Bexex Global processes personal data in accordance with applicable data protection laws, including Indian data protection regulations and, where applicable, international standards. Personal data may be processed for service delivery, administration, communication, compliance, and platform improvement purposes. Detailed information on data processing practices is provided in the Privacy Policy, which forms an integral part of these Terms and Conditions.
`,
      },

      {
        title: "Miscellaneous",
        content: `Bexex Global shall not be liable for failure or delay in performance caused by events beyond its reasonable control, including natural disasters, technical failures, governmental actions, or force majeure events. These Terms constitute the entire agreement between the user and Bexex Global regarding platform use and supersede any prior understandings.

        If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. These Terms shall be governed by and interpreted in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in India.


`,
      },
    ],
  },

  {
    id: "community",
    title: "Community Guidelines",
    subsections: [
      {
        content: `Last Updated: 01.01.2026

        Bexex Global Pvt. Ltd. (“Bexex Global”, “we”, “us”, or “our”) operates multiples websites and digital platforms and related offerings under its own brand and through associated platforms, including eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this policy applies to all current and future services, features, products, and digital properties operated by Bexex Global Pvt. Ltd.

        These Community Guidelines apply to all users participating in community features such as discussion forums, question and answer sections, chat groups, comments, profile interactions, and any other user-to-user communication enabled on the platform. By participating in the community, users agree to follow these Community Guidelines in addition to the Terms and Conditions and other applicable policies.
`,
      },
      {
        title: "Purpose of the Community",
        content: `The eGrowth community exists to encourage constructive discussions, practical knowledge exchange, peer learning, and professional growth across areas such as quality, safety, environment, sustainability, energy, leadership, and compliance. All interactions should be respectful, relevant, and aligned with the purpose of learning and professional development.`,
      },

      {
        title: "Expected Conduct",
        content: `Users are expected to communicate respectfully and professionally at all times. Discussions should remain focused on learning, problem-solving, and experience sharing. Differences in opinions are welcome, but they must be expressed politely and without personal attacks. Users should avoid language or behavior that may be offensive, intimidating, misleading, or disruptive to others.`,
      },

      {
        title: "Prohibited Behavior",
        content: `The following behaviors are not permitted on the platform. This includes abusive, harassing, threatening, or discriminatory language; personal attacks or insults; hate speech; sexually explicit or inappropriate content; spamming; repeated self-promotion; misleading professional claims; impersonation of others; solicitation without permission; and any activity that violates applicable laws or regulations.

        Users must not post or share content that is defamatory, false, or intended to harm the reputation of individuals, organizations, or communities.
`,
      },

      {
        title: "Content Responsibility",
        content: `Users are solely responsible for the content they post, comment on, upload, or share within the community. This includes text, documents, images, links, and any other materials. Users must ensure that their content does not violate intellectual property rights, confidentiality obligations, or privacy rights of any third party.

        Sharing proprietary company documents, confidential client information, paid training materials, internal audit reports, or copyrighted resources without authorization is strictly prohibited.

`,
      },

      {
        title: "Professional Profiles and Representation",
        content: `Users are responsible for ensuring that information shared in their profiles, resumes, or professional descriptions is accurate and truthful. Misrepresentation of qualifications, certifications, experience, or affiliations is not permitted. Bexex Global does not verify user-provided profile information unless explicitly stated.
`,
      },

      {
        title: "Safety and Protection of Minors",
        content: `The platform may be accessed by users under the age of 18 for general learning purposes. Any form of inappropriate communication, grooming, solicitation, or exploitation involving minors is strictly prohibited and will result in immediate action, including account suspension and reporting where required by law.

        Professional features such as job postings, freelance opportunities, and resume visibility are intended only for users aged 18 years and above.

`,
      },

      {
        title: "Moderation and Enforcement",
        content: `Bexex Global reserves the right to monitor, review, moderate, edit, restrict, or remove any content or user activity that violates these Community Guidelines, the Terms and Conditions, or applicable laws. Moderation may occur proactively or in response to user reports.

        Actions may include content removal, warnings, temporary suspension, permanent account termination, or restriction of specific features, depending on the severity and frequency of violations.


`,
      },

      {
        title: "Reporting Violations",
        content: `Users are encouraged to report content or behavior that violates these Community Guidelines. Reports will be reviewed in a reasonable timeframe. Bexex Global does not guarantee immediate action but will take appropriate steps based on the nature of the issue.

`,
      },

      {
        title: "No Endorsement",
        content: `Opinions, advice, and information shared by users within the community reflect the views of the individual users and do not represent the views of Bexex Global Pvt. Ltd. or eGrowthIndia.com. Participation in discussions does not constitute professional, legal, or regulatory advice.

`,
      },

      {
        title: "Changes to These Guidelines",
        content: `Bexex Global may update these Community Guidelines from time to time to reflect platform growth, legal requirements, or community needs. Updated versions will be posted on the platform, and continued participation in the community constitutes acceptance of the revised guidelines.
`,
      },
    ],
  },

  {
    id: "content",
    title: "Content Upload & Resource Policy",
    subsections: [
      {
        content: `Last Updated: 01.01.2026

        This Content Upload & Resource Policy governs the submission, sharing, access, and use of all content uploaded or shared by users on platforms operated by Bexex Global Pvt. Ltd., including eGrowthIndia.com. This policy applies to all learning resources, documents, presentations, templates, formats, forms, comments, posts, and any other materials uploaded or made available by users through the platform.

        By uploading, sharing, or accessing content on the platform, users agree to comply with this policy in addition to the Terms and Conditions, Privacy Policy, and Community Guidelines.
`,
      },

      {
        title: "Purpose of User-Shared Content",
        content: `The platform allows users to upload and share content to support learning, knowledge exchange, and professional development. Resources may be shared to assist others in understanding concepts, applying standards, improving practices, or supporting training and implementation activities. All shared content must align with the educational and professional purpose of the platform.`,
      },

      {
        title: "User Responsibility and Ownership",
        content: `Users are solely responsible for any content they upload, share, or make available on the platform. By uploading content, users confirm that they either own the content or have obtained all necessary rights, permissions, and authorizations to share it. Users must ensure that their content does not infringe intellectual property rights, 
        confidentiality obligations, contractual restrictions, or privacy rights of any individual or organization.

        Bexex Global does not claim ownership over user-uploaded content. However, by submitting content, users grant Bexex Global a non-exclusive, royalty-free, worldwide license to host, store, display, reproduce, and distribute such content solely for the purpose of operating, promoting, and improving the platform.
`,
      },

      {
        title: "Prohibited Content",
        content: `Users must not upload or share content that is confidential, proprietary, or restricted, including but not limited to internal company documents, client data, audit reports, paid training materials, licensed standards, copyrighted books, examination content, or any information protected by non-disclosure agreements. Content containing personal data of third parties without consent, misleading information, defamatory statements, or unlawful material is strictly prohibited.

        Uploading content that belongs to another person or organization without explicit authorization is a violation of this policy and may result in immediate removal and further action.

`,
      },

      {
        title: "Quality and Accuracy of Resources",
        content: `While the platform encourages sharing of practical and useful resources, Bexex Global does not verify the accuracy, completeness, or suitability of user-uploaded content. Users accessing shared resources are responsible for reviewing and validating the information before applying it in professional or operational contexts. Bexex Global does not guarantee that user-shared resources comply with current laws, standards, or regulations.
`,
      },

      {
        title: "Moderation and Removal Rights",
        content: `Bexex Global reserves the right to review, moderate, restrict, or remove any uploaded content at its discretion, with or without prior notice, if such content is found to violate this policy, applicable laws, or platform guidelines, or if it poses legal, reputational, or security risks. Repeated or serious violations may result in suspension or termination of user accounts.

        Bexex Global is not obligated to monitor all content prior to publication but will act on reported concerns or identified violations in a reasonable manner.

`,
      },

      {
        title: "Reporting Infringements",
        content: `Users who believe that content uploaded on the platform infringes their intellectual property rights, confidentiality obligations, or privacy may report such content for review. Upon receiving a valid complaint, Bexex Global may remove or restrict access to the content while investigating the matter. Users submitting false or abusive complaints may be subject to action.
`,
      },

      {
        title: "No Warranty or Liability",
        content: `All user-uploaded content and shared resources are provided on an “as-is” basis. Bexex Global does not warrant the legality, accuracy, or suitability of such content and shall not be liable for any loss, damage, or consequences arising from reliance on user-shared materials.
`,
      },

      {
        title: "Changes to This Policy",
        content: `Bexex Global may update this Content Upload & Resource Policy from time to time to address platform growth, legal requirements, or emerging risks. Updated versions will be posted on the platform, and continued use of content upload or access features constitutes acceptance of the revised policy.
`,
      },
    ],
  },

  {
    id: "career",
    title: "Career, Job & Freelance Disclaimer",
    subsections: [
      {
        content: `Last Updated: 01.01.2026

        This Career, Job & Freelance Disclaimer applies to all career-related features, job postings, freelance opportunities, professional networking, profile visibility, and opportunity sharing made available on platforms operated by Bexex Global Pvt. Ltd., including eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this disclaimer applies equally to both.

        The platform may provide access to career guidance, job notifications, freelance opportunities, and project-based work shared by community members, partner organizations, or Bexex Global itself. These features are intended solely to facilitate information sharing and professional visibility and do not constitute a recruitment agency service, employment guarantee, or placement commitment.

        Bexex Global does not guarantee employment, freelance engagement, project allocation, income generation, or career outcomes for any user. All job listings, freelance opportunities, and project requirements shared on the platform are provided for informational purposes only. Users are solely responsible for evaluating the suitability, authenticity, and terms of any opportunity before applying or engaging.

        Freelance or project-based opportunities shared by Bexex Global Pvt. Ltd. are subject to internal selection criteria, availability of work, client requirements, and independent contractual arrangements. Participation in training programs, community activities, or certification does not create any obligation on Bexex Global to offer work, nor does it guarantee selection for any assignment.

        Any communication, agreement, or engagement entered into between users and third parties, including employers, clients, or other community members, is strictly between those parties. Bexex Global is not a party to such arrangements and shall not be responsible for disputes, losses, non-payment, misrepresentation, or contractual disagreements arising from such engagements.

        Users are responsible for ensuring that information shared in their profiles, resumes, or professional descriptions is accurate and lawful. Misrepresentation of qualifications, certifications, experience, or availability may result in restriction or termination of access to career-related features.

        Career-related features, including job visibility and freelance opportunities, are intended for users aged 18 years and above. Users below 18 may access general learning content but are restricted from participating in professional engagement, employment-related interactions, or freelance opportunities.

        Bexex Global does not verify the legitimacy, accuracy, or legal compliance of job postings or freelance requirements shared by third parties. Users are advised to exercise due diligence and caution before sharing personal information or entering into professional agreements.

        Bexex Global shall not be liable for any direct or indirect loss, damage, or consequence arising from reliance on career information, job postings, or freelance opportunities accessed through the platform.

        This disclaimer should be read in conjunction with the Terms and Conditions, Privacy Policy, Community Guidelines, and Content Upload & Resource Policy. Continued use of career-related features constitutes acceptance of this disclaimer.
`,
      },
    ],
  },

  {
    id: "certificate",
    title: "Certificate & Verification Policy",
    subsections: [
      {
        content: `Last Updated: 01.01.2026

        This Certificate & Verification Policy applies to all training certificates, digital credentials, and verification services issued through platforms operated by Bexex Global Pvt. Ltd., including eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this policy applies equally to both.

        Bexex Global provides training certificates to users who successfully complete eligible courses, programs, or learning requirements as defined for each training offering. Certificates are issued to acknowledge participation, completion, or assessment outcomes related to learning activities delivered through online, offline, or blended training modes.

        Training certificates issued by Bexex Global represent evidence of learning or course completion only. They do not constitute professional licenses, statutory certifications, regulatory approvals, or guarantees of competence, compliance, employment, promotion, or career advancement. Users remain solely responsible for ensuring that any regulatory, legal, or professional requirements applicable to their role or industry are met through appropriate authorities.

        Certificates may be issued in digital format and may include features such as unique identification numbers, QR codes, or online verification links. These features are provided to support authenticity checks and record validation. Online verification confirms that a certificate was issued by Bexex Global to the named individual for the stated course and completion date. Verification does not validate professional capability, legal eligibility, or compliance status.

        Users are responsible for ensuring that personal information displayed on certificates is accurate at the time of course completion. Requests for correction of name or other personal details may be considered at the discretion of Bexex Global and may require supporting documentation. Bexex Global reserves the right to refuse changes where misuse, misrepresentation, or repeated requests are identified.

        Certificates are issued for individual use only and must not be altered, edited, misrepresented, transferred, sold, or used in a misleading manner. Any attempt to falsify, modify, duplicate, or misuse a certificate, or to present it as evidence of qualifications beyond its stated purpose, may result in cancellation of the certificate, suspension or termination of the user account, and further action where required by law.

        Bexex Global reserves the right to withdraw, revoke, or invalidate any certificate if it is found that the certificate was obtained through fraudulent means, misuse of the platform, violation of Terms and Conditions, breach of Community Guidelines, or provision of false information.

        Certificates may be retained in user accounts for record purposes. Access to certificates may be limited or removed if an account is suspended or terminated, subject to applicable legal requirements.

        Bexex Global does not guarantee that certificates will be accepted or recognized by employers, regulatory bodies, certification authorities, or third parties. Acceptance and recognition of certificates are solely at the discretion of the receiving organization or authority.

        This Certificate & Verification Policy should be read in conjunction with the Terms and Conditions, Privacy Policy, Community Guidelines, Content Upload & Resource Policy, and Career, Job & Freelance Disclaimer. Continued participation in training programs and use of certificates constitutes acceptance of this policy.
`,
      },
    ],
  },

  {
    id: "refund",
    title: "Refund & Subscription Policy",
    subsections: [
      {
        content: `Last Updated: 01.01.2026 

        This Refund & Subscription Policy applies to all paid training programs, subscriptions, learning management system access, digital services, and any other paid offerings provided by Bexex Global Pvt. Ltd., including those delivered through eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this policy applies equally to both platforms.

        Bexex Global may offer a combination of free and paid services, including individual courses, bundled programs, subscriptions, and customized training solutions. Details regarding pricing, access duration, inclusions, and payment terms are communicated at the time of enrollment, purchase, or subscription.

        Payments made for courses, subscriptions, or services grant access to digital content, learning resources, certificates, and platform features as described at the time of purchase. Once access to a paid course, program, or subscription is granted, fees are generally non-refundable unless otherwise explicitly stated.

        Refunds may be considered only in limited circumstances, such as duplicate payments, technical errors preventing access, or cancellation of a program by Bexex Global before commencement. Requests for refunds must be submitted in writing within the timeframe specified at the time of purchase or within a reasonable period where no specific timeframe is mentioned. All refund requests are subject to review and approval by Bexex Global.

        No refunds will be issued for dissatisfaction based on learning outcomes, personal expectations, changes in professional requirements, lack of usage, partial completion, or failure to complete a course within the access period. Certificates issued or learning materials accessed may further limit eligibility for refunds.

        Subscription-based services provide access for a defined period, such as monthly or annual terms. Subscriptions may automatically renew unless cancelled by the user before the renewal date, where such functionality is enabled. Users are responsible for managing their subscription status, including cancellations or renewals, through their account settings or designated communication channels.

        Bexex Global reserves the right to suspend or terminate access to paid services in cases of non-payment, misuse of the platform, violation of Terms and Conditions, or breach of applicable policies. Suspension or termination for such reasons does not entitle the user to a refund.

        In cases where services are delivered through offline or in-company training, cancellation and refund terms may differ and will be governed by separate written agreements or proposals specific to that engagement.

        Bexex Global may revise pricing, subscription structures, or access models from time to time. Any such changes will apply prospectively and will not affect payments already made for existing access periods, unless otherwise stated.

        This Refund & Subscription Policy should be read together with the Terms and Conditions, Privacy Policy, Community Guidelines, Content Upload & Resource Policy, Career, Job & Freelance Disclaimer, and Certificate & Verification Policy. Continued use of paid services constitutes acceptance of this policy.
`,
      },
    ],
  },

  {
    id: "education",
    title: "Education & Compliance Notice",
    subsections: [
      {
        content: `Last Updated: 01.01.2026

       This General Education, Training & Compliance Disclaimer applies to all training programs, learning materials, digital content, community discussions, resources, certificates, and services provided by Bexex Global Pvt. Ltd., including those delivered through eGrowthIndia.com. Bexex Global Pvt. Ltd. is the parent company of eGrowthIndia.com, and this disclaimer applies equally to both platforms.

       All courses, training programs, learning materials, discussions, resources, and guidance provided through the platform are intended solely for educational and professional development purposes. The content is designed to support learning, awareness, and skill development across areas such as quality, safety, environment, sustainability, energy, leadership, management systems, and regulatory understanding.

       Training content, examples, interpretations, templates, and discussions do not constitute legal advice, regulatory advice, certification authority guidance, or professional consultancy services. Users should not rely solely on the training content to make compliance, legal, statutory, or operational decisions. Applicable laws, regulations, standards, and requirements may vary based on jurisdiction, industry, organization, and time, and users are responsible for ensuring compliance with the latest and applicable requirements through appropriate authorities or qualified professionals.

       References to standards, including but not limited to ISO standards, Indian Standards (IS), laws, rules, guidelines, or best practices, are provided for learning and awareness purposes only. Completion of a course or possession of a training certificate does not imply compliance with any standard, law, or regulatory requirement, nor does it substitute formal certification, accreditation, or statutory approval.

       Community discussions, questions, responses, shared resources, and user-generated content reflect the opinions and experiences of individual users and do not represent official positions, advice, or endorsements by Bexex Global Pvt. Ltd. or eGrowthIndia.com. Bexex Global does not verify, validate, or guarantee the accuracy, completeness, or applicability of user-shared content.

       While reasonable efforts are made to ensure that training materials and learning content are accurate and relevant at the time of delivery, Bexex Global makes no representations or warranties regarding the completeness, accuracy, reliability, or suitability of the content for any specific purpose. Users acknowledge that learning outcomes, audit readiness, compliance performance, safety results, or professional advancement depend on multiple factors beyond the control of Bexex Global.

       Bexex Global shall not be liable for any direct or indirect loss, damage, penalty, claim, or consequence arising from the use of training content, reliance on learning materials, application of shared resources, or participation in community discussions. Users assume full responsibility for how they apply learning in their professional or personal context.

       This disclaimer should be read in conjunction with the Terms and Conditions, Privacy Policy, Community Guidelines, Content Upload & Resource Policy, Certificate & Verification Policy, Career, Job & Freelance Disclaimer, and Refund & Subscription Policy. Continued use of the platform constitutes acceptance of this disclaimer.
`,
      },
    ],
  },
];

export default function PrivacyNavigate() {
  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let sec of sections) {
        const el = sectionRefs.current[sec.id];

        if (!el) continue;

        const offsetTop = el.offsetTop;
        const height = el.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActive(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  return (
    <>
      <section className="px-4 md:px-16 lg:px-12 py-16">
        <HeadingComponent text="Policies & Guidelines" paddingBottom="0" />

        <div className=" max-w-8xl mx-auto grid mt-[2.86rem] lg:grid-cols-[380px_1fr] gap-10">
          {/* LEFT NAVIGATION */}

          <div className="hidden lg:block lg:sticky lg:top-24 h-fit bg-[#ffffff] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Navigate to:</h2>

            <div className="space-y-4">
              {sections.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-4 bg-[#f3f3f3] rounded-xl p-4 cursor-pointer hover:scale-104 transition"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 text-2xl rounded-md
                    ${active === item.id ? "bg-black text-[#ffffff]" : "bg-gray-200 text-gray-800"}
                    `}
                  >
                    <FaArrowRightLong />
                  </div>

                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="space-y-20">
            {sections.map((sec) => (
              <div
                key={sec.id}
                ref={(el) => (sectionRefs.current[sec.id] = el)}
                id={sec.id}
              >
                <h2 className="text-3xl font-semibold mb-6">{sec.title}</h2>

                {sec.subsections.map((sub, i) => (
                  <div key={i} className="mb-10">
                    <h3 className="text-xl font-semibold mb-3">{sub.title}</h3>

                    {sub.content.split("\n\n").map((para, p) => (
                      <p key={p} className="text-gray-600 mb-4 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsConnect />

      <Footer />
    </>
  );
}
