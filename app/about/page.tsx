import { redirect } from "next/navigation";

export const metadata = {
  title: "Story"
};

export default function AboutPage() {
  redirect("/story");
}

