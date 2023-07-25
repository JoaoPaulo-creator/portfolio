export async function getInfos() {
  const endpoint = process.env.NEXT_PUBLIC_GITHUB_API as string;
  const response = await fetch(endpoint, {
    next: {
      revalidate: 10 * 60 * 60,
    },
  });
  return await response.json();
}
