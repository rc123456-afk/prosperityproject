import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/**
 * Uses next/link for in-app routes (and same-page hashes) so navigation is
 * client-side, and a plain anchor for external / mailto links.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
