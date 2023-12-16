export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const res = await fetch(`${process.env.NEXT_API_BASE_PATH}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
export async function POST(request: Request) {
  const res = await fetch(`${process.env.NEXT_API_BASE_PATH}/user`, {
    method: "POST",
    body: request.body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
