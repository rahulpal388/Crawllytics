"use client";

import type { CreateProjectRequestType } from "@repo/contracts/apiContracts/project/project.request";
import { Button } from "@repo/ui/components/button";
import { Dialog } from "@repo/ui/components/overlay/dialog";
import { Input } from "@repo/ui/components/input";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import z from "zod";
import { createProject } from "../../api/projects.api";
import { useModalStore } from "../../store/modalStore";
import { useProjectsStore } from "../../store/projectsStore";

type FormValues = {
  projectName: string;
  domain: string;
};

const createProjectFormSchema = z.object({
  projectName: z.string().trim().min(1, "Project name is required").max(100),
  domain: z
    .string()
    .trim()
    .url("Enter a valid website URL")
    .refine((value) => {
      const url = new URL(value);
      return /^https?:$/.test(url.protocol) && url.pathname === "/" && !url.search && !url.hash;
    }, "Use an http(s) domain without a path or query parameters"),
});

export function CreateProjectDialog() {
  const closeModal = useModalStore((state) => state.closeModal);
  const addProject = useProjectsStore((state) => state.addProject);
  const nameRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<FormValues>({ projectName: "", domain: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, isSubmitting]);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setFormError(null);

    const result = createProjectFormSchema.safeParse({
      projectName: values.projectName,
      domain: values.domain,
    });

    if (!result.success) {
      const nextErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if ((field === "projectName" || field === "domain") && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: CreateProjectRequestType = {
        ...result.data,
        projectSetting: {
          sendReport: true,
          reportType: "pdf",
          robotsTxtUrls: "/robots.txt",
          siteMapUrls: ["/sitemap.xml"],
          userAgent: "CrawllyticsBot/1.0",
          crawlLimit: { type: "pages", value: 10 },
        },
      };
      const response = await createProject(payload);
      addProject({
        projectId: response.projectId,
        projectName: payload.projectName,
        projectUrl: payload.domain,
      });
      setValues({ projectName: "", domain: "" });
      closeModal();
    } catch {
      setFormError("Project creation failed. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      onClose={() => {
        if (!isSubmitting) closeModal();
      }}
      className="w-[min(32rem,calc(100vw-2rem))]"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="heading-4">Create a new project</h2>
            <p className="caption mt-1">
              Add a website to start collecting crawl and SEO insights.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close create project dialog"
            disabled={isSubmitting}
            onClick={closeModal}
            className="rounded-xs p-1 text-text-secondary transition-colors hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="project-name" className="text-sm font-medium">
              Project name
            </label>
            <Input
              ref={nameRef}
              id="project-name"
              value={values.projectName}
              onChange={(event) => updateValue("projectName", event.target.value)}
              placeholder="e.g. Crawllytics"
              aria-invalid={Boolean(errors.projectName)}
              aria-describedby={errors.projectName ? "project-name-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.projectName && (
              <p id="project-name-error" className="text-error text-xs">
                {errors.projectName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="project-domain" className="text-sm font-medium">
              Website URL
            </label>
            <Input
              id="project-domain"
              type="url"
              value={values.domain}
              onChange={(event) => updateValue("domain", event.target.value)}
              placeholder="https://example.com"
              aria-invalid={Boolean(errors.domain)}
              aria-describedby={errors.domain ? "project-domain-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.domain && (
              <p id="project-domain-error" className="text-error text-xs">
                {errors.domain}
              </p>
            )}
          </div>

          <p className="caption-xs">
            Default crawl settings will be applied. Advanced configuration can be
            added when the project settings experience is available.
          </p>

          {formError && <p className="text-error text-sm">{formError}</p>}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create project"}
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
