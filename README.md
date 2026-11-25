# beehive

A web UI for [Vercel Board](https://vercel.com/docs/board).

## Run it locally

You need Node 22.18 or later.

1. Install dependencies.

   ```sh
   npm install
   ```

2. Start a local board in a second terminal. It serves at `http://127.0.0.1:4100/api/board`.

   ```sh
   npx @vercel/board@0.56.1 serve
   ```

3. Point the app at the local board and start it.

   ```sh
   export BOARD_URL=http://127.0.0.1:4100/api/board
   npm run dev
   ```
