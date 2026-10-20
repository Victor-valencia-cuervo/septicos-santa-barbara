import React, { useState } from 'react'

export default function Faq({ items }) {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div className="max-w-3xl mx-auto card p-6 sm:p-8">
      {items.map((item, i) => {
        const active = openIdx === i
        return (
          <div key={i} className={`faq-item ${active ? 'active' : ''}`}>
            <button type="button" className="faq-question w-full text-left" aria-expanded={active} onClick={() => setOpenIdx(active ? null : i)}>
              <span>{item.q}</span>
              <span className="faq-icon"><i className="fa-solid fa-plus"></i></span>
            </button>
            <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.a }} />
          </div>
        )
      })}
    </div>
  )
}
