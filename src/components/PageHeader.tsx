import React from 'react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  action?: React.ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  action,
}: PageHeaderProps) {
  return (
    <section className="bg-primary text-on-primary pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-shimmer/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-label-md uppercase tracking-wider text-white/60">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-white/30">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-gold-shimmer transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-gold-shimmer font-semibold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="inline-block font-label-md text-gold-shimmer text-xs tracking-[0.25em] uppercase font-semibold mb-2 sm:mb-3">
                {eyebrow}
              </span>
            )}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white font-semibold leading-[1.15] tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>

          {action && <div className="flex-shrink-0">{action}</div>}
        </div>
      </div>
    </section>
  );
}
