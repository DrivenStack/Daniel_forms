import { useState, useEffect, useRef } from 'react';
import './Kitchen.css';

// Warm Japandi — Step 4
import wjDoorFlat from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Flat  Slab Door.jpeg';
import wjDoorRattan from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Rattan Insert Panel.jpeg';
import wjCabFlorentine from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Florentine Walnut (Polytec Woodmatt).jpg';
import wjCabNotaio from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Notaio Walnut (Polytec Woodmatt).jpg';
import wjCabWalnutCrown from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Walnut Crown Cut (George Fethers).jpg';
import wjCabOak from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Oak with Clear Stain (Farmers Doors).jpg';
import wjBenchMorocca from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Morocca — Stone Ambassador Vasari.png';
import wjBenchSavoy from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Savoy Ivory — Stone Ambassador Vasari.png';
import wjBenchHaze from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Haze Ivory — Stone Ambassador Vasari.png';
import wjBenchNacre from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Nacre Dekton — Cosentino.png';
import wjBenchTaj from '../assets/kitchen images/Warm Japandi/Step 4 - Cabinetry & Benchtops/Taj Mahal Quartzite — CDK Stone.jpeg';
// Warm Japandi — Step 5
import wjSplashKayo from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Kayoborder 87288 — Academy Tiles.jpg';
import wjSplashHouAmber from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Houston Amber — Perini Tiles.jpg';
import wjSplashHouVanilla from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Houston Vanilla — Perini Tiles.jpg';
import wjSplash245J from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/245J Hanten Sugie — Artedomus.jpg';
import wjSplashMemphis from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Memphis Travertine Dune — Perini.jpg';
import wjFloorChestnut from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Chestnut — Made by Storey.jpeg';
import wjFloorNutmeg from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Nutmeg — Made by Storey.jpeg';
import wjFloorWalnut from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Walnut — George Fethers Maison.jpg';
import wjFloorNacreDek from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Nacre Dekton — Cosentino.png';
import wjFloorFoster from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Foster Beige 600x600 — Perini Tiles.jpeg';
import wjFloorKhaki from '../assets/kitchen images/Warm Japandi/Step 5 - Splashback & Floor/Khaki Jam — Fibonacci Terrazzo.png';
// Warm Japandi — Step 6
import wjTapGooseneckSq from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Gooseneck Square Mixer Gunmetal — Reece Mizu Drift.jpeg';
import wjTapGooseneckCv from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Gooseneck Curve Mixer Gunmetal — Reece Mizu Drift.jpeg';
import wjTapBlix from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Blix Flexible Hose Mixer Brushed Carbon — Phoenix.jpg';
import wjTapPiccola from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Round Piccola Pull-Out Champagne — Meir.png';
import wjSinkLavelloSingle from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Lavello Single + Drain Gunmetal — Meir.png';
import wjSinkLavelloDouble from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Lavello Double + Drain Brushed Nickel — Meir.png';
import wjSinkSonetto from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Lavello Double + Drain Brushed Nickel — Meir.png';
import wjSinkDouble from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Double Bowl Brushed Nickel — Meir.png';
import wjSinkChicama from '../assets/kitchen images/Warm Japandi/Step 6 - Tapware & Sinks/Chicama Thin Wave 256mm Walnut — Touch Handles.jpeg';
// Warm Japandi — Step 7
import wjHwChicama from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/2BY4 LED Linear Walnut — About Space.jpeg';
import wjHwTimberDish from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Timber Dished Semi Round — Touch Handles.jpeg';
import wjHwCadello from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Cadello Crest Timber Ebony — Touch Handles.jpeg';
import wjHwLeo from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Leo Timber Knob Spotted Gum — Touch Handles.jpeg';
import wjHwBevelled from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Bevelled Edge Finger Pull.jpeg';
import wjPendBubble from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Bubble Lamps — George Nelson  Living Edge.jpeg';
import wjPendJuly from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/July 1 Round Textured Chalk — Beacon.jpeg';
import wjPendCalido from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Calido Flare — Beacon Lighting.jpeg';
import wjPendTapa from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Tapa Pendant Bone — Robert Gordon.jpeg';
import wjWallApparition from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Apparition — Dulux.png';
import wjWallBeige from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Beige Royal Quarter — Dulux.png';
import wjWallNatural from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Natural White — Dulux.png';
import wjWallClay from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Clay Pipe — Dulux.png';
import wjPanelBone from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Bone Limewash — Bauwerk Colour.jpeg';
import wjPanelCalm from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Calm Limewash — Bauwerk Colour.png';
import wjPanelStill from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/Still Limewash — Bauwerk Colour.png';
import wjPend2BY4 from '../assets/kitchen images/Warm Japandi/Step 7 - Hardware & Lighting/2BY4 LED Linear Walnut — About Space.jpeg';

// Timeless Ease — Step 4
import teDoorSussex from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Sussex Shaker — Polytec.jpg';
import teDoorCalcutta from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Calcutta 35 Profile — Polytec.jpg';
import teDoorFlat from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Flat  Slab Door.jpeg';
import teCabRawCotton from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Raw Cotton Natural — Laminex.jpeg';
import teCabGossamer from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Gossamer White Smooth — Polytec.jpeg';
import teCabPaperbark from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Paperbark Absolute Matte — Laminex.jpeg';
import teCabCoastalOak from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Coastal Oak Woodmatt — Polytec.jpeg';
import teBenchStatuario from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Statuario Maximus — Caesarstone.jpeg';
import teBenchCalacatta from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Calacatta Nuvo — Caesarstone.jpeg';
import teBenchCloudburst from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/Cloudburst Concrete — Caesarstone.jpeg';
import teBenchWhiteTruffle from '../assets/kitchen images/Timeless Ease/Step 4 - Cabinetry & Benchtops/White Truffle Zenith — Stone Ambassador.jpeg';
// Timeless Ease — Step 5
import teSplashTully from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Tully Heads Carrara Herringbone — Tile Cloud.png';
import teSplashMallorca from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Mallorca Subway Matt White — Porcelain RMS.jpeg';
import teSplashJapanese from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Japanese Impressions Snow — National Tiles.jpeg';
import teFloorGosford from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Gosford — Havwoods Pure Plank.jpeg';
import teFloorMosman from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Mosman Herringbone — Havwoods V Collection.jpeg';
import teFloorVerona from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Verona Crema Matt 600x600 — National Tiles.jpeg';
import teFloorPaddington from '../assets/kitchen images/Timeless Ease/Step 5 - Splashback & Floor/Paddington White Terrazzo — Tile Cloud.jpeg';
// Timeless Ease — Step 6
import teTapNamika from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Namika Kitchen Mixer Brushed Brass — ABI Interiors.jpeg';
import teTapElysian from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Elysian Mixer Brushed Brass — ABI Interiors.jpeg';
import teTapElysianPO from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Elysian Commercial Pull-Out Brushed Brass — ABI.jpeg';
import teTapSussex from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Sussex Scala Oyster Nickel — Reece.jpeg';
import teSinkLavello from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Lavello Single + Drain — Meir.jpeg';
import teSinkAndano from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Andano 400-400-IF Undermount — Blanco.jpeg';
import teSinkSonetto from '../assets/kitchen images/Timeless Ease/Step 6 - Tapware & sinks/Sonetto Double Universal — Oliveri.jpeg';
// Timeless Ease — Step 7
import teHwBrera from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Brera Handle Aged Brass — Lo & Co.jpeg';
import teHwIsla from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Isla Pull XL Aged Brass — Lo & Co.jpeg';
import teHwSphere from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Sphere Knob Aged Brass — Lo & Co.jpeg';
import teHwImogen from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Imogen Oval Pull Aged Brass — Manovella.jpeg';
import tePendJuly from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/July 1 Round Textured Chalk — Beacon.jpeg';
import tePendTapa from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Tapa Pendant Bone — Robert Gordon.jpeg';
import tePendMasson from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Masson Bianco Ribbed Wall Sconce — Beacon.jpeg';
import tePendBallare from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Ballare 600mm Pendant Gypsum — Beacon.jpeg';
import teWallAntique from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Antique White USA — Dulux.png';
import teWallNatural from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Natural White — Dulux.png';
import teWallLexicon from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Lexicon Quarter — Dulux.png';
import teWallBone from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Bone Limewash — Bauwerk Colour.jpeg';
import tePanelEasyVJ from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/EasyVJ100 — EasyCraft.jpg';
import tePanelSurround from '../assets/kitchen images/Timeless Ease/Step 7 - Hardware & Light/Surround Heritage — Laminex.jpeg';

// Light & Airy — Step 4
import laDoorGossamer from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Gossamer White Smooth — Polytec.jpg';
import laDoorAston from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Aston White Smooth — Polytec.jpg';
import laDoorAlumClear from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Aluminium Framed Clear Glass Insert — Polytec.jpg';
import laDoorAlumFluted from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Aluminium Framed Fluted Glass — Polytec.jpg';
import laCabBlossom from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Blossom White Smooth — Polytec.jpg';
import laCabCasper from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Dulux Casper White Quarter — Painted.png';
import laBenchCosmo from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Cosmopolitan White — Caesarstone.png';
import laBenchBrillianza from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Brillianza — Caesarstone.jpeg';
import laBenchCloudburst from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/Cloudburst Concrete — Caesarstone.jpeg';
import laBenchWhiteTruffle from '../assets/kitchen images/Light & Airy/Step 4 - Cabinetry & benchtops/White Truffle Zenith — Stone Ambassador.png';
// Light & Airy — Step 5
import laSplashCoralBay from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Coral Bay Gloss White Fish Scale — Tile Cloud.png';
import laSplashWhoosh from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Whoosh White Matt — National Tiles.png';
import laSplashResort from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Resort White Matt — National Tiles.png';
import laSplashMallorca from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Mallorca Subway Matt White — Porcelain RMS.jpg';
import laSplashBenchtop from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Benchtop stone extended to wall.jpeg';
import laFloorCopenhagen from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Copenhagen White — Woodcut Grande Ville.jpg';
import laFloorSeaSalt from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Sea Salt — Woodcut.jpeg';
import laFloorPaddington from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Paddington White Terrazzo — Tile Cloud.png';
import laFloorStirling from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Stirling White Terrazzo — Tile Cloud.png';
import laFloorSydney from '../assets/kitchen images/Light & Airy/Step 5 - Splashback & flooring/Sydney Matt White Stone Look — Tile Cloud.png';
// Light & Airy — Step 6
import laTapElysian from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Elysian Mixer Brushed Nickel — ABI Interiors.jpeg';
import laTapCross from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Cross Assembly Bench Mount White — ABI.jpeg';
import laTapEden from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Eden Square Mixer Brushed Nickel — ABI.jpeg';
import laTapNuage from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Nuage Pull-Out Mixer White — Phoenix.jpg';
import laTapGooseneck from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Gooseneck with Paddle Handle — Meir.png';
import laSinkAndano from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Andano 400-400-IF Undermount — Blanco.jpg';
import laSinkClaron from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Claron 700U Single Bowl — Blanco.png';
import laSinkVienna from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Vienna Single 630 White Granite — ABI.jpg';
import laSinkSonetto from '../assets/kitchen images/Light & Airy/Step 6 - Tapware & Sinks/Sonetto Single Topmount — Oliveri.jpeg';
// Light & Airy — Step 7
import laHwCarlisle from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Carlisle Pull White — Lo & Co.png';
import laHwTango from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Tango Knob White — Linear Standard.png';
import laHwStrand from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Strand White Handle — Linear Standard.png';
import laHwRiss from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Riss Big D Matt White — Momo Handles.png';
import laHwBevelled from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Bevelled Edge Finger Pull.jpeg';
import laPendCrescent from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Crescent LED Surface Mounted Downlight White — Beacon.png';
import laPendMila from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Mila GU10 Round Surface Mount White — Beacon.png';
import laPendDomeOkina from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Dome Pendant Okina Cream — Lighting Collective.png';
import laPendDomeStone from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Dome Pendant Stone — Lighting Collective.jpeg';
import laWallLexicon from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Lexicon Quarter — Dulux.png';
import laWallVivid from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Vivid White — Dulux.png';
import laWallNatural from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Natural White — Dulux.png';
import laWallLimed from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Limed White Quarter — Dulux.png';
import laPanelChalk from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/Chalk Limewash — Bauwerk Colour.png';
import laPanelEasyVJ from '../assets/kitchen images/Light & Airy/Step 7 - Hardware & Light/EasyVJ100 — EasyCraft.jpg';

// Coastal Natural — Step 4
import cnDoorSussex from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Sussex Shaker — Polytec (White or Sage Green).jpeg';
import cnDoorGossamer from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Gossamer White Smooth — Polytec.jpeg';
import cnDoorSlimOak from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Slimlined Natural Oak — Farmers Doors.jpg';
import cnDoorRattan from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Rattan Panel Insert.jpeg';
import cnCabBlossom from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Blossom White Smooth — Polytec.png';
import cnCabPaperbark from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Paperbark Absolute Matte — Laminex.jpeg';
import cnCabSage from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Sage Green Painted (Dulux Waitangi).png';
import cnBenchCosmo from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Cosmopolitan White — Caesarstone.jpeg';
import cnBenchCloudburst from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Cloudburst Concrete — Caesarstone.jpeg';
import cnBenchWhiteTruffle from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/White Truffle Zenith — Stone Ambassador.jpeg';
import cnBenchCrema from '../assets/kitchen images/Coastal Natural/Step 4 - Cabinetry & Benchtops/Crema Perla Honed — Artedomus.jpeg';
// Coastal Natural — Step 5
import cnSplashCoralBay from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Coral Bay Gloss White Fish Scale — Tile Cloud.jpeg';
import cnSplashTully from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Tully Heads Carrara Herringbone — Tile Cloud.jpeg';
import cnSplashJapanese from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Japanese Impressions Snow — National Tiles.jpeg';
import cnSplashYubi from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Yubi White Speckle Matt — Perini Tiles.jpeg';
import cnSplashMallorca from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Mallorca Subway Matt White — Porcelain RMS.jpeg';
import cnFloorAspen from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Aspen Raw 19mm Character — Havwoods.jpeg';
import cnFloorSeaSalt from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Sea Salt — Woodcut.jpeg';
import cnFloorCloud from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Cloud — Made by Storey.jpeg';
import cnFloorPaleOak from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Pale Oak — Woodcut.jpeg';
import cnFloorPaddington from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Paddington White Terrazzo 600x600 — Tile Cloud.jpeg';
import cnFloorStirling from '../assets/kitchen images/Coastal Natural/Step 5 - Splashback & floor/Stirling White Terrazzo 600x600 — Tile Cloud.jpeg';
// Coastal Natural — Step 6
import cnTapNamika from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Namika Kitchen Mixer Brushed Brass — ABI.jpeg';
import cnTapElysian from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Elysian Mixer Brushed Brass — ABI Interiors.jpeg';
import cnTapPiccola from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Round Piccola Pull-Out Champagne — Meir.jpeg';
import cnTapOasis from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Oasis Kitchen Mixer Brushed Nickel — Highgrove.png';
import cnSinkLavelloSingle from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Lavello Single + Drain Gunmetal — Meir.jpeg';
import cnSinkLavelloDouble from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Lavello Double + Drain Brushed Nickel — Meir.jpeg';
import cnSinkClark from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Clark Monaco Double Undermount — Turner Hastings.jpeg';
import cnSinkAndano from '../assets/kitchen images/Coastal Natural/Step 6 - Tapware & sinks/Andano 400-400-IF Undermount — Blanco.jpeg';
// Coastal Natural — Step 7
import cnHwDot from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Dot Travertine Handle Small — Lo & Co.jpeg';
import cnHwArc from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Arc Travertine Handle — Lo & Co.jpeg';
import cnHwFlow from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Flow Bow Handle Natural Brass — Touch Handles.jpeg';
import cnHwImogen from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Imogen Oval Pull Aged Brass — Manovella.jpeg';
import cnPendRattan from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Rattan Dome Pendant (Natural unbleached).jpeg';
import cnPendCalido from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Calido Flare — Beacon Lighting.jpeg';
import cnPendCalidoRaffia from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Calido Tier in Raffia — Beacon Lighting.jpeg';
import cnPendTapa from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Tapa Pendant Bone — Robert Gordon.jpeg';
import cnWallLexicon from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Lexicon Quarter — Dulux.png';
import cnWallNarrow from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Narrow Neck Quarter — Dulux.png';
import cnWallSnow from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Snow Season — Dulux.png';
import cnWallChalk from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/Chalk Limewash — Bauwerk Colour.png';
import cnPanelEasyVJ from '../assets/kitchen images/Coastal Natural/Step 7 - Hardware & light/EasyVJ100 — EasyCraft.jpg';

// ─────────────────────────────────────────────────────────────────────────────
function Kitchen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({});
  const [customSelections, setCustomSelections] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [styleContent, setStyleContent] = useState(null);
  const steps = [
    { label: 'Client Info' },
    { label: 'Layout' },
    { label: 'Style' },
    { label: 'Cabinetry' },
    { label: 'Splashback & Floor' },
    { label: 'Tapware & Sinks' },
    { label: 'Hardware & Light' },
    { label: 'Appliances' },
    { label: 'Review' }
  ];

  const STYLE_CONTENT = {
    'Warm Japandi': {
      s4: {
        title: 'Cabinetry & Benchtops',
        desc: 'Warm Japandi cabinetry is grounded and tactile — rich timber veneers, rattan accents and earthy laminate tones. Benchtops are soft, veined and natural.',
        door: [
          { val: 'Flat / Slab Door', sub: 'Clean profile, no handles — timber or rattan insert', img: wjDoorFlat },
          { val: 'Rattan Insert Panel', sub: 'Framed door with natural rattan woven panel', img: wjDoorRattan },
          { val: 'Open to Advice', sub: 'Perrem will recommend based on your layout' }
        ],
        cabinet: [
          { val: 'Florentine Walnut (Polytec Woodmatt)', sub: 'Warm walnut laminate — excellent everyday option', img: wjCabFlorentine },
          { val: 'Notaio Walnut (Polytec Woodmatt)', sub: 'Slightly cooler walnut — clean and contemporary', img: wjCabNotaio },
          { val: 'Walnut Crown Cut (George Fethers)', sub: 'Premium timber veneer — beautiful crown-cut figure', img: wjCabWalnutCrown },
          { val: 'Oak with Clear Stain (Farmers Doors)', sub: 'Crown cut white American oak — matt or satin', img: wjCabOak },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        benchtop: [
          { val: 'Morocca — Stone Ambassador Vasari', sub: 'Earthy veining — the signature Japandi benchtop', img: wjBenchMorocca },
          { val: 'Savoy Ivory — Stone Ambassador Vasari', sub: 'Soft ivory with subtle movement', img: wjBenchSavoy },
          { val: 'Haze Ivory — Stone Ambassador Vasari', sub: 'Very soft, barely-there veining — calm and clean', img: wjBenchHaze },
          { val: 'Nacre Dekton — Cosentino', sub: 'Carbon neutral — textured or velvet finish', img: wjBenchNacre },
          { val: 'Taj Mahal Quartzite — CDK Stone', sub: 'Warm gold veining — luxury tier natural stone', img: wjBenchTaj },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s5: {
        desc: 'Japandi splashbacks are tactile and artisanal. Flooring is warm timber or earthy stone — never cool or stark.',
        splashback: [
          { val: 'Kayoborder 87288 — Academy Tiles', sub: 'Satin 19x144mm — artisanal Japanese craft, 48.5% recycled', img: wjSplashKayo },
          { val: 'Houston Amber — Perini Tiles', sub: 'Matt 284x295mm — warm amber, grout Mapei Biscuit #188', img: wjSplashHouAmber },
          { val: 'Houston Vanilla — Perini Tiles', sub: 'Satin 284x295mm — soft vanilla, grout Mapei Jasmine #130', img: wjSplashHouVanilla },
          { val: '245J Hanten Sugie — Artedomus', sub: 'Structured 300x300mm — grout Mapei Caribbean #137', img: wjSplash245J },
          { val: 'Memphis Travertine Dune — Perini', sub: 'Large format 600x1200mm — matt travertine look', img: wjSplashMemphis },
          { val: 'Benchtop stone extended to wall', sub: 'Seamless — no separate splashback tile' },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        flooring: [
          { val: 'Chestnut — Made by Storey', sub: 'Matt lacquer engineered timber — warm character', img: wjFloorChestnut },
          { val: 'Nutmeg — Made by Storey', sub: 'Wire brushed matt lacquer — rich warm tone', img: wjFloorNutmeg },
          { val: 'Walnut — George Fethers Maison', sub: 'Matt lacquer Australian hardwood — darker tone', img: wjFloorWalnut },
          { val: 'Nacre Dekton — Cosentino', sub: 'Textured or velvet porcelain — carbon neutral', img: wjFloorNacreDek },
          { val: 'Foster Beige 600x600 — Perini Tiles', sub: 'Matt porcelain — grout Mapei Silver Grey #111', img: wjFloorFoster },
          { val: 'Khaki Jam — Fibonacci Terrazzo', sub: 'Honed terrazzo — earthy warmth, aggregate character', img: wjFloorKhaki },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s6: {
        desc: 'Gunmetal and brushed carbon are the signature Japandi tapware finishes. Undermount sinks in stainless or composite.',
        tapware: [
          { val: 'Gooseneck Square Mixer Gunmetal — Reece Mizu Drift', sub: '5 Star WELS — the definitive Warm Japandi tap', img: wjTapGooseneckSq },
          { val: 'Gooseneck Curve Mixer Gunmetal — Reece Mizu Drift', sub: '5 Star WELS — softer more organic form', img: wjTapGooseneckCv },
          { val: 'Blix Flexible Hose Mixer Brushed Carbon — Phoenix', sub: 'Detachable velvet-touch silicone hose', img: wjTapBlix },
          { val: 'Round Piccola Pull-Out Champagne — Meir', sub: '2 spray functions + pull-out hose', img: wjTapPiccola },
          { val: 'Open to Advice', sub: 'Perrem will recommend based on layout' }
        ],
        sinks: [
          { val: 'Lavello Single + Drain Gunmetal — Meir', sub: 'Undermount with drainer — 840x440mm', img: wjSinkLavelloSingle },
          { val: 'Lavello Double + Drain Brushed Nickel — Meir', sub: 'Double undermount with drainer — 1160x440mm', img: wjSinkLavelloDouble },
          { val: 'Sonetto Double Universal — Oliveri', sub: 'Stainless undermount — 785x455x205mm', img: wjSinkSonetto },
          { val: 'Double Bowl Brushed Nickel — Meir', sub: 'Undermount or topmount — 860x440mm', img: wjSinkDouble },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s7: {
        desc: 'Timber handles and concealed finger pulls. Sculptural lighting. Warm neutral walls with limewash as the premium option.',
        hardware: [
          { val: 'Chicama Thin Wave 256mm Walnut — Touch Handles', sub: 'Various timber finishes — 224–672mm sizes', img: wjSinkChicama },
          { val: 'Timber Dished Semi Round — Touch Handles', sub: 'Spotted gum — 80–240mm sizes', img: wjHwTimberDish },
          { val: 'Cadello Crest Timber Ebony — Touch Handles', sub: 'Various finishes — 64–480mm sizes', img: wjHwCadello },
          { val: 'Leo Timber Knob Spotted Gum — Touch Handles', sub: '40mm and 60mm sizes', img: wjHwLeo },
          { val: 'Bevelled Edge Finger Pull', sub: 'Integrated handleless — manufactured within the door', img: wjHwBevelled },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        pendants: [
          { val: 'Bubble Lamps — George Nelson / Living Edge', sub: 'Silk — various sizes — signature Japandi pendant', img: wjPendBubble },
          { val: 'July 1 Round Textured Chalk — Beacon', sub: 'Simple organic form — excellent value', img: wjPendJuly },
          { val: 'Calido Flare — Beacon Lighting', sub: 'Natural linen with tan hessian — handmade', img: wjPendCalido },
          { val: 'Tapa Pendant Bone — Robert Gordon', sub: 'Ceramic — handmade — beautifully imperfect', img: wjPendTapa },
          { val: '2BY4 LED Linear Walnut — About Space', sub: '1000–2400mm lengths — architectural Japandi', img: wjPend2BY4 },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        walls: [
          { val: 'Apparition — Dulux', sub: 'Greige — warm grey-beige — modern and sophisticated', img: wjWallApparition },
          { val: 'Beige Royal Quarter — Dulux', sub: 'Warm beige — works beautifully alongside walnut', img: wjWallBeige },
          { val: 'Natural White — Dulux', sub: 'Classic warm white — flattering with most palettes', img: wjWallNatural },
          { val: 'Clay Pipe — Dulux', sub: 'Warm earthy tone — deep tone schemes', img: wjWallClay },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        panels: [
          { val: 'Bone Limewash — Bauwerk Colour', sub: 'Zero VOC — soft warm white — feature wall or full room', img: wjPanelBone },
          { val: 'Calm Limewash — Bauwerk Colour', sub: 'Zero VOC — soft sage-grey — subtle and distinctive', img: wjPanelCalm },
          { val: 'Still Limewash — Bauwerk Colour', sub: 'Zero VOC — deeper warm grey — deep tone schemes', img: wjPanelStill },
          { val: 'No feature wall lining', sub: 'Paint only' },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      }
    },
    'Timeless Ease': {
      s4: {
        title: 'Cabinetry & Benchtops',
        desc: 'Timeless Ease cabinetry leans into painted profiles, warm off-whites and subtle aged brass hardware. Benchtops are soft white or marble look — understated and quietly luxurious.',
        door: [
          { val: 'Sussex Shaker — Polytec', sub: 'Classic profile — warm off-white painted finish', img: teDoorSussex },
          { val: 'Calcutta 35 Profile — Polytec', sub: 'Wider shaker — bolder heritage proportion', img: teDoorCalcutta },
          { val: 'Flat / Slab Door', sub: 'Clean contemporary option', img: teDoorFlat },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        cabinet: [
          { val: 'Raw Cotton Natural — Laminex', sub: 'Warm off-white linen texture — beautiful against stone', img: teCabRawCotton },
          { val: 'Gossamer White Smooth — Polytec', sub: 'Clean soft white — versatile and liveable', img: teCabGossamer },
          { val: 'Paperbark Absolute Matte — Laminex', sub: 'Warm sandy tone — matte finish', img: teCabPaperbark },
          { val: 'Coastal Oak Woodmatt — Polytec', sub: 'Light oak accent — for island or overheads', img: teCabCoastalOak },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        benchtop: [
          { val: 'Statuario Maximus — Caesarstone', sub: 'Classic white marble look — bold veining', img: teBenchStatuario },
          { val: 'Calacatta Nuvo — Caesarstone', sub: 'Bold Calacatta veining — statement benchtop', img: teBenchCalacatta },
          { val: 'Cloudburst Concrete — Caesarstone', sub: 'Light grey textural surface — casual and liveable', img: teBenchCloudburst },
          { val: 'White Truffle Zenith — Stone Ambassador', sub: 'Warm white soft veining — 89% recycled glass', img: teBenchWhiteTruffle },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s5: {
        desc: 'Timeless Ease splashbacks are soft and considered — stone extensions, soft mosaic or classic subway. Flooring is pale and neutral.',
        splashback: [
          { val: 'Benchtop stone extended to wall', sub: 'Seamless Statuario or Calacatta — the classic choice' },
          { val: 'Tully Heads Carrara Herringbone — Tile Cloud', sub: 'Marble-look herringbone — clean and classic', img: teSplashTully },
          { val: 'Mallorca Subway Matt White — Porcelain RMS', sub: 'Matt white subway — timeless backdrop', img: teSplashMallorca },
          { val: 'Japanese Impressions Snow — National Tiles', sub: 'Soft mosaic 284x298mm — subtle texture', img: teSplashJapanese },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        flooring: [
          { val: 'Gosford — Havwoods Pure Plank', sub: 'Matt lacquer — classic grade — good value', img: teFloorGosford },
          { val: 'Mosman Herringbone — Havwoods V Collection', sub: 'Matt lacquer — rustic grade — elegant lay', img: teFloorMosman },
          { val: 'Verona Crema Matt 600x600 — National Tiles', sub: 'Warm cream porcelain — neutral and versatile', img: teFloorVerona },
          { val: 'Paddington White Terrazzo — Tile Cloud', sub: 'Soft terrazzo 600x600 — light and contemporary', img: teFloorPaddington },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s6: {
        desc: 'Brushed brass or brushed nickel throughout — kept consistent across all fittings. Undermount sinks preferred.',
        tapware: [
          { val: 'Namika Kitchen Mixer Brushed Brass — ABI Interiors', sub: 'Knurled reeded handle — 25yr warranty', img: teTapNamika },
          { val: 'Elysian Mixer Brushed Brass — ABI Interiors', sub: 'Clean gooseneck — 5 Star WELS', img: teTapElysian },
          { val: 'Elysian Commercial Pull-Out Brushed Brass — ABI', sub: 'Gooseneck with pull-out hose', img: teTapElysianPO },
          { val: 'Sussex Scala Oyster Nickel — Reece', sub: 'Large square spout — refined and architectural', img: teTapSussex },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        sinks: [
          { val: 'Lavello Single + Drain — Meir', sub: 'Undermount with drainer — 840x440mm', img: teSinkLavello },
          { val: 'Andano 400-400-IF Undermount — Blanco', sub: 'Stainless double undermount — German engineering', img: teSinkAndano },
          { val: 'Sonetto Double Universal — Oliveri', sub: 'Stainless undermount — 785x455x205mm', img: teSinkSonetto },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s7: {
        desc: 'Brushed brass pulls and knobs. Gypsum or ceramic pendants. Warm off-white walls.',
        hardware: [
          { val: 'Brera Handle Aged Brass — Lo & Co', sub: 'Refined aged brass pull — slender and elegant', img: teHwBrera },
          { val: 'Isla Pull XL Aged Brass — Lo & Co', sub: 'Longer bar pull — appliance doors and drawers', img: teHwIsla },
          { val: 'Sphere Knob Aged Brass — Lo & Co', sub: 'Round knob — soft and timeless', img: teHwSphere },
          { val: 'Imogen Oval Pull Aged Brass — Manovella', sub: 'Soft oval form — warm aged brass', img: teHwImogen },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        pendants: [
          { val: 'July 1 Round Textured Chalk — Beacon', sub: 'Organic form — simple and refined', img: tePendJuly },
          { val: 'Tapa Pendant Bone — Robert Gordon', sub: 'Ceramic handmade — quietly luxurious', img: tePendTapa },
          { val: 'Masson Bianco Ribbed Wall Sconce — Beacon', sub: 'White gypsum — refined architectural detail', img: tePendMasson },
          { val: 'Ballare 600mm Pendant Gypsum — Beacon', sub: 'White gypsum dome — timeless form', img: tePendBallare },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        walls: [
          { val: 'Antique White USA — Dulux', sub: 'The classic warm white — very Timeless Ease', img: teWallAntique },
          { val: 'Natural White — Dulux', sub: 'Clean warm white — flattering with brass', img: teWallNatural },
          { val: 'Lexicon Quarter — Dulux', sub: 'Soft warm white — works with pale stone benchtops', img: teWallLexicon },
          { val: 'Bone Limewash — Bauwerk Colour', sub: 'Zero VOC — premium texture option', img: teWallBone },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        panels: [
          { val: 'No feature wall lining', sub: 'Paint only' },
          { val: 'EasyVJ100 — EasyCraft', sub: 'VJ panelling — island ends or rangehood surround', img: tePanelEasyVJ },
          { val: 'Surround Heritage — Laminex', sub: 'Heritage VJ profile — pairs with shaker doors', img: tePanelSurround },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      }
    },
    'Light & Airy': {
      s4: {
        title: 'Cabinetry & Benchtops',
        desc: 'Light & Airy cabinetry is bright and crisp — white smooth laminates, glass insert doors and profiled white panels. Benchtops are white or very soft grey.',
        door: [
          { val: 'Gossamer White Smooth — Polytec', sub: 'Clean soft white — the Light & Airy standard', img: laDoorGossamer },
          { val: 'Aston White Smooth — Polytec', sub: 'Crisp bright white — crisper feel', img: laDoorAston },
          { val: 'Aluminium Framed Clear Glass Insert — Polytec', sub: 'Brushed black frame + clear glass — architectural', img: laDoorAlumClear },
          { val: 'Aluminium Framed Fluted Glass — Polytec', sub: 'Brushed black frame + fluted glass — texture detail', img: laDoorAlumFluted },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        cabinet: [
          { val: 'Gossamer White Smooth — Polytec', sub: 'Clean soft white throughout', img: laDoorGossamer },
          { val: 'Aston White Smooth — Polytec', sub: 'Crisp white — maximum light reflection', img: laDoorAston },
          { val: 'Blossom White Smooth — Polytec', sub: 'Slightly warmer white — softer feel', img: laCabBlossom },
          { val: 'Dulux Casper White Quarter — Painted', sub: 'Cool fresh white — very Light & Airy', img: laCabCasper },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        benchtop: [
          { val: 'Cosmopolitan White — Caesarstone', sub: 'Soft white with subtle movement', img: laBenchCosmo },
          { val: 'Brillianza — Caesarstone', sub: 'Bright white — high reflectivity', img: laBenchBrillianza },
          { val: 'Cloudburst Concrete — Caesarstone', sub: 'Light grey — adds soft texture without weight', img: laBenchCloudburst },
          { val: 'White Truffle Zenith — Stone Ambassador', sub: 'Warm white soft veining — 89% recycled glass', img: laBenchWhiteTruffle },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s5: {
        desc: 'Light & Airy splashbacks are white and bright — fish scale, subway or clean stone. Flooring is pale and light-maximising.',
        splashback: [
          { val: 'Coral Bay Gloss White Fish Scale — Tile Cloud', sub: 'Gloss white fish scale — organic and bright', img: laSplashCoralBay },
          { val: 'Whoosh White Matt — National Tiles', sub: 'Matt white — soft organic texture', img: laSplashWhoosh },
          { val: 'Resort White Matt — National Tiles', sub: 'Clean matt white subway look', img: laSplashResort },
          { val: 'Mallorca Subway Matt White — Porcelain RMS', sub: 'Classic matt white subway', img: laSplashMallorca },
          { val: 'Benchtop stone extended to wall', sub: 'Seamless bright white — maximum light', img: laSplashBenchtop },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        flooring: [
          { val: 'Copenhagen White — Woodcut Grande Ville', sub: 'White-stained oak — maximum brightness', img: laFloorCopenhagen },
          { val: 'Sea Salt — Woodcut', sub: 'Cool grey-white timber — airy and light', img: laFloorSeaSalt },
          { val: 'Paddington White Terrazzo — Tile Cloud', sub: 'Soft white terrazzo 600x600', img: laFloorPaddington },
          { val: 'Stirling White Terrazzo — Tile Cloud', sub: 'Grey-chip terrazzo 600x600 — calm matte', img: laFloorStirling },
          { val: 'Sydney Matt White Stone Look — Tile Cloud', sub: 'Clean white stone look 600x600', img: laFloorSydney },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s6: {
        desc: 'Brushed nickel or chrome. Clean and minimal. Undermount sinks.',
        tapware: [
          { val: 'Elysian Mixer Brushed Nickel — ABI Interiors', sub: 'Clean gooseneck — 5 Star WELS', img: laTapElysian },
          { val: 'Cross Assembly Bench Mount White — ABI', sub: 'White finish — very Light & Airy', img: laTapCross },
          { val: 'Eden Square Mixer Brushed Nickel — ABI', sub: 'Striking angular spout — clean and architectural', img: laTapEden },
          { val: 'Nuage Pull-Out Mixer White — Phoenix', sub: 'White finish — minimal and fresh', img: laTapNuage },
          { val: 'Gooseneck with Paddle Handle — Meir', sub: 'Round gooseneck — clean and refined', img: laTapGooseneck },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        sinks: [
          { val: 'Andano 400-400-IF Undermount — Blanco', sub: 'Stainless double undermount — German engineering', img: laSinkAndano },
          { val: 'Claron 700U Single Bowl — Blanco', sub: 'Stainless single undermount — clean form', img: laSinkClaron },
          { val: 'Vienna Single 630 White Granite — ABI', sub: 'White granite composite — very Light & Airy', img: laSinkVienna },
          { val: 'Sonetto Single Topmount — Oliveri', sub: 'Stainless topmount — practical option', img: laSinkSonetto },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s7: {
        desc: 'White or chrome hardware, clean ceramic pendants and bright Dulux whites.',
        hardware: [
          { val: 'Carlisle Pull White — Lo & Co', sub: 'Clean white pull — very Light & Airy', img: laHwCarlisle },
          { val: 'Tango Knob White — Linear Standard', sub: 'White knob — crisp and minimal', img: laHwTango },
          { val: 'Strand White Handle — Linear Standard', sub: 'White bar handle — architectural and clean', img: laHwStrand },
          { val: 'Riss Big D Matt White — Momo Handles', sub: 'Matte white D-pull — modern and bright', img: laHwRiss },
          { val: 'Bevelled Edge Finger Pull', sub: 'Integrated handleless — seamless white look', img: laHwBevelled },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        pendants: [
          { val: 'Crescent LED Surface Mounted Downlight White — Beacon', sub: 'Recessed or surface — very clean', img: laPendCrescent },
          { val: 'Mila GU10 Round Surface Mount White — Beacon', sub: 'Minimal surface mount — light & airy', img: laPendMila },
          { val: 'Dome Pendant Okina Cream — Lighting Collective', sub: 'Handmade ceramic dome — soft white', img: laPendDomeOkina },
          { val: 'Dome Pendant Stone — Lighting Collective', sub: 'Handmade ceramic — cool stone tone', img: laPendDomeStone },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        walls: [
          { val: 'Lexicon Quarter — Dulux', sub: 'The quintessential bright Australian white', img: laWallLexicon },
          { val: 'Vivid White — Dulux', sub: 'Crisp and bright — maximum light reflection', img: laWallVivid },
          { val: 'Natural White — Dulux', sub: 'Warm clean white — flattering in any light', img: laWallNatural },
          { val: 'Limed White Quarter — Dulux', sub: 'Soft chalky white — very Light & Airy', img: laWallLimed },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        panels: [
          { val: 'No feature wall lining', sub: 'Paint only — keep it clean and bright' },
          { val: 'Chalk Limewash — Bauwerk Colour', sub: 'Zero VOC — natural white texture', img: laPanelChalk },
          { val: 'EasyVJ100 — EasyCraft', sub: 'White VJ panelling — rangehood surround or island', img: laPanelEasyVJ },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      }
    },
    'Coastal Natural': {
      s4: {
        title: 'Cabinetry & Benchtops',
        desc: 'Coastal Natural cabinetry is relaxed and sun-bleached — white or off-white smooth laminates, sage green painted accents, natural oak and rattan inserts. Benchtops are light, white and quiet.',
        door: [
          { val: 'Sussex Shaker — Polytec (White or Sage Green)', sub: 'Profile door — the coastal shaker standard', img: cnDoorSussex },
          { val: 'Gossamer White Smooth — Polytec', sub: 'Clean flat white — paired with sage island', img: cnDoorGossamer },
          { val: 'Slimlined Natural Oak — Farmers Doors', sub: 'Pale oak veneer — elegant coastal profile', img: cnDoorSlimOak },
          { val: 'Rattan Panel Insert', sub: 'Natural rattan insert on overheads — House of Bamboo', img: cnDoorRattan },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        cabinet: [
          { val: 'Gossamer White Smooth — Polytec', sub: 'Overheads — clean soft white', img: cnDoorGossamer },
          { val: 'Blossom White Smooth — Polytec', sub: 'Slightly warmer white — good with sandy stone', img: cnCabBlossom },
          { val: 'Paperbark Absolute Matte — Laminex', sub: 'Sandy warm tone — matte finish', img: cnCabPaperbark },
          { val: 'Sage Green Painted (Dulux Waitangi)', sub: 'Lower cabs + island — the signature coastal move', img: cnCabSage },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        benchtop: [
          { val: 'Cosmopolitan White — Caesarstone', sub: 'Soft white with subtle movement — the coastal standard', img: cnBenchCosmo },
          { val: 'Cloudburst Concrete — Caesarstone', sub: 'Light grey textural — casual and relaxed', img: cnBenchCloudburst },
          { val: 'White Truffle Zenith — Stone Ambassador', sub: 'Warm white soft veining — 89% recycled glass', img: cnBenchWhiteTruffle },
          { val: 'Crema Perla Honed — Artedomus', sub: 'Soft creamy limestone look — honed finish', img: cnBenchCrema },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s5: {
        desc: 'Coastal Natural splashbacks are organic and textural — fish scale, Japanese mosaic or classic subway. Flooring is bleached pale timber or white terrazzo.',
        splashback: [
          { val: 'Coral Bay Gloss White Fish Scale — Tile Cloud', sub: 'The signature coastal tile — curved and tactile', img: cnSplashCoralBay },
          { val: 'Tully Heads Carrara Herringbone — Tile Cloud', sub: 'Marble-look herringbone — clean and classic', img: cnSplashTully },
          { val: 'Japanese Impressions Snow — National Tiles', sub: 'Soft mosaic 284x298mm — subtle sandy texture', img: cnSplashJapanese },
          { val: 'Yubi White Speckle Matt — Perini Tiles', sub: 'Soft white speckle 295x295mm — sand-like finish', img: cnSplashYubi },
          { val: 'Mallorca Subway Matt White — Porcelain RMS', sub: 'Matt white subway — clean coastal backdrop', img: cnSplashMallorca },
          { val: 'Benchtop stone extended to wall', sub: 'Seamless — no separate tile' },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        flooring: [
          { val: 'Aspen Raw 19mm Character — Havwoods', sub: 'Pale bleached oak — the quintessential coastal timber', img: cnFloorAspen },
          { val: 'Sea Salt — Woodcut', sub: 'Cool grey-white timber — coastal grey palette', img: cnFloorSeaSalt },
          { val: 'Cloud — Made by Storey', sub: 'Light whitewashed plank — matt lacquer', img: cnFloorCloud },
          { val: 'Pale Oak — Woodcut', sub: 'Light tone — versatile and coastal', img: cnFloorPaleOak },
          { val: 'Paddington White Terrazzo 600x600 — Tile Cloud', sub: 'Soft white terrazzo — perfect coastal floor', img: cnFloorPaddington },
          { val: 'Stirling White Terrazzo 600x600 — Tile Cloud', sub: 'Grey-chip terrazzo — calm matte surface', img: cnFloorStirling },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s6: {
        desc: 'Brushed brass or aged brass throughout — it bridges the sage green cabinetry and rattan pendants perfectly. Undermount sinks preferred.',
        tapware: [
          { val: 'Namika Kitchen Mixer Brushed Brass — ABI', sub: 'Knurled reeded handle — tactile coastal detail', img: cnTapNamika },
          { val: 'Elysian Mixer Brushed Brass — ABI Interiors', sub: 'Clean gooseneck — 5 Star WELS', img: cnTapElysian },
          { val: 'Round Piccola Pull-Out Champagne — Meir', sub: 'Warm champagne finish — pull-out hose', img: cnTapPiccola },
          { val: 'Oasis Kitchen Mixer Brushed Nickel — Highgrove', sub: 'Gooseneck — 5 Star WELS — good value', img: cnTapOasis },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        sinks: [
          { val: 'Lavello Single + Drain Gunmetal — Meir', sub: 'Undermount with drainer — 840x440mm', img: cnSinkLavelloSingle },
          { val: 'Lavello Double + Drain Brushed Nickel — Meir', sub: 'Double undermount with drainer', img: cnSinkLavelloDouble },
          { val: 'Clark Monaco Double Undermount — Turner Hastings', sub: 'Stainless double — 860x440mm', img: cnSinkClark },
          { val: 'Andano 400-400-IF Undermount — Blanco', sub: 'Double stainless undermount', img: cnSinkAndano },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      },
      s7: {
        desc: 'Travertine knobs, natural brass pulls and rattan dome pendants are the defining Coastal Natural details.',
        hardware: [
          { val: 'Dot Travertine Handle Small — Lo & Co', sub: 'Natural travertine knob — tactile coastal detail', img: cnHwDot },
          { val: 'Arc Travertine Handle — Lo & Co', sub: 'Elongated travertine pull — natural stone form', img: cnHwArc },
          { val: 'Flow Bow Handle Natural Brass — Touch Handles', sub: 'Curved natural brass — wave-like form', img: cnHwFlow },
          { val: 'Imogen Oval Pull Aged Brass — Manovella', sub: 'Soft oval form — warm aged brass', img: cnHwImogen },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        pendants: [
          { val: 'Rattan Dome Pendant (Natural unbleached)', sub: 'The signature coastal pendant — 3 over island', img: cnPendRattan },
          { val: 'Calido Flare — Beacon Lighting', sub: 'Natural linen + hessian — handmade', img: cnPendCalido },
          { val: 'Calido Tier in Raffia — Beacon Lighting', sub: 'Natural raffia — layered tiers', img: cnPendCalidoRaffia },
          { val: 'Tapa Pendant Bone — Robert Gordon', sub: 'Ceramic handmade — quietly coastal', img: cnPendTapa },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        walls: [
          { val: 'Lexicon Quarter — Dulux', sub: 'The quintessential Australian coastal white', img: cnWallLexicon },
          { val: 'Narrow Neck Quarter — Dulux', sub: 'Soft warm white — subtle coastal warmth', img: cnWallNarrow },
          { val: 'Snow Season — Dulux', sub: 'Cool crisp white — grey terrazzo palette', img: cnWallSnow },
          { val: 'Chalk Limewash — Bauwerk Colour', sub: 'Zero VOC — natural white texture — very coastal', img: cnWallChalk },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ],
        panels: [
          { val: 'No feature wall lining', sub: 'Paint only' },
          { val: 'EasyVJ100 — EasyCraft', sub: 'White VJ panelling — rangehood surround or island ends', img: cnPanelEasyVJ },
          { val: 'Open to Advice', sub: 'Perrem will recommend' }
        ]
      }
    }
  };

  useEffect(() => {
    if (currentStep >= 4 && currentStep <= 7 && selections.style && STYLE_CONTENT[selections.style]) {
      setStyleContent(STYLE_CONTENT[selections.style]);
    }
  }, [currentStep, selections.style]);

  const updateSelections = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const togglePill = (value, groupKey) => {
    const current = selections[groupKey] || [];
    const newVal = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    updateSelections(groupKey, newVal);
  };

  const getSelectedPills = (groupKey) => {
    const arr = selections[groupKey] || [];
    return arr.join(', ');
  };

  const getInputValue = (id) => {
    return selections[id] || '';
  };

  const toggleSingle = (value, group) => {
    if (group === 'style') {
      ['doorStyle', 'underbench', 'benchtop', 'splashback', 'flooring', 'tapStyle', 'sinkType', 'hardware', 'pendant', 'wallColour', 'wallPanel'].forEach(k => {
        setSelections(prev => {
          const newState = { ...prev };
          delete newState[k];
          return newState;
        });
      });
      setStyleContent(null);
    }
    updateSelections(group, value);
  };

  const toggleCustomOption = (sectionId) => {
    setCustomSelections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        active: !prev[sectionId]?.active
      }
    }));
    if (customSelections[sectionId]?.active) {
      setCustomSelections(prev => {
        const newState = { ...prev };
        delete newState[sectionId];
        return newState;
      });
    }
  };

  const handleCustomText = (sectionId, text) => {
    setCustomSelections(prev => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], text, images: prev[sectionId]?.images || [] }
    }));
  };

  const handleCustomImage = (sectionId, files) => {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomSelections(prev => ({
          ...prev,
          [sectionId]: {
            ...prev[sectionId],
            images: [...(prev[sectionId]?.images || []), e.target.result]
          }
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const renderOptionGrid = (items, selectionKey) => {
    if (!items) return null;
    return (
      <div className="option-grid">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`option-card ${selections[selectionKey] === item.val ? 'selected' : ''}`}
            onClick={() => updateSelections(selectionKey, item.val)}
          >
            {item.img && (
              <div className="option-card-img">
                <img
                  src={item.img}
                  alt={item.val}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'inherit' }}
                />
              </div>
            )}
            <div className="option-card-title">{item.val}</div>
            <div className="option-card-sub">{item.sub}</div>
          </div>
        ))}
      </div>
    );
  };

  const buildSummary = () => {
    return (
      <div className="summary-container">
        <div className="summary-section">
          <h3>Client Information</h3>
          {summaryRow('Name', `${getInputValue('firstName') || ''} ${getInputValue('lastName') || ''}`)}
          {summaryRow('Project Type', getInputValue('projectType'))}
          {summaryRow('Budget', getInputValue('budget'))}
          {summaryRow('Initial Notes', getInputValue('extraNotes'))}
        </div>
        <div className="summary-section">
          <h3>Layout</h3>
          {summaryRow('Layout Type', selections.layout)}
          {summaryRow('Island', getInputValue('islandIncluded'))}
          {summaryRow('Bar Seating', getInputValue('barSeating'))}
          {summaryRow("Butler's Pantry", getInputValue('butlersPantry'))}
          {summaryRow('Overhead Cabinets', getInputValue('overheads'))}
        </div>
        <div className="summary-section">
          <h3>Style Direction</h3>
          {summaryRow('Style', selections.style)}
          {summaryRow('Colour Palette', getSelectedPills('colourPills'))}
          {summaryRow('Finish Preferences', getSelectedPills('finishPills'))}
        </div>
        <div className="summary-section">
          <h3>Cabinetry & Benchtops</h3>
          {summaryRow('Door Style', selections.doorStyle)}
          {summaryRow('Cabinet Finish', selections.underbench)}
          {summaryRow('Benchtop', selections.benchtop)}
        </div>
        <div className="summary-section">
          <h3>Splashback & Flooring</h3>
          {summaryRow('Splashback', selections.splashback)}
          {summaryRow('Flooring', selections.flooring)}
        </div>
        <div className="summary-section">
          <h3>Fixtures</h3>
          {summaryRow('Sink', selections.sinkType)}
          {summaryRow('Tapware', selections.tapStyle)}
        </div>
        <div className="summary-section">
          <h3>Hardware & Lighting</h3>
          {summaryRow('Cabinet Hardware', selections.hardware)}
          {summaryRow('Pendant Lighting', selections.pendant)}
          {summaryRow('Wall Colour', selections.wallColour)}
          {summaryRow('Wall Panels / Linings', selections.wallPanel)}
        </div>
        <div className="summary-section">
          <h3>Appliances</h3>
          {summaryRow('Cooktop', [getInputValue('cooktopType'), getInputValue('cooktopMount'), getInputValue('cooktopBrand') || getInputValue('cooktopBrandOther')].filter(Boolean).join(' — '))}
          {summaryRow('Oven', [getInputValue('ovenType'), getInputValue('ovenBrand') || getInputValue('ovenBrandOther')].filter(Boolean).join(' — '))}
          {summaryRow('Microwave', getInputValue('microwave'))}
          {summaryRow('Rangehood', [getInputValue('rangehoodType'), getInputValue('rangehoodMotor'), getInputValue('rangehoodBrand') || getInputValue('rangehoodBrandOther')].filter(Boolean).join(' — '))}
          {summaryRow('Dishwasher', [getInputValue('dishwasher'), getInputValue('dishwasherBrand')].filter(Boolean).join(' — '))}
          {summaryRow('Fridge / Freezer', [getInputValue('fridge'), getInputValue('fridgeBrand')].filter(Boolean).join(' — '))}
          {summaryRow('Appliance Notes', getInputValue('applianceNotes'))}
        </div>
      </div>
    );
  };

  const summaryRow = (key, value) => {
    const isEmpty = !value || !value.trim() || value === 'undefined';
    return (
      <div className="summary-row">
        <div className="summary-key">{key}</div>
        <div className={`summary-val ${isEmpty ? 'empty' : ''}`}>{isEmpty ? 'Not specified' : value}</div>
      </div>
    );
  };

  const downloadSummary = () => {
    const name = `${getInputValue('firstName') || ''} ${getInputValue('lastName') || ''}`.trim() || 'Client';
    const date = new Date().toLocaleDateString('en-AU', { day: '2-digit', month: 'long', year: 'numeric' });
    let text = `PERREM DESIGN & CONSTRUCTION — KITCHEN DESIGN BRIEF\nGenerated: ${date}\nClient: ${name}\n\n`;
    text += `PROJECT\nType: ${getInputValue('projectType')}\nBudget: ${getInputValue('budget')}\nNotes: ${getInputValue('extraNotes')}\n\n`;
    text += `LAYOUT\nType: ${selections.layout || '—'}\nIsland: ${getInputValue('islandIncluded')}\nBar Seating: ${getInputValue('barSeating')}\nButler Pantry: ${getInputValue('butlersPantry')}\nOverheads: ${getInputValue('overheads')}\n\n`;
    text += `STYLE\nDirection: ${selections.style || '—'}\n\n`;
    text += `CABINETRY\nDoor Style: ${selections.doorStyle || '—'}\nFinish: ${selections.underbench || '—'}\nBenchtop: ${selections.benchtop || '—'}\n\n`;
    text += `SPLASHBACK & FLOORING\nSplashback: ${selections.splashback || '—'}\nFlooring: ${selections.flooring || '—'}\n\n`;
    text += `FIXTURES\nSink: ${selections.sinkType || '—'}\nTapware Style: ${selections.tapStyle || '—'}\n\n`;
    text += `HARDWARE & LIGHTING\nHardware: ${selections.hardware || '—'}\nPendants: ${selections.pendant || '—'}\nWalls: ${selections.wallColour || '—'}\n\n`;
    text += `APPLIANCES\nCooktop: ${getInputValue('cooktopType')} ${getInputValue('cooktopBrand')} ${getInputValue('cooktopMount')}\nOven: ${getInputValue('ovenType')} ${getInputValue('ovenBrand')}\nRangehood: ${getInputValue('rangehoodType')} ${getInputValue('rangehoodMotor')} ${getInputValue('rangehoodBrand')}\nDishwasher: ${getInputValue('dishwasher')} ${getInputValue('dishwasherBrand')}\nFridge: ${getInputValue('fridge')} ${getInputValue('fridgeBrand')}\nNotes: ${getInputValue('applianceNotes')}\n\nADDITIONAL NOTES\n${getInputValue('finalNotes')}\n`;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Perrem_Design_Construction_Brief_${name.replace(/\s/g, '_')}.txt`;
    a.click();
  };

  const submitForm = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToStep = (step) => {
    if (step >= 1 && step <= 9) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderStepContent = () => {
    if (isSubmitted) {
      return (
        <div className="step-screen active">
          <div className="success-wrap">
            <div className="success-icon">✓</div>
            <h2 className="success-title">Brief Received</h2>
            <p className="success-desc">Your kitchen design brief has been submitted to the Perrem Design & Construction team. We'll review your selections and be in touch within 2 business days to discuss next steps.</p>
            <button className="download-btn" onClick={downloadSummary}>Download My Brief Summary</button>
          </div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 1 of 9</div>
              <h1 className="step-title">Let's Get Started</h1>
              <p className="step-desc">Tell us who you are and a little about the project so we can tailor the design process to you.</p>
            </div>
            <div className="section-label">Your Details</div>
            <div className="field-group">
              <div className="field">
                <label>First Name <span className="required">*</span></label>
                <input type="text" value={getInputValue('firstName')} onChange={(e) => updateSelections('firstName', e.target.value)} placeholder="e.g. Sarah" />
              </div>
              <div className="field">
                <label>Last Name <span className="required">*</span></label>
                <input type="text" value={getInputValue('lastName')} onChange={(e) => updateSelections('lastName', e.target.value)} placeholder="e.g. Thompson" />
              </div>
            </div>
            <div className="section-label">Project Details</div>
            <div className="field-group">
              <div className="field">
                <label>Project Type <span className="required">*</span></label>
                <select value={getInputValue('projectType')} onChange={(e) => updateSelections('projectType', e.target.value)}>
                  <option value="">Select...</option>
                  <option>New Build</option>
                  <option>Full Renovation</option>
                  <option>Kitchen-Only Reno</option>
                  <option>Extension</option>
                </select>
              </div>
              <div className="field">
                <label>Approximate Budget</label>
                <select value={getInputValue('budget')} onChange={(e) => updateSelections('budget', e.target.value)}>
                  <option value="">Select range...</option>
                  <option>Under $30,000</option>
                  <option>$30,000 – $50,000</option>
                  <option>$50,000 – $80,000</option>
                  <option>$80,000 – $120,000</option>
                  <option>$120,000+</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="field-group full">
              <div className="field">
                <label>Anything we should know before we start?</label>
                <textarea value={getInputValue('extraNotes')} onChange={(e) => updateSelections('extraNotes', e.target.value)} placeholder="Special requirements, constraints, features you love or hate, things already decided..."></textarea>
              </div>
            </div>
            <div className="nav-row">
              <div></div>
              <button className="btn btn-primary" onClick={() => goToStep(2)}>Next: Layout →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 2 of 9</div>
              <h1 className="step-title">Kitchen Layout</h1>
              <p className="step-desc">The layout drives everything — cabinetry runs, appliance positions, electrical and plumbing rough-ins. Select the configuration that best suits your space.</p>
            </div>
            <div className="section-label">Layout Type — Select One</div>
            <div className="card-grid two">
              {['Single Wall / Galley', 'L-Shape', 'U-Shape', 'L-Shape with Island', 'Galley with Island', 'Open to Advice'].map(layout => (
                <div key={layout} className={`layout-card ${selections.layout === layout ? 'selected' : ''}`} onClick={() => toggleSingle(layout, 'layout')}>
                  <div className="layout-card-body">
                    <div className="layout-card-name">{layout}</div>
                    <div className="layout-card-sub">{layout === 'Single Wall / Galley' ? 'Everything on one run. Efficient, suits open-plan spaces.' : layout === 'L-Shape' ? 'Two adjacent walls. Good corner use, natural work triangle.' : layout === 'U-Shape' ? 'Three walls of cabinetry. Maximum bench space and storage.' : layout === 'L-Shape with Island' ? 'Our most popular. Excellent workflow, generous bench.' : layout === 'Galley with Island' ? 'Two parallel runs plus central island. Chef-style workflow.' : "We'll work with your existing plans and recommend the best layout for your space."}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`custom-option-wrap ${customSelections.custom_layout?.active ? 'active' : ''}`}>
              <div className="custom-option-header" onClick={() => toggleCustomOption('custom_layout')}>
                <div className="custom-option-toggle">✓</div>
                <div className="custom-option-label">Something specific in mind? Add a note or upload a reference image</div>
              </div>
              <div className="custom-option-body">
                <textarea placeholder="Describe what you have in mind..." value={customSelections.custom_layout?.text || ''} onChange={(e) => handleCustomText('custom_layout', e.target.value)}></textarea>
                <label className="custom-img-upload-label">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  Upload reference image(s)
                  <input type="file" accept="image/*" multiple onChange={(e) => handleCustomImage('custom_layout', Array.from(e.target.files))} />
                </label>
                <div className="custom-img-preview">
                  {customSelections.custom_layout?.images?.map((img, idx) => (
                    <img key={idx} src={img} alt="preview" />
                  ))}
                </div>
              </div>
            </div>
            <div className="section-label">Island & Pantry</div>
            <div className="field-group">
              <div className="field">
                <label>Island included?</label>
                <select value={getInputValue('islandIncluded')} onChange={(e) => updateSelections('islandIncluded', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Yes definitely</option>
                  <option>Yes if space allows</option>
                  <option>No island</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label>Bar seating on island?</label>
                <select value={getInputValue('barSeating')} onChange={(e) => updateSelections('barSeating', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Yes — 2 stools</option>
                  <option>Yes — 3–4 stools</option>
                  <option>Yes — 4+ stools</option>
                  <option>No bar seating</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>
            <div className="field-group">
              <div className="field">
                <label>Butler's pantry?</label>
                <select value={getInputValue('butlersPantry')} onChange={(e) => updateSelections('butlersPantry', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Yes with door</option>
                  <option>Yes open / pass-through</option>
                  <option>No</option>
                  <option>Subject to space</option>
                </select>
              </div>
              <div className="field">
                <label>Overhead cabinets?</label>
                <select value={getInputValue('overheads')} onChange={(e) => updateSelections('overheads', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Yes full run</option>
                  <option>Yes partial / feature section only</option>
                  <option>No overheads</option>
                  <option>Mix of overheads and open shelving</option>
                </select>
              </div>
            </div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(1)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(3)}>Next: Style Direction →</button>
            </div>
          </div>
        );

      case 3:
        const styleOptions = ['Light & Airy', 'Warm Japandi', 'Timeless Ease', 'Calm Retreat', 'Coastal Natural', 'Dark & Dramatic', 'French Provincial / Hamptons', 'Contemporary Minimal', 'Open to Direction'];
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 3 of 9</div>
              <h1 className="step-title">Your Style Direction</h1>
              <p className="step-desc">Choose the aesthetic that resonates most with you. This becomes the foundation for every material and finish selection that follows.</p>
            </div>
            <div className="section-label">Choose a Style — Select One</div>
            <div className="style-card-grid">
              {styleOptions.map(style => (
                <div key={style} className={`style-card ${selections.style === style ? 'selected' : ''} ${style === 'Open to Direction' ? 'full-width' : ''}`} onClick={() => toggleSingle(style, 'style')}>
                  <div className="style-card-header">
                    <div className="style-card-title">{style}</div>
                    <div className="style-card-tagline">{style === 'Light & Airy' ? 'Bright · Serene · Timeless White' : style === 'Warm Japandi' ? 'Earthy · Tactile · Wabi-Sabi Simplicity' : style === 'Timeless Ease' ? 'Classic · Refined · Quietly Luxurious' : style === 'Calm Retreat' ? 'Muted · Organic · Quiet Luxury' : style === 'Coastal Natural' ? 'Relaxed · Sun-bleached · Textural' : style === 'Dark & Dramatic' ? 'Bold · Moody · High Contrast' : style === 'French Provincial / Hamptons' ? 'Classic · Comfortable · Enduring' : style === 'Contemporary Minimal' ? 'Architectural · Handleless · Monochromatic' : 'Flexible · Exploratory · Designer-Led'}</div>
                    <div className="style-card-desc">{style === 'Light & Airy' ? 'Flooded with light, open and effortlessly serene.' : style === 'Warm Japandi' ? 'Layered neutrals of warm beige, pale stone and grounded timber.' : style === 'Timeless Ease' ? 'Understated yet full of detail. Warm whites, aged brass accents.' : style === 'Calm Retreat' ? 'Deeply considered, never excessive. Natural materials, tactile surfaces.' : style === 'Coastal Natural' ? 'Effortlessly relaxed and deeply connected to its environment.' : style === 'Dark & Dramatic' ? 'A confident, design-forward kitchen that makes a statement.' : style === 'French Provincial / Hamptons' ? 'Timeless, welcoming and full of considered detail.' : style === 'Contemporary Minimal' ? 'Serious architectural restraint with zero decorative detail.' : 'No strong preference yet, or elements from multiple styles appeal to you.'}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-label">Colour Palette Preference</div>
            <p className="multi-hint">Select all that apply</p>
            <div className="pill-group">
              {['Whites & Off-whites', 'Warm Creams & Beige', 'Warm Light Timbers', 'Dark / Rich Timbers', 'Greys & Charcoals', 'Black Accents', 'Brass & Gold Tones', 'Brushed Nickel & Silver', 'Gunmetal & Matte Black', 'Stone & Travertine Tones'].map(pill => (
                <div key={pill} className={`pill ${(selections.colourPills || []).includes(pill) ? 'selected' : ''}`} onClick={() => togglePill(pill, 'colourPills')}>{pill}</div>
              ))}
            </div>
            <div className="section-label">Finishes You're Drawn To</div>
            <p className="multi-hint">Select all that apply</p>
            <div className="pill-group">
              {['Matte / Smooth', 'Honed Stone', 'Textured / Woodgrain', 'Gloss', 'Fluted / Reeded', 'Aged / Patinated', 'Natural / Raw Stone', 'Brushed Metal'].map(pill => (
                <div key={pill} className={`pill ${(selections.finishPills || []).includes(pill) ? 'selected' : ''}`} onClick={() => togglePill(pill, 'finishPills')}>{pill}</div>
              ))}
            </div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(2)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(4)}>Next: Cabinetry & Benchtops →</button>
            </div>
          </div>
        );

      case 4:
        if (!styleContent) return (
          <div className="step-screen active">
            <div className="loading">Please go back to Step 3 and select a curated style (Warm Japandi, Timeless Ease, Light & Airy, or Coastal Natural) to see product options with images. Other styles are available — the Perrem team will guide you through selections in consultation.</div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button>
              <button className="btn btn-primary" onClick={() => goToStep(5)}>Continue →</button>
            </div>
          </div>
        );
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 4 of 9</div>
              <h1 className="step-title">{styleContent.s4.title}</h1>
              <p className="step-desc">{styleContent.s4.desc}</p>
            </div>
            <div className="section-label">Door Profile / Style</div>
            {renderOptionGrid(styleContent.s4.door, 'doorStyle')}
            <div className="section-label">Cabinet Finish</div>
            {renderOptionGrid(styleContent.s4.cabinet, 'underbench')}
            <div className="section-label">Benchtop Material</div>
            {renderOptionGrid(styleContent.s4.benchtop, 'benchtop')}
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(5)}>Next: Splashback & Flooring →</button>
            </div>
          </div>
        );

      case 5:
        if (!styleContent) return (
          <div className="step-screen active">
            <div className="loading">Please select a curated style in Step 3 to see product options.</div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button>
              <button className="btn btn-primary" onClick={() => goToStep(6)}>Continue →</button>
            </div>
          </div>
        );
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 5 of 9</div>
              <h1 className="step-title">Splashback & Flooring</h1>
              <p className="step-desc">{styleContent.s5.desc}</p>
            </div>
            <div className="section-label">Splashback Direction</div>
            {renderOptionGrid(styleContent.s5.splashback, 'splashback')}
            <div className="section-label">Flooring Direction</div>
            {renderOptionGrid(styleContent.s5.flooring, 'flooring')}
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(4)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(6)}>Next: Tapware & Sinks →</button>
            </div>
          </div>
        );

      case 6:
        if (!styleContent) return (
          <div className="step-screen active">
            <div className="loading">Please select a curated style in Step 3 to see product options.</div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button>
              <button className="btn btn-primary" onClick={() => goToStep(7)}>Continue →</button>
            </div>
          </div>
        );
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 6 of 9</div>
              <h1 className="step-title">Tapware & Sinks</h1>
              <p className="step-desc">{styleContent.s6.desc}</p>
            </div>
            <div className="section-label">Tapware</div>
            {renderOptionGrid(styleContent.s6.tapware, 'tapStyle')}
            <div className="section-label">Sink Configuration</div>
            {renderOptionGrid(styleContent.s6.sinks, 'sinkType')}
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(5)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(7)}>Next: Hardware & Lighting →</button>
            </div>
          </div>
        );

      case 7:
        if (!styleContent) return (
          <div className="step-screen active">
            <div className="loading">Please select a curated style in Step 3 to see product options.</div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back to Style</button>
              <button className="btn btn-primary" onClick={() => goToStep(8)}>Continue →</button>
            </div>
          </div>
        );
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 7 of 9</div>
              <h1 className="step-title">Hardware & Lighting</h1>
              <p className="step-desc">{styleContent.s7.desc}</p>
            </div>
            <div className="section-label">Cabinet Hardware</div>
            {renderOptionGrid(styleContent.s7.hardware, 'hardware')}
            <div className="section-label">Pendant Lighting</div>
            {renderOptionGrid(styleContent.s7.pendants, 'pendant')}
            <div className="section-label">Wall Colour / Paint</div>
            {renderOptionGrid(styleContent.s7.walls, 'wallColour')}
            <div className="section-label">Wall Linings & Panels</div>
            {renderOptionGrid(styleContent.s7.panels, 'wallPanel')}
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(6)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(8)}>Next: Appliances →</button>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 8 of 9</div>
              <h1 className="step-title">Appliances & Storage</h1>
              <p className="step-desc">Appliance sizes and integration types directly affect cabinetry layout. The more specific you can be, the more accurate your initial design.</p>
            </div>
            <div className="section-label">Cooktop</div>
            <div className="field-group">
              <div className="field"><label>Cooktop Type</label>
                <select value={getInputValue('cooktopType')} onChange={(e) => updateSelections('cooktopType', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Induction 600mm</option><option>Induction 900mm</option>
                  <option>Gas 600mm</option><option>Gas 900mm</option>
                  <option>Integrated Gas / Induction Hybrid</option>
                  <option>Not decided yet</option>
                </select>
              </div>
              <div className="field"><label>Integrated or Freestanding?</label>
                <select value={getInputValue('cooktopMount')} onChange={(e) => updateSelections('cooktopMount', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Integrated / Built-in (flush to benchtop)</option>
                  <option>Freestanding Range (oven + cooktop combined)</option>
                </select>
              </div>
            </div>
            <div className="field-group">
              <div className="field"><label>Cooktop Brand</label>
                <select value={getInputValue('cooktopBrand')} onChange={(e) => updateSelections('cooktopBrand', e.target.value)}>
                  <option value="">Select brand...</option>
                  <option>Smeg</option><option>Bosch</option><option>Fisher & Paykel</option><option>Miele</option>
                  <option>AEG</option><option>Electrolux</option><option>Ilve</option><option>Belling</option>
                  <option>Westinghouse</option><option>Falcon</option><option>Omega</option><option>Kleenmaid</option>
                  <option>Neff</option><option>Gaggenau</option><option>V-Zug</option>
                  <option>Other (specify below)</option><option>Open to any — no preference</option>
                </select>
              </div>
              <div className="field"><label>Other / Specific Model</label>
                <input type="text" value={getInputValue('cooktopBrandOther')} onChange={(e) => updateSelections('cooktopBrandOther', e.target.value)} placeholder="If 'Other', specify here" />
              </div>
            </div>
            <div className="section-label">Oven</div>
            <div className="field-group">
              <div className="field"><label>Oven Type</label>
                <select value={getInputValue('ovenType')} onChange={(e) => updateSelections('ovenType', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Single Oven — 600mm Built-in Integrated</option>
                  <option>Single Oven — 600mm Freestanding</option>
                  <option>Double Oven — 600mm Built-in Integrated</option>
                  <option>Steam / Combination Oven</option>
                  <option>Pyrolytic Oven</option>
                  <option>Part of Freestanding Range</option>
                  <option>Not decided yet</option>
                </select>
              </div>
              <div className="field"><label>Microwave / Combi</label>
                <select value={getInputValue('microwave')} onChange={(e) => updateSelections('microwave', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Yes — integrated in cabinetry (built-in trim kit)</option>
                  <option>Yes — benchtop unit only</option>
                  <option>Yes — microwave combi (replaces one oven)</option>
                  <option>No microwave</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="field-group">
              <div className="field"><label>Oven Brand</label>
                <select value={getInputValue('ovenBrand')} onChange={(e) => updateSelections('ovenBrand', e.target.value)}>
                  <option value="">Select brand...</option>
                  <option>Smeg</option><option>Bosch</option><option>Fisher & Paykel</option><option>Miele</option>
                  <option>AEG</option><option>Electrolux</option><option>Ilve</option><option>Westinghouse</option>
                  <option>Falcon</option><option>Omega</option><option>Kleenmaid</option><option>Neff</option>
                  <option>Gaggenau</option><option>V-Zug</option>
                  <option>Other (specify below)</option><option>Open to any — no preference</option>
                </select>
              </div>
              <div className="field"><label>Other / Specific Model</label>
                <input type="text" value={getInputValue('ovenBrandOther')} onChange={(e) => updateSelections('ovenBrandOther', e.target.value)} placeholder="If 'Other', specify here" />
              </div>
            </div>
            <div className="section-label">Rangehood</div>
            <div className="notes-box">
              <p><strong>Externally mounted exhaust fans:</strong> For a quieter kitchen, we recommend a rangehood with the motor mounted externally (roof cavity or external wall). The fan noise stays completely outside the living space. Schweigen and Qasair specialise in this system and are our preferred brands for this approach.</p>
            </div>
            <div className="field-group">
              <div className="field"><label>Rangehood Type</label>
                <select value={getInputValue('rangehoodType')} onChange={(e) => updateSelections('rangehoodType', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Undermount / Integrated — 900mm</option>
                  <option>Undermount / Integrated — 600mm</option>
                  <option>Canopy / Feature Hood — 900mm</option>
                  <option>Canopy / Feature Hood — 1200mm+</option>
                  <option>Island / Ceiling Mounted</option>
                  <option>Downdraft / Pop-up</option>
                  <option>Not decided yet</option>
                </select>
              </div>
              <div className="field"><label>Motor Configuration</label>
                <select value={getInputValue('rangehoodMotor')} onChange={(e) => updateSelections('rangehoodMotor', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Externally mounted motor — quiet (recommended)</option>
                  <option>Internal motor — standard</option>
                  <option>Recirculating — no ducting possible</option>
                  <option>Not sure — advise me</option>
                </select>
              </div>
            </div>
            <div className="field-group">
              <div className="field"><label>Rangehood Brand</label>
                <select value={getInputValue('rangehoodBrand')} onChange={(e) => updateSelections('rangehoodBrand', e.target.value)}>
                  <option value="">Select brand...</option>
                  <option>Schweigen (external motor specialist)</option>
                  <option>Qasair (external motor specialist)</option>
                  <option>Smeg</option><option>Bosch</option><option>Fisher & Paykel</option><option>Miele</option>
                  <option>AEG</option><option>Electrolux</option><option>Westinghouse</option><option>Omega</option>
                  <option>Kleenmaid</option><option>Neff</option><option>Gaggenau</option><option>Siemens</option>
                  <option>Other (specify below)</option><option>Open to any — no preference</option>
                </select>
              </div>
              <div className="field"><label>Other / Notes</label>
                <input type="text" value={getInputValue('rangehoodBrandOther')} onChange={(e) => updateSelections('rangehoodBrandOther', e.target.value)} placeholder="If 'Other' or specific model, note here" />
              </div>
            </div>
            <div className="section-label">Dishwasher & Fridge / Freezer</div>
            <div className="field-group">
              <div className="field"><label>Dishwasher</label>
                <select value={getInputValue('dishwasher')} onChange={(e) => updateSelections('dishwasher', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Standard 600mm — Fully Integrated (panel front)</option>
                  <option>Standard 600mm — Freestanding (visible front)</option>
                  <option>XL / Tall-tub 600mm — Fully Integrated</option>
                  <option>Drawer — Single Drawer Integrated</option>
                  <option>Drawer — Double Drawer Integrated</option>
                  <option>Not including a dishwasher</option>
                </select>
              </div>
              <div className="field"><label>Dishwasher Brand</label>
                <select value={getInputValue('dishwasherBrand')} onChange={(e) => updateSelections('dishwasherBrand', e.target.value)}>
                  <option value="">Select brand...</option>
                  <option>Fisher & Paykel</option><option>Bosch</option><option>Miele</option><option>AEG</option>
                  <option>Smeg</option><option>Electrolux</option><option>Westinghouse</option><option>Omega</option>
                  <option>Kleenmaid</option><option>Neff</option><option>Gaggenau</option>
                  <option>Other (specify below)</option><option>Open to any — no preference</option>
                </select>
              </div>
            </div>
            <div className="field-group">
              <div className="field"><label>Fridge / Freezer Configuration</label>
                <select value={getInputValue('fridge')} onChange={(e) => updateSelections('fridge', e.target.value)}>
                  <option value="">Select...</option>
                  <option>Integrated fridge + integrated freezer (separate columns)</option>
                  <option>Integrated French Door</option>
                  <option>Integrated bottom mount</option>
                  <option>Freestanding — built into cabinetry cavity</option>
                  <option>Full column fridge only (separate freezer elsewhere)</option>
                  <option>Not sure — open to recommendations</option>
                </select>
              </div>
              <div className="field"><label>Fridge Brand</label>
                <select value={getInputValue('fridgeBrand')} onChange={(e) => updateSelections('fridgeBrand', e.target.value)}>
                  <option value="">Select brand...</option>
                  <option>Fisher & Paykel</option><option>Miele</option><option>Bosch</option><option>AEG</option>
                  <option>Smeg</option><option>Electrolux</option><option>Westinghouse</option><option>LG</option>
                  <option>Samsung</option><option>Haier</option><option>Liebherr</option><option>Gaggenau</option>
                  <option>Other (specify below)</option><option>Open to any — no preference</option>
                </select>
              </div>
            </div>
            <div className="field-group full">
              <div className="field"><label>Appliance notes / specific models already chosen</label>
                <input type="text" value={getInputValue('applianceNotes')} onChange={(e) => updateSelections('applianceNotes', e.target.value)} placeholder="e.g. 'Already purchased Miele H7264B oven' or 'Must match existing Smeg'" />
              </div>
            </div>
            <div className="section-label">Additional Storage Features</div>
            <p className="multi-hint">Select all that apply</p>
            <div className="pill-group">
              {['Pull-out Bin System', 'Corner Pull-out (Le Mans / Magic Corner)', 'Pantry Pull-out (Dispensa / Tandem)', 'Appliance Garage / Hutch', 'Deep Pots & Pans Drawers', 'Soft-close Drawers & Doors (all)', 'Wine Fridge / Wine Storage', 'Integrated Coffee Machine', 'Warming Drawer', 'Steam Oven'].map(pill => (
                <div key={pill} className={`pill ${(selections.storageFeatures || []).includes(pill) ? 'selected' : ''}`} onClick={() => togglePill(pill, 'storageFeatures')}>{pill}</div>
              ))}
            </div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(7)}>← Back</button>
              <button className="btn btn-primary" onClick={() => goToStep(9)}>Next: Review & Submit →</button>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="step-screen active">
            <div className="step-header">
              <div className="step-eyebrow">Step 9 of 9</div>
              <h1 className="step-title">Review & Submit</h1>
              <p className="step-desc">Here's a summary of your selections. Review everything below — once submitted, the Perrem Design & Construction team will use this to begin your initial design concept.</p>
            </div>
            {buildSummary()}
            <div className="section-label">Anything else to add?</div>
            <div className="field-group full">
              <div className="field"><label>Additional comments for the design team</label>
                <textarea value={getInputValue('finalNotes')} onChange={(e) => updateSelections('finalNotes', e.target.value)} placeholder="Inspirations, specific products already sourced, concerns, anything not covered above..."></textarea>
              </div>
            </div>
            <div className="notes-box">
              <p>By submitting this form you're providing <strong>Perrem Design & Construction</strong> with your initial kitchen brief. This is not a quote or contract — we'll be in touch to discuss next steps and arrange a site visit.</p>
            </div>
            <div className="nav-row">
              <button className="btn btn-secondary" onClick={() => goToStep(8)}>← Back</button>
              <button className="btn btn-submit" onClick={submitForm}>Submit My Kitchen Brief →</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="kitchen-portal">
      <div className="header">
        <div className="logo">Perrem <span>Design & Construction</span></div>
        <div className="header-sub">Kitchen Design Portal</div>
      </div>
      <div className="progress-wrap">
        <div className="progress-steps">
          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === currentStep && !isSubmitted;
            const isDone = stepNum < currentStep && !isSubmitted;
            return (
              <div key={stepNum} className={`step-pill ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`} onClick={() => !isSubmitted && stepNum !== currentStep && goToStep(stepNum)}>
                <div className="step-num">{isDone ? '✓' : stepNum}</div>
                <div className="step-label">{step.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main">
        {renderStepContent()}
      </div>
    </div>
  );
}

export default Kitchen;