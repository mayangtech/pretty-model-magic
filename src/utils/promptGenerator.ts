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
    relationship: "casual elegant attire, romantic setting, lifestyle blogger pose",
    crypto: "modern professional attire, tech startup environment, cryptocurrency themed",
    "neo-futuristic": "futuristic fashion, cyberpunk setting, high-tech environment",
    anime: "anime style character, vibrant colors, dynamic pose",
    cosplayer: "detailed cosplay outfit, convention setting, character-accurate pose",
    superhero: "superhero costume, action pose, dramatic lighting",
    AI: "futuristic AI-themed outfit, high-tech environment, digital elements"
  };

  const backgroundPrompts: Record<string, string> = {
    random: "",
    klcc: "KLCC Twin Towers in background, Kuala Lumpur cityscape",
    "london bridge": "London Bridge and Thames River in background, London cityscape",
    "sydney opera": "Sydney Opera House in background, Sydney Harbour",
    "great wall": "Great Wall of China in background, majestic mountain landscape",
    rainforest: "lush tropical rainforest background, nature environment",
    "space station": "space station interior, futuristic space environment, Earth view from window",
    "egypt pyramid": "Great Pyramids of Giza in background, Egyptian desert landscape"
  };

  const backgroundPrompt = options.background !== "random" ? `, ${backgroundPrompts[options.background]}` : "";
  
  return `${basePrompt}, ${nichePrompts[options.niche]}${backgroundPrompt}, high quality, detailed, 8k`;
};