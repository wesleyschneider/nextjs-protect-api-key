export const internalApiGetImageDog = async () => {
  try {
    const response = await fetch('/api/dog')

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
}