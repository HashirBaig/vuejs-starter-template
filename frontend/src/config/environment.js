const dev = {
    API_URL: "https://development.url/api/",
}

const prod = {
    API_URL: "https://prodcution.url/api/",
}

const config = process.env.NODE_ENV === "production" ? prod : dev

export default config