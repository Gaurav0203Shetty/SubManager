# SubManager

SubManager is a Node.js-based subscription management system designed to help users manage, track, and automate workflows for their subscriptions. It provides authentication, user management, subscription tracking, email notifications, and workflow automation features. The project uses MongoDB for data storage and integrates with third-party services for email and security.

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Subscription Management**: Add, update, delete, and view subscriptions.
- **Email Notifications**: Automated email reminders and notifications using Nodemailer.
- **Workflow Automation**: Custom workflows for subscription events.
- **Security**: Arcjet integration for enhanced security.
- **Environment Configuration**: Centralized config management for environment variables and service credentials.

## Project Structure

```
app.js                  # Main application entry point
eslint.config.js        # ESLint configuration
package.json            # Project metadata and dependencies
config/                 # Configuration files for services and environment
controllers/            # Route controllers for business logic
  auth.controller.js
  subscription.controller.js
  user.controller.js
  workflow.controller.js
middlewares/            # Express middlewares (auth, error handling, etc.)
models/                 # Mongoose models for MongoDB
routes/                 # Express route definitions
utils/                  # Utility functions (email templates, send email)
database/               # Database connection setup
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gaurav0203Shetty/SubManager.git
   cd SubManager
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Copy `config/env.js.example` to `config/env.js` and update values as needed (MongoDB URI, email credentials, etc).

### Running the Application

```bash
npm start
```

The server will start on the port specified in your environment configuration.

## API Endpoints

### Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### User
- `GET /api/user/profile` — Get user profile
- `PUT /api/user/profile` — Update user profile

### Subscription
- `GET /api/subscription` — List subscriptions
- `POST /api/subscription` — Add a subscription
- `PUT /api/subscription/:id` — Update a subscription
- `DELETE /api/subscription/:id` — Delete a subscription

### Workflow
- `GET /api/workflow` — List workflows
- `POST /api/workflow` — Create a workflow

## Configuration

- **MongoDB**: Set your connection string in `config/env.js`.
- **Email**: Configure SMTP settings in `config/nodemailer.js`.
- **Arcjet**: Security configuration in `config/arcjet.js`.
- **Upstash**: For caching or other integrations, see `config/upstash.js`.

## Development

- **Linting:**
  ```bash
  npm run lint
  ```
- **Testing:** (Add your test framework and instructions here)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, open an issue on GitHub or contact the repository owner.
