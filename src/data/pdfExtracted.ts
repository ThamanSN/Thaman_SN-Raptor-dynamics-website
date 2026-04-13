export type LeadershipMember = {
  name: string
  role: string
}

export type StudentRole = {
  role: string
}

export const pdfStructuredContent = {
  sourceTitle: 'Raptor Dynamics Club Profile (NIE)',
  institute: 'The National Institute of Engineering, Mysore',
  instituteFormal: 'The National Institute of Engineering (Autonomous under VTU), Mysuru',
  address: 'Manandavadi Road, Mysuru - 570008',
  contact: {
    phone: '0821-2480475, 2481220, 4004900',
    fax: '0821-2485802',
    email: 'principal@nie.ac.in',
    website: 'www.nie.ac.in',
  },
  clubName: 'RAPTOR DYNAMICS',
  tagline: 'Innovate. Integrate. Elevate.',
  about:
    'RAPTOR DYNAMICS is a student-driven drone technology club focused on designing, building, and deploying unmanned aerial systems (UAVs). The club provides hands-on learning in aerodynamics, flight control, embedded systems, and AI applications. Members work on real-time projects, participate in competitions, and develop innovative drone solutions for surveillance, agriculture, mapping, and disaster management. The club promotes interdisciplinary collaboration, technical excellence, and innovation, preparing students to become industry-ready engineers and leaders in aerial robotics.',
  vision:
    'To lead innovation in drone technology through excellence in design, research, and real-world applications.',
  mission: [
    'Design, build, and innovate UAV systems through immersive hands-on learning.',
    'Develop interdisciplinary expertise in aerodynamics, electronics, and AI systems.',
    'Encourage collaboration, competition, and real-world problem solving.',
    'Cultivate industry-ready engineers with an entrepreneurial mindset.',
  ],
  objectives: [
    'Design and develop efficient UAV systems.',
    'Provide hands-on training in drone fabrication, programming, and flight operations.',
    'Enhance knowledge in aerodynamics, embedded systems, and AI.',
    'Promote innovation through research and prototyping.',
    'Participate in national and international competitions.',
    'Build real-world solutions for agriculture, surveillance, and disaster management.',
    'Foster teamwork and leadership.',
    'Bridge the gap between academics and industry.',
  ],
}

export const leadershipHierarchy: Record<string, LeadershipMember[]> = {
  Patron: [{ name: 'Dr. Nagendra Parashar', role: 'Principal' }],
  'Chief Advisor': [{ name: 'Dr. Rohini Nagapadma', role: 'Chief Advisor' }],
  Advisors: [
    { name: 'Dr. H N Divakar', role: 'Professor & Head - Mechanical' },
    { name: 'Dr. Rajalekshmi Kishore', role: 'Professor & Head - E&C' },
  ],
  'Faculty Advisors': [
    { name: 'Dr. Ashok K', role: 'Associate Professor' },
    { name: 'Dr. Anand A', role: 'Assistant Professor' },
  ],
}

export const officeBearerRoles: StudentRole[] = [
  { role: 'Student President' },
  { role: 'President Elect' },
  { role: 'Head - Technical & Development' },
  { role: 'Head - Operations & Safety' },
  { role: 'Head - Training, Events & Outreach' },
  { role: 'Head - Media & Logistics' },
  { role: 'Executive Member 1' },
  { role: 'Executive Member 2' },
  { role: 'Executive Member 3' },
  { role: 'Executive Member 4' },
]

export const pdfRawExtractedText = `THE NATIONAL INSTITUTE OF
(Autonomous Institution under VTU)
Manandavadi Road, Mysuru
Phone: 0821-2480475, 2481220, 4004900 Fax: 0821
Drone Club Name : RAPTOR DYNAMICS
About Club:
RAPTOR DYNAMICS is a student
building, and deploying unmanned aerial systems (UAVs). The club serves as a platform for
hands-on \tlearning \tin \taerodynamics, \tflight \tcontrol, \tembedded \tsystems, \tand \tAI
applications.
Members work on real-time projects, participate in competitions, and develop innovative
drone solutions for applications such as surveillance, agriculture, mapping, and disaster
management.
The club encourages interdisciplinary collaboration, technical excellen
preparing students to become industry
and smart technologies.
Vision
To lead innovation in drone technology through excellence in design, research, and real
world applications.
Mission
 \tDesign, build, and innovate UAV systems through immersive hands
 \tDevelop interdisciplinary expertise in aerodynamics, electronics, and AI
systems
 \tEncourage collaboration, competition, and real
 \tCultivate industry-ready engineers with strong entrepreneurial mindset
Objectives
 \tTo design and develop efficient and reliable UAV systems
 \tTo provide hands-on training in drone fabrication, programming, and flight operations
 \tTo enhance knowledge in aerodynamics, embedded systems, and AI
applications
 \tTo promote innovation through projects, research, and prototyping
 \tTo participate in national and international drone competitions and challenges
 \tTo develop practical solut
surveillance, and disaster management
 \tTo foster teamwork, leadership, and interdisciplinary collaboration
 \tTo bridge the gap between academic learning and industry requirements
THE NATIONAL INSTITUTE OF ENGINEERING
(Autonomous Institution under VTU)
Manandavadi Road, Mysuru – 570008
2480475, 2481220, 4004900 Fax: 0821-2485802, E-mail: principal@nie.ac.in, Website:
RAPTOR DYNAMICS- Innovate. Integrate. Elevate.
is a student-driven drone technology club focused on designing,
building, and deploying unmanned aerial systems (UAVs). The club serves as a platform for
on \tlearning \tin \taerodynamics, \tflight \tcontrol, \tembedded \tsystems, \tand \tAI
time projects, participate in competitions, and develop innovative
drone solutions for applications such as surveillance, agriculture, mapping, and disaster
The club encourages interdisciplinary collaboration, technical excellence, and innovation,
preparing students to become industry-ready engineers and future leaders in aerial robotics
To lead innovation in drone technology through excellence in design, research, and real
Design, build, and innovate UAV systems through immersive hands
Develop interdisciplinary expertise in aerodynamics, electronics, and AI
Encourage collaboration, competition, and real-world problem solving
ready engineers with strong entrepreneurial mindset
To design and develop efficient and reliable UAV systems
on training in drone fabrication, programming, and flight operations
To enhance knowledge in aerodynamics, embedded systems, and AI
To promote innovation through projects, research, and prototyping
To participate in national and international drone competitions and challenges
To develop practical solutions for real-world applications such as agriculture,
surveillance, and disaster management
To foster teamwork, leadership, and interdisciplinary collaboration
To bridge the gap between academic learning and industry requirements
ENGINEERING
, Website: www.nie.ac.in
Innovate. Integrate. Elevate.
driven drone technology club focused on designing,
building, and deploying unmanned aerial systems (UAVs). The club serves as a platform for
on \tlearning \tin \taerodynamics, \tflight \tcontrol, \tembedded \tsystems, \tand \tAI-based
time projects, participate in competitions, and develop innovative
drone solutions for applications such as surveillance, agriculture, mapping, and disaster
ce, and innovation,
ready engineers and future leaders in aerial robotics
To lead innovation in drone technology through excellence in design, research, and real-
Design, build, and innovate UAV systems through immersive hands-on learning
Develop interdisciplinary expertise in aerodynamics, electronics, and AI-driven
world problem solving
ready engineers with strong entrepreneurial mindset
on training in drone fabrication, programming, and flight operations
To enhance knowledge in aerodynamics, embedded systems, and AI-based
To promote innovation through projects, research, and prototyping
To participate in national and international drone competitions and challenges
world applications such as agriculture,
To foster teamwork, leadership, and interdisciplinary collaboration
To bridge the gap between academic learning and industry requirements

-- 1 of 2 --

THE NATIONAL INSTITUTE OF
(Autonomous Institution under VTU)
Manandavadi Road, Mysuru
Phone: 0821-2480475, 2481220, 4004900 Fax: 0821
Patron
Dr. Dr.Nagendra Parashar, Principal
Dr. Rohini Nagapadma, Chief
Chief Advisor
Dr. H N Divakar, Professor & Head
Dr. Rajalekshmi Kishore, Professor & Head
Faculty Advisors
 \tDr. Ashok K, Associate Professor
 \tDr. Anand A, Assistant
Office Bearers
Sl. No \tName
1
2
3
4
5
6
7
8
9
10
THE NATIONAL INSTITUTE OF ENGINEERING
(Autonomous Institution under VTU)
Manandavadi Road, Mysuru – 570008
2480475, 2481220, 4004900 Fax: 0821-2485802, E-mail: principal@nie.ac.in, Website:
Club Committee
, Principal - NIE
Chief Innovation Officer- NIE
Dr. H N Divakar, Professor & Head- Department of ME- NIE
, Professor & Head- Department of E&C- NIE
, Associate Professor- Department of E&C- NIE
istant Professor- Department of ME- NIE
Name \tYear / Dept.
Student President
President Elect
Head
Development
Head
Committee
Head
Outreach Committee
Head
Media & Logistics Committee
Executive Member
Executive Member
Executive Member
Executive Member
ENGINEERING
, Website: www.nie.ac.in
NIE
Responsibility
Student President
President Elect
Head- Technical &
Development
Head- Operations & Safety
Committee
Head- Training, Events &
Outreach Committee
Head - Documentation,
Media & Logistics Committee
Executive Member
Executive Member
Executive Member
Executive Member

-- 2 of 2 --`
