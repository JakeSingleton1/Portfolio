"use client";

import { Button } from "@/once-ui/components";
import { resume, about } from "@/app/resources/content";

export function ResumeButton() {
  // Link to the resume section on the about page
  const resumeUrl = `/about#${about.resume.title}`;

  return (
    <Button
      id="resume-button"
      href={resumeUrl}
      variant="primary"
      size="m"
      arrowIcon
    >
      {resume.ctaLabel}
    </Button>
  );
}
