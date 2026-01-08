export const productCategories = [
  {
    id: 'insulation',
    name: 'Insulation Products',
    slug: 'insulation',
    description: 'High-performance thermal insulation materials for industrial cold storage, refrigeration systems, and energy-efficient infrastructure.',
    technicalOverview: 'Our insulation product range delivers superior thermal resistance, moisture protection, and long-term durability in extreme temperature environments.',
  },
  {
    id: 'machinery',
    name: 'Machinery & Systems',
    slug: 'machinery',
    description: 'Industrial-grade refrigeration machinery, ammonia systems, automation equipment, and complete cold storage infrastructure components.',
    technicalOverview: 'Engineered for heavy-duty industrial applications, our machinery portfolio includes complete refrigeration systems, automation solutions, and precision control equipment.',
  },
];

import fiberglassRolls from '../assets/Fiberglass Rolls.jpeg';
import rockwoolInsulation from '../assets/Rockwool Insulation.jpeg';
import pufPanel from '../assets/PUF Panel.jpeg';
import nitrileTubes from '../assets/Nitrile Tubes.jpeg';
import nitrileSheets from '../assets/Nitrile Sheets.jpeg';
import xpsBoards from '../assets/XPS Boards.jpeg';
import xlpeInsulation from '../assets/XLPE INSULATION.jpeg';
import bubbleInsulation from '../assets/Bubble Insulation.jpeg';
import ammoniaCompressors from '../assets/Ammonia Compressors.jpeg';
import ammoniaCompressors2 from '../assets/Ammonia Compressors2.jpeg';
import ammoniaValves from '../assets/Ammonia Valves.jpeg';
import epsBoards from '../assets/EPS boards.jpeg';
import ammoniaCondensers from '../assets/Ammonia Atmospheric Condensers.jpeg';
import airCoolingUnit from '../assets/Ammonia Air Cooling unit.jpeg';
import bunkerCooling from '../assets/Bunker Cooling System.jpeg';
import ammoniaPumps from '../assets/Ammonia Liquid Pumps.jpeg';
import lowPressureReceiver from '../assets/Low Pressure Receiver.jpeg';
import pressureVessel from '../assets/Pressure Vessel.jpeg';
import monoblockPump from '../assets/Monoblock pump.jpeg';
import inductionMotors from '../assets/Induction Motors.jpeg';
import genset from '../assets/Genset.jpeg';
import co2Extraction from '../assets/CO2 EXTRACTION System.jpeg';
import coldStorageAutomation from '../assets/Cold storage automation.jpeg';
import conveyorBelt from '../assets/Conveyor Belt System.jpeg';
import fireFighting from '../assets/Fire fighting system.jpeg';
import airCurtains from '../assets/Air Curtains.jpeg';
import coldStorageDoors from '../assets/Cold Storage doors.jpeg';
import digitalThermometer from '../assets/Digital thermometer.jpeg';
import analogueThermometer from '../assets/Analogue Thermometer.jpeg';
import pressureGauges from '../assets/Pressure gauges.jpeg';
import sparesParts from '../assets/Spares parts.jpeg';

export const products = {
  insulation: [
    {
      id: 'fiberglass-boards',
      name: 'Fiberglass Boards',
      slug: 'fiberglass-boards',
      category: 'insulation',
      shortDescription: 'Rigid thermal insulation boards for cold storage walls and ceilings',
      description: 'High-density fiberglass boards engineered for superior thermal insulation in cold storage facilities. Provides excellent thermal resistance, fire safety, and structural integrity.',
      applications: ['Cold storage walls', 'Ceiling insulation', 'Partition systems', 'Industrial refrigeration'],
      specifications: {
        'Thermal Conductivity': '0.035 - 0.040 W/mK',
        'Density': '48 - 96 kg/m³',
        'Temperature Range': '-50°C to +250°C',
        'Fire Rating': 'Class A1 Non-Combustible',
      },
      image: fiberglassRolls,
    },
    {
      id: 'fiberglass-rolls',
      name: 'Fiberglass Rolls',
      slug: 'fiberglass-rolls',
      category: 'insulation',
      shortDescription: 'Flexible insulation rolls for pipes and irregular surfaces',
      description: 'Flexible fiberglass insulation in roll form, ideal for wrapping pipes, ducts, and irregular surfaces in refrigeration systems.',
      applications: ['Pipe insulation', 'Duct wrapping', 'Equipment insulation', 'Irregular surface coverage'],
      specifications: {
        'Thermal Conductivity': '0.035 - 0.042 W/mK',
        'Density': '10 - 32 kg/m³',
        'Roll Width': '600mm - 1200mm',
        'Temperature Range': '-40°C to +200°C',
      },
      image: fiberglassRolls,
    },
    {
      id: 'rockwool-insulation',
      name: 'Rockwool Insulation',
      slug: 'rockwool-insulation',
      category: 'insulation',
      shortDescription: 'Fire-resistant mineral wool for high-temperature applications',
      description: 'Premium rockwool insulation manufactured from volcanic rock, offering exceptional fire resistance and thermal performance.',
      applications: ['Fire-rated walls', 'High-temperature zones', 'Acoustic insulation', 'Industrial equipment'],
      specifications: {
        'Thermal Conductivity': '0.033 - 0.040 W/mK',
        'Density': '40 - 200 kg/m³',
        'Melting Point': '>1000°C',
        'Fire Rating': 'Euroclass A1',
      },
      image: rockwoolInsulation,
    },
    {
      id: 'puf-panels',
      name: 'PUF Panels',
      slug: 'puf-panels',
      category: 'insulation',
      shortDescription: 'Polyurethane foam sandwich panels for cold room construction',
      description: 'Pre-engineered PUF sandwich panels with superior insulation properties, designed for rapid cold storage construction.',
      applications: ['Cold room walls', 'Ceiling panels', 'Modular cold storage', 'Clean room construction'],
      specifications: {
        'Core Material': 'Polyurethane Foam',
        'Density': '38 - 42 kg/m³',
        'Thermal Conductivity': '0.019 - 0.023 W/mK',
        'Panel Thickness': '50mm - 200mm',
      },
      image: pufPanel,
    },
    {
      id: 'nitrile-tubes',
      name: 'Nitrile Tubes',
      slug: 'nitrile-tubes',
      category: 'insulation',
      shortDescription: 'Elastomeric pipe insulation for refrigeration lines',
      description: 'Closed-cell nitrile rubber tubes providing excellent moisture resistance and thermal insulation for refrigeration piping.',
      applications: ['Refrigerant pipes', 'Chilled water lines', 'HVAC systems', 'Condensation prevention'],
      specifications: {
        'Material': 'NBR/PVC Elastomer',
        'Temperature Range': '-50°C to +110°C',
        'Thermal Conductivity': '0.036 - 0.040 W/mK',
        'Pipe Diameter Range': '6mm - 160mm',
      },
      image: nitrileTubes,
    },
    {
      id: 'nitrile-sheets',
      name: 'Nitrile Sheets',
      slug: 'nitrile-sheets',
      category: 'insulation',
      shortDescription: 'Flexible elastomeric sheets for equipment and surface insulation',
      description: 'Flexible nitrile rubber sheets for insulating flat surfaces, equipment, and custom applications in cold storage environments.',
      applications: ['Equipment wrapping', 'Tank insulation', 'Custom fabrication', 'Gasket material'],
      specifications: {
        'Material': 'NBR/PVC Elastomer',
        'Thickness': '6mm - 32mm',
        'Sheet Size': '1m x 2m standard',
        'Temperature Range': '-50°C to +110°C',
      },
      image: nitrileSheets,
    },
    {
      id: 'xps-boards',
      name: 'XPS Boards',
      slug: 'xps-boards',
      category: 'insulation',
      shortDescription: 'Extruded polystyrene boards for high-compression applications',
      description: 'High-density XPS insulation boards with exceptional compressive strength, ideal for floor insulation and load-bearing applications.',
      applications: ['Cold storage floors', 'Under-slab insulation', 'Perimeter insulation', 'Parking deck insulation'],
      specifications: {
        'Compressive Strength': '300 - 700 kPa',
        'Thermal Conductivity': '0.028 - 0.036 W/mK',
        'Water Absorption': '<0.7%',
        'Density': '28 - 45 kg/m³',
      },
      image: xpsBoards,
    },
    {
      id: 'xlpe-insulation',
      name: 'XLPE Insulation',
      slug: 'xlpe-insulation',
      category: 'insulation',
      shortDescription: 'Cross-linked polyethylene foam for specialized applications',
      description: 'Closed-cell XLPE foam insulation offering excellent thermal performance and chemical resistance.',
      applications: ['Pipe insulation', 'HVAC ducts', 'Automotive applications', 'Packaging'],
      specifications: {
        'Material': 'Cross-linked Polyethylene',
        'Density': '30 - 45 kg/m³',
        'Thermal Conductivity': '0.033 - 0.038 W/mK',
        'Temperature Range': '-70°C to +90°C',
      },
      image: xlpeInsulation,
    },
    {
      id: 'bubble-insulation',
      name: 'Bubble Insulation',
      slug: 'bubble-insulation',
      category: 'insulation',
      shortDescription: 'Reflective bubble wrap for radiant heat barrier',
      description: 'Multi-layer bubble insulation with reflective surfaces, designed for radiant heat barrier applications.',
      applications: ['Roof insulation', 'Wall cavity insulation', 'Radiant barriers', 'Temporary insulation'],
      specifications: {
        'Layers': 'Double bubble with foil',
        'Reflectivity': '96%',
        'R-Value': 'R-3.7 to R-17',
        'Roll Width': '1.2m standard',
      },
      image: bubbleInsulation,
    },
    {
      id: 'eps-boards',
      name: 'EPS Boards',
      slug: 'eps-boards',
      category: 'insulation',
      shortDescription: 'Expanded polystyrene boards for lightweight insulation',
      description: 'Lightweight EPS insulation boards offering excellent thermal performance and cost-effectiveness for various applications.',
      applications: ['Wall insulation', 'Roof insulation', 'Packaging', 'Lightweight construction'],
      specifications: {
        'Density': '15 - 30 kg/m³',
        'Thermal Conductivity': '0.032 - 0.038 W/mK',
        'Compressive Strength': '70 - 200 kPa',
        'Temperature Range': '-50°C to +75°C',
      },
      image: epsBoards,
    },
  ],
  machinery: [
    {
      id: 'ammonia-compressors',
      name: 'Ammonia Compressors',
      slug: 'ammonia-compressors',
      category: 'machinery',
      shortDescription: 'Industrial reciprocating and screw compressors for ammonia refrigeration',
      description: 'Heavy-duty ammonia compressors engineered for large-scale industrial refrigeration plants. Available in reciprocating and screw configurations.',
      applications: ['Cold storage plants', 'Food processing', 'Ice plants', 'Chemical cooling'],
      specifications: {
        'Refrigerant': 'NH3 (Ammonia)',
        'Capacity Range': '50 TR - 500 TR',
        'Type': 'Reciprocating / Screw',
        'Power Supply': '3-Phase, 415V',
      },
      image: ammoniaCompressors,
    },
    {
      id: 'ammonia-valves',
      name: 'Ammonia Valves',
      slug: 'ammonia-valves',
      category: 'machinery',
      shortDescription: 'Precision control valves for ammonia refrigeration systems',
      description: 'Industrial-grade valves designed specifically for ammonia service, including solenoid, expansion, and safety relief valves.',
      applications: ['System control', 'Safety systems', 'Flow regulation', 'Emergency shutdown'],
      specifications: {
        'Material': 'Carbon Steel / Stainless Steel',
        'Pressure Rating': 'Up to 25 bar',
        'Size Range': '15mm - 150mm',
        'Standards': 'ASME, DIN',
      },
      image: ammoniaValves,
    },
    {
      id: 'ammonia-controls',
      name: 'Ammonia Controls',
      slug: 'ammonia-controls',
      category: 'machinery',
      shortDescription: 'Automated control systems for ammonia refrigeration plants',
      description: 'Advanced PLC-based control systems for monitoring and automating ammonia refrigeration operations.',
      applications: ['Plant automation', 'Temperature control', 'Safety monitoring', 'Energy optimization'],
      specifications: {
        'Control Type': 'PLC / SCADA',
        'I/O Points': 'Configurable',
        'Display': 'HMI Touchscreen',
        'Communication': 'Modbus, Ethernet',
      },
      image: ammoniaCompressors2,
    },
    {
      id: 'ammonia-condensers',
      name: 'Ammonia Atmospheric Condensers',
      slug: 'ammonia-condensers',
      category: 'machinery',
      shortDescription: 'Air-cooled condensers for ammonia refrigeration heat rejection',
      description: 'Heavy-duty atmospheric condensers designed for efficient heat rejection in ammonia refrigeration systems.',
      applications: ['Heat rejection', 'Refrigeration plants', 'Process cooling', 'Industrial HVAC'],
      specifications: {
        'Type': 'Air-cooled / Evaporative',
        'Capacity': '100 kW - 2000 kW',
        'Material': 'Galvanized steel / Stainless steel',
        'Fan Type': 'Axial / Centrifugal',
      },
      image: ammoniaCondensers,
    },
    {
      id: 'air-cooling-systems',
      name: 'Ammonia Air Cooling Systems',
      slug: 'air-cooling-systems',
      category: 'machinery',
      shortDescription: 'Industrial evaporators and air cooling units',
      description: 'Complete air cooling systems including evaporators, fans, and defrost systems for cold storage applications.',
      applications: ['Cold room cooling', 'Blast freezing', 'Ripening rooms', 'Process cooling'],
      specifications: {
        'Cooling Capacity': '10 kW - 500 kW',
        'Fin Spacing': '4mm - 10mm',
        'Defrost Type': 'Electric / Hot gas',
        'Air Throw': 'Up to 30 meters',
      },
      image: airCoolingUnit,
    },
    {
      id: 'bunker-cooling',
      name: 'Bunker Cooling Systems',
      slug: 'bunker-cooling',
      category: 'machinery',
      shortDescription: 'Specialized cooling systems for potato and vegetable storage',
      description: 'Purpose-built bunker cooling systems designed for bulk storage of potatoes, onions, and vegetables.',
      applications: ['Potato storage', 'Onion storage', 'Vegetable warehouses', 'Bulk storage'],
      specifications: {
        'Capacity': 'Custom designed',
        'Air Distribution': 'Floor duct system',
        'Humidity Control': 'Integrated',
        'Temperature Range': '2°C - 15°C',
      },
      image: bunkerCooling,
    },
    {
      id: 'ammonia-pumps',
      name: 'Ammonia Liquid Pumps',
      slug: 'ammonia-pumps',
      category: 'machinery',
      shortDescription: 'Centrifugal pumps for ammonia liquid circulation',
      description: 'Industrial centrifugal pumps designed for ammonia liquid overfeed and recirculation systems.',
      applications: ['Liquid overfeed', 'Recirculation systems', 'Transfer pumps', 'Defrost systems'],
      specifications: {
        'Type': 'Centrifugal',
        'Material': 'Cast iron / Stainless steel',
        'Flow Rate': '5 m³/h - 200 m³/h',
        'Head': 'Up to 100 meters',
      },
      image: ammoniaPumps,
    },
    {
      id: 'low-pressure-receivers',
      name: 'Low Pressure Receivers',
      slug: 'low-pressure-receivers',
      category: 'machinery',
      shortDescription: 'Pressure vessels for ammonia refrigeration systems',
      description: 'ASME-certified low pressure receivers for ammonia storage and system surge protection.',
      applications: ['Refrigerant storage', 'Surge protection', 'System balancing', 'Liquid separation'],
      specifications: {
        'Capacity': '100L - 10,000L',
        'Design Pressure': '16 bar / 25 bar',
        'Material': 'Carbon steel SA516',
        'Certification': 'ASME Section VIII',
      },
      image: lowPressureReceiver,
    },
    {
      id: 'pressure-vessels',
      name: 'Pressure Vessels',
      slug: 'pressure-vessels',
      category: 'machinery',
      shortDescription: 'Custom-fabricated pressure vessels for industrial applications',
      description: 'Engineered pressure vessels manufactured to ASME standards for various industrial refrigeration applications.',
      applications: ['High-pressure storage', 'Separators', 'Accumulators', 'Custom applications'],
      specifications: {
        'Design Code': 'ASME Section VIII Div 1',
        'Pressure Range': 'Up to 40 bar',
        'Volume': 'Custom designed',
        'Material': 'SA516 Gr 70',
      },
      image: pressureVessel,
    },
    {
      id: 'monoblock-pumps',
      name: 'Monoblock Pumps',
      slug: 'monoblock-pumps',
      category: 'machinery',
      shortDescription: 'Centrifugal pumps for water circulation and general applications',
      description: 'Reliable monoblock centrifugal pumps for water circulation, cooling tower applications, and general industrial use.',
      applications: ['Cooling towers', 'Water circulation', 'Condensers', 'General pumping'],
      specifications: {
        'Power': '0.5 HP - 25 HP',
        'Flow Rate': '10 LPM - 1000 LPM',
        'Head': 'Up to 80 meters',
        'Material': 'Cast iron / SS',
      },
      image: monoblockPump,
    },
    {
      id: 'induction-motors',
      name: 'Induction Motors',
      slug: 'induction-motors',
      category: 'machinery',
      shortDescription: 'Three-phase induction motors for industrial equipment',
      description: 'Heavy-duty three-phase induction motors for compressors, pumps, fans, and industrial machinery.',
      applications: ['Compressor drives', 'Pump motors', 'Fan motors', 'Conveyor drives'],
      specifications: {
        'Power Range': '1 HP - 500 HP',
        'Speed': '750 / 1000 / 1500 / 3000 RPM',
        'Voltage': '415V, 3-Phase',
        'Efficiency': 'IE2 / IE3',
      },
      image: inductionMotors,
    },
    {
      id: 'gensets',
      name: 'Gensets',
      slug: 'gensets',
      category: 'machinery',
      shortDescription: 'Diesel generator sets for backup power',
      description: 'Industrial diesel generator sets providing reliable backup power for cold storage and refrigeration facilities.',
      applications: ['Backup power', 'Prime power', 'Emergency systems', 'Remote locations'],
      specifications: {
        'Capacity': '25 kVA - 2000 kVA',
        'Fuel': 'Diesel',
        'Configuration': 'Open / Silent',
        'Control': 'Auto start / Manual',
      },
      image: genset,
    },
    {
      id: 'co2-extraction',
      name: 'CO₂ Extraction Systems',
      slug: 'co2-extraction',
      category: 'machinery',
      shortDescription: 'Supercritical CO₂ extraction equipment for industrial processing',
      description: 'Advanced CO₂ extraction systems for food processing, pharmaceutical, and industrial applications.',
      applications: ['Food processing', 'Essential oils', 'Pharmaceutical extraction', 'Industrial processing'],
      specifications: {
        'Pressure': 'Up to 350 bar',
        'Temperature': '-10°C to +80°C',
        'Capacity': 'Custom designed',
        'Control': 'PLC automated',
      },
      image: co2Extraction,
    },
    {
      id: 'cold-storage-automation',
      name: 'Complete Cold Storage Automation',
      slug: 'cold-storage-automation',
      category: 'machinery',
      shortDescription: 'Integrated automation systems for cold storage facilities',
      description: 'Turnkey automation solutions including PLC, SCADA, sensors, and control panels for complete cold storage management.',
      applications: ['Temperature control', 'Humidity management', 'Energy optimization', 'Remote monitoring'],
      specifications: {
        'System': 'PLC + SCADA + HMI',
        'Monitoring': 'Real-time + Historical',
        'Alarms': 'SMS / Email alerts',
        'Integration': 'ERP compatible',
      },
      image: coldStorageAutomation,
    },
    {
      id: 'conveyor-systems',
      name: 'Conveyor Belt Systems',
      slug: 'conveyor-systems',
      category: 'machinery',
      shortDescription: 'Material handling conveyors for cold storage and processing',
      description: 'Industrial conveyor systems designed for cold storage environments and food processing applications.',
      applications: ['Material handling', 'Product sorting', 'Loading/unloading', 'Process integration'],
      specifications: {
        'Type': 'Belt / Roller / Chain',
        'Width': '300mm - 1200mm',
        'Speed': 'Variable',
        'Temperature': 'Down to -40°C',
      },
      image: conveyorBelt,
    },
    {
      id: 'fire-safety',
      name: 'Fire Safety Systems',
      slug: 'fire-safety',
      category: 'machinery',
      shortDescription: 'Fire detection and suppression systems for cold storage',
      description: 'Comprehensive fire safety solutions including detection, alarm, and suppression systems for cold storage facilities.',
      applications: ['Fire detection', 'Automatic suppression', 'Emergency alarms', 'Safety compliance'],
      specifications: {
        'Detection': 'Smoke / Heat / Flame',
        'Suppression': 'Sprinkler / FM200 / CO2',
        'Standards': 'NFPA compliant',
        'Control': 'Addressable panel',
      },
      image: fireFighting,
    },
    {
      id: 'air-curtains',
      name: 'Air Curtains',
      slug: 'air-curtains',
      category: 'machinery',
      shortDescription: 'Industrial air curtains for cold room door protection',
      description: 'High-velocity air curtains preventing cold air loss and maintaining temperature separation at cold room entrances.',
      applications: ['Door protection', 'Temperature separation', 'Energy saving', 'Insect barrier'],
      specifications: {
        'Air Velocity': 'Up to 25 m/s',
        'Width': '1m - 4m',
        'Type': 'Ambient / Heated',
        'Mounting': 'Horizontal / Vertical',
      },
      image: airCurtains,
    },
    {
      id: 'cold-storage-doors',
      name: 'Cold Storage Doors & Windows',
      slug: 'cold-storage-doors',
      category: 'machinery',
      shortDescription: 'Insulated doors and viewing windows for cold rooms',
      description: 'Heavy-duty insulated doors and observation windows designed for cold storage and freezer applications.',
      applications: ['Cold room access', 'Freezer doors', 'Personnel doors', 'Observation windows'],
      specifications: {
        'Insulation': 'PUF core',
        'Thickness': '80mm - 150mm',
        'Type': 'Sliding / Hinged / Strip',
        'Temperature': 'Down to -40°C',
      },
      image: coldStorageDoors,
    },
    {
      id: 'thermometers',
      name: 'Digital & Analogue Thermometers',
      slug: 'thermometers',
      category: 'machinery',
      shortDescription: 'Temperature measurement instruments for cold storage',
      description: 'Precision thermometers and temperature sensors for accurate monitoring in cold storage environments.',
      applications: ['Temperature monitoring', 'Data logging', 'Process control', 'Compliance recording'],
      specifications: {
        'Type': 'Digital / Analogue',
        'Range': '-50°C to +150°C',
        'Accuracy': '±0.5°C',
        'Display': 'LED / LCD',
      },
      image: digitalThermometer,
    },
    {
      id: 'pressure-gauges',
      name: 'Pressure Gauges',
      slug: 'pressure-gauges',
      category: 'machinery',
      shortDescription: 'Industrial pressure measurement instruments',
      description: 'Heavy-duty pressure gauges for monitoring refrigeration systems, compressors, and pressure vessels.',
      applications: ['System monitoring', 'Safety compliance', 'Maintenance', 'Troubleshooting'],
      specifications: {
        'Range': '0-40 bar (various)',
        'Accuracy': 'Class 1.6 / 2.5',
        'Connection': 'Bottom / Back mount',
        'Material': 'SS / Brass',
      },
      image: pressureGauges,
    },
    {
      id: 'spare-parts',
      name: 'All Related Spare Parts',
      slug: 'spare-parts',
      category: 'machinery',
      shortDescription: 'Comprehensive spare parts inventory for refrigeration systems',
      description: 'Complete range of genuine and compatible spare parts for all refrigeration equipment, compressors, and cold storage systems.',
      applications: ['Maintenance', 'Repairs', 'Upgrades', 'Emergency replacement'],
      specifications: {
        'Availability': 'Stock + Order',
        'Brands': 'OEM + Compatible',
        'Coverage': 'All equipment types',
        'Warranty': 'As per manufacturer',
      },
      image: sparesParts,
    },
  ],
};

export const getProductsByCategory = (categorySlug) => {
  return products[categorySlug] || [];
};

export const getProductBySlug = (slug) => {
  const allProducts = [...products.insulation, ...products.machinery];
  return allProducts.find(p => p.slug === slug);
};

export const getCategoryBySlug = (slug) => {
  return productCategories.find(c => c.slug === slug);
};
