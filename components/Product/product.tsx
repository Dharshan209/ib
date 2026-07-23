"use client";
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { products, therapeuticAreas } from '../../lib/products';

const forms = ['All', 'Tablet', 'Softgel', 'Sachet', 'Injection', 'Kit'];

const Products = () => {
  const searchParams = useSearchParams();
  const initialArea = searchParams.get('area') || 'All';

  const [query, setQuery] = useState('');
  const [fArea, setFArea] = useState(initialArea);
  const [fForm, setFForm] = useState('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        (fArea === 'All' || p.area === fArea) &&
        (fForm === 'All' || p.form === fForm) &&
        p.name.toLowerCase().includes(q)
    );
  }, [query, fArea, fForm]);

  const clearFilters = () => {
    setFArea('All');
    setFForm('All');
    setQuery('');
  };

  return (
    <div className="pt-10 pb-20 px-6 md:px-7 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 items-center text-[13px] text-ink-2 mb-5">
          <Link href="/" className="text-green-ink">Home</Link>
          <span className="text-ink-3">/</span>
          <span className="text-ink">Products</span>
        </div>
        <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3">Catalog</div>
        <h1 className="font-semibold text-4xl tracking-[-0.025em] text-navy mb-3">Product portfolio</h1>
        <p className="text-[17px] text-ink-2 max-w-[60ch] mb-7">
          Sixteen curated formulations across six therapeutic areas in women&apos;s health. Filter by area or dosage form, or search by name.
        </p>

        {/* filter bar */}
        <div className="flex flex-col gap-4 bg-surface border border-line rounded-lg p-5 shadow-sm mb-6">
          <div className="flex gap-3 flex-wrap items-center">
            <div className="relative flex-1 min-w-[240px]">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-3 font-mono pointer-events-none">⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md py-2.5 pl-9 pr-3 focus:outline-none focus:border-green-400 focus:ring-[3px] focus:ring-green-400/30"
              />
            </div>
            <div className="relative">
              <select
                value={fForm}
                onChange={(e) => setFForm(e.target.value)}
                className="font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md py-2.5 pl-3 pr-8 appearance-none cursor-pointer"
              >
                {forms.map((f) => (
                  <option key={f} value={f}>{f === 'All' ? 'All forms' : f}</option>
                ))}
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-3 font-mono pointer-events-none">▾</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFArea('All')}
              className={`font-sans text-[13px] font-semibold rounded-full px-3.5 py-1.5 border transition-colors ${
                fArea === 'All' ? 'text-white bg-green-600 border-green-600' : 'text-ink-2 bg-surface border-line-strong'
              }`}
            >
              All products
            </button>
            {therapeuticAreas.map((a) => (
              <button
                key={a.slug}
                onClick={() => setFArea(a.name)}
                className={`font-sans text-[13px] font-semibold rounded-full px-3.5 py-1.5 border transition-colors ${
                  fArea === a.name ? 'text-white bg-green-600 border-green-600' : 'text-ink-2 bg-surface border-line-strong'
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[13.5px] text-ink-2">
            <span className="font-semibold text-ink font-mono">{filtered.length}</span> products
          </div>
          <button onClick={clearFilters} className="text-[13px] font-semibold text-green-ink">Clear filters</button>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="text-left bg-surface border border-line rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square bg-gradient-to-br from-white to-green-50 flex items-center justify-center border-b border-line p-4">
                  <span className="absolute z-10 top-3 left-3 text-[10px] font-semibold text-green-ink bg-green-50 border border-green-100 rounded-full px-2.5 py-1">{p.tag}</span>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={220}
                    height={220}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="font-mono text-[10.5px] tracking-[.1em] text-ink-3 uppercase mb-1">{p.use}</div>
                  <div className="font-semibold text-[18px] tracking-[-0.01em] text-navy">{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-5 bg-surface border border-dashed border-line-strong rounded-lg">
            <div className="text-[17px] font-semibold text-ink mb-1.5">No products match</div>
            <div className="text-sm text-ink-2 mb-[18px]">Try a different area, form, or search term.</div>
            <button onClick={clearFilters} className="font-semibold text-sm text-white bg-green-600 rounded-md px-5 py-2.5">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
