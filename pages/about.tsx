import { MainLayout } from '@/components/layout/main';
import { useRouter } from 'next/router';

export default function AboutPage() {
  const router = useRouter();
  console.log('router', router.query);
  return (
    <>
      <div>about</div>
    </>
  );
}
AboutPage.Layout = MainLayout;
