import { rest } from "msw";

const idCrypto: string = "43552lkjhfdkshgh45";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    async (req, res, ctx) => {
      const body = await req.json();

      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Something went wrong",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json([
          {
            userName: "senior",
            password: "seniores",
          },
        ])
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJnZXJ0NDU0OWpmZTllMm54OSIsInVzZXJOYW1lIjoibWFyaW9nbCJ9.8Tv7Dnd5CrzjUSQ00fHc3HvdObTNJ5AA8sMymMSN0xg",
        })
      );
    }
  ),
  rest.get(`${process.env.REACT_APP_API_URL}crypto`, async (req, res, ctx) => {
    const headerTestError = req.headers.get("IsTestError");

    if (headerTestError) {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Something went wrong",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        crypto: [
          {
            title: "super coin",
            logo: "/crypto.png",
            description: "A great crypto",
            team: 4,
            value: 2,
            ICO: new Date(),
            id: "4321",
          },
          {
            title: "eflereum",
            logo: "/eflereum.png",
            description: "The revolution",
            team: 15,
            value: 3,
            ICO: new Date(),
            id: "4322",
          },
        ],
      })
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_API_URL}crypto/${idCrypto}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          cryptoDelete: {
            id: idCrypto,
          },
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}crypto/wrongId`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Something went wrong" }));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}crypto/${idCrypto}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          crypto: {
            id: idCrypto,
            title: "eflereum",
            logo: "/eflereum.png",
            description: "The revolution",
            team: 15,
            value: 3,
            ICO: "2022-09-07T19:12:29.422Z",
          },
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}crypto/wrongId`,
    (_req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ error: "Can not show details from this crypto" })
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}crypto/`,
    async (req, res, ctx) => {
      const headerTestError = req.headers.get("IsTestError");

      if (headerTestError) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Error creating crypto",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json({
          id: idCrypto,
          title: "eflereum",
          logo: "/eflereum.png",
          description: "The revolution",
          team: 15,
          value: 3,
          ICO: "2022-09-07T19:12:29.422Z",
        })
      );
    }
  ),
  rest.put(
    `${process.env.REACT_APP_API_URL}crypto/${idCrypto}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: idCrypto,
          title: "Faracoin",
          logo: "/fara.png",
          description: "A fresh metaverse project",
          team: 10,
          value: 11,
          ICO: "2022-09-07T19:12:29.422Z",
        })
      );
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}crypto/wrongId`,
    async (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json({ error: "Error to modify crypto" })
      );
    }
  ),
];
