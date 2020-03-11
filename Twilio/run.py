# /usr/bin/env python
# Download the twilio-python library from twilio.com/docs/libraries/python
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

# account_sid = '2c79bf5842612fcc3a286dbd3a9f9503'
# auth_token = '4ee88d2fd174626078c646a859ef896c'
# client = Client(account_sid, auth_token)

@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    """Respond to incoming messages with a friendly SMS."""
    # Start our response
    resp = MessagingResponse()

    # Add a message
    resp.message("Just a minute.")

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
