"use client";

import { useEffect, useState } from "react";
import type { CodeSnippetType } from "@repo/contract/types/apiResponseType/issuesTypes";
import { codeToHtml } from "shiki";
import { Button } from "@repo/ui/components/button";
import { Clipboard } from "lucide-react";

export function CodeSnippet({ language, code }: CodeSnippetType) {
  const [highlightedCode, setHighlightedCode] = useState("");

  const onCopy = () => {
    navigator.clipboard.writeText(code);
  };

  useEffect(() => {
    let cancelled = false;

    async function highlight() {
      const html = await codeToHtml(code, {
        lang: language,
        theme: "github-dark",
        defaultColor: false,
      });

      if (!cancelled) {
        setHighlightedCode(html);
      }
    }

    highlight();

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  return (
    <div className="code-snippet">
      <div className="code-snippet-header">
        <span>{language}</span>

        <Button variant="ghost" size="sm" onClick={onCopy}>
          <Clipboard size={20} className="stroke-white" />
        </Button>
      </div>

      <div className="code-snippet-content">
        {highlightedCode ? (
          <div
            dangerouslySetInnerHTML={{
              __html: highlightedCode,
            }}
          />
        ) : (
          <pre>
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
