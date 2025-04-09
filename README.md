# 🚀 DevOps Project: Nginx on Kubernetes with Monitoring

This project demonstrates Dockerizing a static website using Nginx, deploying it with Kubernetes on Minikube (on AWS EC2), and monitoring it using Prometheus and Grafana with Helm.

## 📦 Docker Setup

- Dockerfile:
```Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

