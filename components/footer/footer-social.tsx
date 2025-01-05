import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

export function FooterSocial() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <Link
            key={index}
            href={social.href}
            className="text-gray-500 hover:text-green-600 dark:hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-6 w-6" />
            <span className="sr-only">{social.icon.name}</span>
          </Link>
        );
      })}
    </div>
  );
}