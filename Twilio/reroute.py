import sys
import logging
logging.basicConfig(level=logging.DEBUG)

from twilio.rest import Client
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

# account_sid = '2c79bf5842612fcc3a286dbd3a9f9503'
# auth_token = '4ee88d2fd174626078c646a859ef896c'
# client = Client(account_sid, auth_token)

twilio_number = '+16502490797'

# You can add your number to this list: For users, we could ask for their phone
# numbers and programmatically add their phone numbers from our db
sms_team = {
    "+13238281421": "Susana",
    "+17867159942": "Stephanie",
    "+12532059872": "Isaiah",
}


@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    sender = request.form.get('From', None)
    text = request.form.get('Body', '')
    print((sender, text), file=sys.stderr)
    if sender in sms_team:
        message = client.messages \
                        .create(
                             body=text,
                             from_=twilio_number,
                             to=sms_team[sender]
                         )
    #return 'ok'

    """Respond to incoming messages with a friendly SMS."""
    # Start our response
    resp = MessagingResponse()

    # Add a message
    resp.message("Just a minute.")

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
