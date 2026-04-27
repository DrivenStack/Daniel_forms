/**
 * productOverrides.js
 * Shared utility for reading/writing product overrides stored by the Admin panel.
 *
 * Storage key structure:
 *   perrem_overrides_bathroom  →  { [styleKey]: { [stepKey]: { [sectionTitle]: { [optionName]: OverrideObject } } } }
 *   perrem_overrides_kitchen   →  { [styleKey]: { [stepKey]: { [sectionKey]:   { [optionVal]:  OverrideObject } } } }
 *
 * OverrideObject:
 *   { name, brand, detail, supplierLink, imgUrl }   (bathroom)
 *   { val, sub, supplierLink, imgUrl }               (kitchen)
 *
 * All fields are optional — only overridden fields are stored.
 */

const KEYS = {
  bathroom: 'perrem_overrides_bathroom',
  kitchen: 'perrem_overrides_kitchen',
};

export function loadOverrides(portal) {
  try {
    const raw = localStorage.getItem(KEYS[portal]);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveOverrides(portal, data) {
  try {
    localStorage.setItem(KEYS[portal], JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function clearOverrides(portal) {
  localStorage.removeItem(KEYS[portal]);
}

/**
 * applyBathroomOverrides
 * Takes the STYLES object from Bathroom.js and returns a deep-merged copy
 * with any admin overrides applied.
 */
export function applyBathroomOverrides(STYLES) {
  const overrides = loadOverrides('bathroom');
  if (!Object.keys(overrides).length) return STYLES;

  const merged = JSON.parse(JSON.stringify(STYLES));

  for (const [styleKey, steps] of Object.entries(overrides)) {
    if (!merged[styleKey]) continue;
    for (const [stepKey, sections] of Object.entries(steps)) {
      if (!merged[styleKey][stepKey]?.sections) continue;
      for (const [sectionTitle, opts] of Object.entries(sections)) {
        const section = merged[styleKey][stepKey].sections.find(
          (s) => s.title === sectionTitle
        );
        if (!section) continue;
        for (const [optName, override] of Object.entries(opts)) {
          const opt = section.opts.find((o) => o.name === optName);
          if (!opt) continue;
          Object.assign(opt, {
            ...(override.name && { name: override.name }),
            ...(override.brand && { brand: override.brand }),
            ...(override.detail && { detail: override.detail }),
            ...(override.imgUrl && { img: override.imgUrl }),
            ...(override.supplierLink && { supplierLink: override.supplierLink }),
          });
        }
      }
    }
  }
  return merged;
}

/**
 * applyKitchenOverrides
 * Takes the STYLE_CONTENT object from Kitchen.js and returns a deep-merged copy.
 */
export function applyKitchenOverrides(STYLE_CONTENT) {
  const overrides = loadOverrides('kitchen');
  if (!Object.keys(overrides).length) return STYLE_CONTENT;

  const merged = JSON.parse(JSON.stringify(STYLE_CONTENT));

  for (const [styleKey, steps] of Object.entries(overrides)) {
    if (!merged[styleKey]) continue;
    for (const [stepKey, sections] of Object.entries(steps)) {
      if (!merged[styleKey][stepKey]) continue;
      for (const [sectionKey, opts] of Object.entries(sections)) {
        const arr = merged[styleKey][stepKey][sectionKey];
        if (!Array.isArray(arr)) continue;
        for (const [optVal, override] of Object.entries(opts)) {
          const opt = arr.find((o) => o.val === optVal);
          if (!opt) continue;
          Object.assign(opt, {
            ...(override.val && { val: override.val }),
            ...(override.sub && { sub: override.sub }),
            ...(override.imgUrl && { img: override.imgUrl }),
            ...(override.supplierLink && { supplierLink: override.supplierLink }),
          });
        }
      }
    }
  }
  return merged;
}