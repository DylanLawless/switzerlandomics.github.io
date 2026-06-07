export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    const requestUrl = new URL(request.url);

    const chr = requestUrl.searchParams.get("chr") || "7";
    const pos = requestUrl.searchParams.get("pos") || "140753336";
    const ref = requestUrl.searchParams.get("ref") || "T";
    const alt = requestUrl.searchParams.get("alt") || "A";
    const genome = requestUrl.searchParams.get("genome") || "hg38";

    const genebeUrl =
      "https://api.genebe.net/cloud/api-public/v1/variant" +
      "?chr=" + encodeURIComponent(chr) +
      "&pos=" + encodeURIComponent(pos) +
      "&ref=" + encodeURIComponent(ref) +
      "&alt=" + encodeURIComponent(alt) +
      "&genome=" + encodeURIComponent(genome);

    try {
      const response = await fetch(genebeUrl, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      const body = await response.text();

      return new Response(body, {
        status: response.status,
        headers: {
          ...corsHeaders(),
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store"
        }
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: "GeneBe request failed",
          message: String(err)
        }, null, 2),
        {
          status: 502,
          headers: {
            ...corsHeaders(),
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store"
          }
        }
      );
    }
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Accept, Content-Type"
  };
}
