/**
 * @param {'primary'|'outline'} variant
 */
export default function Button({ children, variant = 'primary', className = '', onClick, type = 'button' }) {
  const base = 'font-cond font-bold tracking-widest text-sm uppercase rounded transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-[#FF5000] text-white px-8 py-4 hover:bg-[#FF6B1A] glow-brand',
    outline: 'border border-white/20 text-white px-8 py-4 hover:border-[#FF5000] hover:text-[#FF5000]',
    ghost:   'text-[#FF5000] px-0 py-0 hover:opacity-80',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
