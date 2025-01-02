# nodejs react project setup



## Getting Started

Follow these steps to set up and run the project locally.

---

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas for remote)

---

### Installation

#### 1. Clone or Download the Repository

Clone this repository using Git:

```bash
git clone <repository-url>

# 2. Install Dependencies
# Navigate to both the client and server folders, and run the following command to install required dependencies:

cd <your-directory-name>
yarn  or npm i

# 3. Configure Environment Variables
# Create a .env file in the root directory of the project. This file will store sensitive information like MongoDB credentials. Add the following configuration:

MONGODB_USERNAME=<your-username>
MONGODB_PASSWORD=<your-password>
MONGODB_URI=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/<database-name>?retryWrites=true&w=majority
PORT=5000

⚠️ Important Notes:

# Replace <your-username> and <your-password> with your MongoDB credentials.
# Replace <database-name> with your MongoDB database name.
# Never share the .env file or include it in version control to prevent exposing sensitive information.

# 4. Start the Backend
# Navigate to the server folder and start the backend server using the following commands:

cd server
yarn start
