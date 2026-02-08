import { generateBaseHSL, generatePalette } from './colorGenerator'
import './ColorGrid.css'

export function ColorGrid() {
    const baseColor = generateBaseHSL()
    const palette = generatePalette(baseColor)

    // save palette locally for chrome pop-up information
    chrome.storage.local.set({ palette });
    
    const { primary, secondary, accent } = palette
    return (
        <div className="grid-container">
            <div className="box box-1" style={{ backgroundColor: primary }}></div>
            <div className="box box-2" style={{ backgroundColor: secondary }}></div>
            <div className="box box-3" style={{ backgroundColor: accent }}></div>
        </div>
    )
}