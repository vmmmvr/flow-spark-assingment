export const missingProperties = { placeholder:undefined,  onPointerEnterCapture: undefined, onPointerLeaveCapture: undefined }


export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}