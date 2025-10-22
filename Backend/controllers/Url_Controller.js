const Url_Controller = async (req, res) => {
  try {
    let url_data = req.body;
    console.log(url_data);
    res.json(url_data);
  } catch (error) {
    console.log(error);
  }
};

export default Url_Controller;
