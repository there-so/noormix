module.exports = {
  apps: [
    {
      name: "noormix",
      script: "pnpm",
      cwd: "./",
      args: "start",
      interpreter: "bash",
      max_memory_restart: "2G",
      env: {
        PORT: 7000,
      },
    },
  ],
}
