import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
