import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ElementPlus()
    ],
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                sanitizeFileName: (fileName) => {
                    const match = DRIVE_LETTER_REGEX.exec(fileName);
                    const driveLetter = match ? match[0] : "";
                    return (
                        driveLetter +
                        fileName.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                    );
                },
            },
        },
    },
})
