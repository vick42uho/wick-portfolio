import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Rust } from "@/components/ui/svgs/Rust";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Php } from "@/components/ui/svgs/php";
import { FastApi } from "@/components/ui/svgs/fastapi";
import { Bun } from "@/components/ui/svgs/bun";
import { Elysia } from "@/components/ui/svgs/elysia";
import { SqlServer } from "@/components/ui/svgs/sqlserver";


export const DATA = {
  name: "𝕎𝕚𝕔𝕜",
  initials: "WT",
  url: "https://wick-portfolio-22.vercel.app/",

  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok",

  description:
    "Senior Full-Stack Software Engineer building scalable healthcare and enterprise systems.",

  descriptionSequence: [
    "Transforming complex business challenges into elegant software solutions.",
    "Designing scalable architectures across Frontend, Backend, and Infrastructure.",
    "Building secure, maintainable, and production-ready applications.",
    "Passionate about DevOps, performance optimization, and operational excellence.",
  ],

  summary: `
I'm a Full-Stack Software Engineer with a passion for building software that creates meaningful business impact.

I specialize in architecting and developing scalable web applications, backend services, and enterprise platforms for healthcare and business environments. With expertise spanning Frontend, Backend, Database, Infrastructure, and Deployment, I thrive on delivering end-to-end solutions that simplify complex workflows and improve operational efficiency.

My technical background includes React, Next.js, TypeScript, Rust, Python, PostgreSQL, Docker, and modern cloud technologies, complemented by hands-on experience in DevOps, CI/CD, and production infrastructure management.

I enjoy working throughout the entire software development lifecycle—from requirements analysis and system design to implementation, deployment, and long-term maintenance—while maintaining a strong focus on performance, security, scalability, and clean architecture.

Driven by continuous learning and engineering excellence, I am committed to building reliable, high-quality systems that provide exceptional user experiences and long-term business value.
  `,




  avatarUrl: "/me.jpg",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },

    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Rust", icon: Rust },
    { name: "PHP", icon: Php },

    { name: "FastAPI", icon: FastApi },
    { name: "Elysia", icon: Elysia },
    { name: "Bun", icon: Bun },

    { name: "SQL Server", icon: SqlServer },
    { name: "PostgreSQL", icon: Postgresql },

    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vic_the_gunners@hotmail.com",
    tel: "092-445-2492",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vick42uho",
        icon: Icons.github,
        navbar: true,
      },

      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://dub.sh/dillion-linkedin",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
  company: "Vichaivej Hospital",
  href: "https://www.vichaivej.com/",
  badges: [],
  location: "Remote",
  title: "Office Staff / Health Checkup Operations",
  logoUrl: "/vichaivej.png",
  start: "May 2015",
  end: "November 2022",
  description:
    "Managed enterprise health-checkup operations by maintaining accurate medical records, coordinating workflows, and preparing operational reports. Built Excel-based formulas and data validation logic to improve laboratory result processing and reporting accuracy. Collaborated with cross-functional teams to support client services, operational efficiency, and accounting documentation.",
},
{
  company: "Yanhee International Hospital",
  href: "https://th.yanhee.net/",
  badges: [],
  location: "Remote",
  title: "Developer / Programmer",
  logoUrl: "/yanhee.jpg",
  start: "December 2023",
  end: "Present",
  description:
    "Develop and maintain enterprise web applications that digitalize hospital operations and support multiple business units. Design scalable solutions, optimize existing systems, and implement new features across CRM, KPI, Competency, HR, and request-management platforms. Build secure role-based modules, automate operational workflows, improve reporting capabilities, and collaborate with stakeholders to deliver reliable, user-focused solutions that enhance productivity and reduce manual processes.",
},
    
  ],
  education: [
    {
      school: "Dhonburi Rajabhat University",
      href: "https://dru1.dru.ac.th/",
      degree: "Bachelor of Science in Computer Science | GPA: 3.05",
      logoUrl: "/dru.jpg",
      start: "2019",
      end: "2022",
    },
    
  ],
  projects: [
    {
      title: "Request Management System",
      href: "https://requests-frontend-beta.vercel.app/",
      dates: "2026",
      active: true,
      description:
  "A full-stack web application for managing internal service requests and organizational workflows. Designed to support paperless operations by reducing manual paperwork and eliminating the need for phone-based follow-ups. Enables employees to submit requests, track progress, and collaborate with requesters, approvers, and technicians in real time. Fully responsive for both desktop and mobile devices, providing transparent workflow management and improved operational efficiency.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Rust",
        "Actix Web",
        "Tokio",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://requests-frontend-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Vflow.mp4",
      images: [
        {
          src: "/img-project/request/dashboard.webp",
          title: "Dashboard Overview",
          description: "แดชบอร์ดสรุปภาพรวม สถิติคำร้องขอแยกตามสถานะ และปริมาณงานของแต่ละฝ่ายแบบ Real-time",
        },
        {
          src: "/img-project/request/create-request.webp",
          title: "Create Request Form",
          description: "ฟอร์มสร้างใบคำร้องขอบริการ แยกประเภทชัดเจน (บริการ / ปัญหา / พัฒนา) พร้อมระบบแนบไฟล์",
        },
        {
          src: "/img-project/request/Task-list.webp",
          title: "Request & Task List",
          description: "ตารางรายการคำร้องและงานทั้งหมด พร้อมแท็บแยกสถานะ ฟิลเตอร์ค้นหา และระบบแบ่งหน้า",
        },
        {
          src: "/img-project/request/Task.webp",
          title: "Task Details & Assignment",
          description: "หน้ารายละเอียดคำร้อง การมอบหมายงานให้ผู้รับผิดชอบ กำหนดวันแล้วเสร็จ และบันทึกประวัติการดำเนินงาน",
        },
        {
          src: "/img-project/request/Approval.webp",
          title: "Approval Workflow",
          description: "ขั้นตอนการพิจารณาอนุมัติคำร้องขอตามสายบังคับบัญชา (ผู้จัดการฝ่าย / ผู้อำนวยการ)",
        },
        {
          src: "/img-project/request/report.webp",
          title: "Reports & Analytics",
          description: "ระบบรายงานสถิติการให้บริการ วิเคราะห์ประเภทปัญหา และระยะเวลาเฉลี่ยในการปิดงาน",
        },
        {
          src: "/img-project/request/manage-users.webp",
          title: "User Management",
          description: "ระบบจัดการผู้ใช้งาน กำหนดบทบาทสิทธิ์การเข้าถึง (Admin / Approver / User) และสถานะบัญชี",
        },
        {
          src: "/img-project/request/manage-department.webp",
          title: "Department Management",
          description: "โครงสร้างฝ่ายและแผนกในองค์กร สำหรับจัดสรรเส้นทางการส่งต่อและอนุมัติใบคำร้อง",
        },
        {
          src: "/img-project/request/manage-subjects.webp",
          title: "Service Subjects & Topics",
          description: "ระบบกำหนดหมวดหมู่และหัวข้อบริการที่แต่ละฝ่ายเปิดรับคำร้อง",
        },
        {
          src: "/img-project/request/login.webp",
          title: "Authentication Portal",
          description: "หน้าระบบยืนยันตัวตนและความปลอดภัยด้วย JWT Session Management",
        },
        {
          src: "/img-project/request/profile.webp",
          title: "User Profile & Preferences",
          description: "หน้าข้อมูลส่วนตัว ข้อมูลติดต่อ และการตั้งค่าบัญชีผู้ใช้งาน",
        },
      ],
    },
    {
      title: "TimeTrack OT",
      href: "https://github.com/vick42uho/TimeTrackOT",
      dates: "2026",
      active: true,
      description:
        "A high-performance mobile application for work time tracking and overtime (OT) management built with React Native and Expo. Features an automated morning/evening OT calculation engine, Thai Buddhist Era calendar, attendance photo proof attachment with permanent sandboxed local storage, full-screen smart workday alarm with lockscreen takeover, and 100% offline SQLite database with WAL mode.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo SQLite",
        "Expo Notifications",
        "Kotlin",
        "TailwindCSS",
        "BNA UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vick42uho/TimeTrackOT",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Releases",
          href: "https://github.com/vick42uho/TimeTrackOT-Releases/releases",
          icon: <Icons.download className="size-3" />,
        },
      ],
      image: "",
      video: "/TimeTrackOT.mp4",
      images: [
        {
          src: "/img-project/timetrackOT/307718_0.webp",
          title: "Dashboard & Work Statistics",
          description: "หน้าหลักสรุปเวลาเลิกงานเฉลี่ยจริง, ชั่วโมงทำงานสะสม, สถิติ OT และสถานะการทำงานประจำวัน",
        },
        {
          src: "/img-project/timetrackOT/307719_0.webp",
          title: "Attendance & GPS Photo Proof",
          description: "ระบบลงเวลาทำงานอัตโนมัติตามพิกัด GPS พร้อมถ่ายภาพหรือแนบหลักฐานสแกนนิ้ว/บัตรตอก",
        },
        {
          src: "/img-project/timetrackOT/307720_0.webp",
          title: "Leave & Work Calendar",
          description: "ปฏิทินวันหยุด วันลาพักร้อน และ Work From Home (WFH) ปี พ.ศ. 2569 พร้อมระบบ Smart Alarm",
        },
        {
          src: "/img-project/timetrackOT/307721_0.webp",
          title: "Smart Workday Alarm",
          description: "ระบบตั้งค่านาฬิกาปลุกอัจฉริยะ ปลุกเฉพาะวันทำงานหรือ WFH และงดปลุกอัตโนมัติในวันหยุด",
        },
        {
          src: "/img-project/timetrackOT/307722_0.webp",
          title: "Work Hours & OT Report",
          description: "รายงานสรุปชั่วโมงทำงานและ OT สุทธิประจำเดือน พร้อมตัวกรองตามรอบงวดและฟังก์ชันแชร์สรุป",
        },
        {
          src: "/img-project/timetrackOT/307723_0.webp",
          title: "Income & Wage Estimation",
          description: "ระบบจำลองคำนวณค่าแรง รายได้สุทธิ ค่ากะ และสลิปเงินเดือนจำลองแบบ Real-time",
        },
        {
          src: "/img-project/timetrackOT/307724_0.webp",
          title: "Wage Formula & Shift Settings",
          description: "การตั้งค่าสูตรคำนวณฐานเงินเดือน เรทโอที ค่ากะ และเงื่อนไขการจ้างงานตามกฎหมายแรงงาน",
        },
        {
          src: "/img-project/timetrackOT/307725_0.webp",
          title: "Quick Notes & Task Tracking",
          description: "ศูนย์รวมบันทึกช่วยจำ สิ่งที่ต้องทำ (Tasks & Notes) ปักหมุด และลิงก์อ้างอิงงานสำคัญ",
        },
      ],
    },
    {
      title: "Media",
      href: "https://github.com/vick42uho/media",
      dates: "2025",
      active: true,
      description:
  "A hospital media management platform designed to organize and manage patient-related images and digital media securely. The system supports patient image uploads, media searching, consent management, user and role administration, clinic configuration, and treatment-related data management. Built to improve workflow efficiency, enhance data accessibility, and provide centralized control of medical media operations across hospital departments.",
      technologies: [
        "Vite",
        "Typescript",
        "TailwindCSS",
        "HeroUI",
        "PostgreSQL",
        "FastAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vick42uho/media",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/media.mp4",
      images: [
        {
          src: "/img-project/media/dashboard.webp",
          title: "Media & Patient Dashboard",
          description: "แดชบอร์ดศูนย์รวมระบบจัดการสื่อ ค้นหา อัปโหลด จัดการใบยินยอม และบริหารสิทธิ์การใช้งาน",
        },
        {
          src: "/img-project/media/upload-media.webp",
          title: "Patient Media Upload & Tagging",
          description: "ฟอร์มอัปโหลดรูปภาพผู้ป่วย เชื่อมโยงข้อมูล HN, แพทย์ผู้รักษา, คลินิก, หัตถการ และแท็ก Before/After",
        },
        {
          src: "/img-project/media/manage-media.webp",
          title: "Case by Case Media Management",
          description: "ระบบบริหารจัดการภาพถ่ายทางการแพทย์แยกตามเคสผู้ป่วย คัดกรองภาพเพื่อการรักษาหรือการตลาด",
        },
        {
          src: "/img-project/media/manage-media-details.webp",
          title: "Media Details & Status",
          description: "หน้ารายละเอียดรูปภาพ ตรวจสอบวันที่ทำหัตถการ แท็กอ้างอิง และสถานะการอนุญาตใช้งาน",
        },
        {
          src: "/img-project/media/compare-photos.webp",
          title: "Before & After Photo Comparison",
          description: "เครื่องมือเปรียบเทียบรูปภาพก่อน-หลังการรักษา (Before & After) สำหรับแพทย์และผู้เชี่ยวชาญ",
        },
        {
          src: "/img-project/media/patient-list.webp",
          title: "Patient Directory & Search",
          description: "ระบบสืบค้นรายชื่อผู้ป่วย ค้นหาด้วย HN หรือชื่อ-นามสกุล พร้อมแสดงจำนวนรูปภาพและเคสทั้งหมด",
        },
        {
          src: "/img-project/media/consent-management.webp",
          title: "PDPA Consent Management",
          description: "ระบบจัดการใบยินยอมการใช้รูปภาพผู้ป่วยตามมาตรฐาน PDPA พร้อมตรวจเช็กสถานะการยินยอม",
        },
        {
          src: "/img-project/media/consent-details.webp",
          title: "Consent Agreement Details",
          description: "ตรวจสอบเอกสารใบยินยอม ลายมือชื่อ และขอบเขตการนำภาพถ่ายไปใช้ในการรักษาหรือการตลาด",
        },
        {
          src: "/img-project/media/download-media.webp",
          title: "Media Export & Watermark",
          description: "ระบบดาวน์โหลดรูปภาพทางการแพทย์ พร้อมระบบประทับลายน้ำ (Watermark) เพื่อความปลอดภัย",
        },
        {
          src: "/img-project/media/download-batch.webp",
          title: "Batch Download & Audit Log",
          description: "การดาวน์โหลดรูปภาพแบบกลุ่ม และระบบบันทึกประวัติการเข้าถึงข้อมูลสื่อของผู้ป่วย (Audit Log)",
        },
        {
          src: "/img-project/media/manage-permissions.webp",
          title: "Role & Permission Management",
          description: "ระบบกำหนดสิทธิ์การเข้าถึงและการจัดการข้อมูลตามบทบาทหน้าที่ของบุคลากรทางการแพทย์",
        },
      ],
    },
    {
      title: "Portal IAM",
      href: "",
      dates: "2026",
      active: true,
      description:
        "A Centralized Identity and Access Management (IAM) system serving as an abstraction layer between Active Directory and the HR database. Driven by RBAC architecture and Dynamic Mapping, it automatically calculates application access rights based on the latest organizational structure and job positions. This eliminates redundant permission management during personnel transfers and enhances security through centralized control.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "MSSQL",
        "LDAP",
        "Rust",
        "Actix Web",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: "/portal.mp4",
    },
    {
      title: "Dynamic Icon | iFrame Medhis",
      href: "https://github.com/vick42uho/iFrame",
      dates: "2026",
      active: true,
      description:
        "A rule-based Dynamic Icon engine developed for the Medhis iframe. It processes individual patient contexts on the fly to render specific clinical indicators. Featuring a highly flexible configuration layer, the system empowers administrators to define and manage complex logic rules for icon visibility based on patient assessments.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Rust",
        "Actix Web",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vick42uho/iFrame",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/iFrame-icon.mp4",
      images: [
        {
          src: "/img-project/icon/rule-engine-simulator.webp",
          title: "Rule Engine & Live Patient Simulator",
          description: "ระบบออกแบบกฎตรรกะแบบไดนามิก (Condition Builder: AND / OR) พร้อม Sandbox จำลองผลลัพธ์กับข้อมูลคนไข้จริงจาก HIS",
        },
        {
          src: "/img-project/icon/icon-studio-assets.webp",
          title: "Icon Studio & Clinical Assets",
          description: "คลังไอคอนและตัวบ่งชี้ทางคลินิก (Icon Catalog) จัดการรูปภาพสถานะผู้ป่วย และผูก Target URL เชื่อมโยงสู่ระบบปลายทาง",
        },
        {
          src: "/img-project/icon/field-dictionary-schema.webp",
          title: "Field Dictionary & HIS Patient Context",
          description: "พจนานุกรมฟิลด์และตัวแปร Dot-Path Schema พร้อมระบบตรวจสอบโครงสร้าง JSON Context ของผู้ป่วยแบบเรียลไทม์",
        },
      ],
    },
    {
      title: "Yanhee Document Management System (DMS)",
      href: "https://github.com/vick42uho/e-scan",
      dates: "2026",
      active: true,
      description:
        "A secured medical chart scanning and document management system built for high-throughput paperless operations. Features direct network scanner hardware integration (Brother Scanner), automated AI/OCR and QR/Barcode patient detection, zero-disk PDF streaming via PyMuPDF, and a high-performance clinical chart viewer with dynamic watermarking, rotation, and multi-tier RBAC permission control.",
      technologies: [
        "FastAPI",
        "Python",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "PyMuPDF",
        "Docker",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vick42uho/e-scan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img-project/dms/dms-viewer.webp",
      video: "",
      images: [
        {
          src: "/img-project/dms/dms-viewer.webp",
          title: "Secured Medical Chart Viewer",
          description: "โปรแกรมเปิดดูเวชระเบียนสแกนความเร็วสูง พร้อมลายน้ำความปลอดภัยและแถบ Thumbnail Strip",
        },
        {
          src: "/img-project/dms/dms-scan.webp",
          title: "Yanhee e-Scan Ingestion & OCR",
          description: "ระบบนำเข้าและสแกนเวชระเบียน เชื่อมต่อเครื่องสแกนเนอร์ และตรวจจับ QR / Barcode / OCR อัตโนมัติ",
        },
        {
          src: "/img-project/dms/dms-users.webp",
          title: "Dynamic RBAC User Management",
          description: "ระบบบริหารจัดการผู้ใช้งานในระบบและกำหนดระดับสิทธิ์บุคลากรทางการแพทย์",
        },
        {
          src: "/img-project/dms/dms-permissions.webp",
          title: "Granular Permission Matrix",
          description: "ตารางกำหนดสิทธิ์การเข้าถึงแบบละเอียด (การสแกน, การเปิดดู, การพิมพ์, และการดาวน์โหลด)",
        },
      ],
    },
    {
      title: "Yanhee Program Portal",
      href: "https://github.com/vick42uho/Hospital-Program-Portal",
      dates: "2026",
      active: true,
      description:
        "A centralized web portal and application directory serving 57+ hospital software systems across both legacy PHP applications and modern microservices. Features an instant Spotlight Command Palette (Ctrl+K), real-time usage analytics, announcement ticker, department categorization, account favorites, and a secured administrative backend for managing system registries.",
      technologies: [
        "FastAPI",
        "Python",
        "Next.js",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vick42uho/Hospital-Program-Portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/img-project/programportal/portal-home.webp",
      video: "",
      images: [
        {
          src: "/img-project/programportal/portal-home.webp",
          title: "Hospital Application Directory",
          description: "ศูนย์รวมโปรแกรมและระบบงานทั้งหมดของโรงพยาบาล 57 ระบบ พร้อมแท็กระบบใหม่และระบบเดิม",
        },
        {
          src: "/img-project/programportal/portal-spotlight.webp",
          title: "Spotlight Command Palette (Ctrl+K)",
          description: "ระบบค้นหาอัจฉริยะ ค้นหาโปรแกรม หมวดหมู่ แผนก หรือผู้รับผิดชอบ พร้อมประวัติการเข้าชม",
        },
        {
          src: "/img-project/programportal/portal-admin.webp",
          title: "Admin Portal & Analytics",
          description: "ระบบจัดการหลังบ้าน จัดการรายการโปรแกรม แถบประชาสัมพันธ์ และสถิติการใช้งานระบบ (Analytics)",
        },
      ],
    },
    {
      title: "Self-Service Password Management (LDAP / AD)",
      href: "",
      dates: "2026",
      active: true,
      description:
        "A hospital-grade self-service password management web application integrated directly with Active Directory domain controllers via LDAP/LDAPS. Empowers hospital staff to reset or update their domain accounts independently with real-time enterprise password policy validation (character complexity, length, and special symbols), reducing IT helpdesk workload by eliminating manual password reset requests.",
      technologies: [
        "Next.js",
        "React 19",
        "TypeScript",
        "TailwindCSS",
        "LDAP / AD",
        "Docker",
      ],
      links: [],
      image: "/img-project/changepassword/cpw.webp",
      video: "",
      images: [
        {
          src: "/img-project/changepassword/cpw.webp",
          title: "Self-Service Password Portal",
          description: "หน้าจอบริการเปลี่ยนรหัสผ่านด้วยตนเอง ตรวจสอบความปลอดภัยตามนโยบายองค์กร (LDAP / Active Directory)",
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
