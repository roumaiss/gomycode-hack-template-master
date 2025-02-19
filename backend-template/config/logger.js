import pino, { destination } from "pino";

const logger = pino(
    { name: "go-my-hack" },
    process.env.NODE_ENV === "production"
        ? destination({
              dest: "./info.log",
              append: true,
              sync: true,
          })
        : undefined
);
export default logger;
