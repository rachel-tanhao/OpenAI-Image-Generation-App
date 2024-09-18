import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

/////////////////////


// // FOR TEST ONLY
// router.route('/').get(async (req, res) => {
//   try {
//     const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

//     const response = await client.chat.completions.create({
//       messages: [{ role: 'user', content: 'Say this is a test' }],
//       model: 'gpt-4o-mini'
//     });
//     console.log(response._request_id);
//     res.status(200).send(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Something went wrong');
//   }
// });

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});


router.route('/').post(async (req, res) => {
  try {
    // get user's prompt
    const { prompt } = req.body;
    // console.log("Prompt received: ", prompt);

    // get response from Dalle (it will take some time, so use async & await)
    const aiResponse = await openai.images.generate({ 
      prompt: prompt, 
      n: 1, 
      size: '1024x1024', 
      model: "dall-e-3", 
      style: 'vivid',
      response_format: 'b64_json' });

    // get the image out of response
    const image = aiResponse.data[0].b64_json;
    // console.log("DALL-E API Response:", aiResponse.data[0].b64_json);

    // return the generated image as json data
    res.status(200).json({ photo: image });

  } catch (error) {
    console.error(error?.response?.data || error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
    
  }
});

export default router;