import {
  CloudSearchDomainClient,
  SearchCommand,
} from '@aws-sdk/client-cloudsearch-domain';
import { NextRequest, NextResponse } from 'next/server';

const SEARCH_DOMAINS: Record<string, string> = {
  people:
    'https://search-virtuososearch-vli2jg34cevpovymaufcw5b2ji.us-east-1.cloudsearch.amazonaws.com',
  events:
    'https://search-events-d26ks4b2lyxgvhinqidd7i5xwu.us-east-1.cloudsearch.amazonaws.com',
  pages:
    'https://search-pages-55qt7fqjid232f2dvrjhqfrzlm.us-east-1.cloudsearch.amazonaws.com',
  marketplace:
    'https://search-marketplace-kozjtdnme76wxppcnea5qbighe.us-east-1.cloudsearch.amazonaws.com',
  posts:
    'https://search-posts-5np6q376nhsrbiczh3aywgezye.us-east-1.cloudsearch.amazonaws.com',
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const type = searchParams.get('type');

  if (!q || !type || !SEARCH_DOMAINS[type]) {
    return NextResponse.json(
      { message: 'Invalid query or type parameter' },
      { status: 400 }
    );
  }

  try {
    // Create a new CloudSearch domain client
    const client = new CloudSearchDomainClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
      endpoint: SEARCH_DOMAINS[type],
    });

    // Search for documents with a specific value for a field
    const searchCommand = new SearchCommand({
      query: q,
      queryParser: 'simple',
    });
    const searchResponse = await client.send(searchCommand);

    // Return the search results as JSON
    return NextResponse.json(searchResponse.hits, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'An error occurred while searching CloudSearch' },
      { status: 500 }
    );
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'GET, OPTIONS',
    },
  });
}
