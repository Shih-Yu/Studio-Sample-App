// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  try {
    const response = await fetch(`https://livepeer.studio/api/asset/${req.body}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
   
    const data = await response.json();
    console.log(data);
   
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
  res.status(400).send("Error")




}