export function MakeaHeading(text: string, level: number): string{
    return `<h${level}>${text}</h${level}>`;
}