import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.string(),
  text: z.string(),
  isUserMessage: z.boolean(),
});

// array validator
export const MessageArraySchema = z.array(MessageSchema);

// export default Message = z.infer<typeof MessageSchema>
// export default Message;
