import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: In a real production build, this would handle missing keys more gracefully or use a backend proxy.
// We strictly follow the instruction to use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const COMPANY_CONTEXT = `
You are the AI assistant for "Web Sutra", a software development agency and academic consultancy based in Chhatrapati Sambhaji Nagar (Aurangabad), founded by Narendra Pawar.

Your goal is to answer questions about the company based on the following information:
- Tagline: Innovating Business, Empowering Education.
- Mission: Democratize technology for small businesses and mentor engineering students (DBATU).
- Services for Businesses: High-performance websites, landing pages, e-commerce, "Zero-Maintenance" sites (Blogger themes), HTML5/CSS3, JS, Python.
- Services for Students: Guidance for Engineering (CSE/IT) projects, IEEE Paper implementation (Python/Java), Mini Projects, Documentation (Synopses, Black Books, PPTs).
- Key Differentiators: Developer-led (no salespeople), Local Expertise (DBATU curriculum), Cost-Effective.

Keep answers professional, concise, and friendly. If a user asks something outside this scope, politely redirect them to the company's services.
`;

export const generateChatResponse = async (prompt: string, history: { role: string, text: string }[] = []) => {
  try {
    if (!process.env.API_KEY) {
      return "I'm sorry, but I cannot connect to the AI service at the moment (Missing API Key). Please contact us directly via email.";
    }

    const model = 'gemini-2.5-flash';
    
    // Construct history for the model if needed, but for simple Q&A, 
    // we will just use a fresh generation with system instructions for this "Ask Us" widget.
    // A full chat session could be used, but single turn is often sufficient for simple embedded widgets.
    
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: COMPANY_CONTEXT,
        maxOutputTokens: 300, // Keep responses concise
      },
    });

    return response.text || "I didn't get a response. Please try again.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
