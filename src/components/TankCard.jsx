import React from 'react'
import Reveal from '../hooks/useReveal.jsx'
import ImageWithSkeleton from './SkeletonMedia.jsx'

export default function TankCard({ tank, delay = 0, onOpen }) {
  return (
    <Reveal delay={delay}>
      <div className="tank-card h-full flex flex-col" onClick={() => onOpen(tank)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(tank)} aria-label={`Ver ${tank.title}`}>
        <div className="tank-card__media">
          <ImageWithSkeleton src={tank.img} alt={tank.title} className="!absolute inset-0" />
          <div className="tank-card__shade"></div>
          <div className="tank-card__bottom-shade"></div>
          <div className={`absolute top-3 right-3 z-[2] ${tank.badgeColor || 'bg-brand'} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
            {tank.badge}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-extrabold text-[var(--ink)] text-xl">{tank.title}</h3>
            <span className="text-brand font-bold text-sm shrink-0"><i className="fa-solid fa-droplet mr-1"></i>{tank.capacity}</span>
          </div>
          <p className="text-[var(--ink-3)] text-sm mb-3 flex-grow leading-relaxed">{tank.desc}</p>
          <div className="flex items-center gap-2 text-xs text-[var(--ink-3)] mb-4">
            <i className="fa-solid fa-users text-brand"></i>
            <span>{tank.use}</span>
          </div>
          <span className="btn btn--soft w-full !py-2.5 !text-sm"><i className="fa-solid fa-eye"></i> Ver más</span>
        </div>
      </div>
    </Reveal>
  )
}
