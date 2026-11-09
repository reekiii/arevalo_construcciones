// Vercel Function: devuelve el país y la región aproximados del visitante
// a partir de las cabeceras de geolocalización que añade Vercel.
// No guarda nada ni devuelve la IP.
export default function handler(req, res) {
  const country = req.headers['x-vercel-ip-country'] || null;
  const region = req.headers['x-vercel-ip-country-region'] || null;
  res.setHeader('Cache-Control', 'private, no-store');
  res.status(200).json({ country, region });
}
