'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <select
      onChange={handleChange}
      className="bg-transparent text-white outline-none"
    >
      <option value="tr">TR </option>
      <option value="en">EN </option>
      <option value="de">DE </option>
      <option value="ru">RU </option>
    </select>
  );
}