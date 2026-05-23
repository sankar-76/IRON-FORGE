import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Run a GSAP timeline/animation on mount.
 * The callback receives `gsap` and should return a cleanup fn or GSAP timeline.
 */
export function useGSAPOnMount(callback, deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap)
    })
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/**
 * Animate elements into view when they enter the viewport.
 * Returns a ref to attach to the section container.
 */
export function useScrollReveal(selector, fromVars, toVars, stagger = 0) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const elements = containerRef.current.querySelectorAll(selector)
    if (!elements.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { ...fromVars },
        {
          ...toVars,
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

/**
 * Hero entrance animation — runs immediately on mount.
 */
export function useHeroAnimation(targets) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(targets.eyebrow,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
      .fromTo(targets.title,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.35'
      )
      .fromTo(targets.subtitle,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(targets.cta,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.6)' },
        '-=0.4'
      )
      .fromTo(targets.stats,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.25'
      )
    })

    return () => ctx.revert()
  }, [])
}
