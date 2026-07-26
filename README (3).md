# Simple Interest Calculator — AWS Lambda (Serverless)

## Project Overview
This project is part of a **Cloud Computing Internship — "The Serverless Logic"** module.
The goal was to deploy a lightweight backend calculator **without provisioning or managing any servers**, using AWS Lambda.

Instead of running a 24/7 EC2 instance (which costs money even when idle), this function only runs — and is only billed — when it's actively invoked, down to the millisecond.

## Objective
- Deploy a functional Simple Interest Calculator backend
- Do not touch, provision, or manage any infrastructure
- Tool: **AWS Lambda**
- Language: **Node.js (ES Modules)**

## How It Works
The function accepts a JSON payload with `principal`, `rate`, and `time`, and returns the calculated simple interest and total amount.

**Formula:**
```
Simple Interest = (Principal × Rate × Time) / 100
Total Amount = Principal + Simple Interest
```

### Example Input
```json
{"principal": 10000, "rate": 5, "time": 2}
```

### Example Output
```json
{
  "Principal": 10000,
  "Rate": 5,
  "Time": 2,
  "SimpleInterest": 1000,
  "TotalAmount": 11000
}
```

## Code
See [`index.mjs`](./index.mjs) for the Lambda handler.

```javascript
export const handler = async (event) => {
    const { principal, rate, time } = event;
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    return {
        Principal: principal,
        Rate: rate,
        Time: time,
        SimpleInterest: interest,
        TotalAmount: totalAmount
    };
};
```

## Testing
Tested using AWS Lambda's built-in **Test** feature with a mock event (see [`test-event.json`](./test-event.json)).

**Result:** `Status: Succeeded`

## Evidence of Serverless Efficiency (CloudWatch Logs)
```
REPORT Duration: 11.05 ms   Billed Duration: 138 ms   Memory Size: 128 MB   Max Memory Used: 76 MB   Init Duration: 126.74 ms
```

- **Working Logic** — Correct math, clean JSON response
- **Millisecond Execution** — Billed only 138 ms for the entire invocation
- **Zero Idle Cost** — No charge exists when the function isn't being called

## Screenshots
| Step | Description |
|------|-------------|
| ![Function Overview](./screenshots/01-function-overview.png) | Lambda function deployed and live in AWS Console |
| ![Code & Test Event](./screenshots/02-code-and-test-event.png) | Handler code alongside the test event JSON |
| ![Execution Success](./screenshots/03-execution-success.png) | Successful invocation with CloudWatch billing log |

## Key Takeaways
- Serverless computing (FaaS) eliminates idle infrastructure cost
- IAM Execution Roles enforce least-privilege security by default
- CloudWatch provides millisecond-level billing transparency
- This pattern scales automatically from 1 request to thousands without any manual intervention

## Tech Stack
- **AWS Lambda** (Function as a Service)
- **Node.js 20.x** (ES Modules)
- **Amazon CloudWatch** (Logging & Monitoring)

---
*Part of the Cloud Computing Internship — Project 4: The Serverless Logic*
