# Bank API - Backend Coding Exercise

This is a Java Bank API implementation using Spring Boot. The API provides CRUD operations for customers, bank accounts, customer categories, and transactions. The application stores data in computer memory without any external dependencies.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

1. CRUD operations for customers, bank accounts, customer categories, and transactions.
2. Filtering and sorting customers by name.
3. Making transactions (deposit and withdrawal) on bank accounts.
4. Checking the balance of an account.
5. Retrieving a list of all transactions for an account.
6. Retrieving a list of customers that are classified as retail customers.
7. Activating or deactivating bank accounts.
8. Viewing customer bank accounts.

## Getting Started

To run the Bank API locally, you need to have Java and Maven installed on your machine. Follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/bank-api.git`
2. Navigate to the project directory: `cd bank-api`
3. Build the project using Maven: `mvn clean install`
4. Run the application: `mvn spring-boot:run`

The Bank API will be available at `http://localhost:3000`.

## Endpoints

The API provides the following endpoints:

- `/customers`: CRUD operations for customers.
- `/bank-accounts`: CRUD operations for bank accounts.
- `/customer-categories`: CRUD operations for customer categories.
- `/transactions`: CRUD operations for transactions.

For detailed information about the API endpoints, their request/response formats, and authentication requirements, please refer to the API documentation or explore the codebase.

## Examples

Here are some examples of using the Bank API:

1. Create a new customer:

POST /customers
Request Body: { "name": "John Doe", "dateOfBirth": "1990-01-01", "phoneNumber": "1234567890", "address": "123 Main St", "categoryId": "1" }

2. Get all customers:

GET /customers

3. Make a deposit transaction:

POST /transactions
Request Body: { "accountNumber": "1234567890", "amount": 100.00, "transactionType": "deposit" }

4. Check account balance:

GET /bank-accounts/1234567890/balance

## Project Structure

- src/: Source code directory
- controllers/: Controllers for handling API requests
- models/: Database models
- routes/: API route handlers
- middlewares/: Custom middlewares
- config.js: Configuration file
- index.js: Entry point of the application
- test/: Test directory

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to open an issue or submit a pull request.

Please read our contribution guidelines before making contributions.

## License

This project is licensed under the MIT License.

For more information, see the LICENSE file.

## Contact

For support or inquiries, please email support@bankapi.com or join our community forum at https://community.bankapi.com.
