import { Configuration } from 'openai';
export const configureOpenAi = () => {
    const conifg = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPEN_AI_ORGANIZATION_ID,
    });
    return conifg;
};
//# sourceMappingURL=openai-config.js.map