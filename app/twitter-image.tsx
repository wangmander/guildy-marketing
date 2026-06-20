// Twitter card reuses the same 1200x630 generator as the OpenGraph image.
// runtime/size/contentType are declared as literals here (Next requires the
// `runtime` field to be a string literal, not a re-export).
export const runtime = "edge"
export const alt = "Guildy: Walk in ready"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export { default } from "./opengraph-image"
