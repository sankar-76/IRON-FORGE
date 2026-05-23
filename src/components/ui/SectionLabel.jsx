/**
 * @param {string} text      - label text
 * @param {'center'|'left'} align
 */
export default function SectionLabel({ text, align = 'left' }) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${
        align === 'center' ? 'justify-center' : ''
      }`}
    >
      <span className="w-6 h-px bg-[#FF5000] flex-shrink-0" />
      <span className="font-cond text-sm font-semibold tracking-[0.3em] uppercase text-[#FF5000]">
        {text}
      </span>
      {align === 'center' && (
        <span className="w-6 h-px bg-[#FF5000] flex-shrink-0" />
      )}
    </div>
  )
}
