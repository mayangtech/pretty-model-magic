import { GeneratorOptions } from "@/types/generator";

export const generatePrompt = (options: GeneratorOptions) => {
  const basePrompt = `beautiful ${options.race} female influencer, ${options.bodyType} body type, ${options.height} height, wearing ${options.style} attire`;
  
  const nichePrompts: Record<string, string> = {
    lifestyle: "lifestyle photo, instagram style, natural lighting, urban setting",
    food: "food review setting, restaurant atmosphere, holding camera or phone",
    travel: "travel photography style, scenic location, adventure outfit",
    tech: "modern office setting, tech gadgets nearby, professional lighting",
    fitness: "fitness attire, gym or outdoor workout setting, athletic pose",
    finance: "professional business attire, office or financial district setting",
    army: "military uniform, tactical gear, professional military setting",
    spiritual: "peaceful meditation pose, serene environment, spiritual setting",
    religious: "modest religious attire, respectful pose, religious setting",
    motorsport: "racing suit, motorsport environment, professional racing setting",
    fashion: "high fashion attire, fashion week setting, runway or photoshoot environment",
    graduation: "graduation gown and cap, university campus setting, celebration atmosphere",
  };

  return `${basePrompt}, ${nichePrompts[options.niche]}, high quality, detailed, 8k`;
};