const loginUser = async () => {
  try {
    res.status(200).json({msg: 'login'})
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  loginUser
}