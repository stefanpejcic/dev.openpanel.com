# Endpoints

## Users

The OpenPanel API provides a comprehensive set of endpoints for managing user accounts. Below are the operations available for user management.

### List Users

```
GET OPENPANEL:2087/api/v1/users
```
### Create User

To create a new user account:

```
POST OPENPANEL:2087/api/v1/users
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password",
  "plan_id": "plan_basic"
}
```

### Delete User
To delete an existing user:
```
DELETE OPENPANEL:2087/api/v1/users/{userId}
```

### Suspend User
To suspend a user account:
```
POST OPENPANEL:2087/api/v1/users/{userId}/suspend
```

### Unsuspend User
To unsuspend a user account:
```
POST OPENPANEL:2087/api/v1/users/{userId}/unsuspend
```

### Change User Plan
To change the subscription plan for a user:
```
PUT OPENPANEL:2087/api/v1/users/{userId}/plan
{
  "new_plan_id": "plan_premium"
}

```


### Change User Password
To change a user's password:
```
PUT OPENPANEL:2087/api/v1/users/{userId}/password
{
  "new_password": "newSecurePassword"
}
```
### Disable 2FA

To disable Two-Factor Authentication (2FA) for a user:
```
POST OPENPANEL:2087/api/v1/users/{userId}/disable2fa
```




## Plans



### List Plans

To retrieve a list of all available subscription plans:
```
GET OPENPANEL:2087/api/v1/plans
```

### Create Plan
To create a new subscription plan:
```
POST OPENPANEL:2087/api/v1/plans
{
  "name": "Premium Plan",
  "price": 99.99,
  "currency": "USD",
  "features": ["feature1", "feature2", "feature3"]
}
```

### Edit Plan
To edit an existing subscription plan. This example updates the plan's price and features:
```
PUT OPENPANEL:2087/api/v1/plans/{planId}
{
  "name": "Premium Plan Updated",
  "price": 109.99,
  "currency": "USD",
  "features": ["feature1", "feature2", "feature4", "feature5"]
}
```

### Delete Plan
To delete a subscription plan:
```
DELETE OPENPANEL:2087/api/v1/plans/{planId}
```


## Backups

OpenPanel API Endpoints for Backup Management:

### Create Backup Job

To create a new backup job:
```
POST OPENPANEL:2087/api/v1/backups
{
  "type": "full",
  "destination_id": "destinationId",
  "schedule": "daily"
}
```

### Delete Backup

To delete an existing backup:
```
DELETE OPENPANEL:2087/api/v1/backups/{backupId}
```

### Edit Backup Job

To modify an existing backup job:
```
PUT OPENPANEL:2087/api/v1/backups/{backupId}
{
  "type": "incremental",
  "schedule": "weekly"
}
```
 ### Add Backup Destination

To add a new backup destination:
```
POST OPENPANEL:2087/api/v1/backups/destinations
{
  "name": "New Destination",
  "type": "s3",
  "details": {
    "access_key": "accessKey",
    "secret_key": "secretKey",
    "bucket_name": "bucketName",
    "region": "us-east-1"
  }
}
```

### Delete Backup Destination

To remove an existing backup destination:
```
DELETE OPENPANEL:2087/api/v1/backups/destinations/{destinationId}
```

### Edit Backup Destination

To edit the details of a backup destination:
```
PUT OPENPANEL:2087/api/v1/backups/destinations/{destinationId}
{
  "name": "Updated Destination",
  "details": {
    "bucket_name": "newBucketName"
  }
}
```

### Restore Full Account of User

To restore the full account of a user from a backup:
```
POST OPENPANEL:2087/api/v1/backups/{backupId}/restore
{
  "user_id": "userId",
  "restore_type": "full"
}
```

### Restore Single Item of User

To restore a single item (e.g., a file or database) for a user:
```
POST OPENPANEL:2087/api/v1/backups/{backupId}/restore
{
  "user_id": "userId",
  "restore_type": "single",
  "item": "path/to/item"
}

```

### View Backup Log
To view the log for a specific backup job:
```
GET OPENPANEL:2087/api/v1/backups/{backupId}/log
```

## Services

```
/api/v1/services
```

## Settings 

```
/api/v1/settings
```

## Notifications

```
/api/v1/notifications
```


## Administration

```
/api/v1/admin
```
