'use server';
import { chatbotPrompt } from '@/Features/common/helpers/constants/chatbot-prompt';
import { OpenAIStream } from '@/Features/lib/openai-stream';
import { MessageArraySchema } from '@/Features/lib/validators/message';

export default async function POST(req, res) {
  const { messages } = await req.json();
  const parsedMessages = messages;
  const outboundMessages = parsedMessages.map((message) => {
    return {
      role: message.isUserMessage ? 'user' : 'system',
      content: message.text,
    };
  });

  outboundMessages.unshift({
    role: 'system',
    content: chatbotPrompt,
  });

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: outboundMessages,
    temperature: 0.9,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    max_tokens: 150,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
