import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import React from 'react';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main layout</h1>
      <div>sideBar</div>
      <Link href="">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
