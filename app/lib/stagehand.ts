import 'dotenv/config';
import {
  Stagehand,
  type ConstructorParams,
  type LogLine,
} from '@browserbasehq/stagehand';

const StagehandConfig: ConstructorParams = {
  env: 'BROWSERBASE',
  apiKey: process.env.BROWSERBASE_API_KEY,
  projectId: process.env.BROWSERBASE_PROJECT_ID,
  debugDom: undefined,
  headless: false,
  logger: (message: LogLine) => console.log(logLineToString(message)),
  domSettleTimeoutMs: 30_000,
  browserbaseSessionCreateParams: {
    projectId: process.env.BROWSERBASE_PROJECT_ID!,
  },
  enableCaching: undefined,
  browserbaseSessionID: undefined,
  modelName: 'claude-3-7-sonnet-20250219',
  modelClientOptions: {
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
};

export function logLineToString(logLine: LogLine): string {
  // If you want more detail, set this to false. However, this will make the logs
  // more verbose and harder to read.
  const HIDE_AUXILIARY = true;

  try {
    const timestamp = logLine.timestamp || new Date().toISOString();
    if (logLine.auxiliary?.error) {
      return `${timestamp}::[stagehand:${logLine.category}] ${logLine.message}\n ${logLine.auxiliary.error.value}\n ${logLine.auxiliary.trace.value}`;
    }

    // If we want to hide auxiliary information, we don't add it to the log
    return `${timestamp}::[stagehand:${logLine.category}] ${logLine.message} ${
      logLine.auxiliary && !HIDE_AUXILIARY
        ? JSON.stringify(logLine.auxiliary)
        : ''
    }`;
  } catch (error) {
    console.error(`Error logging line:`, error);
    return 'error logging line';
  }
}

export async function createNewStagehand() {
  const instance = new Stagehand({ ...StagehandConfig });
  await instance.init();

  return {
    page: instance.page,
    context: instance.context,
    stagehand: instance,
  };
}
