export default function (err, req, res, next) {
    console.log('custom middleware handling error');
    console.log(err);
    res.sendStatus(500);
}
