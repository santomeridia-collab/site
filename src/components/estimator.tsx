"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onClose: () => void;
};

const EstimatorModal = ({ onClose }: Props) => {
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [estimate, setEstimate] = useState<string | null>(null);

  const calculateEstimate = () => {
    let cost = 0;
    let duration = "";

    switch (projectType) {
      case "web":
        cost = 3000;
        break;
      case "mobile":
        cost = 4500;
        break;
      case "both":
        cost = 7000;
        break;
      default:
        cost = 0;
    }

    switch (timeline) {
      case "1-2":
        duration = "Fast Track (1–2 Months)";
        cost += 1000;
        break;
      case "3-6":
        duration = "Standard Timeline (3–6 Months)";
        break;
      case "6+":
        duration = "Extended Timeline (6+ Months)";
        cost -= 500;
        break;
    }

    setEstimate(`Estimated Cost: $${cost} | Timeline: ${duration}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-card p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Project Estimator
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Project Name"
            className="w-full p-3 rounded-md border border-border"
          />

          <textarea
            placeholder="Project Description"
            rows={4}
            className="w-full p-3 rounded-md border border-border"
          />

          <select
            className="w-full p-3 rounded-md border border-border"
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">Select Project Type</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="both">Web + Mobile</option>
          </select>

          <select
            className="w-full p-3 rounded-md border border-border"
            onChange={(e) => setTimeline(e.target.value)}
          >
            <option value="">Expected Timeline</option>
            <option value="1-2">1–2 Months</option>
            <option value="3-6">3–6 Months</option>
            <option value="6+">6+ Months</option>
          </select>

          <Button className="w-full" onClick={calculateEstimate}>
            Calculate Estimate
          </Button>

          {estimate && (
            <div className="rounded-md bg-primary/10 p-4 text-center text-primary font-medium">
              {estimate}
            </div>
          )}

          <Button variant="outline" className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EstimatorModal;
