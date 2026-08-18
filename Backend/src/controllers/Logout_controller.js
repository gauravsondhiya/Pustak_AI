

const Logout_controller =async (req,res)=>{
   res.clearCookie("authtoken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/"
  });

  res.status(200).json({
    message: "Logged out successfully"
  });
}

export default Logout_controller