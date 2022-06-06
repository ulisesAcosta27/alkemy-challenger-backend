const sayHi = (req, res) => {
  res.status(200).json({msg: 'Hola Mundo'})
}

module.exports = {
  sayHi
}