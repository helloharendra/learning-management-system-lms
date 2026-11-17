// Sample data for the UI demo. The complete project uses live APIs + database.
export const courses = [
  { id: 1, title: 'Full-Stack Web Development with React & Node', instructor: 'Rohit Sharma', category: 'Development', level: 'Intermediate', lessons: 86, hours: 42, rating: 4.8, learners: 12840, price: 3499, progress: 64, emoji: '💻', gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500' },
  { id: 2, title: 'Data Science & Machine Learning A–Z', instructor: 'Dr. Aparna Rao', category: 'Data', level: 'Beginner', lessons: 112, hours: 58, rating: 4.9, learners: 18210, price: 4499, progress: 22, emoji: '📊', gradient: 'from-sky-500 via-cyan-500 to-teal-400' },
  { id: 3, title: 'UI/UX Design Masterclass in Figma', instructor: 'Kriti Malhotra', category: 'Design', level: 'Beginner', lessons: 54, hours: 24, rating: 4.7, learners: 9320, price: 2499, progress: 0, emoji: '🎨', gradient: 'from-rose-500 via-pink-500 to-orange-400' },
  { id: 4, title: 'Digital Marketing & Growth Hacking', instructor: 'Varun Khanna', category: 'Marketing', level: 'All levels', lessons: 68, hours: 30, rating: 4.6, learners: 7410, price: 1999, progress: 100, emoji: '📈', gradient: 'from-amber-500 via-orange-500 to-red-500' },
  { id: 5, title: 'Spoken English & Communication Skills', instructor: 'Meghna Iyer', category: 'Language', level: 'Beginner', lessons: 40, hours: 18, rating: 4.8, learners: 21500, price: 999, progress: 0, emoji: '🗣️', gradient: 'from-emerald-500 via-green-500 to-lime-400' },
  { id: 6, title: 'Financial Accounting with Tally & GST', instructor: 'CA Deepak Jain', category: 'Finance', level: 'Intermediate', lessons: 48, hours: 21, rating: 4.7, learners: 6120, price: 1799, progress: 0, emoji: '🧾', gradient: 'from-indigo-500 via-blue-500 to-sky-400' },
]

export const weeklyHours = [
  { label: 'Mon', hours: 1.2 }, { label: 'Tue', hours: 2.1 }, { label: 'Wed', hours: 0.8 }, { label: 'Thu', hours: 1.9 },
  { label: 'Fri', hours: 2.6 }, { label: 'Sat', hours: 3.4 }, { label: 'Sun', hours: 2.2 },
]

export const upcoming = [
  { title: 'Live: React Server Components Q&A', when: 'Today · 7:00 PM', type: 'Live class' },
  { title: 'Quiz: Node.js Streams', when: 'Tomorrow', type: 'Quiz' },
  { title: 'Assignment: REST API with Auth', when: 'Due Fri, 21 Nov', type: 'Assignment' },
]

export const curriculum = [
  {
    section: 'Module 5 · Backend with Node.js',
    lessons: [
      { id: 'l1', title: 'Introduction to Express', mins: 12, done: true },
      { id: 'l2', title: 'Routing & middleware', mins: 18, done: true },
      { id: 'l3', title: 'Connecting MongoDB with Mongoose', mins: 24, done: true },
      { id: 'l4', title: 'JWT authentication from scratch', mins: 31, done: false, current: true },
      { id: 'l5', title: 'File uploads & cloud storage', mins: 22, done: false },
    ],
  },
  {
    section: 'Module 6 · Deployment',
    lessons: [
      { id: 'l6', title: 'Environment variables & config', mins: 9, done: false },
      { id: 'l7', title: 'Deploying to a VPS with Nginx', mins: 27, done: false },
      { id: 'l8', title: 'CI/CD with GitHub Actions', mins: 19, done: false },
    ],
  },
]
