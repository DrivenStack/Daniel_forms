import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadOverrides, saveOverrides, clearOverrides } from './ProductOverrides';
import './Admin.css';

// ─── Bathroom product catalogue (mirrors Bathroom.js STYLES, without images) ──
const BATHROOM_CATALOGUE = {
  scandi: {
    name: 'Scandi',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Angora Oak Woodmatt', 'White Melamine', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Alpine Matte', 'Alpine White', 'Other / Explore'] },
          { title: 'Mirror', opts: ['Pill Mirror 700×1100', 'Oval Mirror', 'Backlit Custom'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['X-Rock Natural White', 'X-Rock Light Grey', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['No Feature', 'Contrast Tile', 'Other / Custom'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['Milani Progressive Wall Mixer', 'Nixi Wall Mixer & Spout', 'Other / Explore'] },
          { title: 'Basin', opts: ['Celine Round 420mm', 'Kiva Semi-Insert 420mm', 'Other / Custom'] },
          { title: 'Mirror', opts: ['Mirrored Shaving Cabinet', 'Round Polished Edge 1200mm', 'Backlit Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Rail Shower', 'Overhead + Hand', 'Overhead Only'] },
        ],
      },
    },
  },
  hamptons: {
    name: 'Hamptons',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Painted Timber Cotton Touch', 'White Textured Painted', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Enchanted White 50mm Mitred', 'Enchanted White 20mm', 'Other / Explore'] },
          { title: 'Mirror', opts: ['Mirrored Shaving Cabinet', 'Round Polished Edge 1200mm', 'Backlit Custom'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['Carrara Bianco Matt', 'Carrara Bianco Gloss', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['No Feature', 'VJ150 Easycraft Panelling', 'Other / Custom'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['Poco Knurled Wall Mixer', 'Elysian Gooseneck Mixer', 'Other / Explore'] },
          { title: 'Basin', opts: ['Glory Undermount Matt White', 'Poco Semi-Inset', 'Other / Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Curve Rail & Hand Shower', 'Overhead Vertical + Hand', 'Overhead Only'] },
        ],
      },
    },
  },
  'classic-coastal': {
    name: 'Classic Coastal',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Natural Oak Ravine', 'White Melamine', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Alpine White 60mm Round Edge', 'Alpine White 20mm', 'Other / Explore'] },
          { title: 'Mirror', opts: ['Round Polished Edge 1200mm', 'Custom Backlit Mirror', 'Mirrored Cabinet'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['Cliffstone White Dover Lappata', 'Cliffstone Greige', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['VJ150 Easycraft Panelling', 'Easy Groove 150', 'No Feature'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['Poco Knurled Wall Mixer', 'Elysian Wall Mixer + Spout', 'Other / Explore'] },
          { title: 'Basin', opts: ['Celine Solid Surface 420mm', 'Undermount Basin', 'Other / Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Overhead Vertical + Hand', 'Shower on Rail', 'Overhead Only'] },
        ],
      },
    },
  },
  'contemporary-coastal': {
    name: 'Contemporary Coastal',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Cove 25 Classic White Matt', 'Smooth White Melamine', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Bianco Assoluto Matt', 'Alpine White Quartz', 'Other / Explore'] },
          { title: 'Mirror', opts: ['Custom Backlit 1430×1725', 'Standard Polished Edge', 'Oval / Pill Shape'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['Pietre 41 Scrambled Griege', 'Pietre 41 Light Grey', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['Pietre 41 Chevron Griege', 'Match Body Tile', 'Other / Custom'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['1TAP Progressive Wall Mixer', 'Nixi Wall Mixer & Spout', 'Other / Explore'] },
          { title: 'Basin', opts: ['Pride Semi-Inset 545×365', 'Celine Round 420mm', 'Other / Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Horizontal Overhead 1SHRO', 'Overhead + Hand Shower', 'Overhead Only'] },
        ],
      },
    },
  },
  'coral-house': {
    name: 'Coral House',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Clifton Prime Oak Woodmatt', 'Custom Timber V-Groove', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Cherry Pie Bright White', 'Custom Engineered Stone', 'Other / Explore'] },
          { title: 'Mirror', opts: ['ADP Arch Mirror 900×1050', 'Round Backlit Mirror', 'Custom Shape'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['Beren Light Grey 600×600', 'Beren Warm Greige', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['Beren Saw 300×900', 'VJ100 Easycraft Panelling', 'No Feature'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['Elysian Minimal Wall Mixer', 'Milli Minimal Wall Mixer', 'Other / Explore'] },
          { title: 'Basin', opts: ['Dignity Semi-Inset 420mm', 'Celine Round 420mm', 'Other / Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Dana Round 250mm + Hand', 'Phili Arm + Dana Head', 'Rail + Hand Shower'] },
        ],
      },
    },
  },
  'fifty-shades': {
    name: 'Fifty Shades',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Maison Oak Ravine', 'Dark Timber Veneer', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Pelle Grigio 20mm', 'Dark Grey Stone 20mm', 'Other / Explore'] },
          { title: 'Mirror', opts: ['Custom Polished Edge 900×1100', 'Backlit Custom Mirror', 'Oval or Arch Shape'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['Ivory Flow Natural 450×900', 'Ivory Flow Honed', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['No Feature', 'Contrast Format Tile', 'Other / Custom'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['Poco Knurled Wall Mixer', 'Nixi Wall Mixer & Spout', 'Other / Explore'] },
          { title: 'Basin', opts: ['Kiva Semi-Insert Matt White', 'Celine Round 420mm', 'Other / Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Horizontal Overhead 1SHRO', 'Overhead + Hand Shower', 'Overhead Only'] },
        ],
      },
    },
  },
  resort: {
    name: 'Resort',
    steps: {
      s4: {
        label: 'Step 4 — Vanity',
        sections: [
          { title: 'Cabinetry', opts: ['Stone Grey Matt', 'Warm Greige Matt', 'Fully Custom'] },
          { title: 'Benchtop', opts: ['Portland Grey Brushed Limestone', 'Pelle Grigio Engineered Stone', 'Other / Explore'] },
          { title: 'Mirror', opts: ['Custom Polished Edge 750×1100', 'Backlit Custom Mirror', 'Oval or Pill Shape'] },
        ],
      },
      s5: {
        label: 'Step 5 — Tiling',
        sections: [
          { title: 'Floor & Wall Tile', opts: ['Nextone Gray Natural 600×1200', 'Nextone Warm Grey', 'Other / Explore'] },
          { title: 'Feature Wall', opts: ['No Feature', 'Contrast Stone Tile', 'Other / Custom'] },
        ],
      },
      s6: {
        label: 'Step 6 — Tapware & Basin',
        sections: [
          { title: 'Tapware', opts: ['Round Curved Spout & Wall Mixer', 'Poco Knurled Wall Mixer', 'Other / Explore'] },
          { title: 'Basin', opts: ['Glory Matte White 545×355mm', 'Dignity Semi-Inset 420mm', 'Other / Custom'] },
        ],
      },
      s7: {
        label: 'Step 7 — Shower',
        sections: [
          { title: 'Shower Head', opts: ['Round Wall Shower 200mm', 'Overhead + Diverter + Hand', 'Overhead Only'] },
        ],
      },
    },
  },
};

// ─── Kitchen product catalogue (mirrors STYLE_CONTENT keys in Kitchen.js) ────
const KITCHEN_CATALOGUE = {
  'Warm Japandi': {
    steps: {
      s4: {
        label: 'Step 4 — Cabinetry & Benchtops',
        sections: {
          door: ['Flat / Slab Door', 'Rattan Insert Panel', 'Open to Advice'],
          cabinet: ['Florentine Walnut (Polytec Woodmatt)', 'Notaio Walnut (Polytec Woodmatt)', 'Walnut Crown Cut (George Fethers)', 'Oak with Clear Stain (Farmers Doors)', 'Open to Advice'],
          benchtop: ['Morocca — Stone Ambassador Vasari', 'Savoy Ivory — Stone Ambassador Vasari', 'Haze Ivory — Stone Ambassador Vasari', 'Nacre Dekton — Cosentino', 'Taj Mahal Quartzite — CDK Stone', 'Open to Advice'],
        },
      },
      s5: {
        label: 'Step 5 — Splashback & Floor',
        sections: {
          splashback: ['Kayoborder 87288 — Academy Tiles', 'Houston Amber — Perini Tiles', 'Houston Vanilla — Perini Tiles', '245J Hanten Sugie — Artedomus', 'Memphis Travertine Dune — Perini', 'Benchtop stone extended to wall', 'Open to Advice'],
          flooring: ['Chestnut — Made by Storey', 'Nutmeg — Made by Storey', 'Walnut — George Fethers Maison', 'Nacre Dekton — Cosentino', 'Foster Beige 600x600 — Perini Tiles', 'Khaki Jam — Fibonacci Terrazzo', 'Open to Advice'],
        },
      },
      s6: {
        label: 'Step 6 — Tapware & Sinks',
        sections: {
          tapware: ['Gooseneck Square Mixer Gunmetal — Reece Mizu Drift', 'Gooseneck Curve Mixer Gunmetal — Reece Mizu Drift', 'Blix Flexible Hose Mixer Brushed Carbon — Phoenix', 'Round Piccola Pull-Out Champagne — Meir', 'Open to Advice'],
          sinks: ['Lavello Single + Drain Gunmetal — Meir', 'Lavello Double + Drain Brushed Nickel — Meir', 'Sonetto Double Universal — Oliveri', 'Double Bowl Brushed Nickel — Meir', 'Open to Advice'],
        },
      },
      s7: {
        label: 'Step 7 — Hardware & Lighting',
        sections: {
          hardware: ['Chicama Thin Wave 256mm Walnut — Touch Handles', 'Timber Dished Semi Round — Touch Handles', 'Cadello Crest Timber Ebony — Touch Handles', 'Leo Timber Knob Spotted Gum — Touch Handles', 'Bevelled Edge Finger Pull', 'Open to Advice'],
          pendants: ['Bubble Lamps — George Nelson / Living Edge', 'July 1 Round Textured Chalk — Beacon', 'Calido Flare — Beacon Lighting', 'Tapa Pendant Bone — Robert Gordon', '2BY4 LED Linear Walnut — About Space', 'Open to Advice'],
          walls: ['Apparition — Dulux', 'Beige Royal Quarter — Dulux', 'Natural White — Dulux', 'Clay Pipe — Dulux', 'Open to Advice'],
          panels: ['Bone Limewash — Bauwerk Colour', 'Calm Limewash — Bauwerk Colour', 'Still Limewash — Bauwerk Colour', 'No feature wall lining', 'Open to Advice'],
        },
      },
    },
  },
  'Timeless Ease': {
    steps: {
      s4: {
        label: 'Step 4 — Cabinetry & Benchtops',
        sections: {
          door: ['Sussex Shaker — Polytec', 'Calcutta 35 Profile — Polytec', 'Flat / Slab Door', 'Open to Advice'],
          cabinet: ['Raw Cotton Natural — Laminex', 'Gossamer White Smooth — Polytec', 'Paperbark Absolute Matte — Laminex', 'Coastal Oak Woodmatt — Polytec', 'Open to Advice'],
          benchtop: ['Statuario Maximus — Caesarstone', 'Calacatta Nuvo — Caesarstone', 'Cloudburst Concrete — Caesarstone', 'White Truffle Zenith — Stone Ambassador', 'Open to Advice'],
        },
      },
      s5: {
        label: 'Step 5 — Splashback & Floor',
        sections: {
          splashback: ['Tully Heads Carrara Herringbone — Tile Cloud', 'Mallorca Subway Matt White — Porcelain RMS', 'Japanese Impressions Snow — National Tiles', 'Open to Advice'],
          flooring: ['Gosford — Havwoods Pure Plank', 'Mosman Herringbone — Havwoods V Collection', 'Verona Crema Matt 600x600 — National Tiles', 'Paddington White Terrazzo — Tile Cloud', 'Open to Advice'],
        },
      },
      s6: {
        label: 'Step 6 — Tapware & Sinks',
        sections: {
          tapware: ['Namika Kitchen Mixer Brushed Brass — ABI Interiors', 'Elysian Mixer Brushed Brass — ABI Interiors', 'Elysian Commercial Pull-Out Brushed Brass — ABI', 'Sussex Scala Oyster Nickel — Reece', 'Open to Advice'],
          sinks: ['Lavello Single + Drain — Meir', 'Andano 400-400-IF Undermount — Blanco', 'Sonetto Double Universal — Oliveri', 'Open to Advice'],
        },
      },
      s7: {
        label: 'Step 7 — Hardware & Lighting',
        sections: {
          hardware: ['Brera Handle Aged Brass — Lo & Co', 'Isla Pull XL Aged Brass — Lo & Co', 'Sphere Knob Aged Brass — Lo & Co', 'Imogen Oval Pull Aged Brass — Manovella', 'Open to Advice'],
          pendants: ['July 1 Round Textured Chalk — Beacon', 'Tapa Pendant Bone — Robert Gordon', 'Masson Bianco Ribbed Wall Sconce — Beacon', 'Ballare 600mm Pendant Gypsum — Beacon', 'Open to Advice'],
          walls: ['Antique White USA — Dulux', 'Natural White — Dulux', 'Lexicon Quarter — Dulux', 'Bone Limewash — Bauwerk Colour', 'Open to Advice'],
          panels: ['No feature wall lining', 'EasyVJ100 — EasyCraft', 'Surround Heritage — Laminex', 'Open to Advice'],
        },
      },
    },
  },
  'Light & Airy': {
    steps: {
      s4: {
        label: 'Step 4 — Cabinetry & Benchtops',
        sections: {
          door: ['Gossamer White Smooth — Polytec', 'Aston White Smooth — Polytec', 'Aluminium Framed Clear Glass Insert — Polytec', 'Aluminium Framed Fluted Glass — Polytec', 'Open to Advice'],
          cabinet: ['Gossamer White Smooth — Polytec', 'Aston White Smooth — Polytec', 'Blossom White Smooth — Polytec', 'Dulux Casper White Quarter — Painted', 'Open to Advice'],
          benchtop: ['Cosmopolitan White — Caesarstone', 'Brillianza — Caesarstone', 'Cloudburst Concrete — Caesarstone', 'White Truffle Zenith — Stone Ambassador', 'Open to Advice'],
        },
      },
      s5: {
        label: 'Step 5 — Splashback & Floor',
        sections: {
          splashback: ['Coral Bay Gloss White Fish Scale — Tile Cloud', 'Whoosh White Matt — National Tiles', 'Resort White Matt — National Tiles', 'Mallorca Subway Matt White — Porcelain RMS', 'Benchtop stone extended to wall', 'Open to Advice'],
          flooring: ['Copenhagen White — Woodcut Grande Ville', 'Sea Salt — Woodcut', 'Paddington White Terrazzo — Tile Cloud', 'Stirling White Terrazzo — Tile Cloud', 'Sydney Matt White Stone Look — Tile Cloud', 'Open to Advice'],
        },
      },
      s6: {
        label: 'Step 6 — Tapware & Sinks',
        sections: {
          tapware: ['Elysian Mixer Brushed Nickel — ABI Interiors', 'Cross Assembly Bench Mount White — ABI', 'Eden Square Mixer Brushed Nickel — ABI', 'Nuage Pull-Out Mixer White — Phoenix', 'Gooseneck with Paddle Handle — Meir', 'Open to Advice'],
          sinks: ['Andano 400-400-IF Undermount — Blanco', 'Claron 700U Single Bowl — Blanco', 'Vienna Single 630 White Granite — ABI', 'Sonetto Single Topmount — Oliveri', 'Open to Advice'],
        },
      },
      s7: {
        label: 'Step 7 — Hardware & Lighting',
        sections: {
          hardware: ['Carlisle Pull White — Lo & Co', 'Tango Knob White — Linear Standard', 'Strand White Handle — Linear Standard', 'Riss Big D Matt White — Momo Handles', 'Bevelled Edge Finger Pull', 'Open to Advice'],
          pendants: ['Crescent LED Surface Mounted Downlight White — Beacon', 'Mila GU10 Round Surface Mount White — Beacon', 'Dome Pendant Okina Cream — Lighting Collective', 'Dome Pendant Stone — Lighting Collective', 'Open to Advice'],
          walls: ['Lexicon Quarter — Dulux', 'Vivid White — Dulux', 'Natural White — Dulux', 'Limed White Quarter — Dulux', 'Open to Advice'],
          panels: ['No feature wall lining', 'Chalk Limewash — Bauwerk Colour', 'EasyVJ100 — EasyCraft', 'Open to Advice'],
        },
      },
    },
  },
  'Coastal Natural': {
    steps: {
      s4: {
        label: 'Step 4 — Cabinetry & Benchtops',
        sections: {
          door: ['Sussex Shaker — Polytec (White or Sage Green)', 'Gossamer White Smooth — Polytec', 'Slimlined Natural Oak — Farmers Doors', 'Rattan Panel Insert', 'Open to Advice'],
          cabinet: ['Gossamer White Smooth — Polytec', 'Blossom White Smooth — Polytec', 'Paperbark Absolute Matte — Laminex', 'Sage Green Painted (Dulux Waitangi)', 'Open to Advice'],
          benchtop: ['Cosmopolitan White — Caesarstone', 'Cloudburst Concrete — Caesarstone', 'White Truffle Zenith — Stone Ambassador', 'Crema Perla Honed — Artedomus', 'Open to Advice'],
        },
      },
      s5: {
        label: 'Step 5 — Splashback & Floor',
        sections: {
          splashback: ['Coral Bay Gloss White Fish Scale — Tile Cloud', 'Tully Heads Carrara Herringbone — Tile Cloud', 'Japanese Impressions Snow — National Tiles', 'Yubi White Speckle Matt — Perini Tiles', 'Mallorca Subway Matt White — Porcelain RMS', 'Benchtop stone extended to wall', 'Open to Advice'],
          flooring: ['Aspen Raw 19mm Character — Havwoods', 'Sea Salt — Woodcut', 'Cloud — Made by Storey', 'Pale Oak — Woodcut', 'Paddington White Terrazzo 600x600 — Tile Cloud', 'Stirling White Terrazzo 600x600 — Tile Cloud', 'Open to Advice'],
        },
      },
      s6: {
        label: 'Step 6 — Tapware & Sinks',
        sections: {
          tapware: ['Namika Kitchen Mixer Brushed Brass — ABI', 'Elysian Mixer Brushed Brass — ABI Interiors', 'Round Piccola Pull-Out Champagne — Meir', 'Oasis Kitchen Mixer Brushed Nickel — Highgrove', 'Open to Advice'],
          sinks: ['Lavello Single + Drain Gunmetal — Meir', 'Lavello Double + Drain Brushed Nickel — Meir', 'Clark Monaco Double Undermount — Turner Hastings', 'Andano 400-400-IF Undermount — Blanco', 'Open to Advice'],
        },
      },
      s7: {
        label: 'Step 7 — Hardware & Lighting',
        sections: {
          hardware: ['Dot Travertine Handle Small — Lo & Co', 'Arc Travertine Handle — Lo & Co', 'Flow Bow Handle Natural Brass — Touch Handles', 'Imogen Oval Pull Aged Brass — Manovella', 'Open to Advice'],
          pendants: ['Rattan Dome Pendant (Natural unbleached)', 'Calido Flare — Beacon Lighting', 'Calido Tier in Raffia — Beacon Lighting', 'Tapa Pendant Bone — Robert Gordon', 'Open to Advice'],
          walls: ['Lexicon Quarter — Dulux', 'Narrow Neck Quarter — Dulux', 'Snow Season — Dulux', 'Chalk Limewash — Bauwerk Colour', 'Open to Advice'],
          panels: ['No feature wall lining', 'EasyVJ100 — EasyCraft', 'Open to Advice'],
        },
      },
    },
  },
};

// ─── Field definitions per portal ────────────────────────────────────────────
const BATHROOM_FIELDS = [
  { key: 'name', label: 'Product Name', type: 'text', placeholder: 'e.g. Alpine Matte' },
  { key: 'brand', label: 'Brand / Supplier', type: 'text', placeholder: 'e.g. WK Quantum Quartz' },
  { key: 'detail', label: 'Description', type: 'textarea', placeholder: '20mm arrised edge · soft white matte finish' },
  { key: 'imgUrl', label: 'Image URL', type: 'url', placeholder: 'https://... (replaces imported image)' },
  { key: 'supplierLink', label: 'Supplier Link', type: 'url', placeholder: 'https://supplier.com/product' },
];

const KITCHEN_FIELDS = [
  { key: 'val', label: 'Product Name', type: 'text', placeholder: 'e.g. Morocca — Stone Ambassador Vasari' },
  { key: 'sub', label: 'Description', type: 'text', placeholder: 'Earthy veining — the signature Japandi benchtop' },
  { key: 'imgUrl', label: 'Image URL', type: 'url', placeholder: 'https://... (replaces imported image)' },
  { key: 'supplierLink', label: 'Supplier Link', type: 'url', placeholder: 'https://supplier.com/product' },
];

// ─────────────────────────────────────────────────────────────────────────────

function Admin() {
  const navigate = useNavigate();
  const [portal, setPortal] = useState('bathroom');
  const [overrides, setOverrides] = useState({ bathroom: {}, kitchen: {} });
  const [activeStyle, setActiveStyle] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const [editTarget, setEditTarget] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [toast, setToast] = useState(null);
  const [confirmClear, setConfirmClear] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setOverrides({
      bathroom: loadOverrides('bathroom'),
      kitchen: loadOverrides('kitchen'),
    });
  }, []);

  const showToast = useCallback((msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  }, []);

  const catalogue = portal === 'bathroom' ? BATHROOM_CATALOGUE : KITCHEN_CATALOGUE;
  const fields = portal === 'bathroom' ? BATHROOM_FIELDS : KITCHEN_FIELDS;

  const styleKeys = Object.keys(catalogue);
  const currentStyle = activeStyle && catalogue[activeStyle];

  const stepKeys = currentStyle ? Object.keys(currentStyle.steps) : [];
  const currentStep = activeStep && currentStyle ? currentStyle.steps[activeStep] : null;

  const getOverride = (styleKey, stepKey, sectionKey, optKey) => {
    return overrides[portal]?.[styleKey]?.[stepKey]?.[sectionKey]?.[optKey] || {};
  };

  const hasOverride = (styleKey, stepKey, sectionKey, optKey) => {
    const o = getOverride(styleKey, stepKey, sectionKey, optKey);
    return Object.keys(o).length > 0;
  };

  const openEdit = (styleKey, stepKey, sectionKey, optKey) => {
    const existing = getOverride(styleKey, stepKey, sectionKey, optKey);
    setEditTarget({ styleKey, stepKey, sectionKey, optKey });
    setEditValues({ ...existing });
  };

  const saveEdit = () => {
    const { styleKey, stepKey, sectionKey, optKey } = editTarget;
    const cleaned = Object.fromEntries(
      Object.entries(editValues).filter(([, v]) => v && v.trim())
    );
    setOverrides(prev => {
      const updated = {
        ...prev,
        [portal]: {
          ...prev[portal],
          [styleKey]: {
            ...(prev[portal][styleKey] || {}),
            [stepKey]: {
              ...((prev[portal][styleKey] || {})[stepKey] || {}),
              [sectionKey]: {
                ...(((prev[portal][styleKey] || {})[stepKey] || {})[sectionKey] || {}),
                [optKey]: cleaned,
              },
            },
          },
        },
      };
      saveOverrides(portal, updated[portal]);
      return updated;
    });
    setEditTarget(null);
    setEditValues({});
    showToast('Override saved');
  };

  const deleteOverride = (styleKey, stepKey, sectionKey, optKey) => {
    setOverrides(prev => {
      const updated = JSON.parse(JSON.stringify(prev));
      delete updated[portal]?.[styleKey]?.[stepKey]?.[sectionKey]?.[optKey];
      saveOverrides(portal, updated[portal]);
      return updated;
    });
    showToast('Override removed', 'info');
  };

  const handleClearAll = () => {
    clearOverrides(portal);
    setOverrides(prev => ({ ...prev, [portal]: {} }));
    setConfirmClear(false);
    showToast(`All ${portal} overrides cleared`, 'info');
  };

  const totalOverrides = (p) => {
    const data = overrides[p] || {};
    let count = 0;
    const recurse = (obj, depth) => {
      if (depth === 0) { count++; return; }
      for (const v of Object.values(obj)) {
        if (typeof v === 'object' && v !== null) recurse(v, depth - 1);
      }
    };
    for (const styleData of Object.values(data)) {
      for (const stepData of Object.values(styleData)) {
        for (const sectionData of Object.values(stepData)) {
          for (const optData of Object.values(sectionData)) {
            if (typeof optData === 'object' && Object.keys(optData).length > 0) count++;
          }
        }
      }
    }
    return count;
  };

  const q = searchQuery.toLowerCase().trim();

  const renderSections = () => {
    if (!currentStep) return null;
    const sections = currentStep.sections;
    if (!sections) return null;

    if (portal === 'bathroom') {
      return sections.map((sec) => {
        const filteredOpts = q
          ? sec.opts.filter(o => o.toLowerCase().includes(q))
          : sec.opts;
        if (!filteredOpts.length) return null;
        return (
          <div key={sec.title} className="admin-section">
            <div className="admin-section-title">{sec.title}</div>
            <div className="admin-product-list">
              {filteredOpts.map((optName) => {
                const ov = getOverride(activeStyle, activeStep, sec.title, optName);
                const modified = Object.keys(ov).length > 0;
                return (
                  <div key={optName} className={`admin-product-row ${modified ? 'modified' : ''}`}>
                    <div className="admin-product-info">
                      <span className="admin-product-name">{ov.name || optName}</span>
                      {modified && <span className="admin-badge">edited</span>}
                      {ov.supplierLink && (
                        <a href={ov.supplierLink} target="_blank" rel="noreferrer" className="admin-supplier-link">view supplier ↗</a>
                      )}
                    </div>
                    <div className="admin-product-actions">
                      <button className="admin-btn" onClick={() => openEdit(activeStyle, activeStep, sec.title, optName)}>
                        {modified ? 'Edit' : 'Override'}
                      </button>
                      {modified && (
                        <button className="admin-btn admin-btn--danger" onClick={() => deleteOverride(activeStyle, activeStep, sec.title, optName)}>
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      });
    }

    return Object.entries(sections).map(([sectionKey, opts]) => {
      const filteredOpts = q
        ? opts.filter(o => o.toLowerCase().includes(q))
        : opts;
      if (!filteredOpts.length) return null;
      const sectionLabel = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
      return (
        <div key={sectionKey} className="admin-section">
          <div className="admin-section-title">{sectionLabel}</div>
          <div className="admin-product-list">
            {filteredOpts.map((optVal) => {
              const ov = getOverride(activeStyle, activeStep, sectionKey, optVal);
              const modified = Object.keys(ov).length > 0;
              return (
                <div key={optVal} className={`admin-product-row ${modified ? 'modified' : ''}`}>
                  <div className="admin-product-info">
                    <span className="admin-product-name">{ov.val || optVal}</span>
                    {modified && <span className="admin-badge">edited</span>}
                    {ov.supplierLink && (
                      <a href={ov.supplierLink} target="_blank" rel="noreferrer" className="admin-supplier-link">view supplier ↗</a>
                    )}
                  </div>
                  <div className="admin-product-actions">
                    <button className="admin-btn" onClick={() => openEdit(activeStyle, activeStep, sectionKey, optVal)}>
                      {modified ? 'Edit' : 'Override'}
                    </button>
                    {modified && (
                      <button className="admin-btn admin-btn--danger" onClick={() => deleteOverride(activeStyle, activeStep, sectionKey, optVal)}>
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="admin-portal">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-left">
          <button className="admin-back-btn" onClick={() => navigate('/')}>← Home</button>
          <div className="admin-logo">Perrem <span>Admin</span></div>
        </div>
        <div className="admin-header-right">
          <div className="admin-override-counts">
            <span>{totalOverrides('bathroom')} bathroom overrides</span>
            <span>{totalOverrides('kitchen')} kitchen overrides</span>
          </div>
          <button
            className="admin-btn admin-btn--danger"
            onClick={() => setConfirmClear(true)}
            title={`Clear all ${portal} overrides`}
          >
            Clear all
          </button>
        </div>
      </header>

      {/* Portal tabs */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${portal === 'bathroom' ? 'active' : ''}`}
          onClick={() => { setPortal('bathroom'); setActiveStyle(null); setActiveStep(null); setSearchQuery(''); }}
        >
          Bathroom portal
        </button>
        <button
          className={`admin-tab ${portal === 'kitchen' ? 'active' : ''}`}
          onClick={() => { setPortal('kitchen'); setActiveStyle(null); setActiveStep(null); setSearchQuery(''); }}
        >
          Kitchen portal
        </button>
      </div>

      <div className="admin-body">
        {/* Style sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-sidebar-label">Style</div>
          {styleKeys.map((key) => {
            const label = portal === 'bathroom'
              ? catalogue[key].name
              : key;
            const ovCount = Object.values(
              overrides[portal]?.[key] || {}
            ).reduce((acc, stepData) => {
              for (const sData of Object.values(stepData)) {
                for (const optData of Object.values(sData)) {
                  if (typeof optData === 'object' && Object.keys(optData).length > 0) acc++;
                }
              }
              return acc;
            }, 0);
            return (
              <button
                key={key}
                className={`admin-style-btn ${activeStyle === key ? 'active' : ''}`}
                onClick={() => { setActiveStyle(key); setActiveStep(null); setSearchQuery(''); }}
              >
                {label}
                {ovCount > 0 && <span className="admin-count-badge">{ovCount}</span>}
              </button>
            );
          })}
        </aside>

        {/* Main content */}
        <main className="admin-main">
          {!activeStyle && (
            <div className="admin-empty">
              <div className="admin-empty-icon">←</div>
              <div>Select a style to manage its products</div>
            </div>
          )}

          {activeStyle && (
            <>
              {/* Step tabs */}
              <div className="admin-step-tabs">
                {stepKeys.map((sk) => {
                  const stepLabel = currentStyle.steps[sk].label;
                  return (
                    <button
                      key={sk}
                      className={`admin-step-tab ${activeStep === sk ? 'active' : ''}`}
                      onClick={() => { setActiveStep(sk); setSearchQuery(''); }}
                    >
                      {stepLabel}
                    </button>
                  );
                })}
              </div>

              {activeStep && (
                <>
                  <div className="admin-search-row">
                    <input
                      type="text"
                      className="admin-search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button className="admin-clear-search" onClick={() => setSearchQuery('')}>✕</button>
                    )}
                  </div>
                  {renderSections()}
                </>
              )}

              {!activeStep && (
                <div className="admin-empty">
                  <div>Select a step above to view products</div>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Edit modal */}
      {editTarget && (
        <div className="admin-modal-backdrop" onClick={() => setEditTarget(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <div className="admin-modal-title">
                Override: <span>{editTarget.optKey}</span>
              </div>
              <button className="admin-modal-close" onClick={() => setEditTarget(null)}>✕</button>
            </div>
            <div className="admin-modal-hint">
              Leave fields blank to keep the original value from the code.
            </div>
            <div className="admin-modal-fields">
              {fields.map((f) => (
                <div key={f.key} className="admin-modal-field">
                  <label>{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea
                      value={editValues[f.key] || ''}
                      onChange={(e) => setEditValues(prev => ({ ...prev, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      rows={3}
                    />
                  ) : (
                    <input
                      type={f.type}
                      value={editValues[f.key] || ''}
                      onChange={(e) => setEditValues(prev => ({ ...prev, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="admin-modal-actions">
              <button className="admin-btn" onClick={() => setEditTarget(null)}>Cancel</button>
              <button className="admin-btn admin-btn--primary" onClick={saveEdit}>Save override</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm clear modal */}
      {confirmClear && (
        <div className="admin-modal-backdrop" onClick={() => setConfirmClear(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <div className="admin-modal-title">Clear all {portal} overrides?</div>
            </div>
            <p className="admin-modal-hint">
              This will permanently delete all {totalOverrides(portal)} override{totalOverrides(portal) !== 1 ? 's' : ''} for the {portal} portal and restore the original product data from the code.
            </p>
            <div className="admin-modal-actions">
              <button className="admin-btn" onClick={() => setConfirmClear(false)}>Cancel</button>
              <button className="admin-btn admin-btn--danger" onClick={handleClearAll}>Yes, clear all</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`admin-toast admin-toast--${toast.type}`}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}

export default Admin;