

export type LanguageType = "tsx" | "jsx" | "html";

export type StackType = "next.js-app" | "next.js-page" | "react" | "html";


export type CodeSnippetType = {
    language: LanguageType;
    code: string;
};

export type StackFixType = {
    stack: StackType;
    label: string;
    description: string;
    code: CodeSnippetType;
};

export type HowToFixType = {
    description: string;
    fixes: StackFixType[];
};



export type SEORules<K extends string> = {
    ruleId: K;
    name: string;
    description: string;
    whyItMatters: string;
    recommendation: {
        description: string;
        steps: string[];
    };
    /*
    * Framework/code-level fix.
    * null when there is no meaningful code snippet.
    */
    howToFix: HowToFixType | null;

    /*
    * General/manual fix instructions.
    */
    fix: string;
}