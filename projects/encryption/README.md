
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 8
My Partner's Key: 9

Our initial shared key: 17

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message         | Decoded Message         | Key |
| ----------------------- | ----------------------- | --- |
| yvp sif                 | hey bro                 | 17  |
| si, biq qum siol xus?   | yo, how was your day?   | 6   |
| fnnc, gnv vzr xntqr?    | good, how was yours?    | 25  |
| iu zwu sajp nawhhu sihh | my day went really well | 4   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: rsG9Fc

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01110010 01110011 01000111 00111001 01000110 01100011

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Jacques
    Destination: Jack  
    Sequence: 1/3
    Data: 01110010 01110011
    =========
    Packet 2:

    Source: Jacques
    Destination: Jack
    Sequence: 2/3 
    Data: 01000111 00111001
    =========
    Packet 3:

    Source: Jacques
    Destination: Jack
    Sequence: 3/3
    Data: 01000110 01100011
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?  The difference between symmetric and asymmetric encryption is that symmetric encryption uses one shared key for both decryption and encryption while asymmetric encryption used 2 keys, 1public key for encryption and 1 private key for decryption. The public key can be shared while the private key can not. At the begining of the activity when we were in the terminal we were using asymmetric encryption. For the second half of the activity when we were working in a google doc we were using symmetric encryption.
- Why is it important that this protocol uses a new key for each message?  Using a new key for each message provents the compremise of a single key from unlocking the entire conversation.
- Why is it important that you never share your secret key?  It is important to never share your secret key because if you do then you put you personal data at risk.
- In the transport layer, do these messages use TCP or UDP? Why? They use TCP because it is reliable and transmits data in order.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.  The transport layer devides the packets into seggments and uses protocols like TCP to ensure reliable delivery. The link layer compresses the segments into frames and assigns physsical adresses for each frame.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?  They can see the names of who you are messaging, the time that you message them, and where you are messaging them from.
