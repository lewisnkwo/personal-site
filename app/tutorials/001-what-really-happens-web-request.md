So you wanted to treat yourself yesterday and decided to order a pizza online from your favourite chain. You've typed in a URL into your browser and hit Enter. You're then presented with your expected result as a web page in less than a few seconds. What goes on behind the scenes to achieve this?

### The process begins

Once we type in:

```md
awebsitethatsellspizza.com
```

into the address bar, the browser performs a lookup to see if it has the IP (**Internet Protocol**) address of the request. The browser converts the hostname of the URL into an IP address if it knows it (e.g. if you have visited the webpage before). If it doesn't know it, then it’ll contact a DNS (**Domain Name System**). The DNS acts as a 'Yellow Pages' directory for web addresses when the browser performs a lookup — associating the hostname with a IP address.

### What does it do with the IP address?

It'll then open up a TCP connection to the IP address and send the request over HTTP (**Hypertext Transfer Protocol**) with the method to the server (e.g. a GET request if you've typed in `awebsitethatsellspizza.com` in the address bar).

---

#### What is TCP?

TCP (**Transmission Control Protocol**) is a current standard of transmitting data over a network between two devices (in this case, being the browser/client and the server). It acts as a tool to break down the data into multiple packets and ensures that the data is received by the server (or the client) correctly.

---

Once the server receives the request, it’ll send a HTTP response back.

**Example of a HTTP Request**

```md
GET /index.html HTTP/1.1
Host: awebsitethatsellspizza.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
Accept: text/html,application/xhtml+xml,application/xml
Accept-Language: en-GB,en-US;q=0.9
Accept-Encoding: gzip, deflate, br
```

**Example of a HTTP Response**

```md
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Connection: keep-alive
```

**A HTTP 1 version difference:**

- If it's a HTTP 1.0 request, the TCP connection is closed (single request).
- If it's a HTTP 1.1 request, the TCP connection can still be open (allows for multiple requests).

### The process finishes

Once the browser receives the response back from the server, it’ll render it on the screen and the TCP connection closes. You will now be presented with a shiny webpage enabling you to order your pizza!
