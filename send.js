import {Buffer} from 'buffer';

function sendGmailMessage() {
  try {
    // Assuming you have already authenticated and obtained credentials
    // (similar to how you did in Python)
    const creds = {
      access_token: 'AIzaSyDBIJn4Hnbu_0X86j8N9o66FZn-pPItEPY', // Replace with your actual access token
    };

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

    const url = "https://www.googleapis.com/gmail/v1/users/me/messages/send";

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", `Bearer ${creds.access_token}`);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(`Message Id: ${response.id}`);
        } else {
          console.error("An error occurred:", xhr.statusText);
        }
      }
    };

    xhr.send(JSON.stringify(createMessage));
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

sendGmailMessage();


document.getElementById("send_email").addEventListener('click', () => {
  sendGmailMessage();
})
