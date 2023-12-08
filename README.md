This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Description

This project is a technical test from Charcentric given to Rifky Ariya Pratama as a requirement for the recruitment process.
The Trello app is used to manage everything from simple todolist to managing software development sprints.

### Board

A board is a collection of cards that represent the same theme or purpose.

### Card

A card represents a single atomic issue or task that you can add as much as you want.

### Example

Using board and card, we can organize tasks such as software development. In software development, each programming task is neatly described and fits extremely well into cards. Boards used to categorize those tasks/cards. Sometimes you can't finish all tasks in time, so you need a place to put the unfinished tasks, so you can review them and do it next sprint. To address this problem, you can create a board named "Backlog" and put all the unfinished task into it.

## Tech Stacks

I use NextJS as the frontend, and Supabase as the backend.

NextJS provides a great versatility on which component is rendered on the server or on the client. Big and numerous components with rich data like the cards can be rendered on the server for fast data fetching. While certain areas that needs interactivity like the add buttons can be rendered on the client. This balanced approach is the best for developing large web application.

Supabase is just as versatile as NextJS. Supabase provides built-in authorization and user management, on top of database management and database visualization.

Both tech stacks has amazing documentations, making development much less frustrating.

## User Flows

### Accessing the app

1. Enter the app URL
2. Navigate to Register page, Put email and password, press register
3. Check your email for verification email
4. Go back to the app
5. Login using your verified email and password

### Adding Board

1. Enter the app URL
2. Click the Add Board button
3. Input the board title
4. Press submit

### Adding Card

1. Enter the app URL
2. Click on the Add Card on the board you chose
3. Input title and description
4. Press submit

### Editing Board/Card

1. Enter the app URL
2. Hover over a board/card
3. Click the pen button
4. Input the new title and description
5. Press submit

### Deleting Board/Card

1. Enter the app URL
2. Hover over a board/card
3. Click the trash button

## Documentation

### Authentication Functions

**signUpWithEmailAndPassword(data: { email: string, password: string, confirm: string }): Promise<string>**

This function is used to sign up a user with their email and password. It creates a new user account using the Supabase authentication service.

- data: An object containing the user's email, password, and password confirmation.
- Returns: A Promise that resolves to a JSON string representing the result of the sign-up operation.

**signInWithEmailAndPassword(data: { email: string, password: string }): Promise<string>**

This function is used to sign in a user with their email and password. It authenticates the user using the Supabase authentication service.

- data: An object containing the user's email and password.
- Returns: A Promise that resolves to a JSON string representing the result of the sign-in operation.

**readUserSession(): Promise<any>**

This function is used to read the user's session information. It retrieves the current user session using the Supabase authentication service.

- Returns: A Promise that resolves to the user's session information.

### Database Functions

**createBoard(board_title: string): Promise<string>**

This function is used to create a new board in the database.

- board_title: The title of the board to be created.
- Returns: A Promise that resolves to a JSON string representing the result of the board creation operation.

**readBoard(): Promise<BoardWithCards[]>**

This function is used to read all the boards and their associated cards from the database.

- Returns: A Promise that resolves to an array of BoardWithCards objects. Each BoardWithCards object represents a board and contains an array of associated cards.

**updateBoard(board_id: string, board_title: string): Promise<string>**

This function is used to update the title of a board in the database.

- board_id: The ID of the board to be updated.
- board_title: The new title for the board.
- Returns: A Promise that resolves to a JSON string representing the result of the board update operation.

**deleteBoard(board_id: string): Promise<void>**

This function is used to delete a board from the database.

- board_id: The ID of the board to be deleted.
- Returns: A Promise that resolves when the board deletion operation is completed.

**createCard(card: AddCard): Promise<string>**

This function is used to create a new card in the database.

- card: An object representing the card to be created. It contains properties such as board_id, card_title, and card_description.
- Returns: A Promise that resolves to a JSON string representing the result of the card creation operation.

**updateCard(card: Card): Promise<string>**

This function is used to update a card in the database.

- card: An object representing the updated card. It contains properties such as card_id, board_id, card_title, and card_description.
- Returns: A Promise that resolves to a JSON string representing the result of the card update operation.

**deleteCard(card_id: string): Promise<void>**

This function is used to delete a card from the database.

- card_id: The ID of the card to be deleted.
- Returns: A Promise that resolves when the card deletion operation is completed.

Please note that these functions are asynchronous and return Promises. You can use await or .then() to handle the asynchronous results when calling these functions.

## Database Relationship Schema

![Database relationship schema for trello app](https://cdn.discordapp.com/attachments/922536453731418153/1182777147992051852/image.png?ex=6585ee0f&is=6573790f&hm=07a66ff95bd074b2e45b3196c3eef3ccd4e920d4e62c239b2ae5be21692d054a&)  


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
