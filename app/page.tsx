"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import EmptyState from "@/components/EmptyState";
import CMSPlaceholder from "@/components/CMSPlaceholder";
import CmsGridSlot from "@/components/CmsGridSlot";
import ImpactStats from "@/components/ImpactStats";

export default function Home() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleTagToggle = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setFormData({ name: "", email: "" });
    setActiveTags([]);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero bg-ink color-cream-text relative overflow-hidden pt-[100px] pb-0 text-cream-text">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/hero-background.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          {/* Layer to blend the image into the theme color */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/90 to-ink-2/95" />
        </div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,_rgba(224,164,104,0.05)_0_2px,_transparent_2px_64px),_repeating-linear-gradient(25deg,_rgba(224,164,104,0.04)_0_1px,_transparent_1px_90px)] pointer-events-none z-10" />
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 items-center">
            <div className="max-w-[46ch]">
              <span className="eyebrow text-copper-light">
                CAC Registered Business Name · Est. 2015
              </span>
              <h1 className="text-[38px] md:text-[52px] lg:text-[60px] font-serif leading-[1.06] mt-[22px] mb-[26px] max-w-[15ch]">
                Developing leaders through seminars, conferences and technical training
              </h1>
              <p className="text-[18px] text-[#C7D2CE] max-w-[46ch] mb-[36px] leading-[1.55]">
                Masters Leadership Academy organises seminars, symposiums and conferences, and provides technical services — registered with the Corporate Affairs Commission of Nigeria and based in Port Harcourt, Rivers State.
              </p>
              <div className="flex flex-wrap items-center gap-[14px_22px]">
                <Link href="/services" className="btn btn-copper">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Request a Proposal
                </Link>
                <div className="flex gap-[22px] ml-1 text-[14px]">
                  <Link href="/programmes" className="opacity-80 border-b border-cream-text/40 pb-0.5 hover:opacity-100 transition-all">
                    See programmes →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEDGER STRIP */}
        <div className="bg-ink-2 border-t border-rule py-[22px] mt-[70px]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex flex-wrap gap-[14px_40px] justify-between text-[#AEC0BB]">
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                CAC Registered Business Name
              </span>
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                BN 2357164
              </span>
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                Est. 2015
              </span>
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                Seminars & Symposiums
              </span>
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                Conferences
              </span>
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                Technical Services
              </span>
              <span className="text-[12px] flex items-center gap-[9px] white-space-nowrap">
                <span className="w-1 h-1 bg-copper-light rounded-full" />
                Port Harcourt, Rivers State
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-paper py-[100px]" id="about">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-slate mb-[16px]">Who we are</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              A registered training and events firm based in Rivers State
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <div className="flex flex-col justify-start">
              <span className="text-[12px] font-semibold text-slate tracking-[0.12em] uppercase mb-[14px]">
                Registered Purpose
              </span>
              <p className="text-[17px] text-muted-paper leading-[1.6]">
                Masters Leadership Academy is registered with the Corporate Affairs Commission of Nigeria as a Business Name, with a stated general nature of business covering the organising of seminars and symposiums, the organising of conferences, and technical services.
              </p>
              <div className="mt-6">
                <Link href="/about" className="btn btn-outline-ink">
                  Read Full Registration Background
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <span className="text-[12px] font-semibold text-slate tracking-[0.12em] uppercase mb-[14px]">
                Our Story & Mission
              </span>
              <CMSPlaceholder text="Add the Academy's founding story, mission statement and vision here." />
            </div>
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* CHAIRMAN'S MESSAGE */}
      <section className="bg-paper py-[80px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start">
            <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-[4px] overflow-hidden border border-rule-paper bg-paper-2 shrink-0 relative">
              <Image
                src="/chairman.jpg"
                alt="Dr. John Doe, Chairman & Founder, Masters Leadership Academy"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow text-slate mb-[14px] block">A Message From Our Chairman</span>
              <p className="text-[19px] md:text-[22px] font-serif italic leading-[1.5] text-ink-text mb-[22px] max-w-[62ch]">
                &ldquo;Our mission has always been to develop leaders who can hold up under pressure, think
                clearly, and serve their organisations and communities with integrity. Every seminar,
                conference and technical engagement we run is built toward that end.&rdquo;
              </p>
              <div className="font-serif text-[17px] text-ink-text font-semibold">Dr. John Doe</div>
              <div className="text-[13px] text-muted-paper uppercase tracking-[0.08em] mt-1">
                Chairman &amp; Founder, Masters Leadership Academy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP / OUR TEAM */}
      <section className="bg-paper-2 py-[70px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[36px]">
            <span className="eyebrow text-slate mb-[16px]">Leadership</span>
            <h2 className="text-[24px] font-serif">Our Team</h2>
            <p className="text-muted-paper mt-[10px] text-[15px]">
              No leadership or facilitator profiles were supplied with the registration certificate. Add real names, roles and bios below.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-rule-paper border border-rule-paper">
            <div className="bg-paper-2 p-[28px_24px]">
              <div className="text-[11px] text-slate tracking-[0.1em] uppercase mb-[10px]">[Role]</div>
              <div className="font-serif text-[18px] mb-[6px] text-ink-text">[CMS Placeholder]</div>
              <div className="text-[12px] text-muted-paper leading-[1.4]">Add facilitator or director profile</div>
            </div>
            <div className="bg-paper-2 p-[28px_24px]">
              <div className="text-[11px] text-slate tracking-[0.1em] uppercase mb-[10px]">[Role]</div>
              <div className="font-serif text-[18px] mb-[6px] text-ink-text">[CMS Placeholder]</div>
              <div className="text-[12px] text-muted-paper leading-[1.4]">Add facilitator or director profile</div>
            </div>
            <div className="bg-paper-2 p-[28px_24px]">
              <div className="text-[11px] text-slate tracking-[0.1em] uppercase mb-[10px]">[Role]</div>
              <div className="font-serif text-[18px] mb-[6px] text-ink-text">[CMS Placeholder]</div>
              <div className="text-[12px] text-muted-paper leading-[1.4]">Add facilitator or director profile</div>
            </div>
            <div className="bg-paper-2 p-[28px_24px]">
              <div className="text-[11px] text-slate tracking-[0.1em] uppercase mb-[10px]">[Role]</div>
              <div className="font-serif text-[18px] mb-[6px] text-ink-text">[CMS Placeholder]</div>
              <div className="text-[12px] text-muted-paper leading-[1.4]">Add facilitator or director profile</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink text-cream-text py-[100px]" id="services">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-copper-light mb-[16px]">What we do</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              Our registered service areas
            </h2>
            <p className="text-[#B9C6C2] mt-[16px] text-[16px]">
              As stated on our Certificate of Registration with the Corporate Affairs Commission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-rule border border-rule">
            <div className="bg-ink p-[34px_30px] hover:bg-ink-2 transition-colors duration-200">
              <span className="font-mono text-[12px] text-copper-light mb-[22px] block">01</span>
              <h3 className="text-[21px] mb-[12px] leading-[1.25] font-serif text-cream-text">Seminars & Symposiums</h3>
              <p className="text-[14px] text-[#9AACA6] mb-[20px]">
                [CMS PLACEHOLDER] — describe the format, audience and typical topics covered.
              </p>
              <span className="text-[11px] font-mono text-copper-light uppercase tracking-[0.06em]">
                Verified service line
              </span>
            </div>
            <div className="bg-ink p-[34px_30px] hover:bg-ink-2 transition-colors duration-200">
              <span className="font-mono text-[12px] text-copper-light mb-[22px] block">02</span>
              <h3 className="text-[21px] mb-[12px] leading-[1.25] font-serif text-cream-text">Conferences</h3>
              <p className="text-[14px] text-[#9AACA6] mb-[20px]">
                [CMS PLACEHOLDER] — describe conference planning, hosting or organising services offered.
              </p>
              <span className="text-[11px] font-mono text-copper-light uppercase tracking-[0.06em]">
                Verified service line
              </span>
            </div>
            <div className="bg-ink p-[34px_30px] hover:bg-ink-2 transition-colors duration-200">
              <span className="font-mono text-[12px] text-copper-light mb-[22px] block">03</span>
              <h3 className="text-[21px] mb-[12px] leading-[1.25] font-serif text-cream-text">Technical Services</h3>
              <p className="text-[14px] text-[#9AACA6] mb-[20px]">
                [CMS PLACEHOLDER] — describe the specific technical services provided to clients.
              </p>
              <span className="text-[11px] font-mono text-copper-light uppercase tracking-[0.06em]">
                Verified service line
              </span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn btn-outline-dark">
              View Detailed Service Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="bg-paper py-[100px]" id="programmes">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-slate mb-[16px]">Programmes</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              Leadership development programmes
            </h2>
          </div>
          <EmptyState
            title="No programmes published yet"
            description="Specific leadership training tracks, curricula and durations were not included on the registration certificate. Add real programme names and details here before launch."
            theme="light"
          />
        </div>
      </section>

      {/* MEDIA */}
      <section className="bg-paper-2 py-[100px]" id="media">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-slate mb-[16px]">Media</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              See the Academy in action
            </h2>
            <p className="text-muted-paper mt-[16px] text-[16px]">
              Real footage and photography from your seminars, conferences and training sessions belongs here — this player and gallery are wired up and ready.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
            <div>
              <VideoPlayer />
            </div>
            <div className="flex flex-col gap-6">
              <CmsGridSlot label="No seminar session photo has been supplied yet." className="flex-1 min-h-[160px]" />
              <CmsGridSlot label="No conference photo has been supplied yet." className="flex-1 min-h-[160px]" />
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-ink text-cream-text py-[100px]" id="events">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-copper-light mb-[16px]">Events</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              Upcoming seminars & conferences
            </h2>
          </div>
          <EmptyState
            title="No events scheduled yet"
            description="Upcoming seminars, symposiums and conferences will be published here once dates are confirmed."
            theme="dark"
          />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate text-cream-text py-[100px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-[#BFD6E3] mb-[16px]">Why work with us</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              Built on a registered, accountable foundation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-cream-text/15 border border-cream-text/15">
            <div className="bg-slate p-[32px_26px]">
              <div className="font-mono text-[12px] text-copper-light mb-[14px] uppercase tracking-[0.08em]">
                Registered
              </div>
              <h3 className="text-[19px] mb-2 font-serif text-cream-text">CAC Compliant</h3>
              <p className="text-[13px] text-[#D6E2E8]">
                Registered as a Business Name with the Corporate Affairs Commission — BN 2357164.
              </p>
            </div>
            <div className="bg-slate p-[32px_26px]">
              <div className="font-mono text-[12px] text-copper-light mb-[14px] uppercase tracking-[0.08em]">
                Since 2015
              </div>
              <h3 className="text-[19px] mb-2 font-serif text-cream-text">Established Track Record</h3>
              <p className="text-[13px] text-[#D6E2E8]">
                [CMS PLACEHOLDER] — add years of experience, sectors served or notable engagements.
              </p>
            </div>
            <div className="bg-slate p-[32px_26px]">
              <div className="font-mono text-[12px] text-copper-light mb-[14px] uppercase tracking-[0.08em]">
                Based in Rivers State
              </div>
              <h3 className="text-[19px] mb-2 font-serif text-cream-text">Local & Accessible</h3>
              <p className="text-[13px] text-[#D6E2E8]">
                Headquartered in Port Harcourt, positioned to serve organisations across the Niger Delta region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-paper py-[100px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-slate mb-[16px]">Clients & Partners</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              Organisations we have worked with
            </h2>
            <p className="text-muted-paper mt-[16px] text-[16px]">
              No client or partner list was supplied. Verified logos will appear here as relationships are confirmed.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-rule-paper border border-rule-paper mb-[34px]">
            <div className="bg-paper-2 h-[88px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-2.5">
              Client Logo
            </div>
            <div className="bg-paper-2 h-[88px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-2.5">
              Client Logo
            </div>
            <div className="bg-paper-2 h-[88px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-2.5">
              Partner Logo
            </div>
            <div className="bg-paper-2 h-[88px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-2.5">
              Partner Logo
            </div>
            <div className="bg-paper-2 h-[88px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-2.5">
              Client Logo
            </div>
          </div>
          <Link href="/contact" className="btn btn-copper">
            Become a Client Organisation
          </Link>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-paper-2 py-[100px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[640px] mb-[56px]">
            <span className="eyebrow text-slate mb-[16px]">Insights</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.12] font-serif">
              Articles & leadership perspectives
            </h2>
          </div>
          <div className="border border-rule-paper p-[50px_40px] text-center text-muted-paper bg-paper">
            <h4 className="font-serif text-ink-text text-[19px] mb-2 font-semibold">
              No articles published yet
            </h4>
            <p className="text-[14px]">
              Leadership insights and event recaps will appear here once the Academy begins publishing.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-copper text-[#1B0F05] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
            <div>
              <h2 className="text-[26px] md:text-[36px] font-serif leading-[1.15] text-[#1B0F05]">
                Get notified about upcoming seminars
              </h2>
              <p className="mt-[14px] text-[15px] text-[#1B0F05]/80 max-w-[40ch]">
                News on conferences, training dates and technical service offerings — sent occasionally.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-[14px]">
                <div className="flex gap-[10px]">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex-1 p-[14px_16px] border border-[#1B0F05]/35 bg-transparent text-[#1B0F05] text-[14px] placeholder:text-[#1B0F05]/55 focus:outline-none focus:border-[#1B0F05]"
                  />
                </div>
                <div className="flex gap-[10px]">
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="flex-1 p-[14px_16px] border border-[#1B0F05]/35 bg-transparent text-[#1B0F05] text-[14px] placeholder:text-[#1B0F05]/55 focus:outline-none focus:border-[#1B0F05]"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 my-1">
                  {["Seminars", "Conferences", "Technical Services"].map((tag) => {
                    const isSelected = activeTags.includes(tag);
                    return (
                      <span
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`text-[11px] padding-[6px_12px] px-3 py-1.5 border border-[#1B0F05]/35 rounded-[20px] cursor-pointer user-select-none transition-all duration-150 ${
                          isSelected
                            ? "bg-[#1B0F05] text-copper-light border-[#1B0F05]"
                            : "hover:bg-[#1B0F05]/5"
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-dark border-[#1B0F05] text-[#1B0F05] hover:bg-[#1B0F05]/5 align-self-start self-start"
                >
                  Subscribe
                </button>
                {newsletterSubmitted && (
                  <div className="text-[12px] font-semibold text-[#1B0F05] mt-[6px]">
                    Thank you — you&apos;re on the list.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-paper text-center py-[100px]" id="contact">
        <div className="max-w-[1200px] mx-auto px-8">
          <span className="eyebrow text-slate mb-[20px] inline-flex">
            Get in touch
          </span>
          <h2 className="text-[30px] md:text-[46px] font-serif max-w-[18ch] mx-auto mb-[22px] leading-tight">
            Book a seminar, conference or technical service enquiry
          </h2>
          <div className="flex gap-4 justify-center flex-wrap mt-[10px]">
            <Link href="/contact" className="btn btn-copper">
              [CMS Placeholder — add email]
            </Link>
            <Link href="/contact" className="btn btn-outline-ink">
              [CMS Placeholder — add phone]
            </Link>
          </div>
          <div className="inline-flex items-center gap-[8px] mt-[26px] font-mono text-[11px] text-copper uppercase tracking-[0.06em] border border-dashed border-rule-paper px-[10px] py-[6px]">
            No email or phone number was supplied on the registration certificate — add real contact details
          </div>
        </div>
      </section>
    </div>
  );
}
