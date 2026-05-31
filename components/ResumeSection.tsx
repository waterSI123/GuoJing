import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { RESUME_PROFILE } from '../constants';

const ResumeSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-6 md:px-12 pt-12 pb-20 md:pt-16 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[1180px] mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-ink pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <img
              src={RESUME_PROFILE.photoUrl}
              alt={`${RESUME_PROFILE.name} 证件照`}
              className="w-28 h-32 object-cover border border-gray-100 bg-gray-50 shrink-0"
              loading="eager"
            />
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink tracking-wide">
                  {RESUME_PROFILE.name}
                </h2>
                <p className="mt-2 text-lg text-ink font-medium">{RESUME_PROFILE.title}</p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:text-base text-secondary">
                <a className="inline-flex items-center gap-2 hover:text-vermilion transition-colors" href={`tel:${RESUME_PROFILE.phone}`}>
                  <Phone size={16} />
                  {RESUME_PROFILE.phone}
                </a>
                <a className="inline-flex items-center gap-2 hover:text-vermilion transition-colors" href={`mailto:${RESUME_PROFILE.email}`}>
                  <Mail size={16} />
                  {RESUME_PROFILE.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  {RESUME_PROFILE.location}
                </span>
              </div>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs text-secondary tracking-[0.32em] uppercase font-medium">Resume</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-serif font-bold text-ink">简历</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[8.5rem_1fr] gap-x-12 gap-y-7 pt-10 md:pt-12">
          <h3 className="text-xl font-serif font-bold text-ink">工作经历</h3>
          <div className="space-y-10">
            {RESUME_PROFILE.workExperience.map((item) => (
              <article key={`${item.company}-${item.date}`} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-3 border-b border-gray-100 pb-10 last:border-b-0 last:pb-0">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-ink">{item.company}</h4>
                  <p className="mt-2 text-base text-ink/85 font-medium">{item.role}</p>
                  {item.summary && (
                    <p className="mt-4 text-base leading-relaxed text-secondary">{item.summary}</p>
                  )}
                </div>
                <div className="md:text-right text-sm md:text-base text-secondary font-medium space-y-1 md:pt-1">
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                </div>
                <ul className="md:col-span-2 mt-2 space-y-3 text-base leading-relaxed text-secondary">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-vermilion">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="text-xl font-serif font-bold text-ink border-t border-ink pt-8 lg:border-t-0 lg:pt-0">教育经历</h3>
          <div className="space-y-6 border-t border-gray-100 pt-8 lg:border-t-0 lg:pt-0">
            {RESUME_PROFILE.education.map((item) => (
              <article key={`${item.school}-${item.date}`} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg md:text-xl font-bold text-ink">{item.school}</h4>
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded bg-blue-50 px-2 py-0.5 text-sm font-medium text-blue-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-base text-ink/85 font-medium">{item.major}</p>
                  <p className="mt-3 text-base leading-relaxed text-secondary">{item.description}</p>
                </div>
                <div className="md:text-right text-sm md:text-base text-secondary font-medium space-y-1 md:pt-1">
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
