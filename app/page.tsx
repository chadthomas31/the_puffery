'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuCard } from '@/components/MenuCard';
import { Section } from '@/components/Section';
import { MENU_ITEMS } from '@/lib/data';
import { motion } from 'framer-motion';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.6);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) setShouldAutoplay(false);
    }
  }, []);

  useEffect(() => {
    // Try to programmatically play when allowed
    const v = videoRef.current;
    if (!v) return;
    if (shouldAutoplay) {
      const tryPlay = async () => {
        try {
          await v.play();
          setIsPlaying(true);
          setShowPlay(false);
        } catch {
          // Autoplay blocked: show play button
          setShowPlay(true);
        }
      };
      tryPlay();
    } else {
      setShowPlay(true);
    }
  }, [shouldAutoplay]);

  // Keep DOM element in sync with volume/mute state
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.volume = volume;
  }, [muted, volume]);
  const featured = MENU_ITEMS.filter((m) => m.category === 'cream-pies').slice(0, 6);
  return (
    <>
      <motion.section
        className="bg-puff-beige/60 border-b border-black/5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
              Handcrafted Daily • Small Batch
            </span>
            <h1 className="h1 mt-4">Artisan Cream Pies & Puffs</h1>
            <p className="mt-4 text-lg text-black/70">
              “A Little Bit of Puff, A Whole Lot of Love.”
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/menu" className="btn btn-primary">View Menu</Link>
              <Link href="/order" className="btn btn-secondary">Order Now</Link>
            </div>
          </div>
          <motion.div
            className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-puff-cream ring-1 ring-black/5 shadow-sm"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src="/video/hero.mp4"
              poster="/images/chynna.png"
              autoPlay={shouldAutoplay}
              muted={muted}
              playsInline
              preload="metadata"
              aria-label="The Puffery kitchen in action"
              onEnded={(e) => {
                e.currentTarget.pause();
                setIsPlaying(false);
                setShowPlay(true);
              }}
            />
            {showPlay && (
              <button
                type="button"
                onClick={async () => {
                  const v = videoRef.current;
                  if (!v) return;
                  try {
                    // Start with sound on user intent
                    setMuted(false);
                    v.volume = volume;
                    await v.play();
                    setIsPlaying(true);
                    setShowPlay(false);
                  } catch {
                    // ignore
                  }
                }}
                className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/80 text-black shadow ring-1 ring-black/10 grid place-items-center backdrop-blur hover:bg-white transition"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                ▶
              </button>
            )}
            {/* Mute/Unmute control shown when not showing the big play button */}
            {!showPlay && (
              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/40 text-white px-2 py-1 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  className="px-2 text-sm"
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                >
                  {muted ? '🔇' : '🔊'}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="h-1 w-24 accent-white"
                  aria-label="Video volume"
                />
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Section title="Why The Puffery">
        <div className="grid gap-4 md:grid-cols-3">
          <Feature title="Small-batch" desc="Made fresh every morning, never mass-produced." />
          <Feature title="Premium Ingredients" desc="Madagascar vanilla, real chocolate, local fruit." />
          <Feature title="Crafted with Care" desc="From our pâte sucrée to chantilly—attention to detail." />
        </div>
        </Section>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Section title="Featured Items">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/menu" className="btn btn-secondary">Browse Full Menu</Link>
        </div>
        </Section>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Section title="What People Say">
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial quote="Best cream pie I’ve ever had—silky and not too sweet." author="Marina K." />
          <Testimonial quote="The matcha pie is perfection. Subtle, creamy, addictive." author="Daniel P." />
          <Testimonial quote="We order puffs for every celebration now!" author="Renee L." />
        </div>
        </Section>
      </motion.div>
    </>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="h3">{title}</p>
        <p className="mt-2 text-black/70">{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="card">
      <div className="card-body">
        <p className="italic">“{quote}”</p>
        <footer className="mt-2 text-sm text-black/60">— {author}</footer>
      </div>
    </blockquote>
  );
}
