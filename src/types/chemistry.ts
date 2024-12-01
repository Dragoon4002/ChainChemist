export interface Element {
    id: string
    symbol: string
    name: string
    atomicNumber: number
    category: ElementCategory
  }
  
  export interface Compound {
    name: string
    formula: string
    description: string
    elements: Record<string, number> // Maps element symbols to their count
  }
  
  export enum ElementCategory {
    NonMetal = "Non-metal",
    NobleGas = "Noble gas",
    AlkaliMetal = "Alkali metal",
    AlkalineEarthMetal = "Alkaline earth metal",
    Metalloid = "Metalloid",
    Halogen = "Halogen",
    Metal = "Metal",
    TransitionMetal = "Transition metal"
  }
  
  export const SAMPLE_ELEMENTS: Element[] = [
    {
      id: "H",
      symbol: "H",
      name: "Hydrogen",
      atomicNumber: 1,
      category: ElementCategory.NonMetal
    },
    {
      id: "O",
      symbol: "O",
      name: "Oxygen",
      atomicNumber: 8,
      category: ElementCategory.NonMetal
    },
    {
      id: "Na",
      symbol: "Na",
      name: "Sodium",
      atomicNumber: 11,
      category: ElementCategory.AlkaliMetal
    },
    {
      id: "Cl",
      symbol: "Cl",
      name: "Chlorine",
      atomicNumber: 17,
      category: ElementCategory.Halogen
    },
    {
        id: "C",
        symbol: "C",
        name: "Carbon",
        atomicNumber: 6,
        category: ElementCategory.NonMetal
      },
      {
        id: "N",
        symbol: "N",
        name: "Nitrogen",
        atomicNumber: 7,
        category: ElementCategory.NonMetal
      },
      {
        id: "K",
        symbol: "K",
        name: "Potassium",
        atomicNumber: 19,
        category: ElementCategory.AlkaliMetal
      },
      {
        id: "Ca",
        symbol: "Ca",
        name: "Calcium",
        atomicNumber: 20,
        category: ElementCategory.AlkalineEarthMetal
      },
      {
        id: "Fe",
        symbol: "Fe",
        name: "Iron",
        atomicNumber: 26,
        category: ElementCategory.TransitionMetal
      },
      {
        id: "S",
        symbol: "S",
        name: "Sulfur",
        atomicNumber: 16,
        category: ElementCategory.NonMetal
      },
      {
        id: "Mg",
        symbol: "Mg",
        name: "Magnesium",
        atomicNumber: 12,
        category: ElementCategory.AlkalineEarthMetal
      },
      {
        id: "He",
        symbol: "He",
        name: "Helium",
        atomicNumber: 2,
        category: ElementCategory.NobleGas
      }
  ]
  
  
  export const KNOWN_COMPOUNDS: Compound[] = [
    {
      name: "Water",
      formula: "H2O",
      description: "Essential for life, water is a colorless, odorless liquid at room temperature.",
      elements: { H: 2, O: 1 }
    },
    {
      name: "Table Salt",
      formula: "NaCl",
      description: "Common table salt, essential for life and food seasoning.",
      elements: { Na: 1, Cl: 1 }
    },
    {
        name: "Carbon Dioxide",
        formula: "CO2",
        description: "A colorless gas produced by burning carbon and organic compounds and by respiration.",
        elements: { C: 1, O: 2 }
      },
      {
        name: "Ammonia",
        formula: "NH3",
        description: "A colorless gas with a characteristic pungent smell, commonly used as fertilizer.",
        elements: { N: 1, H: 3 }
      },
      {
        name: "Calcium Carbonate",
        formula: "CaCO3",
        description: "A common substance found in rocks, also the main component of shells of marine organisms.",
        elements: { Ca: 1, C: 1, O: 3 }
      },
      {
        name: "Sulfuric Acid",
        formula: "H2SO4",
        description: "A highly corrosive strong mineral acid, widely used in chemical industries.",
        elements: { H: 2, S: 1, O: 4 }
      },
      {
        name: "Magnesium Oxide",
        formula: "MgO",
        description: "A white solid mineral that occurs naturally as periclase and is a source of magnesium.",
        elements: { Mg: 1, O: 1 }
      },
      {
        name: "Potassium Nitrate",
        formula: "KNO3",
        description: "A chemical compound used as a fertilizer and in fireworks.",
        elements: { K: 1, N: 1, O: 3 }
      },
      {
        name: "Iron Oxide",
        formula: "Fe2O3",
        description: "A naturally occurring iron compound, commonly known as rust.",
        elements: { Fe: 2, O: 3 }
      },
      {
        name: "Helium Gas",
        formula: "He",
        description: "An inert gas, commonly used to fill balloons and as a cooling medium.",
        elements: { He: 1 }
      }
  ];