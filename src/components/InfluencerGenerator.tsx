import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RunwareService } from "@/lib/runware-service";
import { toast } from "sonner";
import { GeneratorForm } from "./GeneratorForm";
import { generatePrompt } from "@/utils/promptGenerator";
import { GeneratorOptions, GeneratedImage } from "@/types/generator";

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
      {generatedImage && (
        <div className="space-y-4">
          <Card className="p-6 bg-white">
            <img
              src={generatedImage.imageURL}
              alt="Generated influencer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </Card>
          <Button
            className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            Generate Another
          </Button>
        </div>
      )}

      <GeneratorForm
        options={options}
        setOptions={setOptions}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
      />

      {generatedImage && (
        <Button
          className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          Generate Another
        </Button>
      )}
    </div>
  );
}