export async function submitLead(payload) {
  const res = await fetch("/api/send-brand-contact-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error(
      "Form endpoint is not returning JSON. Please check that the API route is deployed on a Next.js server."
    );
  }

  const data = await res.json();
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || "Failed to submit form.");
  }

  return data;
}
