export interface WasteExemption {
  ref: string;
  description: string;
  previousExemptions?: WasteExemption[];
}



declare const wasteExemptions: WasteExemption[];

export default wasteExemptions;
