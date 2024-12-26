export interface GeneratorOptions {
  race: string;
  bodyType: string;
  height: string;
  style: string;
  niche: string;
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}