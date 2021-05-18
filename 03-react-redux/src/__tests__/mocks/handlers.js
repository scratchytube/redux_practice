import { rest } from "msw";
import { items } from "./data";

export const handlers = [
  rest.get("http://localhost:4000/items", (req, res, ctx) => {
    return res(ctx.json(items));
  }),
  rest.post("http://localhost:4000/items", (req, res, ctx) => {
    const id = items[items.length - 1]?.id + 1 || 1;
    const question = { id, ...req.body };
    items.push(question);
    return res(ctx.json(question));
  }),
  rest.delete("http://localhost:4000/items/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    items = items.filter((q) => q.id !== parseInt(id));
    return res(ctx.json({}));
  }),
  rest.patch("http://localhost:4000/items/:id", (req, res, ctx) => {
    const { id } = req.params;
    const { correctIndex } = req.body;
    const item = items.find((q) => q.id === parseInt(id));
    if (!item) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    item.correctIndex = correctIndex;
    return res(ctx.json(item));
  }),
];
