import Link from 'next/link';

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Projectos', href: '/projectos' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Construção Comercial', href: '/servicos#comercial' },
      { label: 'Projectos Residenciais', href: '/servicos#residencial' },
      { label: 'Reformas', href: '/servicos#reformas' },
      { label: 'Consultoria', href: '/servicos#consultoria' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '/privacidade' },
      { label: 'Termos', href: '/termos' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-4">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}