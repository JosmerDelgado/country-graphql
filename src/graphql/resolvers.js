const resolvers = {
    Country: {
        findArepa: (response) => {
            return response.code === "VE"
        }
    }
}

export default resolvers