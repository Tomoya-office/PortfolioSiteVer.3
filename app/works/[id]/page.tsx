"use client";

import ArtworkPage from "@/src/components/pages/ArtworkPage";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ id: string }>();

  return <ArtworkPage id={Number(params.id)} />;
}