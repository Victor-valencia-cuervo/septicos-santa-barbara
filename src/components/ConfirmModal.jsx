import React from 'react'

export default function ConfirmModal({ open, title, message, confirmLabel = 'Sí', cancelLabel = 'Cancelar', onConfirm, onCancel }) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      onClick={onCancel}
    >
      <div
        className="bg-slate-900 border border-brand/30 rounded-2xl max-w-sm w-full p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 bg-brand/15 border border-brand/30 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-eye text-xl text-sky-300"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">{message}</p>
          </div>
          <div className="flex gap-3 w-full pt-1">
            <button
              onClick={onCancel}
              className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 hover:text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-brand hover:bg-brand-dark text-white py-2.5 px-4 rounded-xl font-bold text-sm transition shadow-md"
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
