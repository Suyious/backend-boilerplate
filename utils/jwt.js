// send token: helper function to send jwt and save in cookies
export default (user, statuscode, res) => {
  const token = user.getjwttoken();

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000),
    httpOnly: true,
    // sameSite: "None",
    // secure: true
  }

  res.status(statuscode).cookie('token', token, options).json({
    success: true,
    user,
    token
  })
}
