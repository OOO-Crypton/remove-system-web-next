docker build . -t remote-front
docker stop remote-front
docker remove remote-front
docker run -d --restart=always --name remote-front -p 8090:3000 remote-front