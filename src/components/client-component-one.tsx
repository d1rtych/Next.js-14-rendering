'use client';

import { ReactNode, useState } from 'react';
import ClientComponentTwo from '@/components/client-component-two';
import ServerComponentOne from '@/components/server-component-one';

export default function ClientComponentOne({ children }: { children: ReactNode }) {
  const [name, setName] = useState('Batman!');
  return (
    <>
      <h1>Client Component One</h1>
      {children}
      {/*<ClientComponentTwo />*/}
      {/*<ServerComponentOne />*/}
    </>
  );
}
