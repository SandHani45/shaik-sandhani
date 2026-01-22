
import React from 'react';
import { Project } from './types';

// This is a minimal valid PDF Base64 string so the download "actually works" for the demo.
// In production, you can replace this with your actual hosted PDF URL.
export const CV_URL = "data:application/pdf;base64,JVBERi0xLjcKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjIgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzIC9LaWRzIFszIDAgUl0gL0NvdW50IDEgPj4KZW5kb2JqCjMgMCBvYmoKPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA1OTUgODQyXSAvQ29udGVudHMgNCAwIFIgPj4KZW5kb2JqCjQgMCBvYmoKPDwgL0xlbmd0aCA3MSA+PgpzdHJlYW0KQlQgL0YxIDI0IFRmIDEwMCA3MDAgVGQgKFNhbmRoYW5pIFNoZWlraCAtIFRlY2huaWNhbCBMZWFkIFJlc3VtZSkgVmogRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8IC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9UeXBlMSAvQmFzZUZvbnQgL0hlbHZldGljYSAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyA+PgplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExOCAwMDAwMCBuIAowMDAwMDAwMjE2IDAwMDAwIG4gCjAwMDAwMDAzMzggMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA2IC9Sb290IDEgMCBSID4+CnN0YXJ0eHJlZgo0MzkKJSVFT0Y=";

export const EXPERIENCE = [
  {
    company: 'Emirates NBD',
    role: 'Senior Software Engineer 2',
    period: '2024 — Present',
    location: 'Dubai, UAE',
    logo: 'https://cdn.simpleicons.org/emirates/white'
  },
  {
    company: 'LG Soft India',
    role: 'Technical Lead',
    period: '2022 — 2024',
    location: 'Bangalore, India',
    logo: 'https://cdn.simpleicons.org/lg/white'
  },
  {
    company: 'JoulestoWatts',
    role: 'Senior Software Engineer',
    period: '2020 — 2022',
    location: 'India',
    logo: ''
  },
  {
    company: 'Capgemini',
    role: 'Associate Consultant',
    period: '2018 — 2020',
    location: 'Bengaluru, India',
    logo: 'https://cdn.simpleicons.org/capgemini/white'
  },
  {
    company: 'Krackerz',
    role: 'Web Developer',
    period: '2016 — 2018',
    location: 'India',
    logo: ''
  }
];

export const PROJECTS: Project[] = [
  {
    id: '5',
    title: 'LEAP FRAMEWORK',
    category: 'Enterprise Architecture / Emirates NBD',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '6',
    title: 'BANKING CORE',
    category: 'Front & Back Office / Banking Sector',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '1',
    title: 'BAWABA API',
    category: 'Scalable Payment Hub / NestJS',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '2',
    title: 'webOS HUB',
    category: 'System Management / React',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    title: 'ENVIRO MGR',
    category: 'Full-stack Infrastructure',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '4',
    title: 'AI AUTOMATE',
    category: 'AI/ML Support Flows',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

export const TECH_STACK = [
  { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'AWS', slug: 'amazonservices', color: 'FF9900' },
  { name: 'GraphQL', slug: 'graphql', color: 'E10098' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'Playwright', slug: 'playwright', color: '2EAD33' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sandhani-sheikh-technical-lead-8bb76aa4' },
  { name: 'Portfolio', url: 'https://shaiksandhani.in' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCQXupQM66-QpA3lkL-BGkwg' },
  { name: 'GitHub', url: 'https://github.com' },
];
