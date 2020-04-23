
### What is easy-bookmarks?

easy-bookmarks allows to easily manage your Google Chrome bookmarks. It is simply an wep-app written with react and nodejs.

The most important thing about easy-bookmarks is that `you have to mount your bookmarks.json file to /app/json location.`
---

#### Where are default locations of bookmark.js on different operation systems?

- It is located on C:/Users/`<your-username>`/AppData/Local/Google/Chrome/User Data/Default on **Windows 10**

- It is located on ~/.config/google-chrome/Default on **Ubuntu**

- It is located on $HOME/Library/Application Support/Google/Chrome/Default on **OS X**


### How can you use it?

```bash
curl https://gist.githubusercontent.com/enesusta/ef9f8ca366256c6eecb098beaa7ad445/raw/0d43e3e34a3a4c37ca623f3beaa736034345eb50/docker-compose.yml --output docker-compose.yml

docker-compose up -d
```

or (**customize setup**)

**create docker-compose.yml**

```yml
version: '3.1'

services:
  easy-bookmarks:
    container_name: easy-bookmarks
    image: enesusta/easy-bookmarks:0.2
    ports:
      - '8000:80'
    networks:
      bookmarks-net:
        ipv4_address: 172.48.0.100

  easy-bookmarks-server:
    container_name: easy-bookmarks-server
    image: enesusta/easy-bookmarks-server:0.1
    ports:
      - '9050:3000'
    volumes:
      - c:/Users/Enes/AppData/Local/Google/Chrome/User Data/Default:/data/json #change this
    networks:
      bookmarks-net:
        ipv4_address: 172.48.0.101

networks:
  bookmarks-net:
    driver: bridge
    ipam:
      config:
        - subnet: 172.48.0.0/24
```

And `docker-compose up -d` your easy-bookmarks application is ready.

You can change ports or networks configurations.

You have to configure `volumes` line according to your OS.

Otherwise it may not work.

> It's open source. Feel free.
