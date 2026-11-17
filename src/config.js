import {
  Award, BarChart3, BookOpen, CalendarClock, ClipboardCheck, CreditCard, LayoutDashboard, MessagesSquare, PlayCircle, Settings, Users, Video,
} from 'lucide-react'

export const app = {
  name: 'LearnSphere',
  tagline: 'Learning Management System',
  logo: PlayCircle,
  user: { name: 'Nisha Verma', role: 'Learner · Pro plan' },
  searchPlaceholder: 'Search courses, lessons, instructors…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Learn',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Course Catalogue', to: '/courses', icon: BookOpen },
      { label: 'Continue Learning', to: '/learn', icon: PlayCircle },
    ],
  },
  {
    title: 'Engage',
    items: [
      { label: 'Live Classes', icon: Video },
      { label: 'Quizzes & Assignments', icon: ClipboardCheck },
      { label: 'Discussion Forum', icon: MessagesSquare },
      { label: 'Certificates', icon: Award },
      { label: 'Schedule', icon: CalendarClock },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Instructors & Learners', icon: Users },
      { label: 'Payments & Subscriptions', icon: CreditCard },
      { label: 'Analytics', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
