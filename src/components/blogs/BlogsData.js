// Replace these imports with your actual image paths
import emergency from "../../assets/images/blog_imgs/ISO-4500.jpeg";
// import ecofriendly from "../../assets/images/blog_imgs/eco-friendly.png";
// import clearingAndAir from "../../assets/images/blog_imgs/clearingAndAir.png";
// import energizing from "../../assets/images/blog_imgs/energizing.png";
import navigating_Environment from "../../assets/images/blog_imgs/ISO-9001201.jpeg";
// import navigating_iso from "../../assets/images/blog_imgs/navigating_iso.png";
import oms from "../../assets/images/blog_imgs/internal-audit-proces.jpeg";
import safetyFirst from "../../assets/images/blog_imgs/third-party-inspectio.jpeg";
// import unralleving from "../../assets/images/blog_imgs/unralleving.png";
import airquality from "../../assets/images/blog_imgs/Air-quality-testin.jpeg";
import isoOneforth from "../../assets/images/blog_imgs/ISO-14001.jpg";
import isoMistake from "../../assets/images/blog_imgs/ISO-documentation-mistake.jpeg";
import hazardIdentification from "../../assets/images/blog_imgs/Hazard-Identificatio.jpeg";
import managementReview from "../../assets/images/blog_imgs/management-review-meetin.jpeg";
import waterQuality from "../../assets/images/blog_imgs/water-quality-testin.jpeg";
import ISOTwentySeven from "../../assets/images/blog_imgs/ISO-27001-Indi.jpeg";
import safetyCommitteeIndia from "../../assets/images/blog_imgs/safety-committee-Indi.jpeg";
import documentControlSystem from "../../assets/images/blog_imgs/document-control-syste.jpeg";
import noiseMonitoring from "../../assets/images/blog_imgs/industrial-noise-monitorin.jpeg";
import energyManagement from "../../assets/images/blog_imgs/energy-managemen.jpeg";
import CAPAProcess from "../../assets/images/blog_imgs/CAPA-proces.jpeg";
import soilTesting from "../../assets/images/blog_imgs/soil-testin.jpeg";
import foodSafety from "../../assets/images/blog_imgs/foodsafet.jpeg";
import emergencyPreparedness from "../../assets/images/blog_imgs/emergency-preparednes.jpeg";
import ambientAirQuality from "../../assets/images/blog_imgs/ambient-air-qualit.jpeg";
import medicalDeviceQuality from "../../assets/images/blog_imgs/medical-device-qualit.jpeg";
import supplierEvaluationApproval from "../../assets/images/blog_imgs/supplier-evaluation-approva.jpeg";
import stackEmission from "../../assets/images/blog_imgs/stack-emission-monitorin.jpeg";
import integratedManagement from "../../assets/images/blog_imgs/integrated-managemen.jpeg";


/* ---------- YOUR EXISTING DATA (UNCHANGED) ---------- */
const blogPosts = [
  {
    img: emergency,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 45001 Implementation Guide for Indian Industries",
    summary:
      "ISO 45001 certification, occupational health and safety management, workplace safety India, ISO 45001 guide",
    tags: ["ISO 45001 certification" , "ISO 45001 guide"],
    url: "/blog/iso-45001-implementation-guide",
  },
  
  {
    img: navigating_Environment,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 9001:2015 Risk-Based Thinking Implementation Guide",
    summary:
      "Learn how to implement risk-based thinking in ISO 9001:2015. Practical approaches to identify risks, assess opportunities, and integrate into QMS.",
    tags: ["quality management risk assessment"],
    url: "/blog/iso-9001-risk-based-thinking",
  },
  {
    img: oms,
    date: "22 July 2024",
    readTime: "4 min",
    title: "How to Conduct an Internal Audit: A Practical Guide",
    summary:
      "Step-by-step guide to conducting effective internal audits. Learn planning, execution, reporting, and follow-up for ISO management systems.",
    tags: ["ISO internal audit", "audit planning"],
    url: "/blog/internal-audit-process-guide",
  },
  {
    img: safetyFirst,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Third-Party Inspection: What Manufacturers Need to Know",
    summary:
      "Complete guide to third-party inspection services for Indian manufacturers. Learn when TPI is required, benefits, process, and selection criteria.",
    tags: ["TPI services India", "independent inspection"],
    url: "/blog/third-party-inspection-manufacturing",
  },
  {
    img: airquality,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Air Quality Testing Guide",
    summary:
      "Complete guide to industrial air quality testing in India. Learn monitoring requirements, parameters, compliance, and best practices for industries.",
    tags: ["environmental monitoring India", "CPCB compliance"],
    url: "/blog/industrial-air-quality-testing",
  },
   { img: isoOneforth,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 14001 for Indian Manufacturing: Step-by-Step Guide",
    summary:
      "Complete guide to ISO 14001 implementation for Indian manufacturers. Learn environmental management system requirements, benefits, and certification.",
    tags: ["ISO 14001 certification", "ISO 14001 benefits"],
    url: "/blog/iso-14001-implementation-india",
  },
  {
    img: isoMistake,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Common Mistakes in ISO Documentation (And How to Fix Them)",
    summary:
      "Learn the most common ISO documentation mistakes Indian manufacturers make and practical solutions to create effective, audit-ready documentation.",
    tags: ["quality management system documentation"],
    url: "/blog/iso-documentation-mistakes",
  },
  {
    img: hazardIdentification,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Hazard Identification and Risk Assessment (HIRA) Guide",
    summary:
      "Complete guide to HIRA for Indian industries. Learn hazard identification techniques, risk assessment methods, and control measures for workplace safety.",
    tags: ["hazard identification", "HIRA methodology"],
    url: "/blog/hira-hazard-risk-assessment",
  },
  {
    img: managementReview,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Management Review Meeting: Making It Meaningful",
    summary:
      "Learn how to conduct effective ISO management review meetings that drive strategic decisions, not just compliance checkboxes for Indian industries.",
    tags: ["ISO management review", "MRM agenda"],
    url: "/blog/management-review-meeting-iso",
  },
  {
    img: waterQuality,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Water Quality Testing: Parameters and Compliance",
    summary:
      "Complete guide to water quality testing for Indian industries. Learn parameters, compliance requirements, and best practices for monitoring programs.",
    tags: ["water testing parameters", "effluent testing"],
    url: "/blog/water-quality-testing-india",
  },
  {
    img: documentControlSystem,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Document Control System: From Paper to Digital",
    summary:
      "Learn how to build effective document control systems for ISO compliance. Covers paper and digital approaches, best practices, and common mistakes.",
    tags: ["ISO document control", "quality documentation"],
    url: "/blog/document-control-system-iso",
  },
 
  {
    img: ISOTwentySeven,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 27001: Information Security for Indian Businesses",
    summary:
      "Complete guide to ISO 27001 implementation for Indian businesses. Learn information security management, data protection, and certification benefits.",
    tags: ["ISO 27001 certification", "ISMS implementation"],
    url: "/blog/iso-27001-information-security",
  },
  {
    img: noiseMonitoring,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Noise Monitoring in Industrial Environments: Compliance",
    summary:
      "Complete guide to industrial noise monitoring in India. Learn compliance requirements, measurement techniques, and control measures for workplaces.",
    tags: ["noise level assessment", "factory noise standards"],
    url: "/blog/industrial-noise-monitoring-compliance",
  },
  {
    img: safetyCommitteeIndia,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Safety Committee Formation: Legal Requirements and Best Practices",
    summary:
      "Complete guide to forming safety committees in Indian industries. Learn legal requirements, structure, responsibilities, and effective operations.",
    tags: ["safety committee requirements", "OSH Code 2020"],
    url: "/blog/safety-committee-requirements-india",
  },

   {
    img: CAPAProcess,
    date: "22 July 2024",
    readTime: "4 min",
    title: "CAPA Process Guide: ISO Corrective Actions",
    summary:
      "Complete guide to implementing effective CAPA processes in ISO systems. Learn root cause analysis, corrective actions, and prevention strategies.",
    tags: ["root cause analysis", "ISO 9001 CAPA"],
    url: "/blog/capa-process-iso-standards",
  },

   {
    img: foodSafety,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 22000 Food Safety Management System Guide",
    summary:
      "Complete guide to ISO 22000 implementation for food businesses. Learn HACCP integration, certification process, and food safety compliance in India.",
    tags: ["ISO 22000 certification India"],
    url: "/blog/iso-22000-food-safety-management",
  },
  {
    img: soilTesting,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Soil Testing & Contamination Assessment Guide",
    summary:
      "Complete guide to soil testing and contamination assessment for Indian industries. Learn testing parameters, compliance requirements, and remediation.",
    tags: ["soil quality testing India", "remediation planning"],
    url: "/blog/soil-testing-contamination-assessment",
  },
  {
    img: emergencyPreparedness,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Emergency Preparedness & Response Planning Guide",
    summary:
      "Complete guide to emergency preparedness and response planning for Indian industries. Learn ERP development, drills, compliance, and crisis management.",
    tags: ["emergency drill procedures", "ERP compliance"],
    url: "/blog/emergency-preparedness-response-plan",
  },
  {
    img: energyManagement,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 50001: Energy Management Systems for Indian Industries",
    summary:
      "Complete guide to ISO 50001 implementation for Indian manufacturers. Learn energy management system requirements, benefits, and certification process.",
    tags: ["energy cost reduction", "EnMS implementation"],
    url: "/blog/iso-50001-energy-management",
  },
  {
    img: ambientAirQuality,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Ambient Air Quality Monitoring: Guide for India",
    summary:
      "Complete guide to ambient air quality monitoring for Indian industries. Learn CPCB requirements, monitoring parameters, compliance, and best practices.",
    tags: ["AQI measurement", "air quality monitoring India"],
    url: "/blog/ambient-air-quality-monitoring",
  },
  {
    img: supplierEvaluationApproval,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Supplier Evaluation & Approval Process Guide",
    summary:
      "Complete guide to supplier evaluation and approval under ISO standards. Learn assessment criteria, audit procedures, and performance monitoring.",
    tags: ["supplier assessment ISO", "supplier qualification"],
    url: "/blog/supplier-evaluation-approval-iso",
  },
  {
    img: medicalDeviceQuality,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 13485 Medical Device Quality Management Guide",
    summary:
      "Complete guide to ISO 13485 for medical device manufacturers. Learn QMS requirements, regulatory compliance, certification process, and risk management.",
    tags: ["medical device manufacturing " , "medical device QMS"],
    url: "/blog/iso-13485-medical-device-quality",
  },
  {
    img: stackEmission,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Stack Emission Monitoring: Compliance Best Practices",
    summary:
      "Complete guide to stack emission monitoring for Indian industries. Learn CPCB requirements, testing parameters, compliance procedures, and reporting.",
    tags: ["industrial emission control", "flue gas analysis"],
    url: "/blog/stack-emission-monitoring-compliance",
  },
  {
    img: integratedManagement,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Integrated Management Systems: Combining ISO Standards",
    summary:
      "Complete guide to Integrated Management Systems (IMS) combining ISO 9001, ISO 14001, ISO 45001. Learn integration benefits, implementation, and auditing.",
    tags: ["ISO integration", "ISO 9001 14001 45001 integration"],
    url: "/blog/integrated-management-systems-ims",
  },
];


export default blogPosts