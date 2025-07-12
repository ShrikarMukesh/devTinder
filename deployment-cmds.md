# 🚀 DevTinder Deployment with Kind (Kubernetes in Docker)

This guide helps you build your local Docker image, load it into a `kind` Kubernetes cluster, and deploy your app using Kubernetes manifests.

---

## 🧰 Prerequisites

- [Docker](https://www.docker.com/) installed and running
- [Kind](https://kind.sigs.k8s.io/) installed
- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed
- A running `kind` cluster named `dev-cluster`

---

## 🔧 1. Build Docker Image

```bash
docker build -t devtinder:latest .

# Verify Image Build
docker images | grep devtinder
```
## 🐳 2. Create Kind Cluster

```bash
# Create a Kind Cluster
kind create cluster --name dev-cluster

# Verify Cluster Creation
kubectl cluster-info --context kind-dev-cluster
```
## 📦 3. Load Docker Image into Kind Cluster

```bash 
# Load the Docker Image into the Kind Cluster
kind load docker-image devtinder:latest --name dev-cluster

# Verify Image Load
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Verify Deployment
```
```bash

kubectl get pods
kubectl get deployments
kubectl get services

# Verify Service
kubectl logs -f $(kubectl get pod -l app=devtinder -o jsonpath="{.items[0].metadata.name}")

# Test the Service
curl http://localhost:30001/users
```
# Cleanup
```bash
kubectl delete -f deployment.yaml
kubectl delete -f service.yaml
kind delete cluster --name dev-cluster
```

