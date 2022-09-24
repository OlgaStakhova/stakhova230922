export const createRandom = (min: number, max: number) => {
    return Number((Math.random() * (max - 1 - min + 1) + min).toFixed(1));
}