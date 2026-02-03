const axios = require ('axios')

const chatbot = async (req, res) => {
  try {
    const { query } = req.query
  const response = await axios.get(
      `https://text.pollinations.ai/${encodeURIComponent(query)}`, { timeout: 15000 } 
    );


    res.status(200).json({
      message: response.data
    });

  } catch (error) {
    console.error(error)
  }

}

module.exports = chatbot