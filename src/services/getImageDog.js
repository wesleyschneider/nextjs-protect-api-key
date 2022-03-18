export const getImageDog = async () => {
  const response = await fetch('https://api.thedogapi.com/v1/images/search', {headers: {'x-api-key': process.env.NEXT_PUBLIC_API_KEY}})

  const json = await response.json();

  if(json.length === 0){
    return;
  }

  return { url: json[0].url };
}