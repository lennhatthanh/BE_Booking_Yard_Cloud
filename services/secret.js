const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const client = new SecretsManagerClient({
    region: "ap-southeast-1",
});

async function getDBConfig() {
    const command = new GetSecretValueCommand({
        SecretId: "sanbong/prod/postgres",
    });

    const response = await client.send(command);

    if (!response.SecretString) {
        throw new Error("Secret empty");
    }

    return JSON.parse(response.SecretString);
}

module.exports = getDBConfig;
