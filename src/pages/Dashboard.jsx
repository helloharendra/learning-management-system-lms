import { Link } from 'react-router-dom'
import { Award, BookOpen, Clock, Flame, PlayCircle } from 'lucide-react'
import { Badge, Card, Hero, Progress, StatCard } from '../components/ui'
import { BarsChart } from '../components/Charts'
import { courses, upcoming, weeklyHours } from '../data'

export default function Dashboard() {
  const inProgress = courses.filter((c) => c.progress > 0 && c.progress < 100)
  return (
    <>
      <Hero
        eyebrow="Welcome back, Nisha"
        title="You're on a 12-day learning streak 🔥"
        subtitle="Pick up where you left off: JWT authentication from scratch, lesson 4 of module 5."
        side={
          <div className="w-full max-w-xs rounded-2xl bg-white/10 p-4 ring-1 ring-inset ring-white/20 backdrop-blur">
            <p className="text-xs text-white/70">Continue</p>
            <p className="mt-1 font-semibold">Full-Stack Web Development</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[64%] rounded-full bg-white" /></div>
            <p className="mt-1 text-xs text-white/70">64% complete</p>
          </div>
        }
      >
        <Link to="/learn" className="btn bg-white text-brand-700 hover:bg-brand-50"><PlayCircle className="h-4 w-4" /> Resume lesson</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Courses enrolled" value="4" icon={BookOpen} />
        <StatCard label="Hours this week" value="14.2 h" delta="22%" icon={Clock} tone="sky" />
        <StatCard label="Current streak" value="12 days" icon={Flame} tone="amber" />
        <StatCard label="Certificates" value="1" icon={Award} tone="emerald" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="In progress" className="xl:col-span-2">
          <div className="space-y-4">
            {inProgress.map((c) => (
              <Link to="/learn" key={c.id} className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-slate-50">
                <div className={`grid h-16 w-24 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.gradient} text-3xl shadow-lg`}>{c.emoji}</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-800">{c.title}</p>
                  <p className="text-xs text-slate-400">{c.instructor} · {c.lessons} lessons</p>
                  <div className="mt-2 flex items-center gap-3"><div className="flex-1"><Progress value={c.progress} /></div><span className="text-xs font-semibold text-slate-600">{c.progress}%</span></div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
        <Card title="Coming up">
          <ul className="space-y-3">
            {upcoming.map((u) => (
              <li key={u.title} className="rounded-xl border border-slate-100 p-3">
                <Badge tone={u.type === 'Live class' ? 'red' : u.type === 'Quiz' ? 'blue' : 'amber'}>{u.type}</Badge>
                <p className="mt-2 font-semibold text-slate-800">{u.title}</p>
                <p className="text-xs text-slate-400">{u.when}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Card title="Learning hours" subtitle="This week" className="mt-6"><BarsChart data={weeklyHours} series={[{ key: 'hours', name: 'Hours' }]} height={220} /></Card>
    </>
  )
}
