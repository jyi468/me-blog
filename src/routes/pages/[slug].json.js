import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

// API endpoint. Reads and writes data only available on the server
export const get = async (req) => {
    const { slug } = req.params;
    try {
        const query = gql
        `query Page($slug:String!) {
            page(where: {slug: $slug}) {
              title
              content {
                html
              }
            }
          }`
          
        const variables = { slug };
        const { page } = await client.request(query, variables);

        return {
            status: 200,
            body: page,
        };
    } catch (error) {
        return {
            status: 500,
            body: error,
        };
    }
}