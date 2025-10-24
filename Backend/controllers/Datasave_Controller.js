import youtube from "../Loaders/Youtube_loader.js";
import vectorStore from "../services/Vectorstore.js";
import user_textinput from "../Loaders/Text_loader.js";
import website_loader from "../Loaders/Website_loader.js";

let Datasave = async (req, res) => {
  try {
    const { youtube_data, text_data, website_data } = req.body;
    const file_data = req.file;

    if (youtube_data) {
        await youtube(youtube_data);
      return res.status(200).json({ message: "Video succesfully uploaded" });
    }

    if (text_data) {
      try {
        await user_textinput(text_data);
        return res.status(200).json({
          message: "User input successfully uploaded",
        });
      } catch (error) {
        console.error("❌ Failed to add documents:", error);
        return res.status(404).json({
          message: "User input not uploaded",
        });
      }
    }

    if (website_data) {
      let getdata = await website_loader(website_data);
       return res.status(200).json({ message: "website data succesfully uploaded" });
    }

    res.status(400).json({ message: "No data provided" });
  } catch (error) {
    console.error("Error in Datasave:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default Datasave;
