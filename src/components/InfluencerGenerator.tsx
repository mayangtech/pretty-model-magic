import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RunwareService, GeneratedImage } from "@/lib/runware-service";
import { toast } from "sonner";

interface GeneratorOptions {
  race: string;
  bodyType: string;
  height: string;
  style: string;
  niche: string;
}

const defaultOptions: GeneratorOptions = {
  race: "asian",
  bodyType: "slim",
  height: "average",
  style: "casual",
  niche: "lifestyle",
};

export function InfluencerGenerator({ apiKey }: { apiKey: string }) {
  const [options, setOptions] = useState<GeneratorOptions>(defaultOptions);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);

  const runwareService = new RunwareService(apiKey);

  const generatePrompt = (options: GeneratorOptions) => {
    const basePrompt = `beautiful ${options.race} female influencer, ${options.bodyType} body type, ${options.height} height, wearing ${options.style} attire`;
    
    const nichePrompts: Record<string, string> = {
      lifestyle: "lifestyle photo, instagram style, natural lighting, urban setting",
      food: "food review setting, restaurant atmosphere, holding camera or phone",
      travel: "travel photography style, scenic location, adventure outfit",
      tech: "modern office setting, tech gadgets nearby, professional lighting",
      fitness: "fitness attire, gym or outdoor workout setting, athletic pose",
      finance: "professional business attire, office or financial district setting",
    };

    return `${basePrompt}, ${nichePrompts[options.niche]}, high quality, detailed, 8k`;
  };

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      const prompt = generatePrompt(options);
      console.log("Generated prompt:", prompt);
      
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        model: "runware:100@1",
        numberResults: 1,
      });
      
      setGeneratedImage(result);
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <Card className="p-6 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">AI Influencer Generator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Race</label>
            <Select
              value={options.race}
              onValueChange={(value) => setOptions({ ...options, race: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="caucasian">Caucasian</SelectItem>
                <SelectItem value="african">African</SelectItem>
                <SelectItem value="hispanic">Hispanic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Body Type</label>
            <Select
              value={options.bodyType}
              onValueChange={(value) => setOptions({ ...options, bodyType: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slim">Slim</SelectItem>
                <SelectItem value="athletic">Athletic</SelectItem>
                <SelectItem value="curvy">Curvy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Height</label>
            <Select
              value={options.height}
              onValueChange={(value) => setOptions({ ...options, height: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="petite">Petite</SelectItem>
                <SelectItem value="average">Average</SelectItem>
                <SelectItem value="tall">Tall</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Style</label>
            <Select
              value={options.style}
              onValueChange={(value) => setOptions({ ...options, style: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="streetwear">Streetwear</SelectItem>
                <SelectItem value="bohemian">Bohemian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-white">Influencer Niche</label>
            <Select
              value={options.niche}
              onValueChange={(value) => setOptions({ ...options, niche: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="food">Food Review</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="tech">Tech Review</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          className="w-full bg-white text-gradient-start hover:bg-gray-100"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate Influencer"}
        </Button>
      </Card>

      {generatedImage && (
        <Card className="p-6 bg-white">
          <img
            src={generatedImage.imageURL}
            alt="Generated influencer"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <Button
            className="mt-4 w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            Generate Another
          </Button>
        </Card>
      )}
    </div>
  );
}