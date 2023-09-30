expiorts.expressConfig = (server) => {
  server.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    next();
  };
  const allowedOrigins = [
    "http://localhost:4200",
    "https://viktorshandrov.github.io",
  ];
  app.use(
    cors({
      origin: allowedOrigins,
    })
  );
  app.use(auth);
  app.use(router);
};
