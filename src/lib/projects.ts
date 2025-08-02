import IProject from "../types/project/project";
const getProjectsData = async (): Promise<IProject[]> => {
  try {
    const url = process.env.NEXT_PUBLIC_S3_PROJECTS_URL!;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const response = await fetch(url, {
      headers,
      next: { revalidate: 86400 }, // 24 hours
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (e) {
    console.error("Project fetch error:", e);
    return [];
  }
};

export default getProjectsData;
