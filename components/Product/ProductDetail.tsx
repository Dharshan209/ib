"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '../../lib/products';
import { getRelatedProducts } from '../../lib/products';

const ProductDetail = ({ product }: { product: Product }) => {
  const related = getRelatedProducts(product);

  return (
    <div className="pt-10 pb-20 px-6 md:px-7 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 items-center text-[13px] text-ink-2 mb-6 flex-wrap">
          <Link href="/" className="text-green-ink">Home</Link>
          <span className="text-ink-3">/</span>
          <Link href="/products" className="text-green-ink">Products</Link>
          <span className="text-ink-3">/</span>
          <span className="text-ink">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-11 items-start">
          {/* pack */}
          <div className="relative aspect-square bg-gradient-to-br from-white to-green-50 border border-line rounded-xl shadow-[var(--e-2)] flex items-center justify-center p-10">
            <span className="absolute z-10 top-4 left-4 text-[11px] font-semibold text-green-ink bg-green-50 border border-green-100 rounded-full px-2.5 py-1">{product.tag}</span>
            <Image
              src={product.image}
              alt={product.name}
              width={360}
              height={360}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* info */}
          <div>
            <div className="font-mono text-[11px] tracking-[.12em] text-ink-3 uppercase mb-2">{product.use}</div>
            <h1 className="font-semibold text-[38px] tracking-[-0.025em] text-navy mb-3.5">{product.name}</h1>
            <div className="flex gap-2 flex-wrap mb-5">
              <span className="font-mono text-[11px] font-semibold text-ink-2 bg-sunk border border-line rounded-sm px-2.5 py-1">{product.form}</span>
              <span className="font-mono text-[11px] font-semibold text-ink-2 bg-sunk border border-line rounded-sm px-2.5 py-1">{product.pack}</span>
              <span className="font-mono text-[11px] font-semibold text-warning bg-warning-bg rounded-sm px-2.5 py-1">{product.rx ? 'Rx only' : 'OTC'}</span>
            </div>
            <p className="text-[16.5px] leading-relaxed text-ink-2 mb-6">
              {product.name} is formulated to support {product.use} within Indian Biologicals&apos; {product.area} range. Product copy shown here is placeholder text — replace with your approved indication and prescribing information.
            </p>
            <div className="flex gap-3 flex-wrap mb-7">
              <Link href="/contact" className="font-semibold text-[15px] text-white bg-green-600 hover:bg-green-700 rounded-md px-[22px] py-3 transition-colors">
                Request information
              </Link>
              <button className="font-semibold text-[15px] text-green-ink bg-surface border border-line-strong hover:bg-green-50 hover:border-green-300 rounded-md px-[22px] py-3 transition-colors inline-flex items-center gap-2">
                Download leaflet <span className="font-mono">↓</span>
              </button>
            </div>

            {/* composition */}
            <h3 className="font-semibold text-base text-ink mb-3">
              Composition <span className="font-medium text-xs text-ink-3">(per unit dose · placeholder)</span>
            </h3>
            <table className="w-full border-collapse text-sm mb-6">
              <thead>
                <tr className="text-left">
                  <th className="font-mono text-[11px] tracking-[.08em] uppercase text-ink-3 font-semibold pb-2.5 pr-3 border-b border-line-strong">Active ingredient</th>
                  <th className="font-mono text-[11px] tracking-[.08em] uppercase text-ink-3 font-semibold pb-2.5 px-3 border-b border-line-strong">Strength</th>
                  <th className="font-mono text-[11px] tracking-[.08em] uppercase text-ink-3 font-semibold pb-2.5 pl-3 border-b border-line-strong">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2.5 pr-3 border-b border-line text-ink font-medium">Active A</td>
                  <td className="py-2.5 px-3 border-b border-line font-mono text-ink-2">600 mg</td>
                  <td className="py-2.5 pl-3 border-b border-line text-ink-2">Primary action</td>
                </tr>
                <tr className="bg-sunk">
                  <td className="py-2.5 pr-3 border-b border-line text-ink font-medium">Active B</td>
                  <td className="py-2.5 px-3 border-b border-line font-mono text-ink-2">150 mg</td>
                  <td className="py-2.5 pl-3 border-b border-line text-ink-2">Adjunct</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 text-ink font-medium">Vitamin D3</td>
                  <td className="py-2.5 px-3 font-mono text-ink-2">400 IU</td>
                  <td className="py-2.5 pl-3 text-ink-2">Support</td>
                </tr>
              </tbody>
            </table>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-base text-ink mb-2">Dosage</h3>
                <p className="text-sm leading-relaxed text-ink-2 m-0">One unit daily, or as directed by a registered medical practitioner. Best taken with food.</p>
              </div>
              <div>
                <h3 className="font-semibold text-base text-ink mb-2">Storage</h3>
                <p className="text-sm leading-relaxed text-ink-2 m-0">Store below 30°C in a dry place, protected from light. Keep out of reach of children.</p>
              </div>
            </div>
          </div>
        </div>

        {/* safety callout */}
        <div className="flex gap-3 bg-warning-bg border border-[#F0DBB0] border-l-4 border-l-warning rounded-md px-4 py-3.5 my-8">
          <span className="text-warning font-bold">⚠</span>
          <div className="text-[13.5px] text-ink-2">
            For use only on the advice of a registered medical practitioner. Full prescribing information, contraindications and adverse-event reporting details accompany the product pack.
          </div>
        </div>

        {/* related */}
        {related.length > 0 && (
          <>
            <h3 className="font-semibold text-xl tracking-[-0.01em] text-ink mb-[18px]">Related in {product.area}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="text-left bg-surface border border-line rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-white to-green-50 flex items-center justify-center border-b border-line p-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={180}
                      height={180}
                      className="object-contain max-h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-mono text-[10.5px] tracking-[.1em] text-ink-3 uppercase mb-1">{p.use}</div>
                    <div className="font-semibold text-[17px] text-navy">{p.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
