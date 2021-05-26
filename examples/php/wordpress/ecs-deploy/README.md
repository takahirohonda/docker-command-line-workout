# Deploying wordpress with ecs cli

First we need to install ECS CLI. With ECS CLI, we can use docker-compose file to deploy cluster. No need to write task definition file.

```bash
# Configure
ecs-cli configure --cluster mywordpress-test --region ap-southeast-2 --default-launch-type EC2 --config-name mywordpress-test-app

# Configure profile (no need if using aws-vault)
ecs-cli configure profile

# Create cluster with EC2 instances
ecs-cli up --capability-iam --size 2 --instance-type t2.medium --cluster-config mywordpress-test-app 
# -- ecs-profile ec2-test-App # this is optional.
# if using aws-vault do something like aws-vault exec eadmin-sbx -- ecs-cli ....

# Deploy
ecs-cli compose --project-name mywordpress-test service up --cluster-config mywordpress-test-app

# get IP address
ecs-cli ps --cluster-config mywordpress-test-app

# take-down - second one will delete the cloudformation
ecs-cli compose down --cluster-config mywordpress-test-app
ecs-cli down --force --cluster-config mywordpress-test-app 
```
