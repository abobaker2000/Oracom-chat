import { NextRequest } from "next/server";
import { POST } from "../src/app/api/chat/route";

describe("Chat API", () => {
  it("rejects missing body", async () => {
    const req = new Request("http://localhost:3000/api/chat", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req as NextRequest);
    expect(res.status).toBe(400);

    const data = await res.json();
    expect(data.error).toBe("Missing messages");
  });

  it("should return an assistant reply if messages exist", async () => {
    const req = new Request("http://localhost:3000/api/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: "Hallo" }],
      }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req as NextRequest);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.role).toBe("assistant");
    expect(typeof data.content).toBe("string");
  });
});
