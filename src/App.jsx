import React, { useState } from 'react';

const topics = [
  { id: 'foundation', name: 'Cloud foundations', label: '01 — THE BASE LAYER', title: 'Know what you’re managing.', copy: 'Cloud infrastructure spans compute, storage, networking, identity, and managed services across public and private environments. Start with how these building blocks connect, then learn how hybrid and multi-cloud platforms give teams one place to provision and govern them.', tools: ['HYBRID CLOUD', 'VIRTUALIZATION', 'NETWORKING', 'IDENTITY'], question: 'How do teams get a consistent view of resources across environments?' },
  { id: 'automation', name: 'Automation & platforms', label: '02 — FROM TICKET TO SERVICE', title: 'Make infrastructure repeatable.', copy: 'Infrastructure as code and GitOps turn environments into versioned, reviewable definitions. Kubernetes orchestrates containerized workloads; platform engineering adds reusable workflows and self-service guardrails so teams can move quickly without losing control.', tools: ['TERRAFORM / OPENToFU', 'GITOPS', 'KUBERNETES', 'PLATFORM ENGINEERING'], question: 'Can a team request a compliant environment without waiting on a manual handoff?' },
  { id: 'observability', name: 'Observability & reliability', label: '03 — SEE AND IMPROVE', title: 'Understand what the system is doing.', copy: 'Metrics, logs, traces, and events help teams detect issues and follow them across services. OpenTelemetry provides vendor-neutral instrumentation; service objectives and incident practices connect signals to reliability work.', tools: ['OPENTELEMETRY', 'METRICS · LOGS · TRACES', 'SLOs', 'INCIDENT RESPONSE'], question: 'Can you trace a user-facing issue from symptom to the responsible service?' },
  { id: 'security', name: 'Security & governance', label: '04 — TRUST BY DESIGN', title: 'Build guardrails into the workflow.', copy: 'Cloud security combines identity-first access, least privilege, secrets management, policy as code, vulnerability management, and continuous compliance. Shared responsibility means teams must understand which controls belong to their cloud provider and which remain theirs.', tools: ['IAM', 'POLICY AS CODE', 'SECRETS', 'SUPPLY CHAIN'], question: 'Who can change this resource, and would that change meet policy?' },
  { id: 'cost', name: 'Cost & sustainability', label: '05 — EFFICIENT OPERATIONS', title: 'Connect usage to value.', copy: 'FinOps brings engineering, finance, and product teams together to make cloud spending visible and actionable. Tagging, budgets, allocation, rightsizing, and workload efficiency help teams balance cost with performance and reliability.', tools: ['FINOPS', 'COST ALLOCATION', 'RIGHTSIZING', 'SUSTAINABILITY'], question: 'Which workload drives this spend, and what outcome does it support?' },
];

const experiences = [
  { date: <>CURRENT ROLE<br />XAASIO SYSTEMS</>, title: 'Cloud Management Platform Developer', company: 'XaasIO Systems', copy: 'Developing cloud management platform capabilities with a focus on cloud infrastructure management.', tags: ['CLOUD MANAGEMENT', 'INFRASTRUCTURE', 'PLATFORM ENGINEERING'] },
  { date: <>JUL — SEP 2026<br />XAASIO SYSTEMS</>, title: 'Cloud Intern', company: 'XaasIO Systems', copy: 'Worked with monitoring, logging, and distributed tracing in cloud environments, and explored cloud management platform architecture.', tags: ['CLOUD MONITORING', 'LOGGING', 'DISTRIBUTED TRACING'] },
  { date: <>MAY — JUN 2024<br />CHENNAI, INDIA</>, title: 'Data Science Intern', company: 'Larsen & Toubro (L&T) Constructions', copy: 'Built a YOLOv8 object detection workflow for monitoring construction site activity. Prepared and labeled image datasets, connected the detection pipeline to live camera feeds, and explored augmentation strategies to improve robustness for safety and equipment tracking.', tags: ['YOLOV8', 'COMPUTER VISION', 'DATA PREPARATION'] },
];

const projects = [
  { number: '01', title: 'Ergonomic Detection System', category: 'COMPUTER VISION', subject: 'Ergonomic Detection System', copy: 'Real-time posture analysis using pose estimation, with a Flask web interface for live video feedback and corrections.', tags: ['PYTHON', 'OPENCV', 'MEDIAPIPE', 'FLASK'], art: 'ergonomic' },
  { number: '02', title: 'EEG Emotion Recognition', category: 'MACHINE LEARNING', subject: 'EEG Emotion Recognition', copy: 'Spiking neural network framework for classifying six emotional states, with peak accuracy of 94.1% on the DEAP dataset.', tags: ['EEG', 'DEAP DATASET', 'SPIKING NEURAL NETWORKS'], art: 'eeg' },
  { number: '03', title: 'Acid Rain Alert System', category: 'INTERNET OF THINGS', subject: 'Acid Rain Alert System', copy: 'Street-light-mounted rain, pH, and SO₂ sensors that trigger alerts when environmental readings pass thresholds.', tags: ['ESP8266', 'PH SENSOR', 'SO₂ SENSOR', 'IOT'], art: 'rain' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="topbar">
    <a className="wordmark" href="#home" aria-label="Benson Shiju, home"><span className="monogram"><img className="brand-glyph" src="assets/logo-mark.svg" alt="" /></span><span>Benson Shiju<br /><small>CLOUD PLATFORMS · INFRASTRUCTURE</small></span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /></button>
    <nav id="navigation" className={`navigation${open ? ' navigation-open' : ''}`} aria-label="Main navigation">
      <a href="#work" onClick={close}>Projects</a><a href="#experience" onClick={close}>Experience</a><a href="#guide" onClick={close}>Cloud guide</a><a href="#about" onClick={close}>About</a><a href="#contact" onClick={close}>Contact</a><a className="nav-link" href="assets/Benson-K-Shiju-Resume.pdf" target="_blank" rel="noreferrer">Resume <span>↗</span></a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero wrap">
    <div className="hero-copy"><div className="eyebrow"><span className="availability-dot" /> CLOUD PLATFORM ENGINEERING <span className="eyebrow-year">· XAASIO SYSTEMS</span></div>
      <h1>Hybrid cloud.<br /><span>One clear</span><br />control plane.</h1>
      <p className="hero-lede">I’m Benson Shiju, a <span className="highlight">Cloud Management Platform Developer at XaasIO Systems.</span> I build and explore ways to make hybrid infrastructure easier to provision, observe, secure, and operate.</p>
      <div className="hero-actions"><a className="button button-dark" href="#guide">Explore the cloud guide <span>↘</span></a><a className="text-link" href="assets/Benson-K-Shiju-Resume.pdf" target="_blank" rel="noreferrer">View my resume <span>↗</span></a></div>
      <div className="hero-note"><span className="note-line" /><span>CLOUD MANAGEMENT PLATFORM<br />PALGHAT · KERALA · INDIA</span></div>
    </div>
    <div className="hero-art" aria-label="Benson looking toward a mountain landscape" role="img"><div className="art-top"><span>CLOUD MANAGEMENT ARCHITECTURE</span><span>KS — 2026</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-core"><span>CMP</span></div><div className="orbit-label label-a">PRIVATE CLOUD <i>↗</i></div><div className="orbit-label label-b">PUBLIC CLOUD <i>↗</i></div><div className="orbit-label label-c">OPERATIONS <i>↗</i></div><div className="art-bottom"><span>CONNECTED INFRASTRUCTURE.</span><span>✳ &nbsp; CLOUD PLATFORM ENGINEERING</span></div></div>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><a href="#experience" aria-label="Scroll to experience">↓</a><span className="hero-bottom-right">CLOUD MANAGEMENT · INFRASTRUCTURE</span></div>
  </section>;
}

function Experience() {
  return <section className="experience-section" id="experience"><div className="wrap"><div className="section-heading"><div><div className="eyebrow section-eyebrow">01 / CLOUD &amp; ENGINEERING EXPERIENCE</div><h2>Building for <span>the cloud.</span></h2></div><p>Cloud platform development, infrastructure management, and an engineering foundation in applied AI.</p></div>
    <div className="experience-list">{experiences.map((item, index) => <article key={item.title} className={`experience-item${index === 0 ? ' experience-current' : ''}`}><div className="experience-date">{item.date}</div><div className="experience-main"><h3>{item.title} <span>· {item.company}</span></h3><p>{item.copy}</p><div className="project-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="experience-mark">0{index + 1}</div></article>)}</div>
  </div></section>;
}

function CloudGuide() {
  const [active, setActive] = useState(topics[0]);
  return <section className="guide-section" id="guide"><div className="wrap"><div className="guide-heading"><div><div className="eyebrow section-eyebrow">02 / FIELD GUIDE · CLOUD INFRASTRUCTURE</div><h2>Cloud, made<br /><span>understandable.</span></h2></div><p>A practical map of the systems and skills behind modern cloud operations. Choose a topic to see what it does and where to start.</p></div>
    <div className="guide-layout"><div className="guide-index" role="tablist" aria-label="Cloud infrastructure topics">{topics.map((topic, index) => <button key={topic.id} className={`guide-tab${active.id === topic.id ? ' is-active' : ''}`} id={`tab-${topic.id}`} role="tab" aria-selected={active.id === topic.id} aria-controls="guide-panel" onClick={() => setActive(topic)}><span>0{index + 1}</span> {topic.name} <i>↗</i></button>)}</div>
      <article className="guide-panel" id="guide-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}><div className="guide-panel-top"><span>{active.label}</span><span className="guide-live"><i /> LEARNING MAP</span></div><h3>{active.title}</h3><p>{active.copy}</p><div className="guide-tools">{active.tools.map(tool => <span key={tool}>{tool}</span>)}</div><div className="guide-next"><span>GOOD FIRST QUESTION</span><strong>{active.question}</strong></div></article>
    </div><div className="manageiq-callout"><div><span className="eyebrow">OPEN-SOURCE EXPLORATION</span><h3>One platform view.<br /><em>Many environments.</em></h3><p>I’m exploring ManageIQ to understand how an open-source cloud management platform discovers, inventories, and automates infrastructure across providers.</p></div><a href="https://www.manageiq.org/" target="_blank" rel="noreferrer">Explore ManageIQ <span>↗</span></a></div>
    <p className="guide-note">Technology landscape evolves; explore the <a href="https://landscape.cncf.io/" target="_blank" rel="noreferrer">CNCF landscape</a> and <a href="https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/" target="_blank" rel="noreferrer">annual cloud native survey</a>, then validate versions and fit for your environment.</p>
  </div></section>;
}

function ProjectArt({ art, number }) {
  if (art === 'ergonomic') return <div className="visual-frame"><div className="fake-window"><div className="window-bar"><span>● &nbsp; ● &nbsp; ●</span><span>ERGONOMIC DETECTION</span><span>↗</span></div><div className="window-content"><div className="mock-eyebrow">REAL-TIME POSTURE ANALYSIS</div><div className="mock-head">Better posture.<br /><i>Better work.</i></div><div className="mock-rule" /><div className="mock-bottom"><span>POSE ESTIMATION · LIVE FEEDBACK</span><span>CV / 01</span></div></div></div></div>;
  if (art === 'eeg') return <div className="poster-art"><div className="poster-circle circle-back" /><div className="poster-circle circle-mid" /><div className="poster-circle circle-front">94.1%</div><div className="poster-word">Signals<br />to <i>feeling.</i></div><span className="poster-footer">SIX EMOTIONAL STATES · DEAP DATASET</span></div>;
  return <div className="type-art"><div className="type-marker">RAIN / PH / SO₂</div><span className="type-giant">Sense.<br /><i>alert.</i><span className="type-period">●</span></span><div className="type-footer"><span>CONNECTED ENVIRONMENTAL MONITORING</span><span>IOT &nbsp; ↗</span></div><div className="type-sun" /></div>;
}

function Projects() {
  return <section className="work-section" id="work"><div className="wrap"><div className="section-heading"><div><div className="eyebrow section-eyebrow">03 / SELECTED PROJECTS</div><h2>Engineering <span>in practice.</span></h2></div><p>Applied AI, computer vision, and connected technology — projects that shaped my engineering foundations.</p></div>
    <div className="work-grid">{projects.map(project => <article key={project.number} className={`project-card${project.art === 'ergonomic' ? ' project-feature' : ''}`}><a href={`mailto:bensonkshiju04@gmail.com?subject=${encodeURIComponent(project.subject)}`} className={`project-visual visual-${project.art === 'ergonomic' ? 'teal' : project.art === 'eeg' ? 'coral' : 'lime'}`} aria-label={`Ask about ${project.title}`}><div className="visual-caption">{project.number} — {project.category}</div><ProjectArt art={project.art} number={project.number} /></a><div className="project-meta"><div><h3>{project.title}</h3><p>{project.copy}</p></div><a href={`mailto:bensonkshiju04@gmail.com?subject=${encodeURIComponent(project.subject)}`} className="arrow-link" aria-label={`Ask about ${project.title}`}>↗</a></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
    <div className="all-work">Want the full picture? <a href="assets/Benson-K-Shiju-Resume.pdf" target="_blank" rel="noreferrer">View my resume <i>↗</i></a></div>
  </div></section>;
}

function Credentials() {
  return <section className="credentials-section" aria-label="Education, technical skills, and certifications"><div className="wrap credentials-grid"><article><div className="eyebrow section-eyebrow">EDUCATION · 2022—2026</div><h3>B.Tech, Computer Science &amp; Engineering</h3><p>Artificial Intelligence specialization · First Class<br />Karunya Institute of Technology and Sciences</p></article><article><div className="eyebrow section-eyebrow">TECHNICAL TOOLKIT</div><h3>Cloud · Python · Java · SQL</h3><p>Cloud infrastructure · AI &amp; machine learning<br />VS Code · Jupyter Notebook</p></article><article><div className="eyebrow section-eyebrow">CERTIFICATIONS</div><h3>Azure Fundamentals · Google Cybersecurity</h3><p>Microsoft AZ-900 · Google Cybersecurity Certificate</p></article></div></section>;
}

function About() {
  return <section className="about-section" id="about"><div className="wrap about-layout"><div className="about-heading"><div className="eyebrow section-eyebrow">04 / A LITTLE ABOUT ME</div><h2>Cloud systems<br />that work <span>together.</span></h2><div className="about-marker">✳ &nbsp; CLOUD PLATFORM ENGINEERING · XAASIO</div></div><div className="about-content"><div className="profile-intro"><img src="assets/professional-portrait.jpeg" alt="Professional portrait of Benson Shiju" width="1056" height="1320" loading="lazy" /><div><strong>Benson Shiju</strong><span>CLOUD MANAGEMENT PLATFORM DEVELOPER</span></div></div><p className="about-intro">I work at the intersection of <strong>cloud management platforms and infrastructure</strong>, developing tools to manage modern cloud environments.</p><p className="about-body">My path includes cloud platform development, monitoring, logging, and distributed tracing, alongside earlier projects in computer vision, machine learning, and IoT. I hold a B.Tech in Computer Science and Engineering (Artificial Intelligence), First Class, from Karunya Institute of Technology and Sciences.</p><div className="principles"><div className="principle"><span>01</span><strong>Cloud platforms</strong><p>Infrastructure<br />management.</p></div><div className="principle"><span>02</span><strong>Operational clarity</strong><p>Monitoring, logs<br />and tracing.</p></div><div className="principle"><span>03</span><strong>Engineering base</strong><p>Computer science<br />and applied AI.</p></div></div><a className="about-link" href="https://www.linkedin.com/in/bensonkshiju/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a></div></div></section>;
}

function Contact() {
  const [topic, setTopic] = useState('Cloud management platforms');
  return <section className="contact-section" id="contact"><div className="wrap contact-layout"><div><div className="eyebrow section-eyebrow">05 / GET IN TOUCH</div><h2>Let’s talk<br />cloud <span>platforms.</span></h2></div><div className="contact-info"><p>Interested in building or modernizing cloud infrastructure management? For platform consulting and delivery inquiries, connect with my company, XaasIO. For career, learning, or ManageIQ conversations, reach me directly.</p><a className="company-link" href="https://xaasio.com/" target="_blank" rel="noreferrer">Build a cloud management platform with XaasIO <span>↗</span></a><div className="interest-picker" role="group" aria-label="Choose a conversation topic">{['Cloud management platforms', 'ManageIQ exploration', 'Platform engineering'].map(value => <button key={value} className={`interest-chip${topic === value ? ' is-selected' : ''}`} type="button" onClick={() => setTopic(value)}>{value} <span>↗</span></button>)}</div><a className="email-link" href={`mailto:bensonkshiju04@gmail.com?subject=${encodeURIComponent(topic)}`}>Start a conversation <span>↗</span></a><div className="social-links"><a href="https://www.linkedin.com/in/bensonkshiju/" target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a><a href="tel:+919447344426">CALL <span>↗</span></a><a href="assets/Benson-K-Shiju-Resume.pdf" target="_blank" rel="noreferrer">DOWNLOAD RESUME <span>↗</span></a></div></div></div></section>;
}

export default function App() {
  return <><Header /><main id="home"><Hero /><Experience /><CloudGuide /><Projects /><Credentials /><About /><Contact /></main><footer className="footer"><div className="wrap footer-inner"><a className="footer-brand" href="#home"><img className="footer-glyph" src="assets/logo-mark.svg" alt="" /> <small>BENSON SHIJU · CLOUD PLATFORM ENGINEERING</small></a><span>MADE WITH CARE <span className="footer-star">✳</span> {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer></>;
}
