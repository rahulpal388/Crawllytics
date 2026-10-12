



export function getDirectives(directives: string[]): Set<string> {
    return new Set(
        directives
            .flatMap(directive =>
                directive.toLowerCase().split(/[,\s]+/)
            )
            .filter(Boolean)
    );
}