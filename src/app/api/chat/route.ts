import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages) {
      return NextResponse.json({ error: "Missing messages" }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_LLM_API_KEY) {
      return NextResponse.json({
        role: "assistant",
        content: `⚠️ Mock-Antwort: Du hast gesagt "${
          messages[messages.length - 1].content
        }"`,
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_LLM_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages,
        }),
      }
    );

    const data = await response.json();
    const reply = data.choices?.[0]?.message;

    return NextResponse.json(reply);
  } catch (e) {
    return NextResponse.json({ error: "Server error" + e }, { status: 500 });
  }
}
