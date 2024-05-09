"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "",
  subtitle = "",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div>
      <div className="w-48 mt-4"></div>
    </div>
  );
};

export default EmptyState;
