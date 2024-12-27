export interface GeneratorOptions {
  gender: string;
  race: string;
  bodyType: string;
  height: string;
  style: string;
  niche: string;
  background: string;
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}