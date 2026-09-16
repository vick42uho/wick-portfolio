"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Mic,
  MicOff,
  Github,
  ExternalLink,
  Download,
  BookOpen,
  Layers,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Workflow,
  Sparkles,
  Home
} from "lucide-react";

interface SlideData {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  notes: string;
  content: React.ReactNode;
}

export function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides: SlideData[] = [
    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 1: Cover / Executive Overview
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 1,
      tag: "Executive Presentation",
      title: "Full-Stack Software Engineering (AI-Focused)",
      subtitle: "สถาปัตยกรรมระบบโรงพยาบาลระดับ Production & โครงการเชิงกลยุทธ์",
      notes: "สวัสดีครับพี่ๆ ทั้งสองท่านครับ ผมชื่อวิค หรือชื่อจริง ทวีป โปราหา ครับ ปัจจุบันผมเป็น Full-Stack Developer อยู่ที่โรงพยาบาลยันฮีครับ วันนี้ผมมีความยินดีอย่างยิ่งที่มีโอกาสได้มานำเสนอผลงานและสถาปัตยกรรมระบบจริงที่ผมได้พัฒนาขึ้นที่ยันฮี ทั้งงานดูแลระบบเดิมและงานสร้างระบบใหม่ระดับ Enterprise พร้อมทั้งมี Source Code บน GitHub และเดโมบนเครื่อง Laptop นี้มาให้ตรวจดูอย่างครบถ้วนครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Rutnin Eye Hospital Interview Showcase
            </div>
            
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Full-Stack Software Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  (AI-Focused & Enterprise Healthcare)
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                การนำเสนอผลงานจริง สถาปัตยกรรมการเชื่อมต่อ HIS, ความปลอดภัยตามมาตรฐาน PDPA, และ Data Pipeline สำหรับ AI Model & BI Dashboard
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">คุณทวีป โปราหา (วิค / Wick)</h3>
                  <p className="text-sm text-cyan-400 font-medium">Developer / Programmer — โรงพยาบาลยันฮี (Yanhee International Hospital)</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  100% Production Ready
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px]">เป้าหมายตำแหน่ง</span>
                  <span className="font-semibold text-slate-200">Software Developer (Full-Stack)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px]">องค์กรเป้าหมาย</span>
                  <span className="font-semibold text-cyan-300">โรงพยาบาลจักษุ รัตนิน</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px]">วันที่นำเสนอ</span>
                  <span className="font-semibold text-slate-200">16 กันยายน 2569 (บ่าย)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative p-2 rounded-3xl bg-gradient-to-b from-cyan-500/20 via-slate-800 to-slate-900 border border-cyan-500/30 shadow-2xl">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/me.jpg"
                  alt="Thaweep Poraha (Wick)"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 text-center pb-2">
                <p className="font-bold text-white text-base">Thaweep Poraha</p>
                <p className="text-xs text-cyan-400 font-medium">Full-Stack Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 2: Two Core Pillars (ขอบเขตงาน รพ.ยันฮี 2 พาร์ทใหญ่)
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 2,
      tag: "Hospital Scope",
      title: "ขอบเขตความรับผิดชอบหลักที่โรงพยาบาลยันฮี (2 พาร์ทใหญ่)",
      subtitle: "การผสานงานดูแลระบบปฏิบัติการเดิม ควบคู่กับการปฏิรูประบบใหม่ระดับ Enterprise",
      notes: "งานหลักๆ ที่ผมทำอยู่ที่ยันฮีตอนนี้ แบ่งเป็น 2 พาร์ทใหญ่ๆ ครับ พาร์ทแรกคือ งานดูแลและปรับปรุงระบบเดิม ซึ่งเป็นเว็บที่เขียนด้วย PHP เกือบ 30 ระบบ มีตั้งแต่ HOIR, KPI, Mini CRM ไปจนถึงระบบจองเครื่องมือแพทย์เฉพาะทาง ส่วนพาร์ทที่สองคือ งานออกแบบและสร้างระบบใหม่ๆ ตั้งแต่รับโจทย์ ผอ. และ รอง ผอ., ออกแบบฐานข้อมูล, เขียน API จนถึงขึ้น Production ครับ",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-stretch">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
                  พาร์ทที่ 1 : ระบบเดิม
                </span>
                <span className="text-xs text-slate-400 font-mono">~30 Web Applications</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Legacy Modernization & Core Support</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                รับผิดชอบดูแลระบบภายในโรงพยาบาลเดิมที่เขียนด้วยภาษา <strong>PHP + SQL Server</strong> คนเดียวเกือบ 30 โปรแกรม
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>ระบบรายงานอุบัติการณ์ (HOIR):</strong> มีระบบ BI วิเคราะห์ข้อมูล และคู่มือดึงรายงานสำหรับผู้บริหาร</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>ระบบตัวชี้วัด (KPI):</strong> ติดตามเป้าหมายผลการดำเนินงานของแต่ละฝ่าย</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>ระบบ Mini CRM & บริการผู้ป่วย:</strong> จัดการข้อมูลติดต่อและประสานงานลูกค้า</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>ระบบเฉพาะทาง:</strong> จองเครื่องมือรักษารากฟัน, คลังภาพ, แผนฝึกอบรมประจำปี</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-cyan-300 font-medium">
                🔄 ลูปการทำงาน: ประชุมเก็บโจทย์ ผอ./ผจก. ➔ พัฒนา ➔ จัดอบรมและคู่มือ ➔ Support หน้างาน
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-blue-500/30 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
                  พาร์ทที่ 2 : ระบบใหม่
                </span>
                <span className="text-xs text-slate-400 font-mono">Enterprise Full-Stack</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Enterprise Systems & HIS Integration</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ออกแบบสถาปัตยกรรมและพัฒนาเว็บแอปพลิเคชันสมัยใหม่ เชื่อมต่อระบบโรงพยาบาลโดยตรง
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>IT Request (RequestTicker):</strong> ระบบแจ้งซ่อม Paperless อนุมัติหลายขั้น (Production)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Patient Media System:</strong> คลังภาพคนไข้ & Consent Form มาตรฐาน PDPA พร้อม Watermarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Yanhee IAM Portal:</strong> รวมศูนย์สิทธิ์ SSO ซิงค์ LDAP + Biosoft HR (โจทย์ตรงจากท่าน ผอ.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Dynamic Icon Gate:</strong> แถบสถานะคนไข้ Real-time เจาะช่อง iFrame ใน Medhis (โจทย์ตรงจากท่าน รอง ผอ.)</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-blue-300 font-medium">
                ⚡ Tech: Next.js, Rust (Axum), Python (FastAPI), React Native, PostgreSQL, MSSQL
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 3: Legacy Systems Modernization (p1.png Showcase)
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 3,
      tag: "Legacy Modernization",
      title: "ศูนย์รวมโปรแกรมโรงพยาบาลยันฮี — การดูแลระบบจริงเกือบ 30 ระบบ",
      subtitle: "หลักฐานการบริหารจัดการระบบเดิม (PHP), การแก้บั๊ก, เพิ่มฟังก์ชัน, และการดูแลผู้ใช้งานแบบ End-to-End",
      notes: "ภาพบนจอนี้คือหน้า 'ศูนย์รวมโปรแกรม' ของโรงพยาบาลยันฮีครับ คอลัมน์ผู้พัฒนาโปรแกรมที่มีชื่อ 'ทวีป โปราหา' คือระบบที่ผมดูแลคนเดียวเกือบ 30 โปรแกรมครับ ซึ่งเขียนด้วย PHP จุดสำคัญคือ ผมไม่มีอีโก้เรื่องเทคโนโลยี พร้อมเข้าไปลุยระบบเดิม แก้บั๊ก ปรับจูน SQL และเข้าประชุมกับ ผอ. และหัวหน้าแผนก เพื่อนำโจทย์มาพัฒนา จัดอบรมคู่มือ และ Support หน้างานอย่างต่อเนื่องครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 group">
            <div className="relative w-full h-[320px] sm:h-[380px]">
              <Image
                src="/p1.png"
                alt="ศูนย์รวมโปรแกรมโรงพยาบาลยันฮี"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 text-center text-xs text-slate-300">
              หลักฐานระบบจริงในโรงพยาบาลยันฮี ที่ระบุชื่อผู้พัฒนา <strong>"ทวีป โปราหา"</strong>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                ระบบหลักที่พัฒนาและปรับปรุงต่อเนื่อง:
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5 pl-4 list-disc marker:text-cyan-400">
                <li><strong>ระบบ HOIR (Hospital Incident Report):</strong> ระบบรายงานอุบัติการณ์ มีระบบ BI วิเคราะห์ข้อมูล และคู่มือดึงรายงานผู้บริหาร</li>
                <li><strong>ระบบ KPI:</strong> บันทึกและคำนวณตัวชี้วัดความสำเร็จของแต่ละฝ่ายตามมาตรฐานโรงพยาบาล</li>
                <li><strong>ระบบ Mini CRM:</strong> บริหารความสัมพันธ์และประสานงานข้อมูลคนไข้</li>
                <li><strong>ระบบเครื่องมือแพทย์เฉพาะทาง:</strong> จองกล้อง DOM งานรักษารากฟัน, จองเครื่องมือรากฟันเทียม</li>
                <li><strong>ระบบบริหารองค์กร:</strong> แผนฝึกอบรมประจำปี, สำรวจผู้เข้าอบรม, ประเมิน Competency, จองห้องพักญาติ Vol.2</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                วงจรการทำงานแบบครบวงจร 4 ขั้นตอน (End-to-End):
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <span className="font-bold text-white block">1. ประชุมเก็บโจทย์</span>
                  เข้าประชุมกับ ผอ., ผู้จัดการ, และหัวหน้าฝ่ายเพื่อรับโจทย์
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <span className="font-bold text-white block">2. พัฒนา & ปรับแก้</span>
                  เขียนโค้ด PHP, ปรับแก้ SQL และทดสอบความถูกต้อง
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <span className="font-bold text-white block">3. จัดทำคู่มือ & อบรม</span>
                  ทำเอกสารคู่มือดึงรายงาน และสอนเจ้าหน้าที่หน้างาน
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <span className="font-bold text-white block">4. Support หน้างาน</span>
                  ดูแลแก้ปัญหาบั๊กและความเสถียรของระบบ 100%
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 4: Project 1 — IT Request (RequestTicker)
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 4,
      tag: "Project Showcase 01",
      title: "IT Request (RequestTicker) — ระบบแจ้งซ่อมและของาน IT แบบ Paperless",
      subtitle: "เปลี่ยนกระบวนการแจ้งงานผ่าน LINE/กระดาษ สู่ระบบตั๋วงานที่มีลำดับการอนุมัติและการติดตาม SLA เรียลไทม์",
      notes: "โปรเจกต์แรกคือ IT Request ครับ ตัวนี้ขึ้น Production ใช้งานจริงแล้ว ปัญหาเดิมของโรงพยาบาลคือ การแจ้งงานทางโทรศัพท์หรือกระดาษทำให้งานหลุดและตามสถานะยาก ผมจึงออกแบบระบบที่มี 3 หมวดชัดเจน คืองานบริการ งานแก้ปัญหา และงานพัฒนา มีการวิ่งตาม Flow อนุมัติของหัวหน้า ฝั่ง IT มี Admin คัดกรองและจ่ายงานให้ช่าง เมื่อช่างทำเสร็จ User จะเป็นคนตรวจรับและปิดงานครับ ช่วยให้กระบวนการเป็น Paperless 100%",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Production Deployed (ใช้งานจริงในองค์กร)
              </span>
              <span className="text-xs text-slate-400 font-mono">Paperless Workflow</span>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-cyan-400">🎯 โครงสร้างและการทำงานของระบบ:</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>แยกหมวดหมู่คำร้อง 3 แบบ:</strong> งานบริการ, งานแก้ปัญหา, และงานพัฒนา เพื่อความแม่นยำในการจัดคิวงาน</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Approval Workflow:</strong> คำขอจะวิ่งผ่านการอนุมัติของหัวหน้าแผนกก่อนส่งถึงทีม IT ป้องกันงานซ้ำซ้อน</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Admin Dispatch & Sub-tasks:</strong> คัดกรองและมอบหมายให้ช่าง กำหนดวันเสร็จ พร้อมแตกงานย่อยข้ามทีมได้</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>User Acceptance & SLA:</strong> เจ้าหน้าที่ผู้ขอจะเป็นคนตรวจรับและกดปิดงาน พร้อมระบบประเมินความพึงพอใจ</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Technology Stack</span>
                <p className="text-sm font-semibold text-white">React + Vite + Tailwind CSS | FastAPI (Python) + PostgreSQL</p>
              </div>
              <a
                href="https://github.com/vick42uho/RequestTicker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-lg"
              >
                <Github className="w-4 h-4" />
                View Source Code on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-2">
              <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Business Impact</h5>
              <p className="text-2xl font-extrabold text-white">100% Paperless</p>
              <p className="text-xs text-slate-400">ลดการใช้กระดาษและโทรศัพท์ตามงานลงโดยสิ้นเชิง งานไม่ตกหล่น</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-2">
              <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Real-time Notification</h5>
              <p className="text-sm font-semibold text-white">Server-Sent Events & Telegram</p>
              <p className="text-xs text-slate-400">ตารางงานอัปเดตสถานะแบบเรียลไทม์ และแจ้งเตือนผ่านบอท Telegram ทันที</p>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 5: Project 2 — Patient Media System
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 5,
      tag: "Project Showcase 02",
      title: "Patient Media System — คลังภาพถ่ายทางการแพทย์ตามมาตรฐาน PDPA",
      subtitle: "พัฒนาระบบใหม่ทดแทนคลังภาพเดิม เพื่อการบริหารภาพคนไข้และหนังสือยินยอมอย่างปลอดภัย",
      notes: "โปรเจกต์ที่สองคือ Patient Media ครับ พัฒนาขึ้นมาเพื่อทดแทนโปรแกรมคลังภาพเดิมของโรงพยาบาลที่ไม่ยืดหยุ่น ตัวใหม่นี้ผมออกแบบให้จัดเก็บภาพ Before & After แยกตามคลินิก และที่สำคัญคือ มีระบบจัดเก็บหนังสือยินยอมของผู้ป่วย (Consent Form) ตามมาตรฐาน PDPA พร้อมระบบใส่ลายน้ำ (Watermarking) และจำกัดสิทธิ์การดาวน์โหลด เพื่อป้องกันการรั่วไหลของข้อมูลคนไข้ครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold">
                🟡 Ready for Deployment (พัฒนาเสร็จสมบูรณ์ เตรียมขึ้นระบบ)
              </span>
              <span className="text-xs text-slate-400 font-mono">PDPA Compliant</span>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-cyan-400">🎯 ฟังก์ชันและสถาปัตยกรรมความปลอดภัย:</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>จัดเก็บภาพ Before & After แยกตามคลินิก:</strong> รองรับการค้นหาตาม HN, วันที่รักษา และหัตถการ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Digital Consent Form (PDPA):</strong> ผูกเอกสารยินยอมเปิดเผยหรือจัดเก็บภาพเข้ากับชุดภาพของผู้ป่วยโดยตรง</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Dynamic Watermarking:</strong> ประทับลายน้ำข้อมูลผู้เข้าชมและเวลาอัตโนมัติ เพื่อป้องกันการแคปหน้าจอไปเผยแพร่</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Fine-grained Access Control:</strong> กำหนดสิทธิ์การมองเห็นและดาวน์โหลดเฉพาะแพทย์และเจ้าหน้าที่ประจำคลินิก</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Technology Stack</span>
                <p className="text-sm font-semibold text-white">React + FastAPI (Python) + Modern 'uv' + PostgreSQL</p>
              </div>
              <a
                href="https://github.com/vick42uho/media.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-lg"
              >
                <Github className="w-4 h-4" />
                View Source Code on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h5 className="text-sm font-bold text-white">ความมั่นคงปลอดภัยตาม PDPA</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                การจัดเก็บสื่อภาพถ่ายผู้ป่วยถือเป็นข้อมูลสุขภาพที่มีความอ่อนไหวสูง ระบบนี้จึงเน้นระบบ Audit Log และการจัดการสิทธิ์ที่รัดกุม
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 6: Project 3 — Yanhee IAM Portal
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 6,
      tag: "Project Showcase 03",
      title: "Yanhee IAM Portal — ระบบ Single Sign-On & Central Access Control",
      subtitle: "สถาปัตยกรรมความปลอดภัยระดับ Core Enterprise ตามโจทย์ความต้องการตรงจากท่าน ผอ. โรงพยาบาล",
      notes: "โปรเจกต์ที่สามคือ Yanhee IAM Portal ครับ ตัวนี้ได้โจทย์ความต้องการตรงมาจากท่าน ผอ. โรงพยาบาลยันฮีครับ ท่านอยากได้ศูนย์รวมโปรแกรมทั้งหมดในโรงพยาบาล ทำ Single Sign-On ล็อกอินครั้งเดียวแล้วเห็นเฉพาะโปรแกรมที่มีสิทธิ์ และแก้ปัญหาระยะยาวเรื่องการปรับเปลี่ยนโครงสร้างองค์กร โยกย้ายฝ่าย แผนก บ่อยๆ สิทธิ์จะต้องอัปเดตอัตโนมัติ ผมจึงออกแบบให้ซิงค์ข้อมูล HR จาก Biosoft (MSSQL) และยืนยันตัวตนผ่าน Active Directory โดยใช้ Dynamic RBAC ครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300">
              💬 <strong>Directive จากท่าน ผอ. โรงพยาบาล:</strong> รวมทุกระบบไว้ที่เดียว ล็อกอินครั้งเดียว และสิทธิ์ต้องปรับตามโครงสร้างฝ่าย/แผนกใหม่อัตโนมัติ ไม่ตกค้าง
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-cyan-400">🎯 สถาปัตยกรรมระดับ Enterprise:</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Active Directory (LDAP) Integration:</strong> ยืนยันตัวตนผ่านบัญชี Windows ของโรงพยาบาลโดยไม่ต้องจำหลายรหัสผ่าน</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Biosoft HR Sync (MSSQL):</strong> ซิงค์ข้อมูลฝ่าย ส่วน แผนก และตำแหน่งงานอัตโนมัติ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Dynamic RBAC Engine:</strong> คำนวณสิทธิ์การเข้าถึงแบบ Dynamic ตามโครงสร้างแผนกจริง สิทธิ์เปลี่ยนทันทีเมื่อพนักงานย้ายฝ่าย</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Dual Token Rotation:</strong> ใช้ Access Token อายุสั้น + Refresh Token พร้อม Token Blacklist สั่งตัดสิทธิ์ได้ทันที</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Technology Stack</span>
                <p className="text-sm font-semibold text-white">Next.js + Rust (Axum / Tokio) + PostgreSQL + MSSQL (Tiberius)</p>
              </div>
              <a
                href="https://github.com/vick42uho/yanhee_protal.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-lg"
              >
                <Github className="w-4 h-4" />
                View Source Code on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Cpu className="w-6 h-6 text-purple-400" />
              <h5 className="text-sm font-bold text-white">High Performance Rust Backend</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                การเลือกใช้ภาษา <strong>Rust (Axum)</strong> ช่วยให้ระบบรองรับการ Authen พร้อมกันของพนักงานทั้งโรงพยาบาลได้ในระดับ Sub-millisecond และปลอดภัยจาก Memory Safety
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 7: Project 4 — Dynamic Icon Gate (Medhis HIS Integration)
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 7,
      tag: "Project Showcase 04",
      title: "Dynamic Icon Gate (Medical iFrame) — ระบบแถบสถานะผู้ป่วยเชื่อมต่อ HIS",
      subtitle: "เชื่อมต่อฐานข้อมูล Medhis แบบ Real-time ตามโจทย์ตรงจากท่าน รอง ผอ. โรงพยาบาล",
      notes: "โปรเจกต์ที่สี่คือ Dynamic Icon Gate ครับ ตัวนี้พัฒนาขึ้นตามโจทย์ตรงจากท่าน รอง ผอ. โรงพยาบาลยันฮีครับ ท่านอยากได้แถบไอคอนแสดงสถานะคนไข้แบบ Real-time เพิ่มเติมจากระบบ Medhis เดิม โดยให้ทาง Medhis เจาะช่อง iFrame ไว้ให้ ผมจึงสร้าง Rule Evaluation Engine ด้วยภาษา Rust เพื่อประเมินเงื่อนไข เช่น ช่วงอายุ 0-15 ปี, 16-25 ปี, ข้อควรระวังทางการแพทย์ และดึงข้อมูลจาก Medhis มาแสดงผลทันที ซึ่งโครงสร้าง Data Pipeline แบบนี้เป็นรากฐานเดียวกับการเตรียมข้อมูลสำหรับโมเดล AI ในโรงพยาบาลครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300">
              💬 <strong>Directive จากท่าน รอง ผอ. โรงพยาบาล:</strong> ต้องการแถบไอคอนสถานะคนไข้เพิ่มเติมในระบบ Medhis โดยเจาะช่อง iFrame แนวนอนขนาดกะทัดรัด
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-cyan-400">🎯 สถาปัตยกรรมการเชื่อมต่อและการประเมินผล:</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>เชื่อมต่อ Medhis HIS โดยตรง:</strong> ดึง Context ของผู้ป่วย เช่น HN, อายุ, ประวัติการแพ้ยา, สถานะการรักษา</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Real-time Rule Engine (Rust):</strong> คำนวณกฎเกณฑ์ทางการแพทย์แบบรวดเร็วระดับ Sub-millisecond เพื่อแสดงไอคอนที่ถูกต้อง</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Age Bracket & Clinical Tags:</strong> แยกช่วงอายุ 0–15, 16–25, 26–35 ปี และแสดงข้อควรระวังให้แพทย์เห็นทันที</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>รากฐานสู่ระบบ AI:</strong> สถาปัตยกรรมนี้คือการทำ Feature Extraction & Data Pipeline จากระบบ HIS เพื่อป้อนให้โมเดล AI ในอนาคต</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Technology Stack</span>
                <p className="text-sm font-semibold text-white">Next.js + Rust (Axum) + PostgreSQL JSONB + Medhis API</p>
              </div>
              <a
                href="https://github.com/vick42uho/iFrame.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-lg"
              >
                <Github className="w-4 h-4" />
                View Source Code on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h5 className="text-sm font-bold text-white">AI-Ready Context Extraction</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                การดึง Context คนไข้จาก HIS มาแปลงเป็น Structured Data แบบ Real-time เป็นทักษะสำคัญที่ตอบโจทย์ตำแหน่ง Full-Stack (AI-Focused) ของ รพ.จักษุ รัตนิน
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 8: Project 5 — TimeTrack OT
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 8,
      tag: "Project Showcase 05",
      title: "TimeTrack OT — แอปพลิเคชันคำนวณเวลาและโอที (Mobile Application)",
      subtitle: "สถาปัตยกรรม Offline-First 100% สำหรับการบันทึกเวลาและหลักฐานการลงเวลางาน",
      notes: "โปรเจกต์ที่ห้าคือ TimeTrack OT ครับ เป็นแอปพลิเคชันมือถือที่พัฒนาด้วย React Native และ Expo จุดเด่นคือการคำนวณโอทีกะเช้าและกะเย็นแบบ Real-time Live Preview สามารถถ่ายภาพสลิปหรือหน้าจอเครื่องสแกนนิ้วแนบเป็นหลักฐานเก็บใน Sandboxed Storage รองรับปฏิทินไทย และทำงานแบบ 100% Offline-First ด้วย SQLite WAL Mode ทำให้ใช้งานได้ลื่นไหลแม้ไม่มีสัญญาณอินเทอร์เน็ตครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-bold">
                📱 Mobile Application (Offline-First)
              </span>
              <span className="text-xs text-slate-400 font-mono">Expo SQLite (WAL Mode)</span>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-cyan-400">🎯 ความสามารถเด่นของแอปพลิเคชัน:</h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>คำนวณ OT กะเช้าและกะเย็นอัตโนมัติ:</strong> พร้อม Live Preview แสดงจำนวนชั่วโมงและยอดเงินทันที</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>หลักฐานภาพสแกนนิ้ว & ใบรับรองแพทย์:</strong> ถ่ายภาพแนบและจัดเก็บใน Sandboxed Document Directory อย่างปลอดภัย</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>พุทธศักราชไทย (พ.ศ. 2569):</strong> ปฏิทินและวันหยุดนักขัตฤกษ์ไทยในตัว</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>100% Offline-First:</strong> ฐานข้อมูล SQLite โหมด WAL (Write-Ahead Logging) รวดเร็วและไม่พึ่งพาเน็ตเวิร์ก</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Technology Stack</span>
                <p className="text-sm font-semibold text-white">React Native 0.81 + Expo SDK 54 + SQLite WAL Mode</p>
              </div>
              <a
                href="https://github.com/vick42uho/TimeTrackOT.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-lg"
              >
                <Github className="w-4 h-4" />
                View Source Code on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Database className="w-6 h-6 text-indigo-400" />
              <h5 className="text-sm font-bold text-white">Local-First Storage Design</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                แสดงถึงความเข้าใจในการออกแบบสถาปัตยกรรม Mobile Client ที่ทนทานต่อภาวะออฟไลน์ และการจัดการฐานข้อมูลฝั่ง Client อย่างมีประสิทธิภาพ
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 9: Technical Competency
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 9,
      tag: "Technical Competency",
      title: "ทักษะทางเทคนิค & สถาปัตยกรรมระดับ Enterprise",
      subtitle: "ความเชี่ยวชาญครอบคลุมทั้ง Frontend, High-Performance Backend, ฐานข้อมูล, และความปลอดภัย",
      notes: "ในส่วนของ Stack เทคนิคที่ผมใช้พัฒนาจริงที่โรงพยาบาลยันฮี ฝั่ง Frontend ผมใช้ Next.js ร่วมกับ TypeScript Strict Mode เพื่อให้ได้ Type-Safe ข้ามเลเยอร์ ฝั่ง Backend ในงานที่ต้องการความเร็วสูงและต่อกับ HIS ผมเลือกใช้ภาษา Rust ร่วมกับ Tokio และ Axum ส่วนงานที่ต้องการความยืดหยุ่นและการจัดเก็บไฟล์ ผมใช้ Python FastAPI ร่วมกับ uv และด้าน Database ผมเชี่ยวชาญทั้ง PostgreSQL, MSSQL ของระบบ HR และ SQLite ครับ",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full items-stretch">
          {/* Col 1 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400">
              <Layers className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Frontend & UI</h4>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li>• <strong>Next.js 15+</strong> (App Router)</li>
              <li>• <strong>React 19 & Vite</strong></li>
              <li>• <strong>TypeScript</strong> (Strict Mode)</li>
              <li>• <strong>Tailwind CSS 4</strong></li>
              <li>• TanStack Table / Form</li>
              <li>• Recharts (BI & Analytics)</li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-purple-400">
              <Server className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Backend & Systems</h4>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li>• <strong>Rust (Axum + Tokio)</strong></li>
              <li>• <strong>Python (FastAPI + uv)</strong></li>
              <li>• <strong>PHP</strong> (Legacy Maintenance)</li>
              <li>• Bun / Node.js</li>
              <li>• RESTful API Architecture</li>
              <li>• Real-time SSE Streams</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400">
              <Database className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Databases</h4>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li>• <strong>PostgreSQL</strong> (JSONB)</li>
              <li>• <strong>MSSQL</strong> (Biosoft HR DB)</li>
              <li>• <strong>SQLite</strong> (WAL Mode)</li>
              <li>• MongoDB</li>
              <li>• Redis Caching</li>
              <li>• Type-safe ORM / SQLx</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">Healthcare & Ops</h4>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li>• <strong>HIS Integration (Medhis)</strong></li>
              <li>• <strong>Active Directory (LDAP)</strong></li>
              <li>• <strong>PDPA & Data Governance</strong></li>
              <li>• Dynamic RBAC Access</li>
              <li>• React Native (Mobile)</li>
              <li>• Docker & Nginx</li>
            </ul>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 10: Rutnin Eye Hospital Fit
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 10,
      tag: "Strategic Alignment",
      title: "ความพร้อมในการขับเคลื่อนระบบ รพ.จักษุ รัตนิน (Full-Stack & AI-Focused)",
      subtitle: "การนำประสบการณ์จริงในระบบโรงพยาบาลมาประยุกต์ใช้เพื่อสร้างผลลัพธ์ได้ทันทีโดยไม่ต้องปรับตัว",
      notes: "เมื่อผมได้อ่านประกาศรับสมัครตำแหน่ง Software Developer Full-Stack AI-Focused ของ รพ.จักษุ รัตนิน ที่มองหาคนที่เข้าใจการทำ REST API เชื่อมต่อกับระบบ HIS, การทำ Data Pipeline สำหรับ AI และ BI, การเชื่อมต่อระบบ LIS/PACS และความปลอดภัยข้อมูลคนไข้ตาม PDPA ผมมั่นใจมากครับว่า ประสบการณ์ตรงที่ผมทำอยู่ที่ยันฮีตอบโจทย์ 100% เพราะผมเคยต่อระบบ HIS จริง เข้าใจข้อมูลทางการแพทย์ และคุยกับแพทย์ พยาบาล และผู้บริหารรู้เรื่อง พร้อมเริ่มงานได้ทันทีครับ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-stretch">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
              โจทย์ความต้องการของ รพ.จักษุ รัตนิน
            </h4>
            <ul className="text-xs text-slate-300 space-y-2.5">
              <li className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <strong className="text-white block">1. เชื่อมต่อระบบ HIS / LIS / PACS:</strong>
                ต้องการพัฒนา REST API เชื่อมโยงระบบโรงพยาบาลอย่างไร้รอยต่อ
              </li>
              <li className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <strong className="text-white block">2. Data Pipeline & AI-Ready:</strong>
                ดึงข้อมูล Context ผู้ป่วยมาทำความสะอาดและป้อนโมเดล AI / BI Dashboard
              </li>
              <li className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <strong className="text-white block">3. PDPA & Data Governance:</strong>
                รักษาความปลอดภัยข้อมูลเวชระเบียนและภาพถ่ายผู้ป่วยขั้นสูงสุด
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-cyan-500/30 space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
              ประสบการณ์ตรงที่ตอบโจทย์จาก รพ.ยันฮี
            </h4>
            <ul className="text-xs text-slate-300 space-y-2.5">
              <li className="p-2.5 rounded-lg bg-slate-800/50 border border-emerald-500/30">
                <strong className="text-emerald-300 block">✔ เชื่อมต่อ Medhis สำเร็จแล้วจริง:</strong>
                เข้าใจ Data Schema ของ HIS และการรับ-ส่งข้อมูลกับระบบเวชระเบียน
              </li>
              <li className="p-2.5 rounded-lg bg-slate-800/50 border border-emerald-500/30">
                <strong className="text-emerald-300 block">✔ ออกแบบ Feature Extraction & Pipeline:</strong>
                สร้าง Rule Engine และ Pipeline ดึงข้อมูลผู้ป่วยแบบ Real-time
              </li>
              <li className="p-2.5 rounded-lg bg-slate-800/50 border border-emerald-500/30">
                <strong className="text-emerald-300 block">✔ ระบบ Consent & Watermark ตาม PDPA:</strong>
                พัฒนาระบบ Patient Media และ Single Sign-On ควบคุมสิทธิ์อย่างรัดกุม
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SLIDE 11: Live Demo & Q&A
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 11,
      tag: "Live Demonstration & Q&A",
      title: "Live Demonstration & Technical Discussion",
      subtitle: "พร้อมเปิด Source Code และระบบจำลองให้คณะกรรมการตรวจสอบอย่างละเอียด",
      notes: "ในเครื่อง Laptop นี้ ผมได้เตรียม Source Code และสภาพแวดล้อมพร้อมเปิดตรวจสอบ ทั้งโค้ดฝั่ง Frontend, Backend API, โครงสร้างฐานข้อมูล และระบบ Rule Engine อยากให้ผมเจาะลึกระบบไหน หรือเปิดดูโค้ดส่วนใดเป็นพิเศษ พี่ๆ ทั้งสองท่านบอกผมได้เลยครับ ขอบคุณครับ!",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xl">
            <Cpu className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-extrabold text-white">พร้อมเปิด Source Code และ Live Demo</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              ผมเตรียมทั้ง Source Code ในเครื่อง Laptop, ฐานข้อมูลจำลอง, และโครงสร้าง REST API เพื่อให้ท่าน IT Manager และ Head of HR ตรวจสอบได้ทันที
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full text-xs">
            <a
              href="https://github.com/vick42uho/RequestTicker.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>IT Request</span>
            </a>
            <a
              href="https://github.com/vick42uho/media.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Patient Media</span>
            </a>
            <a
              href="https://github.com/vick42uho/yanhee_protal.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>IAM Portal</span>
            </a>
            <a
              href="https://github.com/vick42uho/iFrame.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Dynamic Icon Gate</span>
            </a>
            <a
              href="https://github.com/vick42uho/TimeTrackOT.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>TimeTrack OT</span>
            </a>
            <a
              href="/Interview_Presentation_Wick_Thaweep.pptx"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download PPTX</span>
            </a>
          </div>

          <div className="text-sm font-semibold text-cyan-400">
            ขอขอบพระคุณคณะกรรมการทุกท่านครับ ยินดีตอบทุกข้อซักถามครับ 🙏
          </div>
        </div>
      ),
    },
  ];

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key.toLowerCase() === "n") {
        setShowNotes((prev) => !prev);
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const current = slides[currentSlide];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-white font-sans">
      {/* ── Top Bar ────────────────────────────────────────────── */}
      <header className="h-14 px-4 sm:px-6 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-md flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="หน้าแรก Portfolio"
          >
            <Home className="w-4 h-4" />
          </Link>
          <div className="h-4 w-px bg-slate-800" />
          <Link
            href="/blog/fullstack-developer-interview-playbook"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">อ่านบทความเต็ม</span>
          </Link>
          <div className="h-4 w-px bg-slate-800" />
          <span className="text-xs font-semibold text-slate-400 truncate max-w-[200px] sm:max-w-xs">
            {current.title}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notes Toggle */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              showNotes
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                : "bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            }`}
            title="กด N เพื่อเปิด/ปิดบทพูด"
          >
            {showNotes ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">บทพูดบรรยาย (Notes)</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition"
            title="เต็มจอ (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* PPTX Download */}
          <a
            href="/Interview_Presentation_Wick_Thaweep.pptx"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition"
            title="ดาวน์โหลดไฟล์ PowerPoint .pptx"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>.PPTX</span>
          </a>

          {/* Slide Indicator */}
          <div className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-400">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </header>

      {/* ── Progress Bar ────────────────────────────────────────── */}
      <div className="h-1 bg-slate-900 w-full">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* ── Main Slide Stage ────────────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-14 py-6 max-w-7xl mx-auto w-full relative">
        <div className="mb-4">
          <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
            {current.tag}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            {current.title}
          </h2>
          {current.subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {current.subtitle}
            </p>
          )}
        </div>

        {/* Slide Content Box */}
        <div className="flex-1 min-h-[420px] sm:min-h-[460px] flex flex-col justify-center">
          {current.content}
        </div>
      </main>

      {/* ── Speaker Notes Drawer (if toggled) ───────────────────── */}
      {showNotes && (
        <aside className="fixed bottom-14 left-0 right-0 max-h-48 overflow-y-auto bg-slate-900/95 border-t border-cyan-500/40 p-4 z-30 shadow-2xl backdrop-blur-lg animate-in slide-in-from-bottom-5">
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
              <Mic className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                🎙️ บทพูดบรรยายสำหรับสไลด์นี้ (Presenter's Voice):
              </h5>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                "{current.notes}"
              </p>
            </div>
          </div>
        </aside>
      )}

      {/* ── Bottom Controls ─────────────────────────────────────── */}
      <footer className="h-14 px-4 sm:px-6 bg-slate-900/90 border-t border-slate-800/80 backdrop-blur-md flex items-center justify-between z-20">
        <button
          onClick={goToPrev}
          disabled={currentSlide === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-xs font-semibold text-white transition border border-slate-700"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>สไลด์ก่อนหน้า</span>
        </button>

        {/* Slide Selector dots or direct jumps */}
        <div className="hidden sm:flex items-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlide
                  ? "bg-cyan-400 w-6"
                  : "bg-slate-700 hover:bg-slate-500"
              }`}
              title={`ไปที่สไลด์ ${idx + 1}: ${s.title}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-30 disabled:hover:bg-cyan-600 text-xs font-semibold text-white transition shadow-lg shadow-cyan-900/30"
        >
          <span>สไลด์ถัดไป</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
