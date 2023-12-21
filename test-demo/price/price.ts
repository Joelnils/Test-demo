// roundPrice.ts
export function roundPrice(price?: number, format: string = '%PRICE% SEK'): string {
    const safePrice = price !== undefined ? price : 0;
    const roundedPrice = (Math.ceil(safePrice * 100) / 100).toFixed(2);
    return format.replace('%PRICE%', roundedPrice);
}
