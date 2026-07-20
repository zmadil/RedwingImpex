import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://redwingimpex.com/contact" },
};

export default function GetAQuoteRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/contact" />
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/contact')" }} />
    </>
  );
}
