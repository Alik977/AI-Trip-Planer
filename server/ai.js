import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-sonnet-5";

if (!ANTHROPIC_API_KEY) {
  console.warn(
    "WARNING: ANTHROPIC_API_KEY is not set. Requests to /api/plan-trip will fail."
  );
}

app.post("/api/plan-trip", async (req, res) => {
  try {
    const {
      destination,
      days,
      budget,
      travelStyle,
      interests = [],
      travelWith,
      aiPrompt,
    } = req.body;

    if (!destination || !String(destination).trim()) {
      return res.status(400).json({ error: "destination is required" });
    }

    const prompt = `You are a travel planning assistant. Create a detailed day-by-day trip itinerary.

Trip details:
- Destination: ${destination}
- Number of days: ${days}
- Budget: ${budget || "not specified"}
- Travel style: ${travelStyle}
- Interests: ${interests.length ? interests.join(", ") : "general sightseeing"}
- Traveling with: ${travelWith}
${aiPrompt ? `- Extra request from the traveler: ${aiPrompt}` : ""}

Respond with ONLY valid JSON, no markdown code fences, no extra commentary, in exactly this shape:
{
  "destination": string,
  "days": number,
  "summary": string,
  "itinerary": [
    { "day": number, "activities": ["Morning: ...", "Afternoon: ...", "Evening: ..."] }
  ]
}`;

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error("Anthropic API error:", anthropicRes.status, errText);
      return res.status(502).json({ error: "The AI service failed to respond." });
    }

    const data = await anthropicRes.json();
    const textBlock = (data.content || []).find((b) => b.type === "text");
    const raw = textBlock ? textBlock.text : "";

    let plan;
    try {
      const cleaned = raw.replace(/```json|```/g, "").trim();
      plan = JSON.parse(cleaned);
    } catch (parseErr) {
      console.error("Failed to parse AI response as JSON:", raw);
      return res
        .status(502)
        .json({ error: "The AI returned an unexpected format. Please try again." });
    }

    return res.json(plan);
  } catch (err) {
    console.error("plan-trip error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

app.get("/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Trip planner backend running on http://localhost:${PORT}`);
});