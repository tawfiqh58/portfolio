export function middleware(req, ev) {
  const res = new Response(null, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res;
  }

  return NextResponse.next();
}
