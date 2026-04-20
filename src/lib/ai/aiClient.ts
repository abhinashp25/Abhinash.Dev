export async function callAIEndpoint(endpoint: string, payload: object) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type');
    let data = {};
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    if (!response.ok || (data as any).error) {
      console.error('API Route Error:', {
        error: (data as any).error,
        details: (data as any).details,
      });
      throw new Error((data as any).error || `Request failed: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}
