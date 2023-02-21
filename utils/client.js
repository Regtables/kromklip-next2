import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '3ksf3ikb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-02-16',
  token: 'skSykocgg1Wzeq6piyVKGYz38RduDkMSO0l5avR8Jrx52gsnm7HjKucWg5lXHKPlyGCswgjucKEuo2xLFT8dHQsLMpVTOz988LUwIcw9ZwKuK0DunGpxYoO4GAL7MZb7EOA19hziP5XsZi8SYueUdL38R18fPUWgD7pYE5DDTCoCb5mTKXk6'
})