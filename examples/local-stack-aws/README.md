# Getting started with Local Stack

Playing with AWS Local Stack (https://onexlab-io.medium.com/aws-s3-bucket-local-testing-using-localstack-1918fb375280).

- Accessible on http://localhost:4566 by default. If you look into the following file we have used EDGE_PORT=4566
- We are creating 2 services (lambda and S3)


## 1. Getting started

```bash
# (1) Start container
docker-compose up

# (2) Testing services - go to the url below
# See 4 services running - lambda, logs, s3, cloud watch
http://localhost:4566/health

# (3) Create S3 bucket locally
aws --endpoint-url=http://localhost:4566 s3 mb s3://my-new-bucket

# (4) Upload the file
aws --endpoint-url=http://localhost:4566 s3 cp text-test.txt s3://my-new-bucket

# (5) Verify the file
aws --endpoint-url=http://localhost:4566 s3 ls s3://my-new-bucket
```

