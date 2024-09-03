'use client';

import { ReactNode, useState } from 'react';

export default function Dashboard(): ReactNode {
  const [name, setName] = useState('');
  console.log('Dashboard client component');
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <p>Hello, {name}!</p>
    </div>
  )
}
