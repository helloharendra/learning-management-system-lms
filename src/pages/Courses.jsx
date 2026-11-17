import { useState } from 'react'
import { BookOpen, Clock, Star, Users } from 'lucide-react'
import { Badge, PageHeader, Segmented, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { courses } from '../data'

const cats = ['All', ...new Set(courses.map((c) => c.category))]

export default function Courses() {
  const { openContact } = useContact()
  const [cat, setCat] = useState('All')
  const list = courses.filter((c) => cat === 'All' || c.category === cat)

  return (
    <>
      <PageHeader title="Course catalogue" subtitle="Video courses, quizzes, assignments and certificates" actions={<Segmented options={cats} value={cat} onChange={setCat} />} />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <article key={c.id} className="card group overflow-hidden animate-fade-up transition hover:-translate-y-1 hover:shadow-2xl">
            <div className={`relative grid h-44 place-items-center bg-gradient-to-br ${c.gradient}`}>
              <div className="bg-grid absolute inset-0 opacity-40" />
              <span className="relative text-6xl drop-shadow-lg transition duration-300 group-hover:scale-110">{c.emoji}</span>
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800">{c.category}</span>
              {c.progress === 100 && <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">Completed</span>}
            </div>
            <div className="p-5">
              <h3 className="line-clamp-2 min-h-[48px] font-bold leading-snug text-slate-900">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{c.instructor}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-amber-600"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />{c.rating}</span>
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.learners.toLocaleString('en-IN')}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{c.lessons}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{c.hours}h</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <div><p className="text-xl font-extrabold text-slate-900">{inr(c.price)}</p><Badge tone="slate" dot={false}>{c.level}</Badge></div>
                <button onClick={() => openContact('Course Enrolment & Payments')} className="btn-primary px-4 py-2">{c.progress ? 'Continue' : 'Enrol now'}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
