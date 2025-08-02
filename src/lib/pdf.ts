export async function fetchPdfBlob(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch PDF: ${res.status}`);
    }

    const blob = await res.blob();
    return URL.createObjectURL(blob); // Return the blob URL
  } catch (err) {
    console.error("fetchPdfBlob error:", err);
    return null;
  }
}
