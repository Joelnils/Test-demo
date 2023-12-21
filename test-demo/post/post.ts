export function validatePost(zip: string): boolean {
    return zip.length === 5 && /^[0-9]+$/.test(zip);
}