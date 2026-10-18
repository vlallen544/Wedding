import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function SectionScrollHint({ target, label = 'Slide down to continue' }) {
  const content = (
    <>
      <span>{label}</span>
      <ChevronDown size={15} aria-hidden="true" />
    </>
  );

  if (!target) {
    return <div className="section-scroll-hint">{content}</div>;
  }

  return (
    <a className="section-scroll-hint" href={`#${target}`}>
      {content}
    </a>
  );
}
