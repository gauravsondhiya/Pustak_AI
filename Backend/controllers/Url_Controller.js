const Url_Controller = async (req, res) => {
  try {
     console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  // console.log("Query:", req.query);
  // console.log("Params:", req.params);
  res.send("Logged everything!");
  } catch (error) {
    console.log(error);
  }
};

export default Url_Controller;
