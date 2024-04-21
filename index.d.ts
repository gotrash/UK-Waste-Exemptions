export interface WasteExemption {
    ref: string;
    description: string;
    oldExemptions?: number[];
    oldDescriptions?: string[];
  }
  
  declare const wasteExemptions: WasteExemption[];
  
  export default wasteExemptions;