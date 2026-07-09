import React, { useState } from 'react'

export default function Faq({ items }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-100 p-6 sm:p-8">
      {items.map((item, i) => {
        const active = openIdx === i
        return (
          <div key={i} className={`faq-item ${active ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => setOpenIdx(active ? null : i)}>
              <span>{item.q}</span>
              <div className="faq-icon"><i className="fa-solid fa-plus"></i></div>
            </div>
            <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.a }} />
          </div>
        )
      })}
    </div>
  )
}
