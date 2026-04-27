import { useState, useEffect } from 'react';
import './Bathroom.css';
import { applyBathroomOverrides } from './ProductOverrides';

// ── Image imports ─────────────────────────────────────────────────────────────
// Scandi
import scandiCabinetry1 from '../assets/bathroom images/Scandi/Step 4 - Vanity/polytec angora oak woodmatt.jpg';
import scandiCabinetry2 from '../assets/bathroom images/Scandi/Step 4 - Vanity/polytec white melamine.jpg';
import scandiBenchtop1 from '../assets/bathroom images/Scandi/Step 4 - Vanity/WK Quantum Quartz Alpine Matte.jpg';
import scandiBenchtop2 from '../assets/bathroom images/Scandi/Step 4 - Vanity/WK Quantum Quartz Alpine White.jpg';
import scandiMirror1 from '../assets/bathroom images/Scandi/Step 4 - Vanity/Millenium Glass Pill Mirror 700×1100.jpeg';
import scandiMirror2 from '../assets/bathroom images/Scandi/Step 4 - Vanity/Custom Oval Mirror.jpeg';
import scandiMirror3 from '../assets/bathroom images/Scandi/Step 4 - Vanity/LED Install Backlit custom.jpeg';
import scandiTile1 from '../assets/bathroom images/Scandi/Step 5 - Tiling/Three Balls Red X-Rock Natural White.jpg';
import scandiTile2 from '../assets/bathroom images/Scandi/Step 5 - Tiling/Three Balls Red X-Rock Light Grey.jpeg';
import scandiTapware1 from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/ABI Interiors Milani Progressive Wall Mixer.jpeg';
import scandiTapware2 from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/ABI Interiors Nixi Wall Mixer & Spout.jpeg';
import scandiBasin1 from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/ABI Interiors Celine Round 420mm.jpg';
import scandiBasin2 from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/ABI Interiors Kiva Semi-Insert 420mm.jpg';
import scandiMirrorCabinet from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/ADP Australia Mirrored Shaving Cabinet.jpeg';
import scandiMirrorRound from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/ADP Australia Round Polished Edge 1200mm.jpeg';
import scandiMirrorBacklit from '../assets/bathroom images/Scandi/Step 6 - Tapware & basin/LED Install Backlit Custom.jpeg';
import scandiShower1 from '../assets/bathroom images/Scandi/Step 7 - Shower/Eden Nero  Highgrove Rail Shower.png';
import scandiShower2 from '../assets/bathroom images/Scandi/Step 7 - Shower/ABI Interiors Overhead + Hand.png';

// Hamptons
import hamptonsBenchtop1 from '../assets/bathroom images/Hamptons/Step 4 - Vanity/Stone Ambassador Enchanted White 50mm Mitred.png';
import hamptonsBenchtop2 from '../assets/bathroom images/Hamptons/Step 4 - Vanity/Stone Ambassador Enchanted White 20mm.png';
import hamptonsTile1 from '../assets/bathroom images/Hamptons/Step 5 - Tiling/Tile & Stone Gallery Carrara Bianco Matt.png';
import hamptonsTile2 from '../assets/bathroom images/Hamptons/Step 5 - Tiling/Tile & Stone Gallery Carrara Bianco Gloss.jpg';
import hamptonsFeature1 from '../assets/bathroom images/Hamptons/Step 5 - Tiling/Easycraft VJ150 Easycraft Panelling.jpg';
import hamptonsTapware1 from '../assets/bathroom images/Hamptons/Step 6 - Tapware & Basin/Gareth Ashton  Abey Poco Knurled Wall Mixer.png';
import hamptonsTapware2 from '../assets/bathroom images/Hamptons/Step 6 - Tapware & Basin/ABI Interiors Elysian Gooseneck Mixer.jpeg';
import hamptonsBasin1 from '../assets/bathroom images/Hamptons/Step 6 - Tapware & Basin/ADP Australia Glory Undermount Matt White.png';
import hamptonsBasin2 from '../assets/bathroom images/Hamptons/Step 6 - Tapware & Basin/ABI Interiors Poco Semi-Inset.jpg';
import hamptonsShower1 from '../assets/bathroom images/Hamptons/Step 7 - Shower/Gareth Ashton  Abey Curve Rail & Hand Shower.png';
import hamptonsShower2 from '../assets/bathroom images/Hamptons/Step 7 - Shower/Gareth Ashton  Abey Overhead Vertical + Hand.png';
import hamptonsShower3 from '../assets/bathroom images/Hamptons/Step 7 - Shower/Gareth Ashton  Abey Overhead Only.png';

// Classic Coastal
import ccCabinetry1 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/Polytec Natural Oak Ravine.jpg';
import ccCabinetry2 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/Polytec White Melamine.jpg';
import ccBenchtop1 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/WK Quantum Quartz Alpine White 60mm Round Edge.jpg';
import ccBenchtop2 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/WK Quantum Quartz Alpine White 20mm.jpg';
import ccMirror1 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/ADP Australia Round Polished Edge 1200mm.jpeg';
import ccMirror2 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/LED Install Custom Backlit Mirror.jpeg';
import ccMirror3 from '../assets/bathroom images/Classic coastal/Step 4 - Vanity/ADP Australia Mirrored Cabinet.jpeg';
import ccTile1 from '../assets/bathroom images/Classic coastal/Step 5 - Tiling/Ace Stone + Tiles Cliffstone White Dover Lappato.jpg';
import ccTile2 from '../assets/bathroom images/Classic coastal/Step 5 - Tiling/Ace Stone + Tiles Cliffstone Greige.jpg';
import ccFeature1 from '../assets/bathroom images/Classic coastal/Step 5 - Tiling/Easycraft VJ150 Easycraft Panelling.jpg';
import ccFeature2 from '../assets/bathroom images/Classic coastal/Step 5 - Tiling/Easycraft Easygroove 150.jpeg';
import ccTapware1 from '../assets/bathroom images/Classic coastal/Step 6 - Tapware & Basin/Gareth Ashton  Abey Poco Knurled Wall Mixer.png';
import ccTapware2 from '../assets/bathroom images/Classic coastal/Step 6 - Tapware & Basin/ABI Interiors Elysian Wall Mixer + Spout.jpeg';
import ccBasin1 from '../assets/bathroom images/Classic coastal/Step 6 - Tapware & Basin/ABI Interiors Celine Solid Surface 420mm.jpg';
import ccBasin2 from '../assets/bathroom images/Classic coastal/Step 6 - Tapware & Basin/ADP Australia Undermount Basin.jpeg';
import ccShower1 from '../assets/bathroom images/Classic coastal/Step 7 - Shower/Gareth Ashton  Abey Overhead Vertical + Hand.png';
import ccShower2 from '../assets/bathroom images/Classic coastal/Step 7 - Shower/Gareth Ashton  Abey Shower on Rail.png';
import ccShower3 from '../assets/bathroom images/Classic coastal/Step 7 - Shower/Gareth Ashton  Abey Overhead Only.png';

// Contemporary Coastal
import contemCabinetry1 from '../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/Polytec Cove 25 Classic White Matt.jpg';
import contemCabinetry2 from '../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/polytec smooth white melamine.jpg';
import contemBenchtop1 from '../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/Laminam Bianco Assoluto Matt.png';
import contemBenchtop2 from '../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/WK Quantum Quartz Alpine White.jpg';
import contemMirror1 from "../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/LED Install Custom Backlit 1430×1725 mirror.jpeg";
import contemMirror2 from '../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/Custom Standard Polished Edge.jpeg';
import contemMirror3 from '../assets/bathroom images/Contemporary Coastal/Step 4 - Vanity/Custom Oval Pill Shape.jpeg';
import contemTile1 from '../assets/bathroom images/Contemporary Coastal/Step 5 - Tiling/Ace Stone + Tiles Pietre 41 Scrambled Griege.jpg';
import contemTile2 from '../assets/bathroom images/Contemporary Coastal/Step 5 - Tiling/Ace Stone + Tiles Pietre 41 Light Grey.jpg';
import contemFeature1 from '../assets/bathroom images/Contemporary Coastal/Step 5 - Tiling/Ace Stone + Tiles Pietre 41 Chevron Griege.png';
import contemTapware1 from '../assets/bathroom images/Contemporary Coastal/Step 6 - Tapware & Basin/Gareth Ashton  Abey 1TAP Progressive Wall Mixer.png';
import contemTapware2 from '../assets/bathroom images/Contemporary Coastal/Step 6 - Tapware & Basin/ABI Interiors Nixi Wall Mixer & Spout.jpeg';
import contemBasin1 from "../assets/bathroom images/Contemporary Coastal/Step 6 - Tapware & Basin/ADP Australia Pride Semi-Inset 545×365.png";
import contemBasin2 from '../assets/bathroom images/Contemporary Coastal/Step 6 - Tapware & Basin/ABI Interiors Celine Round 420mm.jpeg';
import contemShower1 from '../assets/bathroom images/Contemporary Coastal/Step 7 - Shower/Gareth Ashton  Abey Horizontal Overhead 1SHRO.png';
import contemShower2 from '../assets/bathroom images/Contemporary Coastal/Step 7 - Shower/Gareth Ashton  Abey Overhead Vertical + Hand.png';
import contemShower3 from '../assets/bathroom images/Contemporary Coastal/Step 7 - Shower/Gareth Ashton  Abey Overhead Only.png';

// Coral House
import coralCabinetry1 from '../assets/bathroom images/Coral house/Step 4 - Vanity/ADP Australia Clifton Prime Oak Woodmatt.jpeg';
import coralCabinetry2 from '../assets/bathroom images/Coral house/Step 4 - Vanity/Perrem Design Custom Timber V-Groove.jpeg';
import coralBenchtop1 from '../assets/bathroom images/Coral house/Step 4 - Vanity/ADP Australia Cherry Pie Bright White.jpeg';
import coralBenchtop2 from '../assets/bathroom images/Coral house/Step 4 - Vanity/Custom Engineered Stone.jpeg';
import coralMirror1 from "../assets/bathroom images/Coral house/Step 4 - Vanity/ADP Australia ADP Arch Mirror 900×1050.jpeg";
import coralMirror2 from '../assets/bathroom images/Coral house/Step 4 - Vanity/LED Install Round Backlit Mirror.jpeg';
import coralTile1 from '../assets/bathroom images/Coral house/Step 5 - Tiling/Ace Stone + Tiles Beren Light Grey 600×600.png';
import coralTile2 from '../assets/bathroom images/Coral house/Step 5 - Tiling/Ace Stone + Tiles Beren Warm Greige.png';
import coralFeature1 from '../assets/bathroom images/Coral house/Step 5 - Tiling/Ace Stone + Tiles Beren Saw 300×900.jpg';
import coralFeature2 from '../assets/bathroom images/Coral house/Step 5 - Tiling/Easycraft VJ100 Easycraft Panelling.jpg';
import coralTapware1 from '../assets/bathroom images/Coral house/Step 6 - Tapware & Basin/ABI Interiors Elysian Minimal Wall Mixer.jpeg';
import coralTapware2 from '../assets/bathroom images/Coral house/Step 6 - Tapware & Basin/ABI Interiors Milli Minimal Wall Mixer.jpeg';
import coralBasin1 from '../assets/bathroom images/Coral house/Step 6 - Tapware & Basin/ADP Australia Dignity Semi-Inset 420mm.jpeg';
import coralBasin2 from '../assets/bathroom images/Coral house/Step 6 - Tapware & Basin/ABI Interiors Celine Round 420mm.jpeg';
import coralShower1 from '../assets/bathroom images/Coral house/Step 7 - Shower/ABI Interiors Dana Round 250mm.jpeg';
import coralShower2 from '../assets/bathroom images/Coral house/Step 7 - Shower/ABI Interiors Phili Arm + Dana Head.png';
import coralShower3 from '../assets/bathroom images/Coral house/Step 7 - Shower/ABI Interiors Rail + Hand Shower.jpeg';

// Fifty Shades
import fiftyCabinetry1 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/Polytec Maison Oak Ravine.png';
import fiftyCabinetry2 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/Polytec Dark Timber Veneer.jpg';
import fiftyBenchtop1 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/Smartstone Pelle Grigio 20mm.jpeg';
import fiftyBenchtop2 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/Smartstone Dark Grey Stone 20mm.jpg';
import fiftyMirror1 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/Custom Polished Edge 900×1100.jpeg';
import fiftyMirror2 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/LED Custom Backlit Mirror.jpeg';
import fiftyMirror3 from '../assets/bathroom images/Fifty shades/Step 4 - Vanity/Custom Oval Pill Shape.jpeg';
import fiftyTile1 from '../assets/bathroom images/Fifty shades/Step 5 - Tiling/Ace Stone + Tiles Ivory Flow Natural 450×900.jpg';
import fiftyTile2 from '../assets/bathroom images/Fifty shades/Step 5 - Tiling/Ace Stone + Tiles Ivory Flow Honed.jpg';
import fiftyTapware1 from '../assets/bathroom images/Fifty shades/Step 6 - Tapware & Basin/Gareth Ashton  Abey Poco Knurled Wall Mixer.png';
import fiftyTapware2 from '../assets/bathroom images/Fifty shades/Step 6 - Tapware & Basin/ABI Interiors Nixi Wall Mixer & Spout.jpeg';
import fiftyBasin1 from '../assets/bathroom images/Fifty shades/Step 6 - Tapware & Basin/ABI Interiors Kiva Semi-Inset Matt White.jpg';
import fiftyBasin2 from '../assets/bathroom images/Fifty shades/Step 6 - Tapware & Basin/ABI Interiors Celine Round 420mm.jpeg';
import fiftyShower1 from '../assets/bathroom images/Fifty shades/Step 7 - Shower/Gareth Ashton  Abey Horizontal Overhead 1SHRO.png';
import fiftyShower2 from '../assets/bathroom images/Fifty shades/Step 7 - Shower/Gareth Ashton  Abey Overhead + Hand.png';
import fiftyShower3 from '../assets/bathroom images/Fifty shades/Step 7 - Shower/Gareth Ashton  Abey Overhead Only.png';

// Resort
import resortCabinetry1 from '../assets/bathroom images/Resort/Step 4 -Vanity/Polytec Stone Grey Matt.jpg';
import resortCabinetry2 from '../assets/bathroom images/Resort/Step 4 -Vanity/Polytec Warm Greige Matt.jpg';
import resortBenchtop1 from '../assets/bathroom images/Resort/Step 4 -Vanity/Ace Stone + Tiles Portland Grey Brushed Limestone.png';
import resortBenchtop2 from '../assets/bathroom images/Resort/Step 4 -Vanity/Smartstone Pelle Grigio Engineered Stone.jpg';
import resortMirror1 from '../assets/bathroom images/Resort/Step 4 -Vanity/Custom Polished Edge 750×1100.jpeg';
import resortMirror2 from '../assets/bathroom images/Resort/Step 4 -Vanity/LED Custom Backlit Mirror.jpeg';
import resortMirror3 from '../assets/bathroom images/Resort/Step 4 -Vanity/Custom Oval Pill Shape.jpeg';
import resortTile1 from '../assets/bathroom images/Resort/Step 5 - Tiling/Ace Stone + Tiles Nextone Gray Natural 600×1200.jpg';
import resortTile2 from '../assets/bathroom images/Resort/Step 5 - Tiling/Ace Stone + Tiles Nextone Warm Grey.jpg';
import resortFeature1 from '../assets/bathroom images/Resort/Step 5 - Tiling/Ace Stone Contrast Stone Tile.jpeg';
import resortTapware1 from '../assets/bathroom images/Resort/Step 6 - Tapware & Basin/Meir Australia Round Curved Spout & Wall Mixer.png';
import resortTapware2 from '../assets/bathroom images/Resort/Step 6 - Tapware & Basin/Gareth Ashton  Abey Poco Knurled Wall Mixer.png';
import resortBasin1 from '../assets/bathroom images/Resort/Step 6 - Tapware & Basin/ADP Australia Glory Matte White 545×355mm.jpeg';
import resortBasin2 from '../assets/bathroom images/Resort/Step 6 - Tapware & Basin/ADP Australia Dignity Semi-Inset 420mm.jpeg';
import resortShower1 from '../assets/bathroom images/Resort/Step 7 - Shower/Meir Australia Round Wall Shower 200mm.png';
import resortShower2 from '../assets/bathroom images/Resort/Step 7 - Shower/Meir Australia Overhead + Diverter + Hand.png';
import resortShower3 from '../assets/bathroom images/Resort/Step 7 - Shower/Meir Australia Overhead Only.png';

// ─── Style hero images ────────────────────────────────────────────────────────
import styleImgScandi from '../assets/bathroom images/Scandi/Scandi v2.png';
import styleImgHamptons from '../assets/bathroom images/Hamptons/Hamptons v2.png';
import styleImgClassicCoastal from '../assets/bathroom images/Classic coastal/Classical Coastal v2.png';
import styleImgContemCoastal from '../assets/bathroom images/Contemporary Coastal/Contemporary Coastal v2.png';
import styleImgCoralHouse from '../assets/bathroom images/Coral house/Coral house v2.png';
import styleImgFiftyShades from '../assets/bathroom images/Fifty shades/Fifty Shades v2.png';
import styleImgResort from '../assets/bathroom images/Resort/Resort v2.png';

// ─── GHL Configuration ────────────────────────────────────────────────────────
const GHL_LOCATION_ID = 'Ir7r7duXyPwmyoxfC7Uz';
const GHL_API_KEY = 'pit-877b392e-a6b0-47a5-aacf-08a2fc78525a';
const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';

// ─────────────────────────────────────────────────────────────────────────────

function Bathroom() {
  const [currentStep, setCurrentStep] = useState(1);
  const [style, setStyle] = useState(null);
  const [variant, setVariant] = useState(null);

  // ── React-controlled form fields (replaces DOM reads) ─────────────────────
  const [formFields, setFormFields] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    budget: '',
    ctEnsuite: '0',
    ctBathroom: '0',
    ctPowder: '0',
    bathW: '',
    bathL: '',
    bathH: '',
    notes: '',
  });

  // ── React-controlled pill/yn selections ──────────────────────────────────
  const [pillSelections, setPillSelections] = useState({
    bathMixer: '',
    glassGrp: '',
    vanityMount: '',
  });

  const [ynSelections, setYnSelections] = useState({
    plans: '',
    bath: '',
    toilet: '',
    sky: '',
    htr: '',
    ufh: '',
    pp: '',
    niche: '',
    nib: '',
    seat: '',
    customVan: '',
    wl: '',
    bm: '',
    ledNiche: '',
    ledVan: '',
  });

  const [selections, setSelections] = useState({
    s4sel: {},
    s5sel: {},
    s6sel: {},
    s7sel: {},
    groutColour: null,
    tapFinish: null,
    hwFinish: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [summaryData, setSummaryData] = useState(null);

  const updateField = (key, value) => setFormFields(prev => ({ ...prev, [key]: value }));
  const updatePill = (key, value) => setPillSelections(prev => ({ ...prev, [key]: value }));
  const updateYN = (key, value) => setYnSelections(prev => ({ ...prev, [key]: value }));

  const GROUT_COLOURS = [
    { name: 'White', hex: '#F5F3EE' },
    { name: 'Ivory', hex: '#EDE6D4' },
    { name: 'Cream', hex: '#E8DEC8' },
    { name: 'Linen', hex: '#D8CCBA' },
    { name: 'Sand', hex: '#C8B898' },
    { name: 'Beige', hex: '#C0A880' },
    { name: 'Bahama Beige', hex: '#B89870' },
    { name: 'Misty Grey', hex: '#B8B0A4' },
    { name: 'Silver Grey', hex: '#A8A098' },
    { name: 'Pebble', hex: '#989080' },
    { name: 'Smoke', hex: '#888078' },
    { name: 'Graphite', hex: '#706860' },
    { name: 'Charcoal', hex: '#504840' },
    { name: 'Black', hex: '#2A2420' },
    { name: 'Terracotta', hex: '#B87858' },
  ];

  const GROUT_REC = {
    scandi: 'Misty Grey',
    hamptons: 'Ivory',
    'classic-coastal': 'Misty Grey',
    'contemporary-coastal': 'Misty Grey',
    'coral-house': 'Silver Grey',
    'fifty-shades': 'Smoke',
    resort: 'Pebble',
  };

  const TAP_FINISHES = [
    { name: 'Matte Black', hex: '#2A2A2A' },
    { name: 'Gun Metal', hex: '#5A5A5A' },
    { name: 'Brushed Nickel', hex: '#A8A8A0' },
    { name: 'Chrome', hex: '#D0D0CC' },
    { name: 'Brushed Brass', hex: '#C8A870' },
    { name: 'Champagne', hex: '#D4B880' },
    { name: 'Matte White', hex: '#F0EEE8' },
  ];

  const TAP_REC = {
    scandi: 'Matte Black',
    hamptons: 'Brushed Brass',
    'classic-coastal': 'Brushed Brass',
    'contemporary-coastal': 'Brushed Nickel',
    'coral-house': 'Matte White',
    'fifty-shades': 'Gun Metal',
    resort: 'Champagne',
  };

  const STYLES = {
    scandi: {
      name: 'Scandi',
      variants: [
        { id: 'scandi-straight', name: 'Straight Vanity', desc: 'Standard straight wall-hung vanity. Single or double basin.' },
        { id: 'scandi-curved', name: 'Curved Vanity', desc: 'Feature curved ends with matching oval mirrors. Statement piece.' },
      ],
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Angora Oak Woodmatt', brand: 'Polytec', detail: '1mm ABS edge · 16mm shadowline · warm blonde oak', swatch: '#C8B89A', img: scandiCabinetry1 },
              { name: 'White Melamine', brand: 'Polytec', detail: 'Smooth white carcass and panels · 1mm ABS edge', swatch: '#F4F2EE', img: scandiCabinetry2 },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Custom species, profile and finish — discuss with the team', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Alpine Matte', brand: 'WK Quantum Quartz', detail: '20mm arrised edge profile · soft white matte finish', swatch: '#E8E6E0', img: scandiBenchtop1 },
              { name: 'Alpine White', brand: 'WK Quantum Quartz', detail: '20mm arrised edge · slight gloss finish variant', swatch: '#F0EEE8', img: scandiBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural stone, other engineered stone — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Pill Mirror 700×1100', brand: 'Millenium Glass', detail: 'Custom shaped pill mirror · polished edge', swatch: '#D0CCBC', img: scandiMirror1 },
              { name: 'Oval Mirror', brand: 'Custom', detail: 'Softer oval form · matches curved vanity perfectly', swatch: '#C8C4B4', img: scandiMirror2 },
              { name: 'Backlit Custom', brand: 'LED Install', detail: 'Any shape with LED tape surround · discuss size', swatch: '#C0BCAC', img: scandiMirror3 },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'X-Rock Natural White', brand: 'Three Balls Red', detail: '600×1200mm · chiselled texture · 1/3 stretcher bond', swatch: '#E8E6E0', img: scandiTile1 },
              { name: 'X-Rock Light Grey', brand: 'Three Balls Red', detail: '600×1200mm · cool tone variant · same format', swatch: '#D0CCBE', img: scandiTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options with the team', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'No Feature', brand: '—', detail: 'Consistent tile throughout — no feature wall', swatch: '#E8E6E0' },
              { name: 'Contrast Tile', brand: 'Discuss with team', detail: 'Different format or texture on one feature wall', swatch: '#D0CCBE' },
              { name: 'Other / Custom', brand: 'Perrem Design', detail: 'VJ panelling or custom finish — let\'s discuss', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: 'Milani Progressive Wall Mixer', brand: 'ABI Interiors', detail: 'Matte Black · wall-mounted · progressive cartridge', swatch: '#2A2A2A', img: scandiTapware1 },
              { name: 'Nixi Wall Mixer & Spout', brand: 'ABI Interiors', detail: 'Matte Black · wall basin mixer + curved spout', swatch: '#323232', img: scandiTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Celine Round 420mm', brand: 'ABI Interiors', detail: 'Solid surface above counter · 420mm dia · 135mm H · Matte White', swatch: '#F0EEE8', img: scandiBasin1 },
              { name: 'Kiva Semi-Insert 420mm', brand: 'ABI Interiors', detail: 'Solid surface semi-inset · 420mm dia · lower profile · Matte White', swatch: '#ECEAE4', img: scandiBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Custom basin or alternative brand — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Mirrored Shaving Cabinet', brand: 'ADP Australia', detail: '1970×1410mm · concealed powerpoints inside doors', swatch: '#D8D4CC', img: scandiMirrorCabinet },
              { name: 'Round Polished Edge 1200mm', brand: 'ADP Australia', detail: 'Standard or backlit option · polished edge', swatch: '#D0CCBC', img: scandiMirrorRound },
              { name: 'Backlit Custom', brand: 'LED Install', detail: 'Any size · LED tape surround · discuss dimensions', swatch: '#C8C4B4', img: scandiMirrorBacklit },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Rail Shower', brand: 'Eden Nero / Highgrove', detail: 'Sliding rail · adjustable height · Matte Black', swatch: '#2A2A2A', img: scandiShower1 },
              { name: 'Overhead + Hand', brand: 'ABI Interiors', detail: 'Fixed overhead 200mm + hand shower set on bracket', swatch: '#3A3A3A', img: scandiShower2 },
              { name: 'Overhead Only', brand: 'ABI Interiors', detail: 'Fixed overhead shower head · ceiling or wall arm', swatch: '#484848' },
            ],
          },
        ],
      },
    },
    hamptons: {
      name: 'Hamptons',
      variants: [
        { id: 'hamptons-double', name: 'Double Vanity', desc: 'Double basin, mirrored shaving cabinet, twin skylights.' },
        { id: 'hamptons-single', name: 'Single Vanity', desc: 'Single basin, backlit mirror. Suits smaller spaces.' },
      ],
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Painted Timber Cotton Touch', brand: 'Farmers Doors', detail: '22mm slimlined oak profile · painted Cotton Touch', swatch: '#F0EDE4' },
              { name: 'White Textured Painted', brand: 'Farmers Doors', detail: 'Same profile · bright white painted finish', swatch: '#F8F6F0' },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Custom species, profile and finish — discuss with team', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Enchanted White 50mm Mitred', brand: 'Stone Ambassador', detail: 'Engineered stone · mitred 50mm apron · pencil round', swatch: '#F4F2EC', img: hamptonsBenchtop1 },
              { name: 'Enchanted White 20mm', brand: 'Stone Ambassador', detail: 'Standard 20mm profile · budget-friendly option', swatch: '#F0EEE8', img: hamptonsBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural marble, alternative stone — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Mirrored Shaving Cabinet', brand: 'ADP Australia', detail: '1970×1410mm · concealed powerpoints inside doors', swatch: '#D8D4CC' },
              { name: 'Round Polished Edge 1200mm', brand: 'ADP Australia', detail: 'Standard or backlit option · polished edge', swatch: '#D0CCBC' },
              { name: 'Backlit Custom', brand: 'LED Install', detail: 'Any size · LED tape surround · discuss dimensions', swatch: '#C8C4B4' },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'Carrara Bianco Matt', brand: 'Tile & Stone Gallery', detail: '600×600mm porcelain · 1/3 offset bond', swatch: '#F0EEE6', img: hamptonsTile1 },
              { name: 'Carrara Bianco Gloss', brand: 'Tile & Stone Gallery', detail: 'Same format · gloss surface finish', swatch: '#F6F4EC', img: hamptonsTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'No Feature', brand: '—', detail: 'Consistent tile throughout', swatch: '#F0EEE6' },
              { name: 'VJ150 Easycraft Panelling', brand: 'Easycraft', detail: 'Wet area panelling · painted Cotton Touch', swatch: '#E8E4DC', img: hamptonsFeature1 },
              { name: 'Other / Custom', brand: 'Perrem Design', detail: 'Custom finish or alternate feature — let\'s discuss', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: 'Poco Knurled Wall Mixer', brand: 'Gareth Ashton / Abey', detail: 'Brushed Brass · wall basin mixer · knurled handle', swatch: '#C8A870', img: hamptonsTapware1 },
              { name: 'Elysian Gooseneck Mixer', brand: 'ABI Interiors', detail: 'Brushed Brass · tall gooseneck spout + wall mixer', swatch: '#C0A068', img: hamptonsTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Glory Undermount Matt White', brand: 'ADP Australia', detail: '545×355mm undermount · under-bench installation · Matte White', swatch: '#F4F2EC', img: hamptonsBasin1 },
              { name: 'Poco Semi-Inset', brand: 'ABI Interiors', detail: 'Solid surface semi-inset · clean low profile · Matte White', swatch: '#ECEAE4', img: hamptonsBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Custom basin or alternative — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Curve Rail & Hand Shower', brand: 'Gareth Ashton / Abey', detail: 'Rail shower ensemble · Brushed Brass', swatch: '#C8A870', img: hamptonsShower1 },
              { name: 'Overhead Vertical + Hand', brand: 'Gareth Ashton / Abey', detail: '200mm vertical head + hand shower · Brass', swatch: '#B89860', img: hamptonsShower2 },
              { name: 'Overhead Only', brand: 'Gareth Ashton / Abey', detail: 'Fixed overhead shower head · Brushed Brass', swatch: '#A88850', img: hamptonsShower3 },
            ],
          },
        ],
      },
    },
    'classic-coastal': {
      name: 'Classic Coastal',
      variants: [
        { id: 'cc-with-bath', name: 'With Freestanding Bath', desc: 'Full bathroom including freestanding bath and shower.' },
        { id: 'cc-shower-only', name: 'Shower Only', desc: 'Shower and vanity — no bath. Ensuite-style layout.' },
      ],
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Natural Oak Ravine', brand: 'Polytec', detail: '1mm ABS edge · warm oak look · 12mm shadowline', swatch: '#C0A880', img: ccCabinetry1 },
              { name: 'White Melamine', brand: 'Polytec', detail: 'Clean white carcass and panels · 1mm ABS edge', swatch: '#F4F2EE', img: ccCabinetry2 },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Custom species, profile and finish — discuss', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Alpine White 60mm Round Edge', brand: 'WK Quantum Quartz', detail: '60mm profile · smooth round edge · premium option', swatch: '#F0EEE8', img: ccBenchtop1 },
              { name: 'Alpine White 20mm', brand: 'WK Quantum Quartz', detail: 'Standard 20mm · budget-friendly option', swatch: '#ECEAE4', img: ccBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural stone or alternative — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Round Polished Edge 1200mm', brand: 'ADP Australia', detail: 'Standard or backlit option · polished edge', swatch: '#D0CCBC', img: ccMirror1 },
              { name: 'Custom Backlit Mirror', brand: 'LED Install', detail: 'LED surround · any shape · discuss dimensions', swatch: '#C8C4B4', img: ccMirror2 },
              { name: 'Mirrored Cabinet', brand: 'ADP Australia', detail: 'Storage cabinet with mirror front', swatch: '#D8D4CC', img: ccMirror3 },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'Cliffstone White Dover Lappata', brand: 'Ace Stone + Tiles', detail: '600×1200mm · semi-polished · 1/3 stretcher bond', swatch: '#E8E4DA', img: ccTile1 },
              { name: 'Cliffstone Greige', brand: 'Ace Stone + Tiles', detail: '600×1200mm · warmer tone · same format', swatch: '#DDD8CC', img: ccTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'VJ150 Easycraft Panelling', brand: 'Easycraft', detail: 'Wet area · painted Solitude (low sheen)', swatch: '#E0DDD4', img: ccFeature1 },
              { name: 'Easy Groove 150', brand: 'Easycraft', detail: 'Wet area · painted Cotton Touch', swatch: '#E8E4DC', img: ccFeature2 },
              { name: 'No Feature', brand: '—', detail: 'Consistent tile throughout — no feature wall', swatch: '#E8E4DA' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: 'Poco Knurled Wall Mixer', brand: 'Gareth Ashton / Abey', detail: 'Brushed Brass · wall basin mixer · knurled handle', swatch: '#C8A870', img: ccTapware1 },
              { name: 'Elysian Wall Mixer + Spout', brand: 'ABI Interiors', detail: 'Brushed Brass · wall mixer + straight spout', swatch: '#C0A068', img: ccTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Celine Solid Surface 420mm', brand: 'ABI Interiors', detail: 'Solid surface above counter · 420mm dia · Brass waste · Matte White', swatch: '#F0EEE8', img: ccBasin1 },
              { name: 'Undermount Basin', brand: 'ADP Australia', detail: 'Under-bench undermount · clean minimal aesthetic · Matte White', swatch: '#E8E4DC', img: ccBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Custom basin or alternative brand — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Overhead Vertical + Hand', brand: 'Gareth Ashton / Abey', detail: '200mm vertical shower + hand set · Brushed Brass', swatch: '#C8A870', img: ccShower1 },
              { name: 'Shower on Rail', brand: 'Gareth Ashton / Abey', detail: 'Rail shower with hand shower · Brushed Brass', swatch: '#B89860', img: ccShower2 },
              { name: 'Overhead Only', brand: 'Gareth Ashton / Abey', detail: 'Fixed overhead shower head · Brushed Brass', swatch: '#A88850', img: ccShower3 },
            ],
          },
        ],
      },
    },
    'contemporary-coastal': {
      name: 'Contemporary Coastal',
      variants: null,
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Cove 25 Classic White Matt', brand: 'Polytec', detail: 'Thermolaminated profile door · contemporary line', swatch: '#F0EEE8', img: contemCabinetry1 },
              { name: 'Smooth White Melamine', brand: 'Polytec', detail: 'Flat panel · finger pull from beneath', swatch: '#F8F6F2', img: contemCabinetry2 },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Custom profile and finish — discuss with team', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Bianco Assoluto Matt', brand: 'Laminam', detail: '12mm ultra-compact surface · smooth round edge', swatch: '#F4F2EC', img: contemBenchtop1 },
              { name: 'Alpine White Quartz', brand: 'WK Quantum', detail: '20mm engineered quartz · budget-friendly', swatch: '#F0EEE8', img: contemBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural stone or alternative — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Custom Backlit 1430×1725', brand: 'LED Install', detail: 'Large format · full height LED tape surround', swatch: '#D0CCBC', img: contemMirror1 },
              { name: 'Standard Polished Edge', brand: 'Custom', detail: 'Smaller format · no backlight', swatch: '#C8C4B4', img: contemMirror2 },
              { name: 'Oval / Pill Shape', brand: 'Custom', detail: 'Softened shape for visual interest', swatch: '#C0BCAC', img: contemMirror3 },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'Pietre 41 Scrambled Griege', brand: 'Ace Stone + Tiles', detail: '400×800mm · natural finish · 1/3 stretcher bond', swatch: '#C8C4B8', img: contemTile1 },
              { name: 'Pietre 41 Light Grey', brand: 'Ace Stone + Tiles', detail: '400×800mm · cooler tone · same format', swatch: '#D0CCBE', img: contemTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'Pietre 41 Chevron Griege', brand: 'Ace Stone + Tiles', detail: '200×800mm · stack bond chevron pattern', swatch: '#C0BCA8', img: contemFeature1 },
              { name: 'Match Body Tile', brand: '—', detail: 'Consistent tile throughout — no feature', swatch: '#C8C4B8' },
              { name: 'Other / Custom', brand: 'Perrem Design', detail: 'Custom feature wall — let\'s discuss', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: '1TAP Progressive Wall Mixer', brand: 'Gareth Ashton / Abey', detail: 'Brushed Nickel · wall-mount progressive mixer', swatch: '#A8A8A0', img: contemTapware1 },
              { name: 'Nixi Wall Mixer & Spout', brand: 'ABI Interiors', detail: 'Brushed Nickel · wall basin mixer + curved spout', swatch: '#B0B0A8', img: contemTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Pride Semi-Inset 545×365', brand: 'ADP Australia', detail: 'Solid surface semi-inset · contemporary profile · Matte White', swatch: '#F4F2EC', img: contemBasin1 },
              { name: 'Celine Round 420mm', brand: 'ABI Interiors', detail: 'Solid surface above counter · 420mm dia · Matte White', swatch: '#F0EEE8', img: contemBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Alternative basin — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Horizontal Overhead 1SHRO', brand: 'Gareth Ashton / Abey', detail: 'Horizontal wall shower · Brushed Nickel', swatch: '#A8A8A0', img: contemShower1 },
              { name: 'Overhead + Hand Shower', brand: 'Gareth Ashton / Abey', detail: 'Fixed head + hand shower set · Brushed Nickel', swatch: '#B0B0A8', img: contemShower2 },
              { name: 'Overhead Only', brand: 'Gareth Ashton / Abey', detail: 'Fixed overhead shower head · Brushed Nickel', swatch: '#B8B8B0', img: contemShower3 },
            ],
          },
        ],
      },
    },
    'coral-house': {
      name: 'Coral House',
      variants: null,
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Clifton Prime Oak Woodmatt', brand: 'ADP Australia', detail: '1200mm · V-groove doors · white internals · wall hung', swatch: '#C8A880', img: coralCabinetry1 },
              { name: 'Custom Timber V-Groove', brand: 'Perrem Design', detail: 'Bespoke V-groove profile — discuss species and size', swatch: '#B89870', img: coralCabinetry2 },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Any profile, finish or configuration — let\'s discuss', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Cherry Pie Bright White', brand: 'ADP Australia', detail: 'Solid surface · standard with Clifton vanity', swatch: '#F8F6F2', img: coralBenchtop1 },
              { name: 'Custom Engineered Stone', brand: 'Discuss', detail: 'Upgrade to engineered stone — discuss options with team', swatch: '#E8E4DC', img: coralBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural stone or alternative — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'ADP Arch Mirror 900×1050', brand: 'ADP Australia', detail: 'Arched top profile · polished edge', swatch: '#D0CCBC', img: coralMirror1 },
              { name: 'Round Backlit Mirror', brand: 'LED Install', detail: 'Round format · LED surround · discuss diameter', swatch: '#C8C4B4', img: coralMirror2 },
              { name: 'Custom Shape', brand: 'Custom', detail: 'Any shape — oval, arch, rectangle', swatch: '#C0BCAC' },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'Beren Light Grey 600×600', brand: 'Ace Stone + Tiles', detail: 'Porcelain · 1/3 stretcher bond', swatch: '#C8C8C0', img: coralTile1 },
              { name: 'Beren Warm Greige', brand: 'Ace Stone + Tiles', detail: '600×600mm · warmer tone variant', swatch: '#D0C8B8', img: coralTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'Beren Saw 300×900', brand: 'Ace Stone + Tiles', detail: 'Saw-edge texture · matching Light Grey', swatch: '#C0C0B8', img: coralFeature1 },
              { name: 'VJ100 Easycraft Panelling', brand: 'Easycraft', detail: 'Wet area panelling · painted custom Coral colour', swatch: '#E8C8B8', img: coralFeature2 },
              { name: 'No Feature', brand: '—', detail: 'Consistent tile throughout — no feature', swatch: '#C8C8C0' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: 'Elysian Minimal Wall Mixer', brand: 'ABI Interiors', detail: 'Matte White · wall basin mixer · minimal profile', swatch: '#F0EEE8', img: coralTapware1 },
              { name: 'Milli Minimal Wall Mixer', brand: 'ABI Interiors', detail: 'Matte White · ultra-slim wall mixer', swatch: '#E8E6E0', img: coralTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Dignity Semi-Inset 420mm', brand: 'ADP Australia', detail: 'Matte White · semi-inset · 420mm dia · Matte White waste', swatch: '#F4F2EC', img: coralBasin1 },
              { name: 'Celine Round 420mm', brand: 'ABI Interiors', detail: 'Solid surface above counter · Matte White waste · 420mm dia', swatch: '#F0EEE8', img: coralBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Alternative basin — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Dana Round 250mm + Hand', brand: 'ABI Interiors', detail: 'Round 250mm head + Vino hand shower · Matte White', swatch: '#F0EEE8', img: coralShower1 },
              { name: 'Phili Arm + Dana Head', brand: 'ABI Interiors', detail: '400mm reach arm + 250mm round head · Matte White', swatch: '#E8E6E0', img: coralShower2 },
              { name: 'Rail + Hand Shower', brand: 'ABI Interiors', detail: 'Sliding rail system · Matte White finish', swatch: '#E0DEDC', img: coralShower3 },
            ],
          },
        ],
      },
    },
    'fifty-shades': {
      name: 'Fifty Shades',
      variants: null,
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Maison Oak Ravine', brand: 'Polytec', detail: 'Square edge finger pull · warm oak tone · 1mm ABS', swatch: '#C0A878', img: fiftyCabinetry1 },
              { name: 'Dark Timber Veneer', brand: 'Polytec', detail: 'Deeper tone for a more dramatic aesthetic', swatch: '#8A7858', img: fiftyCabinetry2 },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Any profile, finish or species — let\'s discuss', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Pelle Grigio 20mm', brand: 'Smartstone', detail: 'Pencil round edge · warm grey engineered stone', swatch: '#C8C0B0', img: fiftyBenchtop1 },
              { name: 'Dark Grey Stone 20mm', brand: 'Smartstone', detail: 'Deeper tone — same format and profile', swatch: '#B0A898', img: fiftyBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural stone or alternative — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Custom Polished Edge 900×1100', brand: 'Custom', detail: '150mm corner radius · pencil polished edge', swatch: '#D0CCBC', img: fiftyMirror1 },
              { name: 'Backlit Custom Mirror', brand: 'LED Install', detail: 'LED surround · same dimensions as above', swatch: '#C8C4B4', img: fiftyMirror2 },
              { name: 'Oval or Arch Shape', brand: 'Custom', detail: 'Alternative shape — let\'s discuss', swatch: '#C0BCAC', img: fiftyMirror3 },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'Ivory Flow Natural 450×900', brand: 'Ace Stone + Tiles', detail: 'Porcelain · natural finish · 1/3 offset pattern', swatch: '#E0D8C8', img: fiftyTile1 },
              { name: 'Ivory Flow Honed', brand: 'Ace Stone + Tiles', detail: 'Same tile · honed smoother finish', swatch: '#E8E0D0', img: fiftyTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'No Feature', brand: '—', detail: 'Consistent tile throughout', swatch: '#E0D8C8' },
              { name: 'Contrast Format Tile', brand: 'Discuss', detail: 'Different tile format or texture — let\'s discuss', swatch: '#D8D0C0' },
              { name: 'Other / Custom', brand: 'Perrem Design', detail: 'Custom feature wall finish', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: 'Poco Knurled Wall Mixer', brand: 'Gareth Ashton / Abey', detail: 'Gun Metal · wall basin mixer · knurled handle', swatch: '#606060', img: fiftyTapware1 },
              { name: 'Nixi Wall Mixer & Spout', brand: 'ABI Interiors', detail: 'Gun Metal · wall basin mixer + curved spout', swatch: '#686868', img: fiftyTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Kiva Semi-Insert Matt White', brand: 'ABI Interiors', detail: 'Solid surface semi-insert · Matt White finish · 420mm dia', swatch: '#F4F2EC', img: fiftyBasin1 },
              { name: 'Celine Round 420mm', brand: 'ABI Interiors', detail: 'Solid surface above counter · 420mm dia · Matte White', swatch: '#F0EEE8', img: fiftyBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Alternative basin — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Horizontal Overhead 1SHRO', brand: 'Gareth Ashton / Abey', detail: 'Horizontal wall shower · Gun Metal', swatch: '#606060', img: fiftyShower1 },
              { name: 'Overhead + Hand Shower', brand: 'Gareth Ashton / Abey', detail: 'Fixed head + hand shower · Gun Metal', swatch: '#686868', img: fiftyShower2 },
              { name: 'Overhead Only', brand: 'Gareth Ashton / Abey', detail: 'Fixed overhead shower head · Gun Metal', swatch: '#707070', img: fiftyShower3 },
            ],
          },
        ],
      },
    },
    resort: {
      name: 'Resort',
      variants: null,
      s4: {
        sections: [
          {
            title: 'Cabinetry',
            opts: [
              { name: 'Stone Grey Matt', brand: 'Polytec', detail: 'Thermolaminated · 25mm square edge finger pull', swatch: '#909090', img: resortCabinetry1 },
              { name: 'Warm Greige Matt', brand: 'Polytec', detail: 'Softer warm tone · same format and profile', swatch: '#A89880', img: resortCabinetry2 },
              { name: 'Fully Custom', brand: 'Perrem Design', detail: 'Custom finish, profile or species — let\'s discuss', swatch: '#E0DDD4' },
            ],
          },
          {
            title: 'Benchtop',
            opts: [
              { name: 'Portland Grey Brushed Limestone', brand: 'Ace Stone + Tiles', detail: '100mm mitred join · natural stone · premium', swatch: '#B0A898', img: resortBenchtop1 },
              { name: 'Pelle Grigio Engineered Stone', brand: 'Smartstone', detail: 'Similar aesthetic · engineered · easier to maintain', swatch: '#C0B8A8', img: resortBenchtop2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'Natural or engineered stone — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Mirror',
            opts: [
              { name: 'Custom Polished Edge 750×1100', brand: 'Custom', detail: '150mm corner radius · polished edge', swatch: '#D0CCBC', img: resortMirror1 },
              { name: 'Backlit Custom Mirror', brand: 'LED Install', detail: 'LED surround · same dimensions', swatch: '#C8C4B4', img: resortMirror2 },
              { name: 'Oval or Pill Shape', brand: 'Custom', detail: 'Alternative shape — let\'s discuss', swatch: '#C0BCAC', img: resortMirror3 },
            ],
          },
        ],
      },
      s5: {
        sections: [
          {
            title: 'Floor & Wall Tile',
            opts: [
              { name: 'Nextone Gray Natural 600×1200', brand: 'Ace Stone + Tiles', detail: 'Natural finish · 1/3 stretcher bond', swatch: '#B8B0A4', img: resortTile1 },
              { name: 'Nextone Warm Grey', brand: 'Ace Stone + Tiles', detail: 'Warmer tone variant · same format', swatch: '#C0B8AC', img: resortTile2 },
              { name: 'Other / Explore', brand: 'Perrem Design', detail: 'I\'d like to explore further tile options', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Feature Wall',
            opts: [
              { name: 'No Feature', brand: '—', detail: 'Consistent tile throughout', swatch: '#B8B0A4' },
              { name: 'Contrast Stone Tile', brand: 'Ace Stone', detail: 'Natural stone feature wall — discuss options', swatch: '#A8A098', img: resortFeature1 },
              { name: 'Other / Custom', brand: 'Perrem Design', detail: 'Custom feature wall finish', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s6: {
        sections: [
          {
            title: 'Tapware',
            opts: [
              { name: 'Round Curved Spout & Wall Mixer', brand: 'Meir Australia', detail: 'Champagne · wall basin mixer + curved spout', swatch: '#D4B880', img: resortTapware1 },
              { name: 'Poco Knurled Wall Mixer', brand: 'Gareth Ashton / Abey', detail: 'Champagne · wall basin mixer · knurled handle', swatch: '#C8A870', img: resortTapware2 },
              { name: 'Other / Explore', brand: 'Discuss', detail: 'Alternative tapware — specify finish and brand preference', swatch: '#D8D4CC' },
            ],
          },
          {
            title: 'Basin',
            opts: [
              { name: 'Glory Matte White 545×355mm', brand: 'ADP Australia', detail: 'Solid surface above counter · 545×355mm · Champagne waste', swatch: '#F4F2EC', img: resortBasin1 },
              { name: 'Dignity Semi-Inset 420mm', brand: 'ADP Australia', detail: 'Matte White semi-inset · lower profile · 420mm dia', swatch: '#ECEAE4', img: resortBasin2 },
              { name: 'Other / Custom', brand: 'Discuss', detail: 'Alternative basin — let\'s explore', swatch: '#D8D4CC' },
            ],
          },
        ],
      },
      s7: {
        sections: [
          {
            title: 'Shower Head',
            opts: [
              { name: 'Round Wall Shower 200mm', brand: 'Meir Australia', detail: '200mm rose · 400mm curved arm · Champagne', swatch: '#D4B880', img: resortShower1 },
              { name: 'Overhead + Diverter + Hand', brand: 'Meir Australia', detail: 'Full system · diverter mixer + hand shower · Champagne', swatch: '#C8A860', img: resortShower2 },
              { name: 'Overhead Only', brand: 'Meir Australia', detail: 'Fixed overhead head · Champagne finish', swatch: '#C0A058', img: resortShower3 },
            ],
          },
        ],
      },
    },
  };

  // Apply admin overrides to the static content
const STYLES_WITH_OVERRIDES = applyBathroomOverrides(STYLES);

  const styleOptions = [
    { key: 'scandi', name: 'Scandi', desc: 'Calm and minimal. Warm oak, matte black and soft stone.', colors: ['#9EA89E', '#C8C5BC', '#2A2A2A', '#E8E6E0'], img: styleImgScandi },
    { key: 'hamptons', name: 'Hamptons', desc: 'Timeless and refined. Carrara tile, brushed brass, shaker profile.', colors: ['#F4F0E8', '#E0D5C0', '#B8936A', '#FFF'], img: styleImgHamptons },
    { key: 'classic-coastal', name: 'Classic Coastal', desc: 'Relaxed and organic. Oak Ravine, brushed brass, greige tile.', colors: ['#C8D4C0', '#E8EDE6', '#B8936A', '#D6CFBF'], img: styleImgClassicCoastal },
    { key: 'contemporary-coastal', name: 'Contemporary Coastal', desc: 'Modern and fresh. Chevron tile, brushed nickel, white profile.', colors: ['#7AAAB8', '#B8CFD8', '#E6EDF0', '#FFF'], img: styleImgContemCoastal },
    { key: 'coral-house', name: 'Coral House', desc: 'Warm and earthy. Matte white, timber V-groove, terracotta accent.', colors: ['#C09080', '#D8C0B0', '#F0EAE4', '#FFF'], img: styleImgCoralHouse },
    { key: 'fifty-shades', name: 'Fifty Shades', desc: 'Sophisticated and moody. Ivory tile, gun metal, warm oak.', colors: ['#2A2520', '#6A6058', '#C8B89A', '#F0EDE6'], img: styleImgFiftyShades },
    { key: 'resort', name: 'Resort', desc: 'Refined and luxurious. Limestone, champagne tapware, grey stone.', colors: ['#A89890', '#C8C0B4', '#E4E0DC', '#B8936A'], img: styleImgResort },
  ];

  const steps = [
    { label: 'You', num: 1 },
    { label: 'Space', num: 2 },
    { label: 'Style', num: 3 },
    { label: 'Vanity', num: 4 },
    { label: 'Tiles', num: 5 },
    { label: 'Tapware', num: 6 },
    { label: 'Shower', num: 7 },
    { label: 'Finishing', num: 8 },
    { label: 'Summary', num: 9 },
  ];

  const updateSectionSelection = (section, key, value) => {
    setSelections(prev => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
  };

  const selectStyle = (styleKey) => {
    setStyle(styleKey);
    setVariant(null);
    setSelections({ s4sel: {}, s5sel: {}, s6sel: {}, s7sel: {}, groutColour: null, tapFinish: null, hwFinish: null });
  };

  const selectVariant = (variantId) => setVariant(variantId);

  const selectSwatch = (value, key) => setSelections(prev => ({ ...prev, [key]: value }));

  const selectMat = (section, title, value) => updateSectionSelection(section, title, value);

  const renderOptionGrid = (section, storeKey) => {
    if (!style || !STYLES[style] || !STYLES[style][section]) return null;
    const data = STYLES_WITH_OVERRIDES[style][section];
    return (
      <div>
        {data.sections.map((sec, idx) => (
          <div className="sc" key={idx}>
            <div className="sc-label">{sec.title}</div>
            <div className="mat-opts">
              {sec.opts.map((opt, optIdx) => {
                const isSelected = selections[storeKey]?.[sec.title] === opt.name;
                return (
                  <div key={optIdx} className={`mat-card ${isSelected ? 'selected' : ''}`} onClick={() => selectMat(storeKey, sec.title, opt.name)}>
                    <div className="mat-img-wrap">
                      {opt.img ? (
                        <img src={opt.img} alt={opt.name} className="mat-img" loading="lazy" />
                      ) : (
                        <div className="mat-swatch-fallback" style={{ background: opt.swatch }} />
                      )}
                    </div>
                    <div className="mat-card-body">
  <div className="mat-brand">{opt.brand}</div>
  <div className="mat-name">{opt.name}</div>
  <div className="mat-detail">{opt.detail}</div>
  {opt.supplierLink && (
    <a 
      href={opt.supplierLink} 
      target="_blank" 
      rel="noreferrer" 
      className="supplier-link"
      onClick={(e) => e.stopPropagation()}
    >
      View supplier ↗
    </a>
  )}
</div>
                    {isSelected && <div className="mat-check">✓</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderGroutSwatches = () => {
    const rec = style ? GROUT_REC[style] : null;
    return (
      <div className="swatch-grid">
        {GROUT_COLOURS.map((c, idx) => (
          <div key={idx} className={`swatch-card ${selections.groutColour === c.name ? 'selected' : ''}`} onClick={() => selectSwatch(c.name, 'groutColour')}>
            <div className="swatch-circle" style={{ background: c.hex }}></div>
            <div className="swatch-name">{c.name}</div>
            {c.name === rec && <div className="swatch-rec">★ Recommended</div>}
          </div>
        ))}
      </div>
    );
  };

  const renderTapSwatches = () => {
    const rec = style ? TAP_REC[style] : null;
    return (
      <div className="swatch-grid">
        {TAP_FINISHES.map((c, idx) => (
          <div key={idx} className={`swatch-card ${selections.tapFinish === c.name ? 'selected' : ''}`} onClick={() => selectSwatch(c.name, 'tapFinish')}>
            <div className="swatch-circle" style={{ background: c.hex }}></div>
            <div className="swatch-name">{c.name}</div>
            {c.name === rec && <div className="swatch-rec">★ Recommended</div>}
          </div>
        ))}
      </div>
    );
  };

  const renderHwSwatches = () => {
    const rec = style ? TAP_REC[style] : null;
    return (
      <div className="swatch-grid">
        {TAP_FINISHES.map((c, idx) => (
          <div key={idx} className={`swatch-card ${selections.hwFinish === c.name ? 'selected' : ''}`} onClick={() => selectSwatch(c.name, 'hwFinish')}>
            <div className="swatch-circle" style={{ background: c.hex }}></div>
            <div className="swatch-name">{c.name}</div>
            {c.name === rec && <div className="swatch-rec">★ Match Tapware</div>}
          </div>
        ))}
      </div>
    );
  };

  // ── YN button component ────────────────────────────────────────────────────
  const YNGroup = ({ stateKey, options = ['Yes', 'No'] }) => (
    <div className="yn-group" style={{ maxWidth: options.length > 2 ? '400px' : '200px', marginTop: '4px' }}>
      {options.map(opt => (
        <div
          key={opt}
          className={`yn ${ynSelections[stateKey] === opt ? 'selected' : ''}`}
          onClick={() => updateYN(stateKey, opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );

  // ── Pill button component ─────────────────────────────────────────────────
  const PillGroup = ({ stateKey, options }) => (
    <div className="pill-group">
      {options.map(opt => (
        <div
          key={opt}
          className={`pill ${pillSelections[stateKey] === opt ? 'selected' : ''}`}
          onClick={() => updatePill(stateKey, opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );

  // ── Collect all data from React state ─────────────────────────────────────
  const collectData = () => {
    const rooms = [];
    if (formFields.ctEnsuite && formFields.ctEnsuite !== '0') rooms.push(`${formFields.ctEnsuite} × Ensuite`);
    if (formFields.ctBathroom && formFields.ctBathroom !== '0') rooms.push(`${formFields.ctBathroom} × Bathroom`);
    if (formFields.ctPowder && formFields.ctPowder !== '0') rooms.push(`${formFields.ctPowder} × Powder Room`);

    return {
      fname: formFields.fname,
      lname: formFields.lname,
      email: formFields.email,
      phone: formFields.phone,
      address: formFields.address,
      projectType: formFields.projectType,
      budget: formFields.budget,
      rooms: rooms.join(', ') || '—',
      dims: `${formFields.bathW || '?'}W × ${formFields.bathL || '?'}L × ${formFields.bathH || '?'}H mm`,
      plans: ynSelections.plans || '—',
      bath: ynSelections.bath || '—',
      bathMixer: pillSelections.bathMixer || '—',
      toilet: ynSelections.toilet || '—',
      skylight: ynSelections.sky || '—',
      htr: ynSelections.htr || '—',
      ufh: ynSelections.ufh || '—',
      pp: ynSelections.pp || '—',
      niche: ynSelections.niche || '—',
      nib: ynSelections.nib || '—',
      seat: ynSelections.seat || '—',
      glass: pillSelections.glassGrp || '—',
     styleName: style ? STYLES_WITH_OVERRIDES[style].name : '—',
      variantName: variant || '—',
      vanityMount: pillSelections.vanityMount || '—',
      customVan: ynSelections.customVan || '—',
      s4: selections.s4sel,
      s5: selections.s5sel,
      s6: selections.s6sel,
      s7: selections.s7sel,
      grout: selections.groutColour || '—',
      tapFinish: selections.tapFinish || '—',
      hwFinish: selections.hwFinish || '—',
      wallLights: ynSelections.wl || '—',
      backlitMirror: ynSelections.bm || '—',
      ledNiche: ynSelections.ledNiche || '—',
      ledVan: ynSelections.ledVan || '—',
      notes: formFields.notes,
    };
  };

  // ── GHL Contact Creation ──────────────────────────────────────────────────
  const submitToGHL = async (data) => {
    // Strictly validate email
    const emailValue = (data.email || '').trim();
    const isValidEmail = emailValue.length > 0 && emailValue.includes('@') && emailValue.includes('.');

    const payload = {
      locationId: GHL_LOCATION_ID,
      firstName: data.fname || '',
      lastName: data.lname || '',
      ...(isValidEmail ? { email: emailValue } : {}),
      ...(data.phone ? { phone: data.phone } : {}),
      ...(data.address ? { address1: data.address } : {}),
      source: 'Bathroom Design Portal',
      tags: ['bathroom-brief'],
      customFields: [
        { key: 'project_type',          field_value: data.projectType || '—' },
        { key: 'budget',                field_value: data.budget || '—' },
        { key: 'rooms',                 field_value: data.rooms },
        { key: 'bathroom_dimensions',   field_value: data.dims },
        { key: 'floor_plans_available', field_value: data.plans },
        { key: 'freestanding_bath',     field_value: data.bath },
        { key: 'bath_mixer_type',       field_value: data.bathMixer },
        { key: 'separate_toilet',       field_value: data.toilet },
        { key: 'skylight',              field_value: data.skylight },
        { key: 'heated_towel_rail',     field_value: data.htr },
        { key: 'underfloor_heating',    field_value: data.ufh },
        { key: 'vanity_powerpoints',    field_value: data.pp },
        { key: 'shower_niche',          field_value: data.niche },
        { key: 'nib_wall',             field_value: data.nib },
        { key: 'shower_seat',           field_value: data.seat },
        { key: 'shower_screen_glass',   field_value: data.glass },
        { key: 'bathroom_style',        field_value: data.styleName },
        { key: 'vanity_layout_variant', field_value: data.variantName },
        { key: 'vanity_mount_type',     field_value: data.vanityMount },
        { key: 'custom_vanity',         field_value: data.customVan },
        { key: 'cabinetry_selection',   field_value: data.s4['Cabinetry'] || '—' },
        { key: 'benchtop_selection',    field_value: data.s4['Benchtop'] || '—' },
        { key: 'mirror_selection',      field_value: data.s4['Mirror'] || '—' },
        { key: 'floor__wall_tile',      field_value: data.s5['Floor & Wall Tile'] || '—' },
        { key: 'feature_wall',          field_value: data.s5['Feature Wall'] || '—' },
        { key: 'grout_colour',          field_value: data.grout },
        { key: 'tapware_finish',        field_value: data.tapFinish },
        { key: 'tapware_selection',     field_value: data.s6['Tapware'] || '—' },
        { key: 'basin_selection',       field_value: data.s6['Basin'] || '—' },
        { key: 'mirror_tapware_step',   field_value: data.s6['Mirror'] || '—' },
        { key: 'shower_head_selection', field_value: data.s7['Shower Head'] || '—' },
        { key: 'hardware_finish',       field_value: data.hwFinish },
        { key: 'wall_lights',           field_value: data.wallLights },
        { key: 'backlit_mirror',        field_value: data.backlitMirror },
        { key: 'led_strip_niche',       field_value: data.ledNiche },
        { key: 'led_strip_vanity',      field_value: data.ledVan },
        { key: 'extra_notes',           field_value: data.notes || '' },
      ].filter(f => f.field_value && f.field_value !== '—'),
    };

    const response = await fetch(GHL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMsg = `API error ${response.status}`;
      try {
        const errorBody = await response.json();
        errorMsg = Array.isArray(errorBody.message) ? errorBody.message[0] : (errorBody.message || errorMsg);
      } catch (_) {}
      throw new Error(errorMsg);
    }

    return response.json();
  };

  const buildSummary = () => {
    const data = collectData();
    setSummaryData(data);
    return data;
  };

  const goToStep = (step) => {
    if (step >= 4 && step <= 7 && !style) return;
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step === 9) buildSummary();
  };

  // ── Submit — validates email from React state before calling GHL ──────────
  const submitForm = async () => {
    setSubmitError(null);

    // Validate email directly from React state — reliable, no DOM needed
    const emailValue = (formFields.email || '').trim();
    if (!emailValue || !emailValue.includes('@') || !emailValue.includes('.')) {
      setSubmitError('Please go back to Step 1 and enter a valid email address before submitting.');
      return;
    }

    setIsSubmitting(true);

    const data = buildSummary();

    try {
      await submitToGHL(data);
      setIsSubmitted(true);
      setCurrentStep(9);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('GHL submission failed:', err);
      setSubmitError(err.message || 'There was a problem submitting your brief. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const startOver = () => {
    setStyle(null);
    setVariant(null);
    setSelections({ s4sel: {}, s5sel: {}, s6sel: {}, s7sel: {}, groutColour: null, tapFinish: null, hwFinish: null });
    setFormFields({ fname: '', lname: '', email: '', phone: '', address: '', projectType: '', budget: '', ctEnsuite: '0', ctBathroom: '0', ctPowder: '0', bathW: '', bathL: '', bathH: '', notes: '' });
    setPillSelections({ bathMixer: '', glassGrp: '', vanityMount: '' });
    setYnSelections({ plans: '', bath: '', toilet: '', sky: '', htr: '', ufh: '', pp: '', niche: '', nib: '', seat: '', customVan: '', wl: '', bm: '', ledNiche: '', ledVan: '' });
    setIsSubmitted(false);
    setSubmitError(null);
    setSummaryData(null);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SummaryGrid = ({ data }) => (
    <div className="sum-grid">
      <div className="sum-block"><div className="sb-lbl">Client</div><div className="sb-val">{data.fname} {data.lname}</div></div>
      <div className="sum-block"><div className="sb-lbl">Contact</div><div className="sb-val">{data.email || '—'}<br />{data.phone || '—'}</div></div>
      <div className="sum-block"><div className="sb-lbl">Project Type</div><div className="sb-val">{data.projectType || '—'}</div></div>
      <div className="sum-block"><div className="sb-lbl">Budget</div><div className="sb-val">{data.budget || '—'}</div></div>
      <div className="sum-block full"><div className="sb-lbl">Selected Style</div><div className="sb-val big">{data.styleName}</div></div>
      <div className="sum-block"><div className="sb-lbl">Rooms</div><div className="sb-val">{data.rooms}</div></div>
      <div className="sum-block"><div className="sb-lbl">Dimensions</div><div className="sb-val">{data.dims}</div></div>
      <div className="sum-block"><div className="sb-lbl">Floor Plans</div><div className="sb-val">{data.plans}</div></div>
      <div className="sum-block"><div className="sb-lbl">Vanity Mount</div><div className="sb-val">{data.vanityMount}</div></div>
      <div className="sum-block"><div className="sb-lbl">Shower Screen</div><div className="sb-val">{data.glass}</div></div>
      <div className="sum-block"><div className="sb-lbl">Tapware Finish</div><div className="sb-val">{data.tapFinish}</div></div>
      <div className="sum-block"><div className="sb-lbl">Grout Colour</div><div className="sb-val">{data.grout}</div></div>
      <div className="sum-block"><div className="sb-lbl">Hardware Finish</div><div className="sb-val">{data.hwFinish}</div></div>
      <div className="sum-block full"><div className="sb-lbl">Features</div><div className="sb-val" style={{ fontSize: '12px' }}>
        Bath: {data.bath} · Bath Mixer: {data.bathMixer}<br />
        Toilet: {data.toilet} · Skylight: {data.skylight}<br />
        HTR: {data.htr} · UFH: {data.ufh} · Powerpoints: {data.pp}
      </div></div>
      <div className="sum-block full"><div className="sb-lbl">Shower</div><div className="sb-val" style={{ fontSize: '12px' }}>
        Niche: {data.niche} · Nib Wall: {data.nib}<br />
        Seat: {data.seat} · Glass: {data.glass}
      </div></div>
      <div className="sum-block full"><div className="sb-lbl">Lighting</div><div className="sb-val" style={{ fontSize: '12px' }}>
        Wall: {data.wallLights} · Backlit: {data.backlitMirror}<br />
        LED Niche: {data.ledNiche} · LED Vanity: {data.ledVan}
      </div></div>
      {data.notes && <div className="sum-block full"><div className="sb-lbl">Notes</div><div className="sb-val" style={{ fontSize: '13px' }}>{data.notes}</div></div>}
    </div>
  );

  const renderStepContent = () => {
    if (isSubmitted && currentStep === 9) {
      return (
        <div className="step active">
          <div className="sum-hdr">
            <div>
              <div className="sum-eyebrow">Brief Complete</div>
              <div className="sum-title">{summaryData?.fname ? `${summaryData.fname}'s design brief is ready.` : 'Your design brief is ready.'}</div>
              <div className="sum-sub">The Perrem team will review and be in touch shortly.</div>
            </div>
            <div className="sum-tick">✓</div>
          </div>
          {summaryData && <SummaryGrid data={summaryData} />}
          <div className="email-note">A copy of this brief has been sent to the email address you provided.</div>
          <div className="nav-bar" style={{ border: 'none', marginTop: '18px' }}>
            <button className="btn btn-secondary" onClick={startOver}>← Start New Brief</button>
            <button className="btn btn-cyan" onClick={() => window.print()}>Print / Save PDF</button>
          </div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 01 — Client Details</div>
            <div className="step-title">Tell us about yourself</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">We'll use these details to prepare your personalised design brief.</p>
            <div className="sc">
              <div className="sc-label">Your Details</div>
              <div className="fg">
                <div className="field">
                  <label>First Name</label>
                  <input type="text" value={formFields.fname} onChange={e => updateField('fname', e.target.value)} placeholder="e.g. Sarah" />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" value={formFields.lname} onChange={e => updateField('lname', e.target.value)} placeholder="e.g. Thompson" />
                </div>
                <div className="field">
                  <label>Email Address <span style={{ color: '#e74c3c' }}>*</span></label>
                  <input type="email" value={formFields.email} onChange={e => updateField('email', e.target.value)} placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input type="tel" value={formFields.phone} onChange={e => updateField('phone', e.target.value)} placeholder="04XX XXX XXX" />
                </div>
                <div className="field s2">
                  <label>Project Address</label>
                  <input type="text" value={formFields.address} onChange={e => updateField('address', e.target.value)} placeholder="Street address, Suburb NSW XXXX" />
                </div>
              </div>
            </div>
            <div className="sc">
              <div className="sc-label">Your Project</div>
              <div className="fg">
                <div className="field">
                  <label>Project Type</label>
                  <select value={formFields.projectType} onChange={e => updateField('projectType', e.target.value)}>
                    <option value="">Select one...</option>
                    <option>New Build</option>
                    <option>Renovation</option>
                    <option>Extension</option>
                    <option>Knockdown Rebuild</option>
                  </select>
                </div>
                <div className="field">
                  <label>Estimated Budget</label>
                  <select value={formFields.budget} onChange={e => updateField('budget', e.target.value)}>
                    <option value="">Select range...</option>
                    <option>Under $20,000</option>
                    <option>$20,000 – $35,000</option>
                    <option>$35,000 – $60,000</option>
                    <option>$60,000 – $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="nav-bar">
              <span></span>
              <span className="step-count">Step 1 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(2)}>Continue →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 02 — The Space</div>
            <div className="step-title">About the bathroom</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">Help us understand the space we're designing.</p>
            <div className="sc">
              <div className="sc-label">Rooms in This Project</div>
              <table className="room-table">
                <thead><tr><th>Room Type</th><th>How Many?</th></tr></thead>
                <tbody>
                  <tr>
                    <td>Ensuite</td>
                    <td>
                      <select value={formFields.ctEnsuite} onChange={e => updateField('ctEnsuite', e.target.value)}>
                        <option value="0">0</option><option>1</option><option>2</option><option>3</option><option>4</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Bathroom</td>
                    <td>
                      <select value={formFields.ctBathroom} onChange={e => updateField('ctBathroom', e.target.value)}>
                        <option value="0">0</option><option>1</option><option>2</option><option>3</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Powder Room</td>
                    <td>
                      <select value={formFields.ctPowder} onChange={e => updateField('ctPowder', e.target.value)}>
                        <option value="0">0</option><option>1</option><option>2</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sc">
              <div className="sc-label">Dimensions</div>
              <div className="fg three">
                <div className="field">
                  <label>Width (mm)</label>
                  <input type="number" value={formFields.bathW} onChange={e => updateField('bathW', e.target.value)} placeholder="e.g. 2400" />
                </div>
                <div className="field">
                  <label>Length (mm)</label>
                  <input type="number" value={formFields.bathL} onChange={e => updateField('bathL', e.target.value)} placeholder="e.g. 3200" />
                </div>
                <div className="field">
                  <label>Height (mm)</label>
                  <input type="number" value={formFields.bathH} onChange={e => updateField('bathH', e.target.value)} placeholder="e.g. 2700" />
                </div>
              </div>
              <div className="field" style={{ marginTop: '13px' }}>
                <label>Do we have floor plans / architecturals for this project?</label>
                <YNGroup stateKey="plans" options={['Yes', 'No', 'In Progress']} />
              </div>
            </div>
            <div className="sc">
              <div className="sc-label">Features</div>
              <div className="fg">
                <div className="field">
                  <label>Freestanding Bath?</label>
                  <YNGroup stateKey="bath" options={['Yes', 'No', 'Maybe']} />
                </div>
                <div className="field">
                  <label>Bath Mixer Type</label>
                  <PillGroup stateKey="bathMixer" options={['Floor Mounted', 'Wall Mounted', 'N/A — No Bath']} />
                </div>
                <div className="field">
                  <label>Separate Toilet?</label>
                  <YNGroup stateKey="toilet" options={['Yes', 'No']} />
                </div>
                <div className="field">
                  <label>Skylight Planned?</label>
                  <YNGroup stateKey="sky" options={['Yes', 'No', 'Maybe']} />
                </div>
                <div className="field">
                  <label>Heated Towel Rail?</label>
                  <YNGroup stateKey="htr" options={['Yes', 'No']} />
                </div>
                <div className="field">
                  <label>Underfloor Heating?</label>
                  <YNGroup stateKey="ufh" options={['Yes', 'No', 'Maybe']} />
                </div>
                <div className="field">
                  <label>Powerpoints in Vanity Drawers?</label>
                  <YNGroup stateKey="pp" options={['Yes', 'No']} />
                </div>
              </div>
            </div>
            <div className="sc">
              <div className="sc-label">Shower Details</div>
              <div className="fg">
                <div className="field">
                  <label>Shower Niche?</label>
                  <YNGroup stateKey="niche" options={['Yes', 'No', 'Maybe']} />
                </div>
                <div className="field">
                  <label>Half Height Nib Wall?</label>
                  <YNGroup stateKey="nib" options={['Yes', 'No', 'Maybe']} />
                </div>
                <div className="field">
                  <label>Built-in Shower Seat?</label>
                  <YNGroup stateKey="seat" options={['Yes', 'No', 'Maybe']} />
                </div>
                <div className="field">
                  <label>Shower Screen Glass</label>
                  <PillGroup stateKey="glassGrp" options={['Clear Glass', 'Fluted Glass', 'Not Sure Yet']} />
                </div>
              </div>
            </div>
            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(1)}>← Back</button>
              <span className="step-count">Step 2 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(3)}>Continue →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 03 — Design Direction</div>
            <div className="step-title">Choose your style</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">Select the aesthetic that best reflects how you want your bathroom to feel.</p>
            <div className="style-grid">
              {styleOptions.map(opt => (
                <div key={opt.key} className={`style-card ${style === opt.key ? 'selected' : ''}`} onClick={() => selectStyle(opt.key)}>
                  <div className="style-img-wrap">
                    <img src={opt.img} alt={opt.name} className="style-img" loading="lazy" />
                  </div>
                  <div className="style-card-body">
                    <div className="style-card-name">{opt.name}</div>
                    <div className="style-card-desc">{opt.desc}</div>
                    <div className="colour-strip">
                      {opt.colors.map((c, i) => <div key={i} className="cs" style={{ background: c }}></div>)}
                    </div>
                  </div>
                  {style === opt.key && <div className="style-check">✓</div>}
                </div>
              ))}
            </div>
            {style && STYLES[style]?.variants && (
              <div className="variant-panel visible">
                <div className="variant-lbl">This style has two vanity layout options — which suits your space?</div>
                <div className="variant-opts">
                  {STYLES[style].variants.map(v => (
                    <div key={v.id} className={`variant-opt ${variant === v.id ? 'selected' : ''}`} onClick={() => selectVariant(v.id)}>
                      <div className="variant-opt-name">{v.name}</div>
                      <div className="variant-opt-desc">{v.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(2)}>← Back</button>
              <span className="step-count">Step 3 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(4)}>Continue →</button>
            </div>
          </div>
        );

      case 4:
        if (!style) return (
          <div className="step active">
            <div className="no-style-msg"><span>⬅</span> Please go back to Step 3 and choose a design style first.</div>
            <div className="nav-bar"><button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button></div>
          </div>
        );
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 04 — Vanity</div>
            <div className="step-title">Vanity, benchtop &amp; mirror</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">{STYLES_WITH_OVERRIDES[style].name} — exact products and suppliers shown for each option.</p>
            <div className="sc" style={{ marginBottom: '14px' }}>
              <div className="sc-label">Vanity Configuration</div>
              <div className="fg">
                <div className="field">
                  <label>Wall Hung or Floor Mounted?</label>
                  <PillGroup stateKey="vanityMount" options={['Wall Hung', 'Floor Mounted', 'Not Sure Yet']} />
                </div>
                <div className="field">
                  <label>Fully Custom Vanity?</label>
                  <YNGroup stateKey="customVan" options={['Yes — Discuss with Perrem', 'No']} />
                </div>
              </div>
            </div>
            {renderOptionGrid('s4', 's4sel')}
            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back</button>
              <span className="step-count">Step 4 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(5)}>Continue →</button>
            </div>
          </div>
        );

      case 5:
        if (!style) return (
          <div className="step active">
            <div className="no-style-msg"><span>⬅</span> Please go back to Step 3 and choose a design style first.</div>
            <div className="nav-bar"><button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button></div>
          </div>
        );
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 05 — Tiling</div>
            <div className="step-title">Tiles &amp; surfaces</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">{STYLES_WITH_OVERRIDES[style].name} — select your tile and grout direction.</p>
            {renderOptionGrid('s5', 's5sel')}
            <div className="sc">
              <div className="sc-label">Grout Colour — Ardex Range</div>
              <p className="field-note" style={{ marginBottom: '12px' }}>Our recommendation for your selected style is highlighted.</p>
              {renderGroutSwatches()}
            </div>
            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(4)}>← Back</button>
              <span className="step-count">Step 5 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(6)}>Continue →</button>
            </div>
          </div>
        );

      case 6:
        if (!style) return (
          <div className="step active">
            <div className="no-style-msg"><span>⬅</span> Please go back to Step 3 and choose a design style first.</div>
            <div className="nav-bar"><button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button></div>
          </div>
        );
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 06 — Tapware &amp; Basin</div>
            <div className="step-title">Tapware &amp; basin</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">{STYLES_WITH_OVERRIDES[style].name} — select your tapware and basin.</p>
            <div className="sc" style={{ marginBottom: '14px' }}>
              <div className="sc-label">Tapware Finish</div>
              <p className="field-note" style={{ marginBottom: '12px' }}>Our recommendation for your style is highlighted.</p>
              {renderTapSwatches()}
            </div>
            {renderOptionGrid('s6', 's6sel')}
            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(5)}>← Back</button>
              <span className="step-count">Step 6 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(7)}>Continue →</button>
            </div>
          </div>
        );

      case 7:
        if (!style) return (
          <div className="step active">
            <div className="no-style-msg"><span>⬅</span> Please go back to Step 3 and choose a design style first.</div>
            <div className="nav-bar"><button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button></div>
          </div>
        );
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 07 — Shower</div>
            <div className="step-title">Shower setup</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">{STYLES_WITH_OVERRIDES[style].name} — select your shower head configuration.</p>
            {renderOptionGrid('s7', 's7sel')}
            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(6)}>← Back</button>
              <span className="step-count">Step 7 of 8</span>
              <button className="btn btn-primary" onClick={() => goToStep(8)}>Continue →</button>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="step active">
            <div className="step-eyebrow">Step 08 — Finishing Touches</div>
            <div className="step-title">Hardware &amp; accessories</div>
            <div className="cyan-bar"></div>
            <p className="step-sub">Final details to complete your brief.</p>
            <div className="sc">
              <div className="sc-label">Hardware Accessories Finish</div>
              <p className="field-note" style={{ marginBottom: '12px' }}>Towel rails, robe hooks, toilet roll holders. Select your preferred finish.</p>
              {renderHwSwatches()}
            </div>
            <div className="sc">
              <div className="sc-label">Lighting</div>
              <div className="fg three">
                <div className="field">
                  <label>Wall Lights</label>
                  <YNGroup stateKey="wl" options={['Yes', 'No']} />
                </div>
                <div className="field">
                  <label>Backlit Mirror</label>
                  <YNGroup stateKey="bm" options={['Yes', 'No']} />
                </div>
                <div className="field">
                  <label>LED Strip — Niche / Nib</label>
                  <YNGroup stateKey="ledNiche" options={['Yes', 'No']} />
                </div>
                <div className="field">
                  <label>LED Strip — Under Vanity</label>
                  <YNGroup stateKey="ledVan" options={['Yes', 'No']} />
                </div>
              </div>
            </div>
            <div className="sc">
              <div className="sc-label">Additional Notes</div>
              <div className="field">
                <label>Anything else we should know?</label>
                <textarea
                  value={formFields.notes}
                  onChange={e => updateField('notes', e.target.value)}
                  placeholder="Special requirements, constraints, inspiration references, questions..."
                />
              </div>
            </div>

            {/* Email warning if empty */}
            {!(formFields.email || '').includes('@') && (
              <div style={{ margin: '16px 0', padding: '12px 16px', background: '#fff8e1', border: '1px solid #ffe082', borderRadius: '8px', color: '#7a5800', fontSize: '13px' }}>
                ⚠ No valid email detected — please go back to Step 1 and enter your email before submitting.
              </div>
            )}

            {/* Error message */}
            {submitError && (
              <div style={{ margin: '16px 0', padding: '14px 18px', background: '#fff0f0', border: '1px solid #ffcccc', borderRadius: '8px', color: '#cc0000', fontSize: '14px' }}>
                ⚠ {submitError}
              </div>
            )}

            <div className="nav-bar">
              <button className="btn btn-secondary" onClick={() => goToStep(7)} disabled={isSubmitting}>← Back</button>
              <span className="step-count">Step 8 of 8</span>
              <button
                className="btn btn-cyan"
                onClick={submitForm}
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Submitting…' : 'Complete My Brief →'}
              </button>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="step active">
            <div className="sum-hdr">
              <div>
                <div className="sum-eyebrow">Brief Complete</div>
                <div className="sum-title">Your design brief is ready.</div>
                <div className="sum-sub">The Perrem team will review and be in touch shortly.</div>
              </div>
              <div className="sum-tick">✓</div>
            </div>
            {summaryData && <SummaryGrid data={summaryData} />}
            <div className="email-note">A copy of this brief has been sent to the email address you provided.</div>
            <div className="nav-bar" style={{ border: 'none', marginTop: '18px' }}>
              <button className="btn btn-secondary" onClick={startOver}>← Start New Brief</button>
              <button className="btn btn-cyan" onClick={() => window.print()}>Print / Save PDF</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bathroom-portal">
      <header className="site-header">
        <div className="logo-wrap">
          <div className="logo-name">Perrem</div>
          <div className="logo-div"></div>
          <div className="logo-sub">Design &amp; Construction</div>
        </div>
        <div className="header-tag">Bathroom Design Portal</div>
        <div className="version-badge">v3</div>
      </header>

      <div className="progress-outer">
        <div className="progress-inner">
          {steps.map(step => (
            <div
              key={step.num}
              className={`prog-step ${currentStep === step.num ? 'active' : ''} ${currentStep > step.num ? 'done' : ''}`}
              onClick={() => goToStep(step.num)}
            >
              <div className="prog-dot">{currentStep > step.num ? '✓' : step.num}</div>
              <div className="prog-label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="funnel-wrap">
        {renderStepContent()}
      </div>
    </div>
  );
}

export default Bathroom;