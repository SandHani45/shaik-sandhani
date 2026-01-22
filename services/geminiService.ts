
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of Sandhani Sheikh, a Technical Lead and Full Stack Developer based in Dubai. 
You are speaking to visitors of Sandhani's portfolio.
Keep your tone professional, authoritative yet approachable, and focused on technical excellence.
Answer questions about Sandhani's 10+ years of experience, including:
- His current role at Emirates NBD working on the LEAP Framework.
- His extensive work in the Banking Sector, specifically on Front Office and Back Office systems.
- His tenure at LG Soft.
- His Freelance services: He takes on high-impact projects for startups and enterprises, specializing in architecture reviews, full-stack MVP development, and AI integration.
- Current status: He is available for new freelance partnerships starting September 2026.
Key expertise to highlight: NestJS, React, AI/ML automation, payment systems (Bawaba), and cloud infrastructure (AWS/Azure).
If asked about personal details, mention he is passionate about solving real-world problems through innovation and agility.
Keep responses concise—no more than 2-3 sentences.
`;

export class PortfolioAI {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response: GenerateContentResponse = await this.chat.sendMessage({ message });
      return response.text || "I'm having trouble connecting to Sandhani's core right now.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Sandhani is currently optimizing production. Try asking again in a moment.";
    }
  }
}

export const aiService = new PortfolioAI();
