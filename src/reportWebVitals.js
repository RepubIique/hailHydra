import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

// web-vitals v4+ replaced the getXXX/onFID API with onXXX and dropped FID
// (INP replaces it).
const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        onCLS(onPerfEntry)
        onINP(onPerfEntry)
        onFCP(onPerfEntry)
        onLCP(onPerfEntry)
        onTTFB(onPerfEntry)
    }
}

export default reportWebVitals
