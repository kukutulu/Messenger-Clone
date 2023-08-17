"use client";

import { FullConversationType } from "@/app/types";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  return (
    <div>
      <h1>Conversation List</h1>
    </div>
  );
};

export default ConversationList;
