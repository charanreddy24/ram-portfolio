import express from 'express';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Configure AWS SDK v3
const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, mobile, comment } = req.body;

  const params = {
    Source: 'ramcharan2510@gmail.com', // Make sure this email is verified in AWS SES
    Destination: {
      ToAddresses: ['ramcharan2510@gmail.com'],
    },
    Message: {
      Subject: { Data: 'New Contact Form Submission' },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nComment: ${comment}`,
        },
      },
    },
  };

  try {
    const data = await sesClient.send(new SendEmailCommand(params));
    console.log(data);
    res.status(200).send('Email sent successfully');
  } catch (err) {
    console.error(err, err.stack);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
