"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onClose: () => void;
};

const ResearchProposalModal = ({ onClose }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // later: API call / email / database
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full max-w-xl bg-card rounded-2xl p-8 shadow-xl">
        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Submit Research Proposal
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Research Title"
                className="w-full p-3 border rounded-md"
              />

              <input
                type="text"
                placeholder="Research Domain (AI, BioTech, Energy...)"
                className="w-full p-3 border rounded-md"
              />

              <textarea
                placeholder="Brief Proposal Description"
                rows={4}
                className="w-full p-3 border rounded-md"
              />

              <select className="w-full p-3 border rounded-md">
                <option value="">Expected Timeline</option>
                <option value="3-6">3–6 Months</option>
                <option value="6-12">6–12 Months</option>
                <option value="12+">12+ Months</option>
              </select>

              <input
                type="text"
                placeholder="Institution / Researcher Name"
                className="w-full p-3 border rounded-md"
              />

              <input
                type="email"
                placeholder="Contact Email"
                className="w-full p-3 border rounded-md"
              />

              <Button className="w-full" onClick={handleSubmit}>
                Submit Proposal
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">
              Proposal Submitted 🎉
            </h2>
            <p className="text-muted-foreground">
              Our research team will review your proposal and contact you soon.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchProposalModal;
