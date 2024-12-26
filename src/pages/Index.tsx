import { useState } from "react";
import { InfluencerGenerator } from "@/components/InfluencerGenerator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [isKeySet, setIsKeySet] = useState(false);

  const handleSubmitKey = () => {
    if (apiKey.trim()) {
      setIsKeySet(true);
    }
  };

  if (!isKeySet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end p-4">
        <div className="max-w-md w-full space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-8">AI Influencer Generator</h1>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter your Runware API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-white"
            />
            <Button
              onClick={handleSubmitKey}
              className="w-full bg-white text-gradient-start hover:bg-gray-100"
            >
              Start Generating
            </Button>
          </div>
          <p className="text-sm text-white mt-4">
            Don't have an API key?{" "}
            <a
              href="https://runware.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Get one here
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gradient-start to-gradient-end py-8">
      <InfluencerGenerator apiKey={apiKey} />
    </div>
  );
};

export default Index;