import React from 'react'
import Reveal from '../hooks/useReveal.jsx'

export default function TankCard({ tank, delay = 0, onOpen }) {
  return (
    <Reveal delay={delay}>
      <div className="tank-card h-full flex flex-col" onClick={() => onOpen(tank)}>
        <div className="tank-card__media">
          <img
            src={tank.img}
            alt={tank.title}
            className="tank-card__img"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <div className="tank-card__shade"></div>
          <div className="tank-card__bottom-shade"></div>
          <div className={`absolute top-3 right-3 ${tank.badgeColor || 'bg-brand'} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
            {tank.badge}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-extrabold text-slate-800 text-xl">{tank.title}</h3>
            <span className="text-brand font-bold text-sm shrink-0"><i className="fa-solid fa-droplet mr-1"></i>{tank.capacity}</span>
          </div>
          <p className="text-slate-500 text-sm font-light mb-3 flex-grow">{tank.desc}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <i className="fa-solid fa-users text-brand"></i>
            <span>{tank.use}</span>
          </div>
          <button className="w-full bg-sky-50 hover:bg-brand hover:text-white text-brand font-bold py-2.5 rounded-xl transition-all text-sm border border-brand/20 hover:border-brand">
            <i className="fa-solid fa-eye mr-1"></i> Ver más
          </button>
        </div>
      </div>
    </Reveal>
  )
}
