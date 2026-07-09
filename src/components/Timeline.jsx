import React from 'react'
import Reveal from '../hooks/useReveal.jsx'

export default function Timeline({ steps }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="timeline">
        {steps.map((s, i) => (
          <Reveal key={i} className="timeline-step" delay={i * 60}>
            <div className="timeline-dot">{i + 1}</div>
            {s.final ? (
              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-2xl p-5 text-white shadow-lg">
                <h3 className="font-bold text-white text-lg flex items-center gap-2"><i className={`fa-solid ${s.icon} text-sky-200 text-sm`}></i> {s.title}</h3>
                <p className="text-sky-100 font-light text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ) : (
              <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 hover:border-brand/40 transition-all">
                <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2"><i className={`fa-solid ${s.icon} ${s.iconColor || 'text-brand'} text-sm`}></i> {s.title}</h3>
                <p className="text-slate-500 font-light text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  )
}
