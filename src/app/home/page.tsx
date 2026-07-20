import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://redwingimpex.com" },
};

export default function HomeRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/" />
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/')" }} />
    </>
  );
}
