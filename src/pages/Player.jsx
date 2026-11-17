import { useMemo, useState } from 'react'
import { CheckCircle2, Circle, Download, FileText, MessagesSquare, Pause, Play, PlayCircle } from 'lucide-react'
import { Card, Progress, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { curriculum } from '../data'

export default function Player() {
  const { openContact } = useContact()
  const all = curriculum.flatMap((s) => s.lessons)
  const [done, setDone] = useState(() => new Set(all.filter((l) => l.done).map((l) => l.id)))
  const [current, setCurrent] = useState(all.find((l) => l.current))
  const [playing, setPlaying] = useState(false)
  const [tab, setTab] = useState('Overview')
  const pct = useMemo(() => Math.round((done.size / all.length) * 100), [done, all.length])

  const markDone = () => {
    setDone((d) => new Set([...d, current.id]))
    const next = all[all.findIndex((l) => l.id === current.id) + 1]
    if (next) setCurrent(next)
    setPlaying(false)
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <div className="min-w-0 space-y-6">
        {/* Video player mock */}
        <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-950 shadow-2xl animate-fade-up">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700/60 via-slate-950 to-indigo-900/60" />
          <div className="bg-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 grid place-items-center">
            <button onClick={() => setPlaying((p) => !p)} className="grid h-20 w-20 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition hover:scale-105 hover:bg-white/25">
              {playing ? <Pause className="h-9 w-9" /> : <Play className="ml-1 h-9 w-9" />}
            </button>
          </div>
          <div className="absolute left-6 top-5 text-white">
            <p className="text-xs uppercase tracking-widest text-white/60">Lesson</p>
            <p className="text-lg font-semibold">{current.title}</p>
          </div>
          <div className="absolute inset-x-6 bottom-5">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/20"><div className={`h-full rounded-full bg-brand-400 transition-all duration-[30s] ease-linear ${playing ? 'w-full' : 'w-[38%]'}`} /></div>
            <div className="mt-2 flex justify-between text-xs text-white/60"><span>{playing ? 'Playing…' : '11:42'}</span><span>{current.mins}:00</span></div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented options={['Overview', 'Notes', 'Q&A']} value={tab} onChange={setTab} />
          <button onClick={markDone} className="btn-primary"><CheckCircle2 className="h-4 w-4" /> Mark complete & next</button>
        </div>

        <Card>
          {tab === 'Overview' && (
            <div className="space-y-3 text-sm leading-relaxed text-slate-600">
              <p>In this lesson you'll build a complete JWT authentication flow: hashing passwords, issuing access and refresh tokens, protecting routes with middleware and handling token expiry on the client.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <button onClick={() => openContact('Downloadable Resources')} className="btn-ghost py-2 text-xs"><Download className="h-3.5 w-3.5" /> Source code.zip</button>
                <button onClick={() => openContact('Downloadable Resources')} className="btn-ghost py-2 text-xs"><FileText className="h-3.5 w-3.5" /> Slides.pdf</button>
              </div>
            </div>
          )}
          {tab === 'Notes' && <textarea rows={5} placeholder="Write timestamped notes for this lesson…" className="input resize-none" />}
          {tab === 'Q&A' && (
            <div className="py-6 text-center">
              <MessagesSquare className="mx-auto h-8 w-8 text-slate-300" />
              <p className="mt-2 text-sm text-slate-500">Ask the instructor and discuss with peers.</p>
              <button onClick={() => openContact('Discussion Forum & Doubt Solving')} className="btn-primary mt-4">Ask a question</button>
            </div>
          )}
        </Card>
      </div>

      <Card title="Course content" subtitle={`${done.size}/${all.length} lessons · ${pct}% complete`} className="h-fit xl:sticky xl:top-24" bodyClass="p-0">
        <div className="px-5 pt-4"><Progress value={pct} /></div>
        {curriculum.map((s) => (
          <div key={s.section} className="py-3">
            <p className="px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{s.section}</p>
            {s.lessons.map((l) => {
              const isDone = done.has(l.id)
              const active = current.id === l.id
              return (
                <button key={l.id} onClick={() => { setCurrent(l); setPlaying(false) }} className={`flex w-full items-center gap-3 px-5 py-2.5 text-left text-sm transition ${active ? 'bg-brand-50' : 'hover:bg-slate-50'}`}>
                  {isDone ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> : active ? <PlayCircle className="h-5 w-5 shrink-0 text-brand-600" /> : <Circle className="h-5 w-5 shrink-0 text-slate-300" />}
                  <span className={`flex-1 ${active ? 'font-semibold text-brand-700' : 'text-slate-700'}`}>{l.title}</span>
                  <span className="text-xs text-slate-400">{l.mins}m</span>
                </button>
              )
            })}
          </div>
        ))}
      </Card>
    </div>
  )
}
