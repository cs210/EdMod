from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC27350a5ed520996ec64f7da9265631cf"
# Your Auth Token from twilio.com/console
auth_token  = "2c79bf5842612fcc3a286dbd3a9f9503"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+13238281421", 
    from_="+16502490797",
    body="Hello from Python!")

print(message.sid)
