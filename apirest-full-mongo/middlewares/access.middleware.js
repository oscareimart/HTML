export default function accessLogger(req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  next();
}
