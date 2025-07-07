'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Mevcut dili pathname'den al
  const currentLocale = pathname.split('/')[1] || 'tr'; // Default olarak 'tr'

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <select
      value={currentLocale} // Mevcut dili göster
      onChange={handleChange}
      className="bg-transparent text-white outline-none cursor-pointer"
    >
      <option value="tr">TR</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
      <option value="ru">RU</option>
    </select>
  );
}