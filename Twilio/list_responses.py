# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = '2c79bf5842612fcc3a286dbd3a9f9503'
auth_token = '4ee88d2fd174626078c646a859ef896c'
client = Client(account_sid, auth_token)

message = client.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch()

print(message.to)
print(message.from_)
print(message.body)
print(message.error_code)
print(message.error_message)
