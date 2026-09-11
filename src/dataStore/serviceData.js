import img1 from "../assets/images/nature.jpg";
import booksIcon from "../assets/images/service_image/innerServices_booksIcons/books-svgrepo-com.svg";
import certificateicn from "../assets/images/service_image/innerServices_booksIcons/certificate-contract-svgrepo-com.svg";
import toolKit from "../assets/images/service_image/innerServices_booksIcons/toolkit.png";
import {
fireSaftyEHS , electricalSafety, constructionSafety , logisticsWarehouseSafety, behaviorBasedSafety, sixSigma, fiveSWorkplaceOrganization, supplierQualityManagement, leanManagement, totalProductiveMaintenance, coreQualityTools, strategyReporting, environmentCompliance, eneryManagement, managementSystem, socialWelfare, waterWasteManagement, asbestosSurvey, hydrologySurvey, staircaseAssessment, workplaceAssessment, msQualityManagement, msEnvironmetalManagement, msOccupationHealthSafety, msEnergyManagement, msBusinessContinuity, msAssetManagement, msLaboratories, msItServiceManagement, msInformationSecurity, msEducationOrganization, msRoadTraffic, msSuppluChain, msRiskManagement, msGHGAccounting, msWaterFootprint, msClimateChage, msSustainaleProcurement, msSocialResponsibility, msAntiBribery, msAutomotive, msAerospace, msFoodSafety, allTrainingProgram, customEhsSoftware, bexexIsoPortal, digitalLmsPlatform, performanceDashboard, digitalResource
} from "./servicesImages";

import website_Picture from "../assets/images/service_image/Website_Pictures.webp";
import FireSafety from "../assets/EHS/FireSafety.webp"
import LogisticsWarehouseSafetyImg from "../assets/EHS/LogisticsWarehouseSafety.webp"
import ElectricalSafetyImg from "../assets/EHS/ElectricalSafety.webp"
import ConstructionSafetyImg from "../assets/EHS/ConstructionSafety.webp"
import BehaviorBasedSafetyImg from "../assets/EHS/BehaviorBasedSafety.webp"

const servicesCardData = [

  // Environment, Health & Safety Solutions Content START Here

  {
    title: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    category: "IS / NBC",
    value: "Fire Safety",
    mainService: "Training",
    img: fireSaftyEHS,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Fire Safety ?", highlight: true },
    ],
    paragrapgh: [
      "Fire Safety covers the assessment, system design, and emergency readiness that protect your people, assets, and operations from fire risk, aligned to Indian Standards and the National Building Code. It spans fire risk assessment, detection and protection system design, and evacuation planning.",
      "For your organisation this means fewer catastrophic losses, lower insurance exposure, and confident statutory clearance. Preventing incidents before they escalate protects business continuity and keeps downtime and reputational damage to a minimum.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Fire Safety Awareness",
      "Fire Warden / Marshal Training",
      "Emergency Evacuation Drills ",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Fire Risk Assessment (IS & NBC)",
      "Fire System Design & Adequacy Audit",
      "ERDMP Preparation",
      "Supply & Installation of Fire Systems ",
      "Fire & Gas Detection Mapping ",   
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Fire Safety Audit",
      "Detection & Protection System Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Fire Incident Reporting Module",
      "Inspection & Checklist App",
    ],

    downlaodheadingText: "Fire Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Fire Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: fireSaftyEHS,
        title: "Modern Architecture",
      },
      {
        id: 3,
        type: "image",
        url: FireSafety,
        title: "Contemporary Living",
      },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },
      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },

    ],
  },

  {
    title: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    category: "IS / IEEE",
    value: "Electrical Safety",
    mainService: "Training",
    img: electricalSafety,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Electrical Safety", highlight: true },
    ],
    paragrapgh: [
      "Electrical Safety reduces hazard and unplanned downtime through arc flash, thermography, and protection studies backed by field mapping and lockout controls. It examines where electrical energy can injure people or damage plant, and closes those gaps.",
      "For your organisation this means fewer electrical incidents, lower equipment failure, and demonstrable due diligence during audits and insurance reviews. Reliable electrical systems also improve uptime and protect the workforce from some of the most severe workplace injuries.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Electrical Safety Awareness",
"LOTO Training",
"Arc Flash Awareness",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Arc Flash Risk Assessment",
"Infrared Thermography Study",
"Short Circuit & Relay Coordination",
"LOTO Procedure Development",
"LPS Adequacy Audit",  
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Electrical Safety Audit",
"Infrared Thermography Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "LOTO Digital Module",
"Permit-to-Work App",
    ],

    downlaodheadingText: "Electrical Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: electricalSafety,
        title: "Modern Architecture",
      },

      {
        id: 2,
        type: "image",
        url: ElectricalSafetyImg,
        title: "Interior Space",
      },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {

    title: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    category: "BOCW / IS 14489",
    value: "Construction Safety",
    mainService: "Training",
    img: constructionSafety,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Construction Safety", highlight: true },
    ],
    paragrapgh: [
      "Construction Safety manages site risk end to end, so contractor operations, work at height, and lifting activities stay compliant and incident-free through the full build lifecycle. It combines site management systems with inspection and certification of critical equipment.",
      "For your organisation this means safer sites, fewer stoppages, and stronger standing with clients and regulators who now screen contractor safety records. Strong site safety directly protects project timelines and reduces the cost of accidents and rework.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Construction Safety Induction",
"Work at Height Training",
"Scaffolding Safety Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Site Safety Management Plan",
"Contractor Safety Evaluation",
"Ladder & Scaffolding Certification",
"Work at Height & Lifting Programs", 
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Construction Safety Audit",
"Contractor Safety Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Site Inspection App",
"Contractor Compliance Tracker",
    ],

    downlaodheadingText: "Construction Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: constructionSafety,
        title: "Modern Architecture",
      },

      {
        id: 2,
        type: "image",
        url: ConstructionSafetyImg,
        title: "Contemporary Living",
      },
      // {
      //   id: 3,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    category: "BOCW / IS 14489",
    value: "Logistics & Warehouse Safety",
    mainService: "Training",
    img: logisticsWarehouseSafety,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Logistics & Warehouse Safety", highlight: true },
    ],
    paragrapgh: [
      "Logistics and Warehouse Safety secures storage, transport, and fleet operations through layout design, route control, and journey risk management. It addresses the movement and handling risks that sit outside the production floor but still drive major incidents.",
      "For your organisation this means fewer vehicle and material-handling accidents, lower fleet liability, and smoother supply operations. Well-managed logistics safety also protects goods, reduces insurance claims, and keeps distribution running without costly interruption.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Defensive Driving Training",
"Material Handling Safety",
"Warehouse Safety Awareness",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Warehouse Risk Assessment & Layout",
"Transportation Safety Management",
"Fleet Audit",
"Journey Risk Management",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Warehouse Safety Audit",
"Fleet Safety Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Fleet & Journey Tracking Module",
"Warehouse Inspection App",
    ],

    downlaodheadingText: "Logistics & Warehouse Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: logisticsWarehouseSafety,
        title: "Modern Architecture",
      },

      {
        id: 2,
        type: "image",
        url: LogisticsWarehouseSafetyImg,
        title: "Interior Space",
      },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    category: "BOCW / IS 14489",
    value: "Behavior-Based Safety (BBS)",
    mainService: "Training",
    img: behaviorBasedSafety,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Behavior-Based Safety (BBS)", highlight: true },
    ],
    paragrapgh: [
      "Behavior-Based Safety shifts your safety programme from rules to culture by building observation, feedback, and intervention habits across the workforce. It targets the unsafe acts behind most incidents rather than only the physical conditions.",
      "For your organisation this means a measurable drop in at-risk behaviour, higher near-miss reporting, and a workforce that owns safety rather than resisting it. A mature BBS culture sustains safety performance long after audits end, protecting both people and productivity.",
    ],

    subHeading: "Trainings",
    listItems: [
      "BBS Observer Training",
"Safety Leadership Training",
"Observation & Feedback Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Safety Culture Assessment",
"BBS Program Design & Rollout",
"Observation & Feedback System",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Safety Culture Maturity Audit",
"BBS Program Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Observation & Near-Miss App",
"Safety Culture Dashboard",
    ],

    downlaodheadingText: "Behavior-Based Safety (BBS) Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: behaviorBasedSafety,
        title: "Modern Architecture",
      },

      {
        id: 2,
        type: "image",
        url: BehaviorBasedSafetyImg,
        title: "Interior Space",
      },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  // Environment, Health & Safety Solutions END Here

  // Quality & Business Excellence Content START Here

  {
    title: "QUALITY & BUSINESS EXCELLENCE",
    category: "DMAIC / DMADV",
    value: "Six Sigma",
    mainService: "Training",
    img: sixSigma,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Six Sigma", highlight: true },
    ],
    paragrapgh: [
      "Six Sigma cuts process variation and defects through disciplined, data-driven DMAIC and DMADV projects, supported by belt-level mentoring and statistical control. It gives your teams a proven method to solve chronic quality problems with evidence, not opinion.",
      "For your organisation this means lower rejection and rework cost, more predictable output, and a pipeline of trained problem-solvers. Sustained Six Sigma capability turns quality improvement into a repeatable engine that protects margins and customer confidence.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Yellow Belt Training",
"Green Belt Training",
"Black Belt Mentoring",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "DMAIC / DMADV Project Delivery",
"Statistical Process Control (SPC)",
"Project Charter & Roadmap",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Process Capability Audit",
"Project Gate Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "SPC Dashboard",
"Project Tracking Module",
    ],

    downlaodheadingText: "Six Sigma Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: sixSigma,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "QUALITY & BUSINESS EXCELLENCE",
    category: "DMAIC / DMADV",
    value: "5-S Workplace Organization",
    mainService: "Training",
    img: fiveSWorkplaceOrganization,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "5-S Workplace Organization", highlight: true },
    ],
    paragrapgh: [
      "5S builds a clean, visual, and standardised workplace as the foundation for every other improvement system, through sort, set, shine, standardise, and sustain. It makes waste, delay, and abnormality visible at a glance.",
      "For your organisation this means safer, more efficient workspaces, faster changeovers, and a visible discipline that impresses customers and auditors. A sustained 5S culture reduces search time, improves flow, and creates the stable base that Lean and quality systems depend on.",
    ],

    subHeading: "Trainings",
    listItems: [
      "5S Awareness Training",
"5S Auditor Training",
"Visual Management Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "5S Implementation & Audit",
"Visual Management System Design",
"SOP & Work Instruction Creation",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "5S Audit",
"Workplace Organisation Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "5S Audit App",
"Visual Board Tracker",
    ],

    downlaodheadingText: "5-S Workplace Organization Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: fiveSWorkplaceOrganization,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "QUALITY & BUSINESS EXCELLENCE",
    category: "DMAIC / DMADV",
    value: "Supplier Quality Management",
    mainService: "Training",
    img: supplierQualityManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Supplier Quality Management", highlight: true },
    ],
    paragrapgh: [
      "Supplier Quality Management strengthens your supply base through structured assessment, audit, and joint improvement, so quality problems are caught upstream rather than at your dock. It aligns supplier performance to your standards and customer requirements.",
      "For your organisation this means fewer incoming defects, lower supplier-related disruption, and a more resilient supply chain. Developing suppliers rather than only policing them builds long-term reliability that protects production and reputation.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Supplier Quality Awareness",
"Supplier Auditor Training",
"Core Tools for Suppliers",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Supplier Assessment & Development",
"Collaborative Improvement Programs",
"Supplier Scorecard Design",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Supplier Audit",
"Supplier Performance Monitoring",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Supplier Scorecard Module",
"Supplier Audit Tracker",
    ],

    downlaodheadingText: "Supplier Quality Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: supplierQualityManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "QUALITY & BUSINESS EXCELLENCE",
    category: "DMAIC / DMADV",
    value: "Lean Management",
    mainService: "Training",
    img: leanManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Lean Management", highlight: true },
    ],
    paragrapgh: [
      "Lean Management removes waste and speeds flow through Kaizen, pull systems, and value stream mapping, focusing every activity on what the customer actually values. It targets the eight wastes that quietly inflate cost and lead time.",
      "For your organisation this means shorter lead times, lower inventory, and freed-up capacity without capital spend. A Lean culture of continuous improvement compounds over time, protecting competitiveness as customer expectations tighten.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Lean Awareness Training",
"Kaizen Facilitator Training",
"VSM Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Value Stream Mapping (VSM)",
"Kaizen Event Facilitation",
"JIT & Kanban Implementation",
"Waste Reduction Programs",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Lean Maturity Assessment",
"Process Waste Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Kanban / Flow Tracker",
"Kaizen Idea Management Module",
    ],

    downlaodheadingText: "Lean Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: leanManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "QUALITY & BUSINESS EXCELLENCE",
    category: "OEE",
    value: "Total Productive Maintenance (TPM)",
    mainService: "Training",
    img: totalProductiveMaintenance,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Total Productive Maintenance (TPM)", highlight: true },
    ],
    paragrapgh: [
      "Total Productive Maintenance raises equipment reliability and Overall Equipment Effectiveness through autonomous and planned maintenance, run by operators and maintenance teams together. It attacks the losses that keep machines from running at full, quality speed.",
      "For your organisation this means higher OEE, fewer breakdowns, and longer asset life, translating directly into more output from the same plant. A strong TPM programme protects delivery commitments and reduces the hidden cost of unplanned downtime.",
    ],

    subHeading: "Trainings",
    listItems: [
      "TPM Awareness Training",
"Autonomous Maintenance Training",
"OEE Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "OEE Analysis & Improvement",
"TPM Pillar Implementation",
"Autonomous & Planned Maintenance",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "TPM Maturity Audit",
"Maintenance System Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "OEE Dashboard",
"Maintenance Tracking Module",
    ],

    downlaodheadingText: "Total Productive Maintenance (TPM) Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: totalProductiveMaintenance,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "QUALITY & BUSINESS EXCELLENCE",
    category: "APQP/PPAP/FMEA/SPC/MSA/GD&T",
    value: "Core Quality Tools",
    mainService: "Training",
    img: coreQualityTools,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Core Quality Tools", highlight: true },
    ],
    paragrapgh: [
      "Core Quality Tools implement the automotive and manufacturing quality toolset your customers and standards demand, covering planning, approval, risk, measurement, and control. These tools connect design intent to consistent, capable production.",
      "For your organisation this means smoother product launches, fewer field failures, and audit-ready evidence for IATF and OEM customers. Mastery of the core tools protects new business, since many customers make them a condition of supply.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Core Tools Awareness",
"FMEA Workshop",
"SPC & MSA Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "APQP Deployment",
"PPAP Preparation & Submission",
"FMEA Facilitation",
"SPC & MSA Studies",
"GD&T Application",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Core Tools Compliance Audit",
"PPAP Readiness Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "PPAP Document Module",
"SPC Data Tool",
    ],

    downlaodheadingText: "Core Quality Tools Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: coreQualityTools,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  // Quality & Business Excellence Content END Here

  // Management Systems (ISO)/MANAGEMENT SYSTEMS AND COMPLIANCE Content START Here

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 9001:2015/AMD 1:2024",
    value: "ISO 9001 Quality Management",
    mainService: "Training",
    img: msQualityManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 9001 Quality Management", highlight: true },
    ],
    paragrapgh: [
      "ISO 9001 is the world's most adopted quality management standard, giving your business a structured way to deliver consistent output, control process gaps, and satisfy customers. The 2024 amendment adds climate change as a factor you must consider in the system.",
      "For your organisation, certification builds client and tender confidence, opens larger and export markets, and creates a disciplined base for continual improvement. It turns quality from firefighting into a managed, evidence-based system that protects revenue and reputation.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"Supplier Audits",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 9001 Quality Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msQualityManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 14001:2026",
    value: "ISO 14001 Environmental Management",
    mainService: "Training",
    img: msEnvironmetalManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 14001 Environmental Management", highlight: true },
    ],
    paragrapgh: [
      "ISO 14001 gives your business a structured way to manage environmental impact, meet legal obligations, and cut waste and resource cost, built around your actual operations. It embeds environmental thinking into everyday decisions rather than treating it as an add-on.",
      "For your organisation, certification strengthens regulatory standing, reduces the risk of fines and shutdowns, and answers the environmental questions customers and investors now ask. It also lowers cost through better use of energy, water, and materials, protecting both compliance and margin.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Aspect-Impact Register",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"Environmental Compliance Audits",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 14001 Environmental Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msEnvironmetalManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 45001:2018/AMD 1:2024",
    value: "ISO 45001 Occupational Health & Safety",
    mainService: "Training",
    img: msOccupationHealthSafety,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 45001 Occupational Health & Safety", highlight: true },
    ],
    paragrapgh: [
      "ISO 45001 helps you prevent workplace injury and ill health, reduce incident cost, and build a safety culture that regulators and clients trust, implemented on the ground rather than on paper. It integrates worker participation and hazard control into the management system.",
      "For your organisation, certification lowers accident rates and their direct and hidden costs, strengthens legal defensibility, and is increasingly a prerequisite for winning contracts. A credible OHS system protects your people first and your business continuity alongside it.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
"HIRA Workshop",
"PTW / LOTO / MOC Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"HIRA Preparation",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"IS 14489 Safety Audits",
"Process Safety Audits",
"Legal Compliance Audits",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
      "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
"PTW Module",
"LOTO Module",
"MOC Module",
    ],

    downlaodheadingText: "ISO 45001 Occupational Health & Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msOccupationHealthSafety,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 50001:2018/AMD 1:2024",
    value: "ISO 50001 Energy Management",
    mainService: "Training",
    img: msEnergyManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 50001 Energy Management", highlight: true },
    ],
    paragrapgh: [
      "ISO 50001 gives your organisation a data-driven framework to track energy use, cut consumption, and lower cost across sites, using measurable energy performance indicators and baselines. It makes energy a managed variable rather than a fixed overhead.",
      "For your organisation, certification delivers direct savings on the energy bill, supports carbon and ESG commitments, and demonstrates responsible resource use to stakeholders. A working energy management system protects margin against rising and volatile energy prices.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"EnPI & Baseline Setup",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"Energy Audits",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 50001 Energy Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msEnergyManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 22000:2018",
    value: "ISO 22000 Food Safety",
    mainService: "Training",
    img: msFoodSafety,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 22000 Food Safety", highlight: true },
    ],
    paragrapgh: [
      "ISO 22000 is the international food safety management standard, combining HACCP principles with a management system to control hazards across the food chain. It applies to anyone who produces, processes, transports, or serves food.",
      "For your organisation, certification protects consumers, reduces the risk of recalls and contamination incidents, and satisfies the food safety demands of retailers and regulators. A robust food safety system safeguards brand trust, which is difficult to rebuild once a safety failure occurs.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"HACCP Plan & PRPs",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 22000 Food Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msFoodSafety,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 22301:2019",
    value: "ISO 22301 Business Continuity",
    mainService: "Training",
    img: msBusinessContinuity,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 22301 Business Continuity", highlight: true },
    ],
    paragrapgh: [
      "ISO 22301 is the business continuity management standard, helping you prepare for, respond to, and recover from disruptive incidents through structured planning and testing. It turns resilience from an assumption into a verified capability.",
      "For your organisation, certification reduces downtime and loss when disruptions hit, reassures customers and insurers, and is often required in critical supply chains. A tested continuity system protects revenue, reputation, and stakeholder confidence during exactly the moments that matter most.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"BIA & Continuity Plans",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 22301 Business Continuity Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msBusinessContinuity,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 55001:2014",
    value: "ISO 55001 Asset Management",
    mainService: "Training",
    img: msAssetManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 55001 Asset Management", highlight: true },
    ],
    paragrapgh: [
      "ISO 55001 is the asset management standard, aligning how you plan, operate, maintain, and retire physical assets to your organisation's objectives across their whole life. It connects asset decisions to value and risk rather than to habit.",
      "For your organisation, certification improves return on capital-intensive assets, reduces unexpected failure, and supports better investment decisions. Structured asset management protects both service reliability and the long-term financial performance of your asset base.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Asset Management Plan",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 55001 Asset Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msAssetManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO/IEC 17025:2017",
    value: "ISO 17025 Laboratories",
    mainService: "Training",
    img: msLaboratories,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 17025 Laboratories", highlight: true },
    ],
    paragrapgh: [
      "ISO 17025 is the standard for the competence of testing and calibration laboratories, covering technical capability and management system requirements. It underpins the reliability of the results a laboratory issues.",
      "For your organisation, accreditation gives your test and calibration data national and international recognition, reduces the need for retesting, and builds customer trust in your results. Demonstrated laboratory competence protects contracts and market access where accredited data is a requirement.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Method Validation & Uncertainty",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"Proficiency Testing Support",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 17025 Laboratories Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msLaboratories,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO/IEC 20000-1:2018",
    value: "ISO/IEC 20000 IT Service Management",
    mainService: "Training",
    img: msItServiceManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO/IEC 20000 IT Service Management", highlight: true },
    ],
    paragrapgh: [
      "ISO 20000 is the international standard for IT service management, defining how to deliver, support, and continually improve IT services against agreed levels. It aligns IT delivery with business need through a managed system.",
      "For your organisation, certification improves service reliability, sharpens accountability, and reassures customers who depend on your IT services. A managed service system reduces incidents and outages, protecting both operational continuity and the credibility of your IT function.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Service Catalogue & SLAs",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO/IEC 20000 IT Service Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msItServiceManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO/IEC 27001:2022",
    value: "ISO/IEC 27001 Information Security",
    mainService: "Training",
    img: msInformationSecurity,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO/IEC 27001 Information Security", highlight: true },
    ],
    paragrapgh: [
      "ISO 27001 is the international information security management standard, providing a risk-based system to protect the confidentiality, integrity, and availability of information. It covers people, process, and technology, not just IT controls.",
      "For your organisation, certification demonstrates that data is protected, satisfies client and regulatory security requirements, and reduces the likelihood and cost of breaches. Credible information security protects customer trust and is increasingly a condition for doing business with large and regulated clients.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Risk Assessment & SoA",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO/IEC 27001 Information Security Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msInformationSecurity,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 21001:2018",
    value: "ISO 21001 Educational Organizations",
    mainService: "Training",
    img: msEducationOrganization,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 21001 Educational Organizations", highlight: true },
    ],
    paragrapgh: [
      "ISO 21001 is the management system standard for educational organisations, focusing on the needs of learners and other beneficiaries. It adapts management system discipline to the specific mission of education and training providers.",
      "For your organisation, certification demonstrates quality and consistency in educational delivery, supports accreditation and funding requirements, and improves learner outcomes and satisfaction. A structured system protects your institution's reputation in an increasingly competitive and scrutinised sector.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Learner-Focused Processes",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 21001 Educational Organizations Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msEducationOrganization,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 39001:2012",
    value: "ISO 39001 Road Traffic Safety",
    mainService: "Training",
    img: msRoadTraffic,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 39001 Road Traffic Safety", highlight: true },
    ],
    paragrapgh: [
      "ISO 39001 is the road traffic safety management standard, helping organisations reduce death and serious injury linked to their road use. It applies a management system to fleet, driver, and journey risk.",
      "For your organisation, certification lowers accident rates and liability, reduces vehicle and insurance cost, and demonstrates duty of care to drivers and the public. A managed road safety system protects your workforce and shields the organisation from the heavy costs of serious road incidents.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"RTS Risk Factors & Targets",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 39001 Road Traffic Safety Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msRoadTraffic,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 28000:2022",
    value: "ISO 28000 Supply Chain Security",
    mainService: "Training",
    img: msSuppluChain,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 28000 Supply Chain Security", highlight: true },
    ],
    paragrapgh: [
      "ISO 28000 is the security management standard for the supply chain, addressing threats such as theft, tampering, smuggling, and disruption across logistics operations. It brings a risk-based system to physical and process security.",
      "For your organisation, certification reduces loss and disruption, satisfies the security expectations of customers and customs regimes, and supports trusted-trader status. Demonstrated supply chain security protects goods, timelines, and the confidence of partners across the chain.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Security Risk Assessment",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 28000 Supply Chain Security Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msSuppluChain,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 31000:2018 (Guideline)",
    value: "ISO 31000 Risk Management",
    mainService: "Training",
    img: msRiskManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 31000 Risk Management", highlight: true },
    ],
    paragrapgh: [
      "ISO 31000 provides principles and guidelines for managing risk across an organisation, giving a common language and framework rather than a certifiable specification. It helps you identify, assess, and treat risk consistently across functions.",
      "For your organisation, adopting ISO 31000 improves decision quality, embeds risk thinking into planning and operations, and strengthens governance. A shared risk framework protects the organisation from surprises and supports confident, defensible decisions at every level.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Risk Assessment Workshop",
"Risk Facilitator Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Risk Framework Design",
"Risk Register Preparation",
"Risk Treatment Planning",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Gap Review",
"Framework Maturity Assessment",
"(Guideline Standard, Not Certifiable)",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Risk Register Module",
"Risk Dashboard",
    ],

    downlaodheadingText: "ISO 31000 Risk Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msRiskManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 14064 Parts 1, 2, 3",
    value: "ISO 14064 GHG Accounting",
    mainService: "Training",
    img: msGHGAccounting,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 14064 GHG Accounting", highlight: true },
    ],
    paragrapgh: [
      "ISO 14064 is the greenhouse gas standard, specifying how to quantify, report, and verify emissions and removals at organisation and project level. It gives your carbon numbers a credible, auditable basis.",
      "For your organisation, applying ISO 14064 produces defensible emissions data for ESG and BRSR reporting, supports carbon reduction claims, and prepares you for verification and disclosure demands. Credible GHG accounting protects against greenwashing risk and satisfies investors and regulators. (Also serves the ESG domain.)",
    ],

    subHeading: "Trainings",
    listItems: [
      "GHG Accounting Awareness",
"GHG Quantification Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"GHG Inventory (Scope 1, 2, 3)",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "GHG Inventory Verification Support",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Carbon Accounting Module",
"Emissions Dashboard",
    ],

    downlaodheadingText: "ISO 14064 GHG Accounting Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msGHGAccounting,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 14046:2014",
    value: "ISO 14046 Water Footprint",
    mainService: "Training",
    img: msWaterFootprint,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 14046 Water Footprint", highlight: true },
    ],
    paragrapgh: [
      "ISO 14046 is the water footprint standard, setting out how to assess the water use and water-related environmental impact of products, processes, and organisations through life cycle assessment. It quantifies water impact rigorously.",
      "For your organisation, a water footprint assessment identifies where water risk and cost concentrate, supports sustainability targets, and answers stakeholder questions on water stewardship. Understanding your water footprint protects operations in water-stressed regions and strengthens ESG credibility. (Also serves the ESG domain.)",
    ],

    subHeading: "Trainings",
    listItems: [
      "Water Footprint Awareness",
"LCA Methodology Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Water Footprint Assessment",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Water Footprint Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Water Data Module",
    ],

    downlaodheadingText: "ISO 14046 Water Footprint Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msWaterFootprint,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 14090:2019",
    value: "ISO 14090 Climate Change Adaptation",
    mainService: "Training",
    img: msClimateChage,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 14090 Climate Change Adaptation", highlight: true },
    ],
    paragrapgh: [
      "ISO 14090 is the standard for adaptation to climate change, providing principles and a framework for organisations to assess climate risks and plan credible adaptation. It complements emissions reduction with resilience planning.",
      "For your organisation, applying ISO 14090 identifies how climate change threatens your assets, operations, and supply chain, and structures a response. Proactive adaptation protects against physical climate risk and satisfies the climate-resilience disclosures increasingly expected by regulators and investors. (Also serves the ESG domain.)",
    ],

    subHeading: "Trainings",
    listItems: [
      "Climate Adaptation Awareness",
"Climate Risk Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Climate Risk & Adaptation Plan",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Adaptation Plan Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Climate Risk Register Module",
    ],

    downlaodheadingText: "ISO 14090 Climate Change Adaptation Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msClimateChage,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 20400:2017 (Guideline)",
    value: "ISO 20400 Sustainable Procurement",
    mainService: "Training",
    img: msSustainaleProcurement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 20400 Sustainable Procurement", highlight: true },
    ],
    paragrapgh: [
      "ISO 20400 provides guidance on integrating sustainability into procurement, helping organisations manage the environmental, social, and economic impact of what they buy. It extends responsibility across the supply chain rather than the boundary of the organisation.",
      "For your organisation, sustainable procurement reduces supply chain risk, supports ESG and BRSR commitments, and meets the responsible-sourcing expectations of customers and investors. Embedding sustainability into buying decisions protects reputation and builds a more resilient, ethical supply base. (Also serves the ESG domain.)",
    ],

    subHeading: "Trainings",
    listItems: [
      "Sustainable Procurement Awareness",
"Buyer Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Procurement Maturity Assessment",
"Sustainable Sourcing Framework",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Gap Review",
"Framework Maturity Assessment",
"(Guideline Standard, Not Certifiable)",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Supplier Sustainability Tracker",
    ],

    downlaodheadingText: "ISO 20400 Sustainable Procurement Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msSustainaleProcurement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 26000:2010 (Guideline)",
    value: "ISO 26000 Social Responsibility",
    mainService: "Training",
    img: msSocialResponsibility,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 26000 Social Responsibility", highlight: true },
    ],
    paragrapgh: [
      "ISO 26000 provides guidance on social responsibility, covering governance, human rights, labour, environment, fair operating practices, consumer issues, and community involvement. It is a guidance standard, not a certifiable one.",
      "For your organisation, applying ISO 26000 structures a credible social responsibility approach, informs ESG strategy, and demonstrates ethical intent to stakeholders. A recognised framework protects reputation and aligns your organisation with the social expectations that increasingly influence customers, employees, and investors. (Also serves the ESG domain.)",
    ],

    subHeading: "Trainings",
    listItems: [
      "Social Responsibility Awareness",
"SR Core Subjects Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Social Responsibility Gap Assessment",
"SR Framework & Policy",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Gap Review",
"Framework Maturity Assessment",
"(Guideline Standard, Not Certifiable)",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "SR Reporting Module",
    ],

    downlaodheadingText: "ISO 26000 Social Responsibility Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msSocialResponsibility,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "ISO 37001:2016",
    value: "ISO 37001 Anti-Bribery",
    mainService: "Training",
    img: msAntiBribery,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ISO 37001 Anti-Bribery", highlight: true },
    ],
    paragrapgh: [
      "ISO 37001 is the anti-bribery management system standard, setting out measures to prevent, detect, and respond to bribery across the organisation and its business partners. It brings structured, auditable controls to corruption risk.",
      "For your organisation, certification demonstrates a genuine commitment to ethical conduct, reduces legal and financial exposure, and reassures partners, regulators, and investors. A credible anti-bribery system protects the organisation from the severe penalties and reputational damage that bribery cases bring.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Bribery Risk Assessment",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "ISO 37001 Anti-Bribery Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msAntiBribery,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "IATF 16949:2016",
    value: "IATF 16949 Automotive QMS",
    mainService: "Training",
    img: msAutomotive,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "IATF 16949 Automotive QMS", highlight: true },
    ],
    paragrapgh: [
      "IATF 16949 is the automotive quality management standard, built on ISO 9001 with additional sector requirements demanded across the automotive supply chain. It targets defect prevention and variation reduction in automotive production.",
      "For your organisation, certification is often mandatory to supply automotive OEMs and tier suppliers, so it directly protects and unlocks business. A working IATF system reduces field failures and customer complaints, safeguarding both revenue and standing in a demanding supply chain.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Core Tools Integration",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"Supplier Audits",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "IATF 16949 Automotive QMS Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msAutomotive,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    category: "AS9100D",
    value: "AS9100 Aerospace QMS",
    mainService: "Training",
    img: msAerospace,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "AS9100 Aerospace QMS", highlight: true },
    ],
    paragrapgh: [
      "AS9100 is the aerospace quality management standard, extending ISO 9001 with the rigorous safety, traceability, and risk requirements of the aviation, space, and defence sectors. It reflects the zero-tolerance environment those industries demand.",
      "For your organisation, certification is a prerequisite for most aerospace and defence contracts, making it a direct enabler of market access. A strong AS9100 system protects against the severe consequences of failure in these sectors and builds trust with highly selective customers.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Awareness Training",
"Internal Auditor Training",
"Lead Implementor Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Gap Analysis",
"Documentation Toolkit",
"SOP Preparation",
"Implementation Support",
"OJT Training Presentations",
"Configuration & Traceability",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Internal Audits Mentoring",
"Internal Audit Execution",
"Supplier Audits",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Customised Web Portal",
"Audit Portal",
"Compliance Manager",
    ],

    downlaodheadingText: "AS9100 Aerospace QMS Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: msAerospace,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  // Management Systems and Compliance - End HERE 

  // ESG & Sustainablity Data - Start HERE 

  {
    title: "ESG and Sustainability Services",
    category: "GRI / SASB / BRSR",
    value: "ESG Strategy & Reporting",
    mainService: "Training",
    img: strategyReporting,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ESG Strategy & Reporting", highlight: true },
    ],
    paragrapgh: [
      "ESG Strategy and Reporting helps you navigate corporate responsibility and stakeholder expectations through materiality assessment, strategy setting, and framework-aligned disclosure. It connects sustainability ambition to credible, comparable reporting.",
      "For your organisation, a clear ESG strategy attracts investment, satisfies regulatory disclosure such as BRSR, and differentiates you with customers and talent. Structured reporting protects against greenwashing risk and positions the organisation to compete in markets where ESG performance is increasingly scored and rewarded.",
    ],

    subHeading: "Trainings",
    listItems: [
      "ESG Awareness Training",
"BRSR Reporting Workshop",
"Carbon Accounting Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "ESG Materiality Assessment",
"Strategy & Goal Setting",
"GRI / SASB / BRSR Reporting",
"GHG & Carbon Accounting (Scope 1, 2, 3)",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "ESG Data Assurance Support",
"Report Readiness Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "ESG Reporting Module",
"Carbon Dashboard",
    ],

    downlaodheadingText: "ESG Strategy & Reporting Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: strategyReporting,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ESG and Sustainability Services",
    category: "GRI / SASB / BRSR",
    value: "ESG Management System (ESGMS)",
    mainService: "Training",
    img: managementSystem,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "ESG Management System (ESGMS)", highlight: true },
    ],
    paragrapgh: [
      "An ESG Management System embeds environmental, social, and governance objectives into a structured, auditable management framework, moving ESG from reporting to operational discipline. It gives ownership, targets, and controls to sustainability commitments.",
      "For your organisation, a working ESGMS ensures ESG goals are actually delivered and evidenced, not just published, and stands up to investor and regulator scrutiny. A managed system protects credibility, coordinates fragmented sustainability efforts, and turns ESG into a governed part of how the business runs.",
    ],

    subHeading: "Trainings",
    listItems: [
      "ESGMS Awareness Training",
"ESG Internal Auditor Training",
"ESG Leadership Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "ESGMS Framework Design",
"ESG Policy & Objectives",
"Controls & KPI System",
"Implementation Support",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "ESGMS Internal Audit",
"ESG Maturity Assessment",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "ESG Management Portal",
"ESG KPI Dashboard",
    ],

    downlaodheadingText: "ESG Management System (ESGMS) Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: managementSystem,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ESG and Sustainability Services",
    category: "BEE / ISO 50001",
    value: "Energy Management",
    mainService: "Training",
    img: eneryManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Energy Management", highlight: true },
    ],
    paragrapgh: [
      "Energy Management reduces energy cost and carbon through consumption monitoring, normalization, and accredited energy audits, and pairs with ISO 50001 for a certified system. It finds and closes the gap between energy used and energy needed.",
      "For your organisation, structured energy management delivers direct bill savings, supports carbon commitments, and improves resilience against volatile energy prices. Treating energy as a managed cost rather than a fixed overhead protects margin and strengthens your sustainability position.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Energy Awareness Training",
"Energy Manager Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Energy Consumption Monitoring",
"Normalization & Performance Review",
"ISO 50001 Implementation (Linked)",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "BEE Certified Energy Audit",
"Energy System Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Energy Monitoring Dashboard",
"EnPI Tracker",
    ],

    downlaodheadingText: "Energy Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: eneryManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ESG and Sustainability Services",
    category: "CTE/CTO / LCA",
    value: "Environmental Compliance",
    mainService: "Training",
    img: environmentCompliance,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Environmental Compliance", highlight: true },
    ],
    paragrapgh: [
      "Environmental Compliance keeps operations legally clear and supply chains responsible through consents, sustainable procurement, and life cycle assessment. It ensures you meet the environmental conditions attached to operating and growing.",
      "For your organisation, strong environmental compliance avoids fines, shutdowns, and project delays, and satisfies the environmental due diligence of customers and investors. Managing compliance proactively protects your licence to operate and removes environmental issues as a barrier to expansion.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Environmental Compliance Training",
"LCA Methodology Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "CTE / CTO Consent Support",
"ISO 20400 Sustainable Procurement",
"Green Supply Chain Assessment",
"Life Cycle Assessment (LCA)",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Environmental Compliance Audit",
"Supply Chain Sustainability Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Compliance Register Module",
"Consent Tracking Dashboard",
    ],

    downlaodheadingText: "Environmental Compliance Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: environmentCompliance,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ESG and Sustainability Services",
    category: "ZLD / ZWL",
    value: "Water & Waste Management",
    mainService: "Training",
    img: waterWasteManagement,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Water & Waste Management", highlight: true },
    ],
    paragrapgh: [
      "Water and Waste Management cuts your water and waste footprint through audits and advisory targeting zero liquid discharge and zero waste to landfill. It addresses two of the most scrutinised and cost-heavy environmental impacts.",
      "For your organisation, better water and waste management lowers utility and disposal cost, reduces regulatory and reputational risk, and supports circular-economy commitments. Strong performance here protects operations in resource-constrained regions and answers growing stakeholder pressure on resource use.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Water & Waste Awareness",
"Waste Segregation Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Water Audit & Water Pinch Study",
"Hazardous & Solid Waste Advisory",
"Zero Liquid Discharge (ZLD)",
"Zero Waste to Landfills (ZWL)",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Water Audit",
"Waste Management Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Water & Waste Tracking Module",
    ],

    downlaodheadingText: "Water & Waste Management Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: waterWasteManagement,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "ESG and Sustainability Services",
    category: "SA 8000 / ISO 26000 / ISO 37001",
    value: "Social & Welfare",
    mainService: "Training",
    img: socialWelfare,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Social & Welfare", highlight: true },
    ],
    paragrapgh: [
      "Social and Welfare services build social accountability and ethical governance into your operations and supply chain through recognised social responsibility and anti-bribery frameworks. They address the social dimension that investors and buyers increasingly examine.",
      "For your organisation, strong social and welfare systems protect against labour, ethics, and human-rights risks in your operations and suppliers, and satisfy responsible-sourcing audits. Demonstrated social responsibility protects brand reputation and access to markets where social compliance is a condition of trade.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Social Accountability Awareness",
"Anti-Bribery Training",
"Ethics & Human Rights Workshop",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "SA 8000 Implementation",
"ISO 26000 Framework",
"ISO 37001 Anti-Bribery Controls",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Social Accountability Audit",
"Anti-Bribery System Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Grievance & Ethics Reporting Module",
    ],

    downlaodheadingText: "Social & Welfare Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: socialWelfare,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  // ESG % Sustainablity Data - End Here 

  // Specialised Assessments & Surveys Data - Start Here

  {
    title: "SPECIALISED ASSESSMENT & SURVEYS",
    category: "SA 8000 / ISO 26000 / ISO 37001",
    value: "Structural / Staircase Assessment",
    mainService: "Training",
    img: staircaseAssessment,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Structural / Staircase Assessment", highlight: true },
    ],
    paragrapgh: [
      "Structural and Staircase Assessment evaluates the stability, load capacity, and safety of stairs, structures, and access ways, identifying defects and non-compliance against applicable codes. It is a targeted engineering check of where structural failure would harm people.",
      "For your organisation, the assessment catches structural risk before it causes injury or collapse, supports statutory and insurance requirements, and prioritises remedial spend. Documented structural safety protects occupants and shields the organisation from the severe liability that structural failures carry.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Structural Safety Awareness",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Structural Condition Survey",
"Staircase & Access Safety Assessment",
"Load & Stability Evaluation",
"Remedial Recommendation Report",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Periodic Structural Re-Assessment",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Assessment Report & Register",
    ],

    downlaodheadingText: "Structural / Staircase Assessment Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: staircaseAssessment,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "SPECIALISED ASSESSMENT & SURVEYS",
    category: "SA 8000 / ISO 26000 / ISO 37001",
    value: "Workplace (Occupational Hygiene) Assessment",
    mainService: "Training",
    img: workplaceAssessment,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Workplace (Occupational Hygiene) Assessment", highlight: true },
    ],
    paragrapgh: [
      "Workplace Assessment measures occupational hygiene exposures such as noise, illumination, ventilation, dust, and ergonomics against occupational health limits. It quantifies the physical conditions your workforce is exposed to every day.",
      "For your organisation, the assessment identifies health risks before they become occupational illness or claims, supports legal compliance, and guides targeted control measures. Objective workplace data protects worker health, reduces liability, and demonstrates genuine due diligence to regulators and auditors.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Occupational Health Awareness",
"Ergonomics Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Occupational Exposure Survey",
"Ergonomic Assessment",
"Control Measure Recommendations",
"Compliance Gap Report",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Periodic Exposure Re-Survey",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Exposure Data Register",
    ],

    downlaodheadingText: "Workplace (Occupational Hygiene) Assessment Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: workplaceAssessment,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "SPECIALISED ASSESSMENT & SURVEYS",
    category: "SA 8000 / ISO 26000 / ISO 37001",
    value: "Asbestos Survey",
    mainService: "Training",
    img: asbestosSurvey,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Asbestos Survey", highlight: true },
    ],
    paragrapgh: [
      "Asbestos Survey identifies, samples, and assesses asbestos-containing materials across a site, classifying risk and defining management or removal actions. It addresses a hazardous material that remains widespread in older buildings and plant.",
      "For your organisation, the survey is often a legal prerequisite before refurbishment or demolition, and it protects workers and occupants from a serious long-term health hazard. Documented asbestos management shields the organisation from severe health liability and keeps projects legally clear to proceed.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Asbestos Awareness Training",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Asbestos Identification & Sampling",
"Risk Assessment & Register",
"Management / Removal Plan",
"Clearance Support",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Asbestos Re-inspection Survey",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Asbestos Register & Tracking",
    ],

    downlaodheadingText: "Asbestos Survey Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: asbestosSurvey,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "SPECIALISED ASSESSMENT & SURVEYS",
    category: "SA 8000 / ISO 26000 / ISO 37001",
    value: "Hydrology / Water Survey",
    mainService: "Training",
    img: hydrologySurvey,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Hydrology / Water Survey", highlight: true },
    ],
    paragrapgh: [
      "Hydrology and Water Survey studies water sources, drainage, groundwater, and flow across a site to inform environmental clearance, water balance, and flood or drainage risk. It provides the technical water data that projects and consents depend on.",
      "For your organisation, a sound hydrology survey supports environmental approvals, water management planning, and resilience against flooding or scarcity. Reliable water data protects project approvals and helps you manage a resource that is increasingly regulated, costly, and contested.",
    ],

    subHeading: "Trainings",
    listItems: [
      "Water Management Awareness",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Hydrological Assessment",
"Water Balance & Drainage Study",
"Groundwater Evaluation",
"Survey Report for Clearance",
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Periodic Hydrological Re-Survey",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Water Data & GIS Register",
    ],

    downlaodheadingText: "Hydrology / Water Survey Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: hydrologySurvey,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  // Specialised Assessments & Surveys Data - End Here

  // TRAINING & COMPETENCY  DEVELOPMENT Data Start Here

  {
    title: "Training & Competency Development",
    category: "eGrowth India Academy",
    value: "All Training Programs",
    mainService: "Training",
    img: allTrainingProgram,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "All Training Programs", highlight: true },
    ],
    paragrapgh: [
      "Training and Competency Development is delivered through the eGrowth India Fire & Safety Academy and LMS, covering awareness, internal auditor, lead implementor, and specialised technical programs across every domain above. Individual course cards are maintained inside the LMS.",
      "For your organisation, structured training builds the competence that every management system and safety programme depends on, evidenced with certificates and records. Skilled, certified people protect the return on all other investments, since systems only perform when the workforce running them is trained.",
    ],

    subHeading: "See LMS Catalogue",
    listItems: [
      "Awareness",
  "Internal Auditor",
  "Lead Implementor",
  "HIRA",
  "PTW",
  "LOTO",
  "MOC",
  "Legal Compliance",
  "SOP-based Custom Trainings"
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Custom In-Company Program Design",
"Competency Matrix & Training Plans"
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Training Effectiveness Review",
"Competency Gap Assessment"
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "eGrowth India LMS",
"Certification Tracking"
    ],

    downlaodheadingText: "All Training Programs Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: allTrainingProgram,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  // TRAINING & COMPETENCY  DEVELOPMENT Data End Here

  // Software & Digital Solutions Data Start Here 

  {
    title: "Software & Digital Solutions",
    category: "eGrowth India Academy",
    value: "Custom EHS Software",
    mainService: "Training",
    img: customEhsSoftware,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Custom EHS Software", highlight: true },
    ],
    paragrapgh: [
      "Custom EHS Software digitises incidents, inspections, permits, and legal tracking so your safety and environmental processes run on live data rather than paper and spreadsheets. It is built around your actual workflows rather than forcing generic templates.",
      "For your organisation, digital EHS improves visibility, speeds response, and produces audit-ready records automatically. Real-time data replaces after-the-fact reporting, helping you act on risk earlier and protect both compliance and people with far less administrative effort.",
    ],

    subHeading: "See LMS Catalogue",
    listItems: [
      "System Onboarding Training",
"Admin & Reporting Training"
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Incident Management & Investigation",
"Digital Inspection & PTW Apps",
"Compliance & Legal Tracking",
"HIRA Digital Tools"
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "System Data Audit",
"Configuration Review"
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Deployed EHS Platform",
"Mobile Apps"
    ],

    downlaodheadingText: "Custom EHS Software Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: customEhsSoftware,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "Software & Digital Solutions",
    category: "eGrowth India Academy",
    value: "Bexex ISO Portal (Audit & Compliance Manager)",
    mainService: "Training",
    img: bexexIsoPortal,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Bexex ISO Portal (Audit & Compliance Manager)", highlight: true },
    ],
    paragrapgh: [
      "The Bexex ISO Portal manages documentation, audits, corrective actions, and certification timelines in one platform, giving you a single source of truth for your management systems. It replaces scattered files and manual trackers with a live compliance workspace.",
      "For your organisation, the portal keeps audits on schedule, ensures corrective actions close, and makes certification maintenance far less painful. Centralised, always-current compliance data protects you at surveillance audits and gives management real-time visibility of system health.",
    ],

    subHeading: "See LMS Catalogue",
    listItems: [
      "Portal Admin Training",
"User Training"
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Portal Configuration & Rollout",
"Document Control Setup",
"Audit & CAPA Workflow Setup"
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Portal Data Integrity Audit",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Bexex ISO Portal",
"Audit Portal",
"Compliance Manager"
    ],

    downlaodheadingText: "Bexex ISO Portal (Audit & Compliance Manager) Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: bexexIsoPortal,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "Software & Digital Solutions",
    category: "eGrowth LMS",
    value: "Digital LMS Platforms",
    mainService: "Training",
    img: digitalLmsPlatform,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Digital LMS Platforms", highlight: true },
    ],
    paragrapgh: [
      "Digital LMS Platforms deliver and track training at scale through the eGrowth India LMS, custom e-learning modules, and blended learning that mixes classroom and online. They make competency building measurable and repeatable.",
      "For your organisation, an LMS ensures the whole workforce is trained, tracked, and certified consistently, with records ready for audit. Scalable digital learning protects competency across sites and shifts, and reduces the cost and disruption of repeated in-person training.",
    ],

    subHeading: "See LMS Catalogue",
    listItems: [
      "LMS Admin Training",
"Content Author Training"
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "LMS Implementation & Customization",
"Custom e-Learning Module Development",
"Blended Learning Design"
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Training Records Audit",
"Competency Compliance Review"
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "eGrowth LMS Platform",
"Training Tracking Module"
    ],

    downlaodheadingText: "Digital LMS Platforms Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: digitalLmsPlatform,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "Software & Digital Solutions",
    category: "eGrowth LMS",
    value: "Performance Dashboards",
    mainService: "Training",
    img: performanceDashboard,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Performance Dashboards", highlight: true },
    ],
    paragrapgh: [
      "Performance Dashboards turn EHS and quality data into real-time KPIs, predictive insight, and executive reporting, pulling from multiple sources into one unified view. They make performance visible to the people who make decisions.",
      "For your organisation, dashboards replace slow manual reporting with live intelligence, surfacing risks and trends early. Better visibility protects performance by enabling proactive action, and gives leadership the evidence base to steer EHS and quality with confidence.",
    ],

    subHeading: "See LMS Catalogue",
    listItems: [
      "Dashboard User Training",
"Analytics Training"
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "KPI Dashboard Design",
"Data Integration Setup",
"Predictive Analytics Configuration"
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Data Quality Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Real-time KPI Dashboards",
"BI & Reporting Module"
    ],

    downlaodheadingText: "Performance Dashboards Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: performanceDashboard,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  {
    title: "Software & Digital Solutions",
    category: "eGrowth LMS",
    value: "Digital Resources & Toolkits",
    mainService: "Training",
    img: digitalResource,
    headingParts: [
      { text: "What is ", highlight: false },
      { text: "Digital Resources & Toolkits", highlight: true },
    ],
    paragrapgh: [
      "Digital Resources and Toolkits provide ready-to-use documentation and knowledge assets that accelerate certification and competency, from ISO document kits to checklists, presentations, and e-books. They give teams a proven starting point rather than a blank page.",
      "For your organisation, ready-made, customisable resources cut the time and cost of building systems from scratch and raise the baseline quality of documentation. Accelerated, standardised documentation protects project timelines and reduces dependence on external consultants for routine work.",
    ],

    subHeading: "See LMS Catalogue",
    listItems: [
      "Toolkit Usage Orientation",
    ],

    secondSubHeading: "Implementation",
    secondListItems: [
      "Ready-to-use ISO Document Toolkits",
"Customizable Checklists & Guides",
"Training Presentations & e-books"
    ],

    thirdSubHeading: "Auditing",
    thirdListItems: [
      "Documentation Gap Review",
    ],

    fourthSubHeading: "Software",
    fourthListItems: [
     "Digital Resource Library",
"Toolkit Download Portal"
    ],

    downlaodheadingText: "Digital Resources & Toolkits Access Documents",
    downlaodheadingSubText:
      "Comprehensive assessment tool covering all ISO 50001 requirements with scoring methodology and implementation priority guidance.",
    downlaodheadingImg:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    downloadPdf:
      "../../public/service_pdf/Electrical Safety Assessment Report_UIL_03.05.2025.pdf",
    media: [
      {
        id: 1,
        type: "image",
        url: digitalResource,
        title: "Modern Architecture",
      },

      // {
      //   id: 2,
      //   type: "video",
      //   url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
      //   title: "Interior Space",
      // },
      // {
      //   id: 3,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Contemporary Living",
      // },
      // {
      //   id: 4,
      //   type: "image",
      //   url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      //   title: "Urban Design",
      // },

    ],
  },

  
  // Software & Digital Solutions Data End Here 


];

export default servicesCardData;
