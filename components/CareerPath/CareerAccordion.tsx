"use client";

import { useState } from "react";
import { careerData, CareerStep } from "@/data/careerData";
import clsx from "clsx";

export default function CareerAccordion() {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveStepIndex((prev) => (prev === index ? null : index));
  };

  const setStepData = (index: number) => {
    // Only allow hover to set state on desktop (md breakpoint is 768px in Tailwind)
    if (window.innerWidth >= 768) {
      setActiveStepIndex(index);
    }
  };

  return (
    <section className="bg-[#0c0c0c] py-15 px-5 max-w-300 mx-auto text-white relative z-20">
      <div className="flex flex-col gap-4">
        {/* Title removed from here as it seems to be duplicated or handled by CSS class .path-title in styles.css which was positioned absolutely?
            In original HTML: <h2 class="path-title">Path to Your Tech Future</h2> was outside the accordion wrapper but inside the section. 
            I will render it here.
        */}
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.2] tracking-[-0.01em] text-center text-white -mt-32 mb-12 relative z-10 pointer-events-none">
          Path to Your Tech Future
        </h2>

        <div className="flex flex-col gap-4">
          {careerData.map((step, index) => (
            <CareerStepItem
              key={index}
              step={step}
              isActive={activeStepIndex === index}
              onToggle={() => toggleStep(index)}
              onHover={() => setStepData(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerStepItem({
  step,
  isActive,
  onToggle,
  onHover,
}: {
  step: CareerStep;
  isActive: boolean;
  onToggle: () => void;
  onHover: () => void;
}) {
  const [activeTabId, setActiveTabId] = useState<string>(step.tabs[0].id);
  const [activeMobileTabId, setActiveMobileTabId] = useState<string | null>(
    null
  );

  // When step opens, ensure we have a default tab? default is set in state init.

  const handleMobileTabToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // prevent closing the main accordion if clicking here
    setActiveMobileTabId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={clsx(
        "bg-white/3 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5",
        isActive && "bg-white/8 border-white/20"
      )}
      onMouseEnter={onHover}
    >
      <div
        className="flex items-center p-6 sm:p-8 cursor-pointer justify-between gap-4 relative"
        onClick={onToggle}
      >
        <div className="shrink-0 pt-1">
          <div className="w-6 h-6">
            {/* Using img tag for external URL to avoid config requirements for now */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={step.icon}
              width={24}
              height={24}
              alt=""
              className="brightness-0 invert w-6 h-6"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 px-4 sm:mr-6">
          <h2 className="text-[clamp(1.1rem,3vw,1.4rem)] font-semibold text-white mb-1">
            {step.title}
          </h2>
          <p className="text-[0.95rem] text-white/60 leading-[1.4] m-0">
            {step.description}
          </p>
        </div>

        <div className="absolute right-5 top-6 sm:static sm:block">
          <div
            className={clsx(
              "transition-transform duration-300 w-3.5",
              isActive && "rotate-180"
            )}
          >
            {/* Using img for arrow as in original */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://pgc.edu/wp-content/themes/pgc-new/images/ics-landing-page-2024/drop-down-icon.png"
              width={14}
              height={8}
              alt="arrow"
              className="brightness-0 invert w-3.5"
            />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "grid transition-[grid-template-rows] duration-500 ease-in-out",
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden min-h-0">
          <div className="border-t border-white/10 px-8 pb-8 mt-4 pt-8">
            <div className="mt-6">
              <h3 className="text-[0.9rem] uppercase tracking-[1px] text-white/50 mb-4">
                Professional Roles
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {step.roles.map((role) => (
                  <span
                    key={role}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-[0.9rem] transition-colors hover:bg-white/20 cursor-default"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs block */}
            <div>
              {/* Desktop Tabs Header */}
              <ul className="hidden md:flex list-none p-0 m-0 mb-6 border-b border-white/10 overflow-x-auto">
                {step.tabs.map((tab) => (
                  <li key={tab.id} className="mr-8 shrink-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveTabId(tab.id);
                      }}
                      className={clsx(
                        "text-white/50 pb-4 block font-medium border-b-2 border-transparent transition-all duration-300 hover:text-white bg-transparent cursor-pointer",
                        activeTabId === tab.id && "text-white! border-white!"
                      )}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab Content (Desktop & Mobile Mixed Logic) */}
              <div className="block">
                {step.tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={clsx(
                      activeTabId === tab.id ? "md:block" : "md:hidden" // Desktop toggle logic
                    )}
                  >
                    {/* Mobile Accordion Opener */}
                    <a
                      href="#"
                      onClick={(e) => handleMobileTabToggle(tab.id, e)}
                      className={clsx(
                        "flex md:hidden justify-between items-center bg-white/5 p-4 rounded-lg text-white no-underline font-medium text-[0.95rem] transition-colors mb-2",
                        activeMobileTabId === tab.id &&
                          "bg-white/10 rounded-b-none mb-0"
                      )}
                    >
                      {tab.label}
                      <span className="text-[1.2rem] text-white/50">
                        {activeMobileTabId === tab.id ? "−" : "+"}
                      </span>
                    </a>

                    {/* Content Details */}
                    <div
                      className={clsx(
                        "md:block", // Always visible in desktop if parent div is visible
                        activeMobileTabId === tab.id
                          ? "block p-4 bg-white/2 rounded-b-lg mb-2"
                          : "hidden md:p-0 md:bg-transparent md:mb-0"
                      )}
                    >
                      <ul className="list-none p-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                        {tab.content.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center text-white/80 before:content-['•'] before:text-[#a855f7] before:mr-2 before:text-[1.5rem] before:leading-none"
                          >
                            {typeof item === "string" ? (
                              item
                            ) : (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-inherit no-underline border-b border-white/20 transition-colors hover:border-white hover:text-white"
                              >
                                {item.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
