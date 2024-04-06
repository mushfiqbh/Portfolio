import axios from "axios";

async function createGmailDraft() {
  try {
    // Assuming you have already authenticated and obtained credentials
    // (similar to how you did in Python)
    const creds = {}; // Your credentials object here

    // Create Gmail API client
    const service = axios.create({
      baseURL: "https://www.googleapis.com/gmail/v1",
      headers: {
        Authorization: `Bearer ${creds.access_token}`,
        "Content-Type": "application/json",
      },
    });

    const message = {
      to: "gduser1@workspacesamples.dev",
      from: "gduser2@workspacesamples.dev",
      subject: "Automated draft",
      text: "This is automated draft mail",
    };

    // Encode the message
    const encodedMessage = Buffer.from(JSON.stringify(message)).toString("base64");

    const createMessage = {
      message: {
        raw: encodedMessage,
      },
    };

    // Create the draft
    const response = await service.post("/users/me/drafts", createMessage);

    console.log(`Draft id: ${response.data.id}\nDraft message:`, response.data.message);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}


async function sendGmailMessage() {
  try {
    // Assuming you have already authenticated and obtained credentials
    // (similar to how you did in Python)
    const creds = {
      access_token: 'AIzaSyDBIJn4Hnbu_0X86j8N9o66FZn-pPItEPY',
    }; // Your credentials object here

    // Create Gmail API client
    const service = axios.create({
      baseURL: "https://www.googleapis.com/gmail/v1",
      headers: {
        Authorization: `Bearer ${creds.access_token}`,
        "Content-Type": "application/json",
      },
    });

    const message = {
      to: "muhsina.chowdury@gmail.com",
      from: "mushfiqbh@gmail.com",
      subject: "Automated draft",
      text: "This is automated draft mail",
    };

    // Encode the message
    const encodedMessage = Buffer.from(JSON.stringify(message)).toString("base64");

    const createMessage = {
      raw: encodedMessage,
    };

    // Send the message
    const response = await service.post("/users/me/messages/send", createMessage);

    console.log(`Message Id: ${response.data.id}`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}


document.getElementById("send_email").addEventListener('click', () => {
  sendGmailMessage();
})
