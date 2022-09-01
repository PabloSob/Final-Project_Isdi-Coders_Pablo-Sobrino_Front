import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    async (req, res, ctx) => {
      const body = await req.json();

      if (!body.userName || !body.password || !body.repeat_password) {
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
            repeat_password: "seniores",
          },
        ])
      );
    }
  ),
];
