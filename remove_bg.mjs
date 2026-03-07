import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function main() {
    console.log("Starting background removal on newly generated hypercar...");
    try {
        const imagePath = path.resolve('public/assets/dark_hypercar_doors_open.png');
        console.log(`Processing ${imagePath}...`);

        let blob;
        // The node API prefers a generic URL format for robust file loading
        if (process.platform === 'win32') {
            blob = await removeBackground(`file:///${imagePath.replace(/\\/g, '/')}`);
        } else {
            blob = await removeBackground(`file://${imagePath}`);
        }

        const buffer = Buffer.from(await blob.arrayBuffer());
        const outPath = 'public/assets/about_car_animated_transparent.png';
        fs.writeFileSync(outPath, buffer);
        console.log(`Background removal successful! Saved to ${outPath}`);
    } catch (e) {
        console.error("Error removing background:", e);
    }
}
main();
