import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GeneratorOptions } from "@/types/generator";

interface GeneratorFormProps {
  options: GeneratorOptions;
  setOptions: (options: GeneratorOptions) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function GeneratorForm({ options, setOptions, onGenerate, isGenerating }: GeneratorFormProps) {
  return (
    <Card className="p-6 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">AI Influencer Generator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Gender</label>
          <Select
            value={options.gender}
            onValueChange={(value) => setOptions({ ...options, gender: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

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
              <SelectItem value="malay muslim">Malay Muslim</SelectItem>
              <SelectItem value="arab">Arab</SelectItem>
              <SelectItem value="indian">Indian</SelectItem>
              <SelectItem value="british">British</SelectItem>
              <SelectItem value="korean">Korean</SelectItem>
              <SelectItem value="anime">Anime</SelectItem>
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
              <SelectItem value="skinny">Skinny</SelectItem>
              <SelectItem value="chubby">Chubby</SelectItem>
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
              <SelectItem value="modest">Modest</SelectItem>
              <SelectItem value="islamic">Islamic</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="sporty">Sporty</SelectItem>
              <SelectItem value="anime">Anime</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Background</label>
          <Select
            value={options.background}
            onValueChange={(value) => setOptions({ ...options, background: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="random">Random</SelectItem>
              <SelectItem value="klcc">KLCC</SelectItem>
              <SelectItem value="london bridge">London Bridge</SelectItem>
              <SelectItem value="sydney opera">Sydney Opera</SelectItem>
              <SelectItem value="great wall">Great Wall of China</SelectItem>
              <SelectItem value="rainforest">Rainforest</SelectItem>
              <SelectItem value="space station">Space Station</SelectItem>
              <SelectItem value="egypt pyramid">Egypt Pyramid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
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
              <SelectItem value="army">Army</SelectItem>
              <SelectItem value="spiritual">Spiritual</SelectItem>
              <SelectItem value="religious">Religious</SelectItem>
              <SelectItem value="motorsport">Motorsport</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="graduation">Graduation Day</SelectItem>
              <SelectItem value="relationship">Relationship</SelectItem>
              <SelectItem value="crypto">Crypto</SelectItem>
              <SelectItem value="neo-futuristic">Neo-Futuristic</SelectItem>
              <SelectItem value="anime">Anime</SelectItem>
              <SelectItem value="cosplayer">Cosplayer</SelectItem>
              <SelectItem value="superhero">Superhero</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>

      <Button
        className="w-full bg-white text-gradient-start hover:bg-gray-100"
        onClick={onGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate Influencer"}
      </Button>
    </Card>
  );
}
